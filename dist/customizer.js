(function() {
  rivets.binders.input = {
    publishes: true,
    routine: rivets.binders.value.routine,
    bind: function(el) {
      return jQuery(el).bind('input.rivets', this.publish);
    },
    unbind: function(el) {
      return jQuery(el).unbind('input.rivets');
    }
  };

  rivets.configure({
    prefix: "rv",
    adapter: {
      subscribe: function(obj, keypath, callback) {
        callback.wrapped = function(m, v) {
          return callback(v);
        };
        return obj.on('change:' + keypath, callback.wrapped);
      },
      unsubscribe: function(obj, keypath, callback) {
        return obj.off('change:' + keypath, callback.wrapped);
      },
      read: function(obj, keypath) {
        if (keypath === "cid") {
          return obj.cid;
        }
        return obj.get(keypath);
      },
      publish: function(obj, keypath, value) {
        if (obj.cid) {
          return obj.set(keypath, value);
        } else {
          return obj[keypath] = value;
        }
      }
    }
  });

}).call(this);

(function() {
  var CanvasView, Customizer, CustomizerCollection, CustomizerModel, CustomizerProductCollection, CustomizerProductModel, CustomizerView, ModelView, clipByName, degToRad,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  fabric.Object.prototype.set({
    cornerSize: 15,
    transparentCorners: false,
    borderColor: '#16A085',
    cornerColor: '#16A085',
    hasRotatingPoint: false
  });

  fabric.Object.prototype.setControlsVisibility({
    mt: false,
    mb: false,
    ml: false,
    mr: false,
    bl: true,
    br: true,
    tl: true,
    tr: true,
    mtr: false
  });

  fabric.Canvas.prototype.getItemByMyID = function(myID) {
    var i, len, object, objects;
    object = null;
    objects = this.getObjects();
    i = 0;
    len = this.size();
    while (i < len) {
      if (objects[i].id && objects[i].id === myID) {
        object = objects[i];
        break;
      }
      i++;
    }
    return object;
  };

  fabric.Canvas.prototype.getItemByName = function(title) {
    var i, len, object, objects;
    object = null;
    objects = this.getObjects();
    i = 0;
    len = this.size();
    while (i < len) {
      if (objects[i].title && objects[i].title === title) {
        object = objects[i];
        break;
      }
      i++;
    }
    return object;
  };

  fabric.Object.prototype.setOriginToCenter = function() {
    var center;
    this._originalOriginX = this.originX;
    this._originalOriginY = this.originY;
    center = this.getCenterPoint();
    return this.set({
      originX: 'center',
      originY: 'center',
      left: center.x,
      top: center.y
    });
  };

  fabric.Object.prototype.setCenterToOrigin = function() {
    var originPoint;
    originPoint = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
    return this.set({
      originX: this._originalOriginX,
      originY: this._originalOriginY,
      left: originPoint.x,
      top: originPoint.y
    });
  };

  degToRad = function(degrees) {
    return degrees * (Math.PI / 180);
  };

  clipByName = function(ctx) {
    var clipRect, ctxHeight, ctxLeft, ctxTop, ctxWidth, oldStrokeWidth, scaleXTo1, scaleYTo1;
    this.setCoords();
    clipRect = _.where(this.canvas.getObjects(), {
      clipFor: this.clipName
    });
    if (clipRect.length > 0) {
      clipRect = clipRect[0];
    } else {
      return;
    }
    scaleXTo1 = 1 / this.scaleX;
    scaleYTo1 = 1 / this.scaleY;
    ctx.save();
    oldStrokeWidth = clipRect.strokeWidth;
    clipRect.strokeWidth = 0;
    ctxLeft = -(this.width / 2) + clipRect.strokeWidth;
    ctxTop = -(this.height / 2) + clipRect.strokeWidth;
    ctxWidth = clipRect.width - clipRect.strokeWidth;
    ctxHeight = clipRect.height - clipRect.strokeWidth;
    ctx.translate(ctxLeft, ctxTop);
    clipRect.strokeWidth = oldStrokeWidth;
    ctx.rotate(degToRad(this.angle * -1));
    ctx.scale(scaleXTo1, scaleYTo1);
    ctx.beginPath();
    ctx.rect(clipRect.left - this.oCoords.tl.x, clipRect.top - this.oCoords.tl.y, clipRect.width * clipRect.scaleX, clipRect.height * clipRect.scaleY);
    ctx.closePath();
    ctx.restore();
  };

  CustomizerProductModel = (function(superClass) {
    extend(CustomizerProductModel, superClass);

    function CustomizerProductModel() {
      return CustomizerProductModel.__super__.constructor.apply(this, arguments);
    }

    CustomizerProductModel.prototype.sync = function() {};

    CustomizerProductModel.prototype.defaults = function() {};

    return CustomizerProductModel;

  })(Backbone.DeepModel);

  CustomizerProductCollection = (function(superClass) {
    extend(CustomizerProductCollection, superClass);

    function CustomizerProductCollection() {
      return CustomizerProductCollection.__super__.constructor.apply(this, arguments);
    }

    CustomizerProductCollection.prototype.nextOrder = 0;

    CustomizerProductCollection.prototype.initialize = function(options) {
      this.parentView = options.parentView;
      return this.on('add', this.copyCid);
    };

    CustomizerProductCollection.prototype.model = CustomizerProductModel;

    CustomizerProductCollection.prototype.comparator = function(model) {
      return model.get('order');
    };

    CustomizerProductCollection.prototype._order_by = 'order';

    CustomizerProductCollection.prototype.copyCid = function(model) {
      return model.cid = model.attributes.cid;
    };

    return CustomizerProductCollection;

  })(Backbone.Collection);

  CustomizerModel = (function(superClass) {
    extend(CustomizerModel, superClass);

    function CustomizerModel() {
      return CustomizerModel.__super__.constructor.apply(this, arguments);
    }

    CustomizerModel.prototype.sync = function() {};

    CustomizerModel.prototype.defaults = function() {};

    CustomizerModel.prototype.indexInDOM = function() {
      var $wrapper;
      $wrapper = jQuery(".pc-layers-contianer.layers").filter(((function(_this) {
        return function(_, el) {
          return jQuery(el).data('id') === _this.cid;
        };
      })(this)));
      return jQuery(".pc-layers-contianer.layers").index($wrapper);
    };

    return CustomizerModel;

  })(Backbone.DeepModel);

  CustomizerCollection = (function(superClass) {
    extend(CustomizerCollection, superClass);

    function CustomizerCollection() {
      return CustomizerCollection.__super__.constructor.apply(this, arguments);
    }

    CustomizerCollection.prototype.nextOrder = 0;

    CustomizerCollection.prototype.initialize = function(options) {
      this.parentView = options.parentView;
      this.on('add', this.copyCidToModel);
      this.on('reset', this.resetModel);
      this.sort();
      return this.setNextOrder();
    };

    CustomizerCollection.prototype.model = CustomizerModel;

    CustomizerCollection.prototype.resetModel = function(collection) {
      var _this;
      _this = this;
      this.sort();
      return this.setNextOrder();
    };

    CustomizerCollection.prototype.comparator = function(model) {
      return model.get(Customizer.options.mappings.LAYER_DATA + '.order');
    };

    CustomizerCollection.prototype.setNextOrder = function() {
      var last_order;
      if (this.length === 0) {
        this.nextOrder = 0;
        return;
      }
      if (this.last() !== void 0) {
        last_order = this.last().get(Customizer.options.mappings.LAYER_DATA + '.order');
        last_order = last_order >= 0 ? last_order : 0;
        this.nextOrder = parseInt(last_order) + 1;
      }
    };

    CustomizerCollection.prototype._order_by = 'order';

    CustomizerCollection.prototype.copyCidToModel = function(model) {
      model.attributes.cid = model.cid;
      model.set("order", this.nextOrder);
      model.set(Customizer.options.mappings.LAYER_DATA + '.order', this.nextOrder);
      model.set(Customizer.options.mappings.LAYER_DATA + '.zIndex', this.nextOrder);
      model.trigger('change');
      this.parentView.canvas.renderAll();
      return this.setNextOrder();
    };

    CustomizerCollection.prototype.copyCid = function(model) {
      return model.cid = model.attributes.cid;
    };

    return CustomizerCollection;

  })(Backbone.Collection);

  ModelView = (function(superClass) {
    extend(ModelView, superClass);

    function ModelView() {
      return ModelView.__super__.constructor.apply(this, arguments);
    }

    ModelView.prototype.className = 'model-warper';

    ModelView.prototype.events = {
      'click .close': 'closeModel',
      'click .pc-prompt-cancel': 'closeModel',
      'click .pc-prompt-ok': 'promptOk',
      'click .pc-confirm-yes': 'confirmYes',
      'click .pc-confirm-no': 'confirmNo'
    };

    ModelView.prototype.render = function(modal) {
      var $el;
      $el = Customizer.templates["view/popup"]({
        modal: modal
      });
      this.$el.html($el).hide(0);
      jQuery('body').append(this.$el);
      this.showModel();
      return $el;
    };

    ModelView.prototype.alert = function(message, title, callback) {
      this.render({
        body: "<p class='pc-model-alert-body'>" + message + "</p>",
        title: title
      });
      this.callback = callback;
      return this;
    };

    ModelView.prototype.confirm = function(message, title, callback) {
      this.render({
        body: "<div class='pc-model-confirm-body'><p>" + message + "</p><div class='pc-model-button-container fb-button-group'><button class='pc-confirm-yes fb-button'>Yes</button><button class='pc-confirm-no fb-button fb-button-default'>No</button></div></div>",
        title: title
      });
      this.callback = callback;
      return this;
    };

    ModelView.prototype.prompt = function(message, title, callback) {
      this.render({
        body: "<div class='input-field-container'><label class='pc-model-alert-body'>" + message + "</label><input class='pc-input-field promt-input'></div><div class='pc-prompt-error-message' style='display:none'></div> <div class='pc-model-button-container fb-button-group'><button class='pc-prompt-ok fb-button'>OK</button><button class='pc-prompt-cancel fb-button fb-button-default'>Cancel</button></div>",
        title: title
      });
      this.callback = callback;
      return this;
    };

    ModelView.prototype.promptOk = function() {
      var val;
      val = this.$el.find('.promt-input').val();
      if (val !== void 0 && val !== null && val !== '') {
        this.callback(val);
        return this.closeModel();
      } else {
        return this.$el.find('.pc-prompt-error-message').html("Plesae enter value.").show(500);
      }
    };

    ModelView.prototype.confirmYes = function() {
      this.callback(true);
      return this.closeModel();
    };

    ModelView.prototype.confirmNo = function() {
      this.callback(false);
      return this.closeModel();
    };

    ModelView.prototype.closeModel = function() {
      var _this;
      _this = this;
      this.$el.find('.pc-prompt-error-message').html("").hide(500);
      return this.$el.fadeOut(500, function() {
        return _this.$el.remove();
      });
    };

    ModelView.prototype.showModel = function() {
      return this.$el.fadeIn(500);
    };

    return ModelView;

  })(Backbone.View);

  CanvasView = (function() {
    function CanvasView() {}

    CanvasView.prototype.initialize = function(options) {
      return this.parentView = options;
    };

    CanvasView.prototype.add = function(obj) {
      var new_obj;
      console.log(obj);
      if (obj.type === void 0) {
        obj.type = obj.type;
      }
      return new_obj = this[obj.type](obj);
    };

    CanvasView.prototype.addPlaceholder = function(canvas, _this) {
      var group, options, rect, text1, text2;
      options = _this.getDefault({
        bringToFront: true,
        bottom: 0,
        left: 0,
        top: canvas.height - 60,
        width: canvas.width,
        height: 60,
        fill: '#fff',
        hasBorders: false,
        hasControls: false,
        hasRotatingPoint: false,
        isDraggable: false,
        lockMovementX: true,
        lockMovementY: true
      });
      rect = new fabric.Rect(options);
      text1 = new fabric.Text("PLANT TODAY TO ENJOY TOMORROW!", {
        bringToFront: true,
        fontSize: 22,
        top: canvas.height - 50,
        fontWidth: 'bold',
        hasBorders: false,
        hasControls: false,
        hasRotatingPoint: false,
        isDraggable: false,
        lockMovementX: true,
        lockMovementY: true,
        textAlign: "center"
      });
      text2 = new fabric.Text("www.platingpuzzle.com", {
        bringToFront: true,
        fontSize: 20,
        top: canvas.height - 30,
        textAlign: "center"
      });
      group = new fabric.Group([rect, text1, text2], {
        bringToFront: true,
        hasBorders: false,
        hasControls: false,
        hasRotatingPoint: false,
        isDraggable: false,
        lockMovementX: true,
        lockMovementY: true
      });
      text1.set({});
      text1.setCoords();
      text2.set({});
      text2.setCoords();
      console.log([canvas, group.width, text2.width]);
      canvas.add(group);
      return canvas.renderAll();
    };

    CanvasView.prototype.image = function(obj) {
      var _this, img, options, url;
      _this = this;
      options = obj.options;
      if (obj.full !== void 0) {
        url = obj.full;
      } else if (obj.imageDate !== void 0) {
        url = obj.imageDate;
      }
      return img = fabric.Image.fromURL(obj.full, function(image) {
        var defaultOptions, filters, model, sch, scw;
        scw = obj.canvas.width / image.width;
        if (scw < 1) {
          image.width = obj.canvas.width;
          image.height = image.height * scw;
        }
        sch = obj.canvas.height / image.height;
        if (sch < 1) {
          image.height = obj.canvas.height;
          image.width = image.width * sch;
        }
        defaultOptions = jQuery.extend(true, {}, Customizer.image, {
          width: image.width,
          height: image.height
        });
        options = jQuery.extend(true, {}, _this.getDefault(defaultOptions, obj), options);
        delete options.clipTo;
        filters = {};
        if (options.filters !== void 0 && options.filters.length > 0) {
          filters = options.filters;
          delete options.filters;
        }
        image.set(options);
        obj.canvas.add(image);
        obj.canvas.renderAll();
        return model = obj.model;
      });
    };

    CanvasView.prototype.getDefault = function(options, obj) {
      var defaultOptions;
      defaultOptions = {
        locked: false,
        removable: true,
        hideLayer: false,
        displayInLayerBar: true,
        boundingEnable: false,
        boundingElementName: "",
        elementBoundingEnable: false,
        boundingCoordsLeft: "",
        boundingCoordsTop: "",
        boundingCoordsWidth: "",
        boundingCoordsHeight: "",
        boundingMode: "clipping",
        stayOnTop: false,
        unlockable: true,
        isResizable: true,
        isDraggable: true,
        lockRotation: false,
        hasBorders: true,
        hasControls: true,
        hasRotatingPoint: false
      };
      return jQuery.extend(true, {}, defaultOptions, options);
    };

    return CanvasView;

  })();

  CustomizerView = (function(superClass) {
    var watermarkImage;

    extend(CustomizerView, superClass);

    function CustomizerView() {
      return CustomizerView.__super__.constructor.apply(this, arguments);
    }

    CustomizerView.prototype.SUBVIEWS = [];

    CustomizerView.prototype.canvasView = new CanvasView();

    CustomizerView.prototype.events = {
      'change .pc-upload-image': 'uploadImages',
      'click .change_background': 'change_background',
      'click .canvas-actions .fullscreen': 'fullscreen',
      'click .canvas-actions .download': 'savePDF',
      'click .canvas-actions .social_share_popop': 'social_share_popop'
    };

    CustomizerView.prototype.initialize = function(options) {
      var activeView, defaultSettings, selector, settings;
      selector = options.selector, this.customizer = options.customizer, this.bootstrapData = options.bootstrapData, settings = options.settings, this.productViewData = options.productViewData;
      if (selector != null) {
        this.setElement(jQuery(selector));
      }
      defaultSettings = {
        administration: false,
        canvas: {
          object: {
            text: {},
            rect: {},
            images: {}
          }
        },
        boundingBoxCoords: null
      };
      this.canvasView.initialize(this);
      this.settings = jQuery.extend(true, {}, defaultSettings, settings);
      this.collection = new CustomizerCollection({
        parentView: this
      });
      this.collection.bind('add', this.addOne, this);
      this.collection.bind('reset', this.reset, this);
      this.collection.bind('change', this.handleFormUpdate, this);
      this.productViewCollection = new CustomizerProductCollection({
        parentView: this
      });
      this.productViewCollection.bind('add', this.addOneProductView, this);
      this.productViewCollection.bind('reset', this.resetProductView, this);
      this.render();
      this.reSizeWindow();
      this.canvas.parentView = this;
      this.listenTo(this.canvas, "mouse:up", function(o) {
        return this.isDown = false;
      });
      this.listenTo(this.canvas, "mouse:down", function(o) {
        return this.isDown = true;
      });
      this.listenTo(this.canvas, "after:render", function(evt) {
        return this.calcOffset();
      });
      this.listenTo(this.canvas, "object:added", this.updateOrder);
      jQuery(window).on('resize', this.reSizeWindow.bind(this));
      this.collection.reset(this.bootstrapData);
      if (this.productViewCollection.models.length > 0) {
        activeView = this.productViewCollection.models[0];
        return this.reset();
      }
    };

    CustomizerView.prototype.updateOrder = function(evt) {
      var canvas, objs;
      canvas = evt.target.canvas;
      objs = canvas.getObjects();
      jQuery.each(objs, function(index, obj) {
        if (obj.bringToFront === true) {
          console.log(obj);
          return canvas.bringForward(obj);
        }
      });
      return canvas.renderAll();
    };

    CustomizerView.prototype.reSizeWindow = function() {
      var height, originalHeight, originalWidth, width, widthRatio;
      originalWidth = 1920;
      originalHeight = 1080;
      width = this.$el.find('.pc-canvas-waraper .pc-canvas').innerWidth();
      widthRatio = width / originalWidth;
      width = originalWidth * widthRatio;
      height = originalHeight * widthRatio;
      this.canvas.wrapperEl.style.transform = "scale(" + widthRatio + ")";
      this.canvas.wrapperEl.style.transformOrigin = "0 0";
      return this.canvas.wrapperEl.parentElement.style.height = height + "px";
    };

    CustomizerView.prototype.fullscreen = function(ev) {
      var $el;
      if (jQuery(ev.currentTarget).prop("tagName") === 'span') {
        $el = jQuery(ev.currentTarget);
      } else {
        $el = jQuery(ev.currentTarget).find('span');
      }
      $el.toggleClass('mif-shrink mif-enlarge');
      this.$el.toggleClass('fullscreen');
      return this.reSizeWindow();
    };

    CustomizerView.prototype.render = function() {
      var _this;
      this.$el.html(Customizer.templates['page']());
      this.loader = this.$el.find('.pc-loader-container');
      this.loader.show();
      this.renderCanvas();
      _this = this;
      $(document).on('click', '.js-social-share', function(e) {
        e.preventDefault();
        return _this.getBlob(function(blob) {
          return _this.openSocialSharePopup(e, blob);
        });
      });
      this.loader.hide();
      return this;
    };

    CustomizerView.prototype.renderCanvas = function() {
      var canvas, defaultCanvasArgs, el;
      el = jQuery('<canvas/>');
      this.$el.find('.pc-canvas').html(el);
      defaultCanvasArgs = {
        selection: false,
        hoverCursor: 'pointer',
        controlsAboveOverlay: true,
        centeredScaling: false,
        preserveObjectStacking: true,
        width: 1920,
        height: 1080
      };
      if (Customizer.options.settings.canvas === void 0) {
        Customizer.options.settings.canvas = {};
      }
      this.canvasAttr = jQuery.extend(true, {}, Customizer.options.settings.canvas, defaultCanvasArgs);
      canvas = new fabric.Canvas(el[0], this.canvasAttr);
      this.canvas = canvas;
      this.reSetCanvasSize();
      return this.canvasView.addPlaceholder(this.canvas, this.canvasView);
    };

    CustomizerView.prototype.reSetCanvasSize = function() {
      this.canvas.setWidth(1920);
      return this.canvas.setHeight(1080);
    };

    CustomizerView.prototype.saveImage = function() {
      return window.open(this.exportCanvas().toDataURL(), "Preview", "width=" + (this.canvas.getWidth()) + ", height=" + (this.canvas.getWidth()));
    };

    CustomizerView.prototype.getImageData = function() {
      return this.exportCanvas().toDataURL();
    };

    CustomizerView.prototype.exportCanvas = function() {
      return this.canvas;
    };

    CustomizerView.prototype.savePDF = function() {
      var $oldColor, dataURLtoBlob, download, e, error, height, imgData, width;
      download = function(filename, dataUrl) {
        var clickHandler, dataBlob, element;
        element = document.createElement('a');
        dataBlob = dataURLtoBlob(dataUrl);
        element.setAttribute('href', URL.createObjectURL(dataBlob));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        clickHandler = void 0;
        element.addEventListener('click', clickHandler = function() {
          requestAnimationFrame(function() {
            URL.revokeObjectURL(element.href);
          });
          element.removeAttribute('href');
          element.removeEventListener('click', clickHandler);
        });
        document.body.removeChild(element);
      };
      dataURLtoBlob = function(dataurl) {
        var bstr, mime, n, parts, raw, u8arr;
        parts = dataurl.split(',');
        mime = parts[0].match(/:(.*?);/)[1];
        if (parts[0].indexOf('base64') !== -1) {
          bstr = atob(parts[1]);
          n = bstr.length;
          u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          return new Blob([u8arr], {
            type: mime
          });
        } else {
          raw = decodeURIComponent(parts[1]);
          return new Blob([raw], {
            type: mime
          });
        }
      };
      try {
        width = this.canvas.getWidth();
        height = this.canvas.getHeight();
        $oldColor = this.canvas.backgroundColor;
        this.canvas.backgroundColor = '#fff';
        imgData = this.exportCanvas().toDataURL({
          format: 'jpeg'
        });
        this.canvas.backgroundColor = $oldColor;
        this.canvas.renderAll();
        return download("product.jpeg", imgData);
      } catch (error) {
        e = error;
        return console.log("Error description: " + e.message);
      }
    };

    CustomizerView.prototype.social_share_popop = function(e) {
      var modelView;
      modelView = new ModelView();
      return modelView.alert('<a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="twitter" data-share-text="Share this awesome link on Twitter" data-share-title="Twitter Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Twitter</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="facebook" data-share-text="Share this awesome link on Facebook" data-share-title="Facebook Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Facebook</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="linkedin" data-share-text="Share this awesome link on LinkedIn" data-share-title="LinkedIn Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on LinkedIn</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="googleplus" data-share-text="Share this awesome link on Google+" data-share-title="Google+ Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Google+</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="pinterest" data-share-text="Share this awesome link on Pinterest" data-share-title="Pinterest Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Pinterest</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="reddit" data-share-text="Share this awesome link on Reddit" data-share-title="Reddit Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Reddit</a> ', 'Share');
    };

    CustomizerView.prototype.openSocialSharePopup = function(e, blob) {
      var doShare, height, imgData, left, networkShareUrl, self, shareMedia, shareNetwork, shareTags, shareText, shareTitle, shareUrl, shareVia, top, width;
      self = this;
      imgData = this.exportCanvas().toDataURL({
        format: 'jpeg'
      });
      doShare = false;
      shareUrl = window.location;
      shareNetwork = $(e.currentTarget).data('share-network');
      shareText = $(e.currentTarget).data('share-text');
      shareTitle = $(e.currentTarget).data('share-title');
      shareVia = $(e.currentTarget).data('share-via');
      shareTags = $(e.currentTarget).data('share-tags');
      shareMedia = imgData;
      networkShareUrl = '';
      if (typeof shareUrl !== 'undefined' && typeof shareNetwork !== 'undefined') {
        doShare = true;
      }
      if (doShare === true) {
        switch (shareNetwork) {
          case 'facebook':
            networkShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
            break;
          case 'googleplus':
            networkShareUrl = 'https://plus.google.com/share?url=' + encodeURIComponent(shareUrl);
            break;
          case 'linkedin':
            networkShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(shareUrl) + '&source=' + encodeURIComponent(shareUrl);
            if (typeof shareTitle !== 'undefined' && shareTitle !== '') {
              networkShareUrl += '&title=' + encodeURIComponent(shareTitle);
            }
            if (typeof shareText !== 'undefined' && shareText !== '') {
              networkShareUrl += '&summary=' + encodeURIComponent(shareText);
            }
            break;
          case 'pinterest':
            networkShareUrl = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(shareUrl);
            if (typeof shareMedia !== 'undefined' && shareMedia !== '') {
              networkShareUrl += '&media=' + encodeURIComponent(shareMedia);
            }
            if (typeof shareText !== 'undefined' && shareText !== '') {
              networkShareUrl += '&description=' + encodeURIComponent(shareText);
            }
            if (typeof shareTags !== 'undefined' && shareTags !== '') {
              networkShareUrl += '&hashtags=' + shareTags;
            }
            break;
          case 'reddit':
            networkShareUrl = 'http://www.reddit.com/submit/?url=' + encodeURIComponent(shareUrl);
            break;
          case 'twitter':
            networkShareUrl = 'https://twitter.com/intent/tweet?&url=' + encodeURIComponent(shareUrl);
            if (typeof shareText !== 'undefined' && shareText !== '') {
              networkShareUrl += '&text=' + encodeURIComponent(shareText);
            }
            if (typeof shareVia !== 'undefined' && shareVia !== '') {
              networkShareUrl += '&via=' + encodeURIComponent(shareVia);
            }
            if (typeof shareTags !== 'undefined' && shareTags !== '') {
              networkShareUrl += '&hashtags=' + shareTags;
            }
            break;
          default:
            return false;
        }
      }
      if (doShare) {
        width = 500;
        height = 300;
        left = screen.width / 2 - (width / 2);
        top = screen.height / 2 - (height / 2);
        window.open(networkShareUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
      }
    };

    CustomizerView.prototype.dataURLtoBlob = function(dataUrl, callback) {
      var req;
      req = new XMLHttpRequest;
      req.open('GET', dataUrl);
      req.responseType = 'arraybuffer';
      req.onload = function(e) {
        var mime;
        mime = this.getResponseHeader('content-type');
        callback(new Blob([this.response], {
          type: mime
        }));
      };
      req.send();
    };

    CustomizerView.prototype.getBlob = function(callback) {
      var imgData;
      imgData = this.exportCanvas().toDataURL({
        format: 'jpeg'
      });
      return this.dataURLtoBlob(imgData, function(blob) {
        callback(blob);
      });
    };

    CustomizerView.prototype.reset = function() {
      return this.addAll();
    };

    CustomizerView.prototype.updateModel = function(id) {
      var data, model, obj;
      obj = this.canvas.getItemByMyID(id);
      model = this.getModel(id);
      data = obj.toJSON(Customizer.options.jsonArgs);
      jQuery.each(data, function(index, vlaue) {
        return model.set(Customizer.options.mappings.LAYER_DATA + '.' + index, vlaue);
      });
      if (model.get('type') === 'text') {
        model.set('text', obj.__text);
      }
      return model.trigger('change');
    };

    CustomizerView.prototype.getModel = function(id) {
      return this.collection.find(function(model) {
        return model.cid === id;
      });
    };

    CustomizerView.prototype.addOne = function(model, _, options) {
      var new_options;
      console.log(options);
      new_options = jQuery.extend(true, {}, options.options);
      return this.canvasView.add({
        type: options.type,
        options: new_options,
        full: model.get('full'),
        model: model,
        canvas: this.canvas
      });
    };

    CustomizerView.prototype.addAll = function() {
      return this.collection.each(this.addOne, this);
    };

    CustomizerView.prototype.createField = function(attrs, options) {
      var rf;
      if (Customizer.options.settings.administration === true) {
        attrs.administration = true;
      } else {
        attrs.administration = false;
      }
      rf = this.collection.create(attrs, options);
      this.handleFormUpdate();
      return rf;
    };

    CustomizerView.prototype.addImageLayer = function(data) {
      var _addNew, _replace, _this, obj;
      _this = this;
      if (Customizer.has_iamge) {
        return;
      }
      Customizer.has_iamge = true;
      obj = _.where(this.canvas.getObjects(), {
        name: data.name
      });
      if (obj[0] !== void 0) {
        obj = obj[0];
      }
      _replace = function(obj) {
        fabric.util.loadImage(data.full, function(img) {
          obj.setElement(img);
          obj.canvas.renderAll();
          return obj.model.set('full', data.full);
        });
      };
      _addNew = function() {
        var _addImageLayer;
        _addImageLayer = function() {
          var newData, rf;
          newData = jQuery.extend(true, {}, data);
          newData.type = 'image';
          if (newData.url && newData.full === void 0) {
            newData.full = newData.url;
          }
          if (newData.id !== void 0) {
            delete newData.id;
          }
          rf = _this.collection.create(newData, newData);
          return rf;
        };
        return _addImageLayer();
      };
      if (obj !== void 0 && obj !== null && obj.name !== void 0) {
        return _replace(obj);
      } else {
        return obj = _addNew();
      }
    };

    CustomizerView.prototype.change_background = function(evt) {
      this.$el.find(".canvas-container").hide();
      return this.$el.find(".background-upload-container").show();
    };

    CustomizerView.prototype.uploadImages = function(evt) {
      return this.background_upload_image(evt.target.files, evt.target);
    };

    CustomizerView.prototype.clearFileInput = function(ele) {
      var newInput, oldInput;
      console.log(ele);
      oldInput = ele;
      newInput = document.createElement("input");
      newInput.type = "file";
      newInput.id = oldInput.id;
      newInput.name = oldInput.name;
      newInput.className = oldInput.className;
      newInput.style.cssText = oldInput.style.cssText;
      return oldInput.parentNode.replaceChild(newInput, oldInput);
    };

    CustomizerView.prototype.background_upload_image = function(files, ele) {
      var $preview, $ul, _this, image_data, is_update, reader, setCanvasImage;
      image_data = "";
      _this = this;
      $ul = _this.$el.find('.pd-upload-zone');
      $preview = $ul.find('.image-preview');
      setCanvasImage = function() {
        return _this.$uploadCrop.croppie('result', {
          type: 'base64',
          size: {
            width: 1920,
            height: 1080
          }
        }).then(function(image_data) {
          _this.$el.find(".pc-canvas").height(600);
          _this.$el.find(".canvas-container").show();
          _this.$el.find(".background-upload-container").hide();
          _this.reSizeWindow();
          _this.addImageLayer(Customizer.image);
          return _this.canvas.setBackgroundImage(image_data, _this.canvas.renderAll.bind(_this.canvas), {
            width: _this.canvas.width,
            height: _this.canvas.height,
            originX: 'left',
            originY: 'top'
          });
        });
      };
      is_update = false;
      Customizer.background = true;
      if (files && files[0]) {
        reader = new FileReader();
        if (_this.$uploadCrop !== void 0) {
          _this.$uploadCrop.croppie('destroy');
        }
        _this.$uploadCrop = $('#upload-image').croppie({
          showZoomer: false,
          viewport: {
            width: 192,
            height: 108
          },
          boundary: {
            width: 355,
            height: 200
          },
          update: function(croppe) {
            return is_update = true;
          }
        });

        /*setInterval(()=>
        				if is_update
        					is_update = false;
        					setCanvasImage();
        			, 1000)
         */
        reader.onload = function(e) {
          image_data = e.target.result;
          $('.upload-image').addClass('ready');
          _this.$uploadCrop.croppie('bind', {
            url: e.target.result
          }).then(function() {
            _this.$uploadCrop.croppie('setZoom', 0);
            return setCanvasImage();
          });
          return _this.clearFileInput(ele);
        };
        return reader.readAsDataURL(files[0]);
      }
    };

    CustomizerView.prototype.handleFormUpdate = function() {
      if (this.updatingBatch) {
        return;
      }
      this.formSaved = false;
      if (this.saveFormButton !== void 0) {
        return this.saveFormButton.removeAttr('disabled').text(Customizer.options.dict.SAVE_FORM);
      } else {

      }
    };

    CustomizerView.prototype.saveForm = function(e) {
      var payload;
      if (this.formSaved) {
        return;
      }
      this.formSaved = true;
      this.saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED);
      payload = this.getPayload();
      return this.customizer.trigger('save', payload);
    };

    CustomizerView.prototype.getPayload = function(type) {
      var fields, newFields;
      this.collection.sort();
      fields = this.collection.toJSON(Customizer.options.jsonArgs);
      newFields = [];
      if (fields.length > 0) {
        jQuery.each(fields, function(index, vlaue) {
          if (vlaue.layer_data.clipTo !== void 0) {
            delete vlaue.layer_data.clipTo;
          }
          if (vlaue.clipTo !== void 0) {
            delete vlaue.clipTo;
          }
          if (!(vlaue.dontSync === true || vlaue.layer_data.dontSync === true) || type === 'all') {
            return newFields.push(vlaue);
          } else {
            vlaue.layer_data.opacity = 0;
            return newFields.push(vlaue);
          }
        });
      }
      return JSON.stringify({
        fields: newFields
      });
    };

    watermarkImage = function(elemImage, text) {

      /*testImage = new Image
      
      		testImage.onload = ->
      		h = testImage.height
      		w = testImage.width
      		img = new Image
      		 * Once the image with the SVG of the watermark is loaded...
      
      		img.onload = ->
      			 * Make canvas with image and watermark
      			canvas = Object.assign(document.createElement('canvas'),
      			width: w
      			height: h
      			)
      				ctx = canvas.getContext('2d')
      				ctx.drawImage testImage, 0, 0
      				ctx.drawImage img, 0, 0
      				 * If PNG can't be retrieved show the error in the console
      			try
      			elemImage.src = canvas.toDataURL('image/png')
      			catch e
      			console.error 'Cannot watermark image with text:',
      			  src: elemImage.src
      			  text: text
      			  error: e
      			return
      
      		 * SVG image watermark (HTML of text at bottom right)
      		img.src = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" height="' + h + '" width="' + w + '">' + '<foreignObject width="100%" height="100%">' + '<div xmlns="http://www.w3.org/1999/xhtml">' + '<div style="position: absolute;' + 'right: 0;' + 'bottom: 0;' + 'font-family: Tahoma;' + 'font-size: 10pt;' + 'background: #000;' + 'color: #fff;' + 'padding: 0.25em;' + 'border-radius: 0.25em;' + 'opacity: 0.6;' + 'margin: 0 0.125em 0.125em 0;' + '">' + text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>' + '</div>' + '</foreignObject>' + '</svg>')
      		return
      
      		testImage.src = elemImage.src
       */
    };

    return CustomizerView;

  })(Backbone.View);

  Customizer = (function() {
    Customizer.helpers = {
      defaultLayersAttrs: function(type, name, extra_attrs) {
        var attrs, layer;
        attrs = {};
        attrs[Customizer.options.mappings.TYPE] = type;
        attrs[Customizer.options.mappings.DATA_ID] = name;
        attrs.layer_data = {};
        if (extra_attrs !== void 0) {
          attrs = _.extend(attrs, extra_attrs);
        }
        layer = {};
        if (type === 'text') {
          layer = Customizer.text;
        } else if (type === 'img') {
          layer = Customizer.image;
        }
        attrs.object = layer.object !== void 0 ? layer.object : '';
        return (typeof layer.defaultAttributes === "function" ? layer.defaultAttributes(attrs) : void 0) || attrs;
      }
    };

    Customizer.options = {
      BUTTON_CLASS: 'fb-button',
      HTTP_ENDPOINT: '',
      HTTP_METHOD: 'POST',
      AUTOSAVE: true,
      CLEAR_FIELD_CONFIRM: false,
      settings: {
        canvas: {}
      },
      jsonArgs: ['id', 'unlockable', 'removable', 'hideLayer', 'displayInLayerBar', 'order', 'selection', 'selectable', 'locked', 'lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling', 'hasBorders', 'hasControls', 'hasRotatingPoint', 'hoverCursor', 'isResizable', 'isDraggable', 'boundingEnable', 'boundingElementName', 'boundingMode', 'stayOnTop', 'title', 'elementBoundingEnable', 'boundingCoordsLeft', 'boundingCoordsTop', 'boundingCoordsWidth', 'boundingCoordsHeight', 'clipFor', 'clipName', 'evented', 'dontSync', 'defaultColor', 'allowedColors', 'object', 'administration'],
      mappings: {
        DATA_ID: 'data_id',
        TYPE: 'type',
        NAME: 'name',
        OBJECT: 'object',
        LAYER: 'layer',
        LAYER_DATA: 'layer_data',
        ORDER: 'order'
      },
      dict: {
        ALL_CHANGES_SAVED: 'All changes saved',
        SAVE_FORM: 'Save changes',
        UNSAVED_CHANGES: 'You have unsaved changes. If you leave this page, you will lose those changes!'
      }
    };

    Customizer.has_iamge = false;

    Customizer.background = false;

    Customizer.image = false;

    Customizer.prototype.setImage = function(url) {
      url.object = "image";
      url.name = "product";
      return Customizer.image = url;
    };

    Customizer.prototype.setSettings = function(key, value) {
      return Customizer.options.settings[key] = value;
    };

    function Customizer(opts) {
      if (opts == null) {
        opts = {};
      }
      _.extend(this, Backbone.Events);
      this.args = _.extend(opts, {
        customizer: this
      });
      this.rander();
      this.mainView;
    }

    Customizer.prototype.rander = function() {
      if (this.mainView !== void 0) {
        this.mainView.destroy();
      }
      return this.mainView = new CustomizerView(this.args);
    };

    return Customizer;

  })();

  window.Customizer = Customizer;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Customizer;
  } else {
    window.Customizer = Customizer;
  }

}).call(this);

this["Customizer"] = this["Customizer"] || {};
this["Customizer"]["templates"] = this["Customizer"]["templates"] || {};

this["Customizer"]["templates"]["page"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'fb-right\'>\r\n\r\n\t<div class="canvas-container" style="display: none;">\r\n\t' +((__t = ( Customizer.templates['partials/canvas']() )) == null ? '' : __t) +'\r\n\t</div>\r\n\t<div class="background-upload-container">\r\n\t\t<div class=\'fb-upload-image-field-wrapper\'>\r\n\t\t\t<div class="input-field-container">\r\n\t\t\t  \t<!-- <label>Background Image</label> -->\r\n\t\t\t  \t<div class="pd-upload-zone">\r\n\t\t\t  \t\t<div class="inner-upload-zone">\r\n\t\t\t  \t\t\t<div class="image-icon picture_iamge"><span class="fa fa-picture-o"></span></div>\r\n\t\t\t\t        \r\n\t\t\t\t\t\t<span class="upload-text"><span class="fa fa-upload"></span> Upload Photo with garden and see how this plant group fits in</span>\r\n\t\t\t        </div>\r\n\t\t\t        <div class="image-preview"></div>\r\n\t\t\t  \t\t<input type="file" class="pc-upload-image">\r\n\t\t\t  \t</div>\r\n\r\n\t\t\t  \t<div id="upload-image"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n\r\n<div class=\'fb-clear\'></div>\r\n\r\n<div class=\'fb-save-wrapper\'>\r\n  <button class=\'js-save-data ' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'\'></button>\r\n</div>\r\n<div class="pc-loader-container">\r\n\t<div class="pc-loading-inner">\r\n\t\t<div class="pc-loading-icon"><!-- <span class="mif-spinner2 mif-ani-spin"></span> --><span class="mif-spinner3 mif-ani-spin"></span></div>\r\n\t\t<div class="pc-loading-text">Loading...</div>\r\n\t</div>\r\n</div>';}return __p};

this["Customizer"]["templates"]["partials/canvas"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<style>\r\n.custom-share-button {\r\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\r\n  color: #fff;\r\n  background-color: #55acee;\r\n  padding: .8em 1.2em;\r\n  border-radius: 3px;\r\n  display: inline-block;\r\n}\r\n.custom-share-button-icon,\r\n.custom-share-button-label {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.custom-share-button-icon {\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-right: .2em;\r\n}\r\n.custom-share-button-icon path { fill: #fff; }\r\n.custom-share-button-label {\r\n  font-size: .9em;\r\n  font-weight: 500;\r\n}\r\n.custom-share-button:hover { background-color: #70b7ec; }\r\n</style>\r\n\r\n<div class="pc-canvas-waraper">\r\n<div class="pc-title canvas-actions">\r\n\t<div class="pc-icon-inline download" data-title="Download PDF file"><span class="fa fa-download"></span> Save</div>\r\n<!-- \t<div class="pc-icon-inline preview" data-title="Preview"><span class="fa fa-eye"></span></div>\r\n\t<div class="pc-icon-inline-seprater"></div>\r\n\t<div class="pc-icon-inline zoom-in" data-title="Zoom-in"><span class="fa fa-search-plus "></span></div>\r\n\t<div class="pc-icon-inline zoom-out" data-title="Zoom-out"><span class="fa fa-search-minus"></span></div>\r\n\t<div class="pc-icon-inline zoom-reset" data-title="Reset zoom"><span class="fa fa-search"></span></div> -->\r\n\t<div class="pc-icon-inline-seprater" ></div>\r\n\t\r\n\t<div class="pc-icon-inline social_share_popop"> <span class="fa fa-share"></span> Share</div>\r\n\r\n  <div class="pc-icon-inline-seprater" ></div>\r\n\r\n  <div class="pc-icon-inline change_background" data-title="Download PDF file"><span class="fa fa-upload"></span> Chagne background photo</div>\r\n\r\n\r\n\r\n\t<div class="pc-icon-inline-seprater" ></div>\r\n\t<div class="pc-icon-inline fullscreen pull-right" data-title="Fullscreen"><span class="fa fa-arrows-alt"></span></div>\r\n</div>\r\n<div class=\'pc-canvas\'></div>\r\n</div>';}return __p};

this["Customizer"]["templates"]["view/popup"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="pc-modal">\r\n\t<div class="model-inner">\r\n\t\t<div class="modal-heder pc-title">\r\n\t\t\t'; if(modal.title){ ;__p += '\r\n\t\t\t<div class="pc-title-text">' +((__t = ( modal.title )) == null ? '' : __t) +'</div>\r\n\t\t\t'; } ;__p += '\r\n\t\t\t<div class="pc-model-close"><a href="javascript:" class="close"><span class="fa fa-times "></span></a></div>\r\n\t\t</div>\r\n\t\t<div class="pc-model-body">\r\n\t\t\t' +((__t = ( modal.body )) == null ? '' : __t) +'\r\n\t\t</div>\r\n\t</div>\r\n</div>';}return __p};