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
    cornerSize: 40,
    transparentCorners: false,
    borderColor: '#16A085',
    cornerColor: '#16A085'
  });

  fabric.Canvas.prototype.customiseControls({
    tr: {
      settings: {
        cornerSize: 45
      },
      action: 'remove',
      cursor: 'pointer'
    }
  }, function() {
    canvas.renderAll();
  });

  fabric.Object.prototype.customiseCornerIcons({
    tr: {
      icon: 'data:image/png;base64,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'
    },
    tl: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    mt: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    mb: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    mr: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    ml: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    bm: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    bl: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    br: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    },
    mtr: {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QoKDAQb09JvzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABJSURBVFjD7dAxDQAgEATBBxHowwc1PtCHCbDwDQXJbH3F5CIkSVJEyQ7bmuc1ZveR8tQfn4aGhoaGhoaGhoaGhoaGhoaWJEnJLtqsBDIRk+QiAAAAAElFTkSuQmCC'
    }
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

    CanvasView.prototype.resetOrders = function() {
      var layers;
      layers = this.parentView.canvas.getObjects();
      layers.sort(function(a, b) {
        if (a.model.get('order') >= b.model.get('order')) {
          return 1;
        } else {
          return -1;
        }
      });
      jQuery.each(layers, function(index, layer) {
        return layer.moveTo(index);
      });
      return this.parentView.canvas.renderAll();
    };

    CanvasView.prototype.update_layer = function(obj, options) {
      var order;
      order = options.model.get(Customizer.options.mappings.LAYER_DATA + '.order');
      if (order !== void 0) {
        obj.moveTo(order);
        obj.set('order', order);
      }
      this.parentView.updateModel(obj.model.get('cid'));
      return this.resetOrders();
    };

    CanvasView.prototype.add = function(obj) {
      if (obj.type === void 0) {
        obj.type = obj.template.options.type;
      }
      return this[obj.type](obj);
    };

    CanvasView.prototype.text = function(obj) {
      var defaultOptions, options, template, text;
      template = obj.template;
      options = template.options;
      defaultOptions = Customizer.options.settings.canvas.object.text !== void 0 && typeof Customizer.options.settings.canvas.object.text === 'object' ? Customizer.options.settings.canvas.object.text : {};
      options = jQuery.extend(true, {}, this.getDefault(defaultOptions, obj), options);
      delete options.clipTo;
      if (options.template.text) {
        text = options.template.text;
      } else {
        text = "";
      }
      text = new fabric.IText(text, options);
      obj.canvas.add(text);
      return this.update_layer(text, options);
    };

    CanvasView.prototype.rect = function(obj) {
      var defaultOptions, options, rect, template;
      template = obj.template;
      options = template.options;
      defaultOptions = Customizer.options.settings.canvas.object.rect !== void 0 && typeof Customizer.options.settings.canvas.object.rect === 'object' ? Customizer.options.settings.canvas.object.rect : {};
      options = jQuery.extend(true, {}, this.getDefault(defaultOptions, obj), options);
      delete options.clipTo;
      rect = new fabric.Rect(options);
      obj.canvas.add(rect);
      return this.update_layer(rect, options);
    };

    CanvasView.prototype.image = function(obj) {
      var _this, img, options, template, url;
      _this = this;
      template = obj.template;
      options = template.options;
      if (template.full !== void 0) {
        url = template.full;
      } else if (template.imageDate !== void 0) {
        url = template.imageDate;
      }
      return img = fabric.Image.fromURL(template.full, function(image) {
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
        defaultOptions = Customizer.options.settings.canvas.object.image !== void 0 && typeof Customizer.options.settings.canvas.object.image === 'object' ? Customizer.options.settings.canvas.object.image : {};
        defaultOptions = jQuery.extend(true, {}, defaultOptions, {
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
        if (filters.length > 0) {
          _this.setFilterValue(image, filters);
        }
        _this.update_layer(image, options);
        obj.canvas.renderAll();
        model = obj.model;
        _this.update_layer_data(image, model.attributes);
        if (model.get('isResizable') === false) {
          _this.update_layer_data(image, {
            isResizable: false,
            lockScalingX: true,
            lockScalingY: true
          });
        } else {
          _this.update_layer_data(image, {
            isResizable: true,
            lockScalingX: false,
            lockScalingY: false
          });
        }
        if (model.get('isDraggable') === false) {
          _this.update_layer_data(image, {
            isDraggable: false,
            lockMovementX: true,
            lockMovementY: true
          });
        } else {
          _this.update_layer_data(image, {
            isDraggable: true,
            lockMovementX: false,
            lockMovementY: false
          });
        }
        if (model.get('hasControls') === false) {
          return _this.update_layer_data(image, {
            hasControls: false
          });
        } else {
          return _this.update_layer_data(image, {
            hasControls: true
          });
        }
      });
    };

    CanvasView.prototype.update_layer_data = function(obj, key, value) {
      if (typeof key === 'object') {
        jQuery.each(key, function(k, v) {
          obj.set(k, v);
          return obj.model.set(Customizer.options.mappings.LAYER_DATA + "." + k, v);
        });
      } else {
        obj.set(key, value);
        obj.model.set(Customizer.options.mappings.LAYER_DATA + "." + key, value);
      }
      obj.setCoords();
      obj.canvas.renderAll();
      return obj.model.trigger('change');
    };

    CanvasView.prototype.setFilterValue = function(obj, filters) {
      if (filters) {
        jQuery.each(filters, function(index, filter) {
          if (obj.filters[index]) {
            return obj.filters[index] = filter;
          } else {
            return obj.filters.push(new fabric.Image.filters.Tint(filter));
          }
        });
        obj.applyFilters(obj.canvas.renderAll.bind(obj.canvas));
        obj.model.set(Customizer.options.mappings.LAYER_DATA + ".filters", obj.filters);
        return obj.model.trigger('change');
      }
    };

    CanvasView.prototype.getDefault = function(options, obj) {
      var defaultOptions;
      defaultOptions = {
        id: obj.model.cid,
        model: obj.model,
        template: obj.template,
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
        lockRotation: false
      };
      if (Customizer.options.settings.boundingBoxCoords !== void 0 && Customizer.options.settings.boundingBoxCoords !== null) {
        defaultOptions.boundingEnable = true;
        if (typeof Customizer.options.settings.boundingBoxCoords === 'object') {
          defaultOptions.elementBoundingEnable = true;
          defaultOptions.boundingCoordsLeft = Customizer.options.settings.boundingBoxCoords.x;
          defaultOptions.boundingCoordsTop = Customizer.options.settings.boundingBoxCoords.y;
          defaultOptions.boundingCoordsWidth = Customizer.options.settings.boundingBoxCoords.width;
          defaultOptions.boundingCoordsHeight = Customizer.options.settings.boundingBoxCoords.height;
        } else {
          defaultOptions.elementBoundingEnable = false;
          defaultOptions.boundingElementName = Customizer.options.settings.boundingBoxCoords;
        }
      }
      if (Customizer.options.settings.administration === true) {
        defaultOptions.administration = true;
      } else {
        defaultOptions.administration = false;
      }
      return jQuery.extend(true, {}, defaultOptions, options);
    };

    return CanvasView;

  })();

  CustomizerView = (function(superClass) {
    extend(CustomizerView, superClass);

    function CustomizerView() {
      return CustomizerView.__super__.constructor.apply(this, arguments);
    }

    CustomizerView.prototype.SUBVIEWS = [];

    CustomizerView.prototype.canvasView = new CanvasView();

    CustomizerView.prototype.events = {
      'click .js-save-data': 'saveForm',
      'click .fb-tabs a': 'showTab',
      'click .fb-add-field-types a': 'addField',
      'change #pc-upload-image-panel .pc-upload-image': 'uploadImages',
      'click .canvas-actions .fullscreen': 'fullscreen',
      'click .canvas-actions .download': 'savePDF',
      'click .canvas-actions .zoom-in': function(e) {
        return this.canvas.setZoom(this.canvas.getZoom() * 1.1);
      },
      'click .canvas-actions .zoom-out': function(e) {
        return this.canvas.setZoom(this.canvas.getZoom() / 1.1);
      },
      'click .canvas-actions .zoom-reset': function(e) {
        return this.canvas.setZoom(1);
      },
      'click .canvas-actions .preview': 'saveImage',
      'click .canvas-actions .social_share_popop': 'social_share_popop'
    };

    CustomizerView.prototype.initialize = function(options) {
      var activeView, defaultSettings, selector, settings;
      selector = options.selector, this.customizer = options.customizer, this.bootstrapData = options.bootstrapData, settings = options.settings, this.productViewData = options.productViewData;
      if (selector != null) {
        this.setElement(jQuery(selector));
      }
      defaultSettings = {
        administration: true,
        allowAddText: true,
        allowUploadImage: true,
        replaceImage: false,
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
      if (this.settings != null) {
        Customizer.options.settings = this.settings;
      }
      if (this.settings.images !== void 0) {
        if (typeof this.settings.images === 'object' || typeof this.settings.images === 'array') {
          jQuery.each(this.settings.images, function(index, v) {
            if (v !== void 0) {
              if (typeof v === 'object' || typeof v === 'array') {
                return jQuery.each(v, function(i, value) {
                  value.type = value.type === void 0 ? index : value.type;
                  value.id = value.id === void 0 ? i : value.id;
                  return Customizer.registerImages(index, value);
                });
              }
            }
          });
        }
      }
      if (this.settings.fonts !== void 0) {
        jQuery.each(this.settings.fonts, function(index, v) {
          return Customizer.registerFonts(v);
        });
      }
      if (this.settings.fonts.length > 0 && Customizer.options.settings.canvas.object.text.fontFamily === void 0) {
        Customizer.options.settings.canvas.object.text.fontFamily = this.settings.fonts[0];
      }
      Customizer.registerImage();
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
      this.renderFontsCSS();
      this.bindSaveEvent();
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
      jQuery(window).on('resize', this.reSizeWindow.bind(this));
      this.collection.reset(this.bootstrapData);
      if (this.productViewCollection.models.length > 0) {
        activeView = this.productViewCollection.models[0];
        return this.reset();
      }
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
      var _this, canvas, defaultCanvasArgs, el, j, len1, ref, subview;
      this.$el.html(Customizer.templates['page']());
      this.loader = this.$el.find('.pc-loader-container');
      this.loader.show();
      ref = this.SUBVIEWS;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        subview = ref[j];
        new subview({
          parentView: this
        }).render();
      }
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
      _this = this;
      $(document).on('click', '.js-social-share', function(e) {
        console.log(this);
        e.preventDefault();
        return _this.getBlob(function(blob) {
          return _this.openSocialSharePopup(e, blob);
        });
      });
      this.loader.hide();
      return this;
    };

    CustomizerView.prototype.reSetCanvasSize = function() {
      this.canvas.setWidth(1920);
      return this.canvas.setHeight(1080);
    };


    /*randerLayers : (canvas)->
    		layers = @canvas.getObjects()
    
    		@layersView = new ViewLayerView
    			parentView: @
    			canvas: @canvas
    
    		$el = @layersView.render().$el
    		@$el.find('#pc-layers').html($el)
     */

    CustomizerView.prototype.renderFontsCSS = function() {
      var $el;
      this.settings.fonts;
      $el = Customizer.templates["partials/text-fonts-css"]();
      return this.$el.prepend($el);
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
      var $oldColor, doc, e, error, finename, height, heightLeft, imgData, imgHeight, imgWidth, pageHeight, position, width;
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
        imgWidth = 210;
        pageHeight = 295;
        imgHeight = height * imgWidth / width;
        heightLeft = imgHeight;
        doc = new jsPDF('p', 'mm');
        position = 0;
        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        finename = prompt('Please enter file name', 'Product');
        return doc.save(finename + '.pdf');
      } catch (error) {
        e = error;
        return alert("Error description: " + e.message);
      }
    };

    CustomizerView.prototype.social_share_popop = function(e) {
      var modelView;
      console.log(e);
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
        console.log(blob);
        console.log(networkShareUrl);
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

    CustomizerView.prototype.setCliping = function(obj) {
      var clipRect;
      clipRect = _.where(obj.canvas.getObjects(), {
        clipFor: obj.clipName
      });
      if (clipRect.length > 0) {
        return obj.clipTo = function(ctx) {
          return _.bind(clipByName, this)(ctx);
        };
      } else if (obj.clipTo !== void 0) {
        return delete obj.clipTo;
      }
    };

    CustomizerView.prototype.bindSaveEvent = function() {
      this.formSaved = true;
      this.saveFormButton = this.$el.find(".js-save-data");
      if (this.saveFormButton.length > 0) {
        return this.saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED);
      }

      /*unless !Customizer.options.AUTOSAVE
      			setInterval =>
      				@saveForm.call(@)
      			, 5000
      
      		jQuery(window).bind 'beforeunload', =>
      			if @formSaved then undefined else Customizer.options.dict.UNSAVED_CHANGES
       */
    };

    CustomizerView.prototype.reset = function() {
      return this.addAll();
    };

    CustomizerView.prototype.setLayersActive = function(obj) {
      var li;
      if (this.$el.find('#pc-layers ul > li')) {
        return li = this.$el.find('#pc-layers ul > li').filter(function(i, li) {
          return jQuery(li).data('id') === obj.id;
        });
      }

      /*if(li.length is 0)
      			@randerLayers()
      		else
      			if(!li.hasClass('active'))
      				@$el.find('#pc-layers ul > li').removeClass('active')
      				li.addClass('active')
       */
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

    CustomizerView.prototype.bringToppedElementsToFront = function() {
      var bringToFrontObj, i, object, objects;
      objects = this.canvas.getObjects();
      bringToFrontObj = [];
      this.canvas.renderAll();
      i = 0;
      while (i < objects.length) {
        object = objects[i];
        if (object.model && object.model.get(Customizer.options.mappings.LAYER_DATA + ".stayOnTop") === true) {
          bringToFrontObj.push(object);
        }
        ++i;
      }
      i = 0;
      while (i < bringToFrontObj.length) {
        bringToFrontObj[i].bringToFront();
        ++i;
      }
    };

    CustomizerView.prototype.renderOnFontLoaded = function(fontName) {
      var _this;
      _this = this;
      return WebFont.load({
        custom: {
          families: [fontName]
        },
        fontactive: function(familyName, fvd) {
          jQuery('body').mouseup();
          return _this.canvas.renderAll();
        }
      });
    };

    CustomizerView.prototype.getModel = function(id) {
      return this.collection.find(function(model) {
        return model.cid === id;
      });
    };

    CustomizerView.prototype.showTab = function(e) {
      var $el, target;
      $el = jQuery(e.currentTarget);
      target = $el.data('target');
      $el.closest('li').addClass('active').siblings('li').removeClass('active');
      return jQuery(target).addClass('active').siblings('.fb-tab-pane').removeClass('active');
    };

    CustomizerView.prototype.addOne = function(model, _, options) {
      var model_option, newTemplate, template;
      if (model.attributes[Customizer.options.mappings.LAYER_DATA] !== void 0) {
        model.attributes.cid = model.cid;
        model.attributes[Customizer.options.mappings.LAYER_DATA].id = model.cid;
        model_option = model.get(Customizer.options.mappings.LAYER_DATA);
        model_option.object = model.get('object');
        model_option.name = model.get('name');
        model_option.type = model.get('type');
        if (model.get('title')) {
          model_option.title = model.get('title');
          model_option.clipFor = model.get('title');
        }
      } else {
        model_option = {};
      }
      if (model.get(Customizer.options.mappings.OBJECT) === 'text') {
        template = Customizer.text;
        model_option.text = model.get('text');
      } else if (model.get(Customizer.options.mappings.OBJECT) === 'image') {
        template = Customizer.image;
        template.full = model.get('full');
        if (model.get('title')) {
          template.title = model.get('title');
          template.clipFor = model.get('title');
        }
      } else {
        template = {};
        template.object = model_option.object;
        template.type = model_option.type;
        template.title = model_option.title;
        template.clipFor = model_option.title;
        if (model.get('options') !== void 0) {
          template.options = jQuery.extend(true, {}, template.options, model.get('options'));
        } else {
          template.options = model_option;
        }
      }
      newTemplate = jQuery.extend(true, {}, template);
      if (newTemplate.options === void 0 || newTemplate.options === null) {
        newTemplate.options = {};
      }
      newTemplate.options = jQuery.extend(true, {}, newTemplate.options, model_option);
      return this.canvasView.add({
        type: newTemplate.object,
        template: newTemplate,
        model: model,
        canvas: this.canvas
      });
    };

    CustomizerView.prototype.addAll = function() {
      return this.collection.each(this.addOne, this);
    };

    CustomizerView.prototype.addField = function(e) {
      var _this, attrs, id, type;
      _this = this;
      id = jQuery(e.currentTarget).data('field-id');
      type = jQuery(e.currentTarget).data('field-type');
      attrs = jQuery.extend(true, {}, Customizer.images[type][id]);
      return _this.addImageLayer(attrs);
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
      obj = _.where(this.canvas.getObjects(), {
        name: 'background'
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
          var newData;
          newData = jQuery.extend(true, {}, data);
          if (newData.url && newData.full === void 0) {
            newData.full = newData.url;
          }
          if (newData.id !== void 0) {
            delete newData.id;
          }
          return _this.createField(Customizer.helpers.defaultLayersAttrs('img', 'image', newData));
        };
        return _addImageLayer();
      };
      if (obj !== void 0 && obj !== null && obj.name !== void 0) {
        return _replace(obj);
      } else {
        return obj = _addNew();
      }
    };

    CustomizerView.prototype.uploadImages = function(evt) {
      return this.background_upload_image(evt.target.files);
    };

    CustomizerView.prototype.randerUploadedImages = function() {
      var uploadImages;
      uploadImages = sessionStorage.getItem('uploadImages');
      if (uploadImages === void 0 || uploadImages === null) {
        uploadImages = {};
      }
      return this.add_uploaded_image(uploadImages);
    };

    CustomizerView.prototype.updateSession = function(data) {
      var uploadImages;
      if (data === void 0 || uploadImages === null) {
        uploadImages = {};
      } else {
        uploadImages = data;
      }
      return sessionStorage.setItem('uploadImages', JSON.stringify(uploadImages));
    };

    CustomizerView.prototype.background_upload_image = function(files) {
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
          $preview.css('background-image', "url('" + image_data + "')");
          return _this.canvas.setBackgroundImage(image_data, _this.canvas.renderAll.bind(_this.canvas), {
            width: _this.canvas.width,
            height: _this.canvas.height,
            originX: 'left',
            originY: 'top'
          });
        });
      };
      is_update = false;
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
            width: "100%",
            height: 200
          },
          update: function(croppe) {
            return is_update = true;
          }
        });
        setInterval((function(_this) {
          return function() {
            if (is_update) {
              is_update = false;
              return setCanvasImage();
            }
          };
        })(this), 1000);
        reader.onload = function(e) {
          image_data = e.target.result;
          $('.upload-image').addClass('ready');
          return _this.$uploadCrop.croppie('bind', {
            url: e.target.result
          }).then(function() {
            return setCanvasImage();
          });
        };
        return reader.readAsDataURL(files[0]);
      }
    };

    CustomizerView.prototype.ajax_upload_image = function(files) {
      var _this, formData;
      formData = new FormData(jQuery('<form></from>')[0]);
      formData.append('image', files[0]);
      formData.append('action', 'pc_upload_image');
      _this = this;
      return jQuery.ajax({
        url: this.settings.imageUploadUrl,
        type: "post",
        data: formData,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function() {
          return _this.loader.show();
        },
        success: function(data) {
          var attrs, image_url;
          if (data.status === 'success') {
            image_url = data.url;
            if (image_url !== void 0 && image_url !== null) {
              attrs = {
                uploadedImage: image_url
              };
            } else if (image_temp_url !== void 0 && image_temp_url !== null) {
              attrs = {
                uploadedImage: image_url
              };
            } else {
              return;
            }
            _this.randerUploadedImage(data);
            return _this.loader.hide();
          } else {
            return _this.loader.hide();
          }
        },
        error: function() {
          return _this.loader.hide();
        }
      });
    };

    CustomizerView.prototype.ajax_remove_image = function(file) {
      var _this;
      _this = this;
      return jQuery.ajax({
        url: this.settings.imageUploadUrl,
        type: "post",
        data: {
          action: 'pc_remove_uploaded_image',
          file: file
        },
        dataType: 'json',
        beforeSend: function() {
          return _this.loader.show();
        },
        success: function(data) {
          return _this.loader.hide();
        },
        error: function() {
          return _this.loader.hide();
        }
      });
    };

    CustomizerView.prototype.add_uploaded_image = function(file) {
      var _this;
      _this = this;
      return _this.addImageLayer({
        full: file.url,
        fit: true,
        name: 'background',
        isResizable: false,
        hasControls: false,
        isDraggable: false
      });
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
      if (Customizer.options.HTTP_ENDPOINT) {
        this.doAjaxSave(payload);
      }
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

    CustomizerView.prototype.doAjaxSave = function(payload) {
      return jQuery.ajax({
        url: Customizer.options.HTTP_ENDPOINT,
        type: Customizer.options.HTTP_METHOD,
        data: payload,
        contentType: "application/json",
        success: (function(_this) {
          return function(data) {
            var datum, j, len1, ref;
            _this.updatingBatch = true;
            for (j = 0, len1 = data.length; j < len1; j++) {
              datum = data[j];
              if ((ref = _this.collection.get(datum.cid)) != null) {
                ref.set({
                  id: datum.id
                });
              }
              _this.collection.trigger('sync');
            }
            return _this.updatingBatch = void 0;
          };
        })(this)
      });
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

    Customizer.layers = [];

    Customizer.backgrounds = {};

    Customizer.text = {};

    Customizer.images = {};

    Customizer.fonts = {};

    Customizer.fields = {};

    Customizer.image = {};

    Customizer.inputFields = {};

    Customizer.nonInputFields = {};

    Customizer.addLayers = function(opts) {
      return Customizer.layers.push(opts);
    };

    Customizer.registerField = function(name, opts) {
      var j, len1, ref, x;
      ref = ['view', 'edit'];
      for (j = 0, len1 = ref.length; j < len1; j++) {
        x = ref[j];
        opts[x] = _.template(opts[x]);
      }
      return Customizer.fields[name] = opts;
    };

    Customizer.registerImages = function(category, opts) {
      var id;
      if (opts.type === void 0) {
        opts.type = category;
      }
      if (opts.object === void 0) {
        opts.object = 'image';
      }
      if (opts.id !== void 0) {
        id = opts.id;
      }
      if (Customizer.images[category] === void 0) {
        Customizer.images[category] = {};
      }
      return Customizer.images[category][id] = opts;
    };

    Customizer.registerFonts = function(font) {
      var ext, filename;
      if (font.name === void 0) {
        filename = font.url.split('/').pop().split('#')[0].split('?')[0];
        font.name = filename.split('.')[0];
        font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
      } else {
        font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase();
      }
      if (font.displayName === void 0) {
        font.displayName = font.name;
      }
      if (font.src === void 0) {
        font.src = {};
      }
      if (font.url !== void 0) {
        filename = font.url.split('/').pop().split('#')[0].split('?')[0];
        ext = filename.split('.')[1];
        if (ext !== void 0) {
          font.src[ext] = font.url;
        }
      }
      return Customizer.fonts[font.name] = font;
    };

    Customizer.registerShape = function() {
      var opts;
      opts = {
        type: 'text',
        object: 'text'
      };
      return Customizer.shape = opts;
    };


    /*@registerText: () ->
    		opts =
    			type : 'text'
    			object : 'text'
    		Customizer.text = opts
     */

    Customizer.registerImage = function() {
      var opts;
      opts = {
        type: 'image',
        object: 'image'
      };
      return Customizer.image = opts;
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

(function() {
  Customizer.registerField('image', {
    view: "    ",
    edit: "<%= Customizer.templates[\"edit/color-picker\"]({rf : rf}) %>\n<%= Customizer.templates[\"edit/text-alignment\"]({rf : rf}) %>\n<%= Customizer.templates[\"edit/text-style\"]({rf : rf}) %>\n<% if(Customizer.options.settings.administration == true){ %>\n<%= Customizer.templates[\"edit/administration\"]({rf : rf}) %>\n<% } %>"
  });

}).call(this);

(function() {
  Customizer.registerField('text', {
    view: "    ",
    edit: "<%= Customizer.templates[\"edit/color-picker\"]({rf : rf}) %>\n<%= Customizer.templates[\"edit/text-alignment\"]({rf : rf}) %>\n<%= Customizer.templates[\"edit/text-style\"]({rf : rf}) %>\n<% if(Customizer.options.settings.administration == true){ %>\n	<%= Customizer.templates[\"edit/administration\"]({rf : rf}) %>\n<% } %>"
  });

}).call(this);

this["Customizer"] = this["Customizer"] || {};
this["Customizer"]["templates"] = this["Customizer"]["templates"] || {};

this["Customizer"]["templates"]["page"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '\n<div class=\'fb-left\'>\n\t<div class=\'pc-assets\'>\n\t  <ul class=\'fb-tabs\'>\n\t    <li class=\'active\'><a data-target=\'#pc-upload-image-panel\'><span class="fa fa fa-upload"></span> Background </a></li>\n\t\n\t    <li><a data-target=\'#pc-backgrounds-panel\'><i class="fa fa-picture-o"></i>  Images</a></li>\n\n\t    \n\t  </ul>\n\n\t  <div class=\'fb-tab-content\'>\n\t   \n\t    ' +((__t = ( Customizer.templates['partials/panels/images']() )) == null ? '' : __t) +'\n\n\t    \n\t  </div>\n\t</div>\n</div>\n<div class=\'fb-right\'>\n\t' +((__t = ( Customizer.templates['partials/canvas']() )) == null ? '' : __t) +'\n</div>\n\n<div class=\'fb-clear\'></div>\n\n<div class=\'fb-save-wrapper\'>\n  <button class=\'js-save-data ' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'\'></button>\n</div>\n<div class="pc-loader-container">\n\t<div class="pc-loading-inner">\n\t\t<div class="pc-loading-icon"><!-- <span class="mif-spinner2 mif-ani-spin"></span> --><span class="mif-spinner3 mif-ani-spin"></span></div>\n\t\t<div class="pc-loading-text">Loading...</div>\n\t</div>\n</div>';}return __p};

this["Customizer"]["templates"]["partials/add_field"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'fb-tab-pane active\' id=\'addField\'>\n  <div class=\'fb-add-field-types\'>\n    <div class=\'section\'>\n      '; _.each(_.sortBy(Customizer.inputFields, 'order'), function(f){ ;__p += '\n        <a data-field-type="' +((__t = ( f.field_type )) == null ? '' : __t) +'" class="' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'">\n          ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n        </a>\n      '; }); ;__p += '\n    </div>\n\n    <div class=\'section\'>\n      '; _.each(_.sortBy(Customizer.nonInputFields, 'order'), function(f){ ;__p += '\n        <a data-field-type="' +((__t = ( f.field_type )) == null ? '' : __t) +'" class="' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'">\n          ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n        </a>\n      '; }); ;__p += '\n    </div>\n  </div>\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/canvas"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<style>\n.custom-share-button {\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\n  color: #fff;\n  background-color: #55acee;\n  padding: .8em 1.2em;\n  border-radius: 3px;\n  display: inline-block;\n}\n.custom-share-button-icon,\n.custom-share-button-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.custom-share-button-icon {\n  width: 1em;\n  height: 1em;\n  margin-right: .2em;\n}\n.custom-share-button-icon path { fill: #fff; }\n.custom-share-button-label {\n  font-size: .9em;\n  font-weight: 500;\n}\n.custom-share-button:hover { background-color: #70b7ec; }\n</style>\n\n<div class="pc-canvas-waraper">\n<div class="pc-title canvas-actions">\n\t<div class="pc-icon-inline download" data-title="Download PDF file"><span class="fa fa-file-o"></span></div>\n\t<div class="pc-icon-inline preview" data-title="Preview"><span class="fa fa-eye"></span></div>\n\t<div class="pc-icon-inline-seprater"></div>\n\t<div class="pc-icon-inline zoom-in" data-title="Zoom-in"><span class="fa fa-search-plus "></span></div>\n\t<div class="pc-icon-inline zoom-out" data-title="Zoom-out"><span class="fa fa-search-minus"></span></div>\n\t<div class="pc-icon-inline zoom-reset" data-title="Reset zoom"><span class="fa fa-search"></span></div>\n\t<div class="pc-icon-inline-seprater" ></div>\n\t\n\t<div class="pc-icon-inline social_share_popop"> <span class="fa fa-share"></span> </div>\n\n\n\n\t<div class="pc-icon-inline-seprater" ></div>\n\t<div class="pc-icon-inline fullscreen pull-right" data-title="Fullscreen"><span class="fa fa-arrows-alt"></span></div>\n</div>\n<div class=\'pc-canvas\'></div>\n</div>';}return __p};

this["Customizer"]["templates"]["partials/panels/images"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'fb-tab-pane active\' id=\'pc-upload-image-panel\'>\n  <div class=\'fb-upload-image-field-wrapper\'>\n  \t<div class="input-field-container">\n\t  \t<label>Background Image</label>\n\t  \t<div class="pd-upload-zone">\n\t  \t\t<div class="inner-upload-zone">\n\t\t         <span class="fa fa fa-upload"></span>\n\t\t\t\t <span >Click or drop images here</span>\n\t        </div>\n\t        <div class="image-preview"></div>\n\t  \t\t<input type="file" class="pc-upload-image">\n\t  \t</div>\n\n\t  \t<div id="upload-image"></div>\n\t</div>\n  </div>\n</div>\n\n<div class=\'fb-tab-pane \' id=\'pc-backgrounds-panel\'>\n  <div class=\'fb-add-field-types\'>\n    <div class=\'section\'>\n      \t'; _.each(Customizer.images, function(category){ ;__p += '\n      \t\t'; _.each(_.sortBy(category, 'order'), function(f){ ;__p += '\n        \t\t<a data-field-id="' +((__t = ( f.id )) == null ? '' : __t) +'" data-field-type="' +((__t = ( f.type )) == null ? '' : __t) +'" class="' +((__t = ( f.type )) == null ? '' : __t) +'-image assets">\n\t\t\t\t\t'; if(f.addButton === undefined || f.addButton === null || f.addButton === ""){ ;__p += '\n\t\t\t            '; if(f.thumb === undefined || f.thumb === null || f.thumb === ""){ ;__p += '\n\t\t\t              \t<img src="' +((__t = ( f.full )) == null ? '' : __t) +'">\n\t\t\t            '; }else{ ;__p += '\n\t\t\t              \t<img src="' +((__t = ( f.thumb )) == null ? '' : __t) +'">\n\t\t\t            '; } ;__p += '\n\t\t\t        '; }else{ ;__p += '\n\t\t\t            ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n\t\t\t        '; } ;__p += '\n\t\t\t    </a>\n\n        \t'; }); ;__p += '\n      \t'; }); ;__p += '\n    </div>\n  </div>\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/text-fonts-css"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<style type="text/css">\n    ';     jQuery.each(Customizer.fonts, function(index,font){        var font_str = [];        jQuery.each(font.src, function(type, path){            switch(type){                case 'eot':                 format = "format('embedded-opentype')";                 url = "#iefix";                 break;                case 'woff':                 format = "format('woff')";                 url = "";                 break;                case 'ttf':                 format = "format('truetype')";                 url = "";                 break;                case 'svg':                 format = "format('svg')";                 url = "#"+font.name;                 break;            }            font_str.push("url('"+path+"') "+format);        });         ;__p += '\n        @font-face{\n            font-family:\'' +((__t = ( font.name )) == null ? '' : __t) +'\';    \n            ' +((__t = ( (font_str.length > 0) ? 'src:'+font_str.join(', ')+";" : "" )) == null ? '' : __t) +'\n            font-weight:normal;\n            font-style:normal;\n        }\n    '; }); ;__p += '\n</style>\n</style>';}return __p};

this["Customizer"]["templates"]["view/layers"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="pc-container">\n\t<div class=\'pc-title handle\'><span class="mif-stack"></span> Layers</div>\n  \t<div class=\'pc-body\'>\n  \t\t<ul class="pc-layers-contianer">\n  \t\t\t'; if(layers.length > 0){	  			_.each(_.sortBy(layers, 'order').reverse(), function(_layer){	  				;__p += '\n\t  \t\t\t'; layer = _layer.toJSON(Customizer.options.jsonArgs) ;__p += '\n\t\t\t\t'; active = _layer.canvas.getActiveObject() ;__p += '\n\t\t  \t\t<li \n\t\t  \t\t\tstyle="' +((__t = ( (Customizer.options.settings.administration == false && _layer.hideLayer) || (_layer.displayInLayerBar !== undefined && _layer.displayInLayerBar == false) ? 'display:none' : "" )) == null ? '' : __t) +'" \n\t\t  \t\t\tclass="layers ' +((__t = ( (active !== undefined && active !== null && active.id == _layer.id) ? 'active' : '' )) == null ? '' : __t) +' ' +((__t = ( (Customizer.options.settings.administration == false && (_layer.hideLayer == true || _layer.unlockable == false || _layer.removable == false)) ? 'unsortable' : '' )) == null ? '' : __t) +'" \n\t\t  \t\t\tdata-id="' +((__t = ( _layer.id )) == null ? '' : __t) +'">\n\t\t\t\t    <span class="pc-image-contianer">\n\t\t\t\t    \t'; if(layer.type == 'text'){ ;__p += '\n\t\t\t\t    \t\t<i class="fa fa-text-width"></i>\n\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t    \t\t<img width=50  src="' +((__t = ( layer.src )) == null ? '' : __t) +'">\n\t\t\t\t    \t'; } ;__p += '\n\t\t\t\t    </span>\n\t\t\t\t    <span class="pc-layer-title">\n\t\t\t\t    \t'; if(_layer.title !== undefined && _layer.title !== null ){ ;__p += '\n\t\t\t\t    \t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( _layer.title )) == null ? '' : __t) +'\n\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t\t    \t'; if(layer.type == 'text'){ ;__p += '\n\t\t\t\t\t    \t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( layer.text.substring(0,15) )) == null ? '' : __t) +'\n\t\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t\t\t\t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( layer.type )) == null ? '' : __t) +'\n\t\t\t\t\t    \t'; } ;__p += '\n\t\t\t\t\t\t'; };__p += '\n\t\t\t\t    </span>\n\t\t\t\t\t<span class="pc-layers-action">\n\t\t\t\t\t\t'; if(Customizer.options.settings.administration == true || layer.removable == true){;__p += '\n\t\t\t  \t\t\t\t<a href="javascript:" class="pc-layers-delete"><i class="fa fa-trash-o fa-1"> </i></a>\n\t\t\t  \t\t\t'; } ;__p += '\n\t\t\t  \t\t\t'; if(Customizer.options.settings.administration == true || layer.unlockable == true){;__p += '\n\t\t\t\t\t\t\t<a href="javascript:" class="pc-layers-lock-unlock"><i class="fa ' +((__t = ( _layer.locked == true ? 'fa-lock' : 'fa-unlock-alt' )) == null ? '' : __t) +'"></i></a>\n\t\t\t\t\t\t'; } ;__p += '\n\t\t  \t\t\t</span>\n\t\t  \t\t</li>\n\t\t  \t\t'; }); ;__p += '\n\n\t\t  \t'; }else{ ;__p += '\n\t\t\t\t<li class="layers no-found">No layer found.</li>\n\t\t  \t'; } ;__p += '\n\t  \t</ul>\n  \t</div>\n</div>';}return __p};

this["Customizer"]["templates"]["view/popup"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="pc-modal">\n\t<div class="model-inner">\n\t\t<div class="modal-heder pc-title">\n\t\t\t'; if(modal.title){ ;__p += '\n\t\t\t<div class="pc-title-text">' +((__t = ( modal.title )) == null ? '' : __t) +'</div>\n\t\t\t'; } ;__p += '\n\t\t\t<div class="pc-model-close"><a href="javascript:" class="close"><span class="fa fa-times "></span></a></div>\n\t\t</div>\n\t\t<div class="pc-model-body">\n\t\t\t' +((__t = ( modal.body )) == null ? '' : __t) +'\n\t\t</div>\n\t</div>\n</div>';}return __p};