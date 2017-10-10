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

  fabric.Object.prototype.set({
    transparentCorners: false,
    borderColor: '#16A085',
    cornerColor: '#16A085',
    cornerSize: 7
  });

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


  /*class ViewLayerView extends Backbone.View
    className : 'pc-layers-wraper'
    events:
      'click li': 'focusEditView'
      'click .pc-layers-delete': 'remove'
      'click .pc-layers-lock-unlock': 'lockUnlock'
  
    initialize: (options) ->
      {@parentView} = options
      @canvas = @parentView.canvas;
  
    unselect : ->
      @$el.find('.pc-layers-contianer li').removeClass('active')
  
    render: ->
      layers = @canvas.getObjects()
  
      $el = Customizer.templates["view/layers"]({layers : layers})
      @$el.html($el)
      @setSortable()
      return @
  
    focusEditView: (ev)->
      id = jQuery(ev.currentTarget).data('id')
      obj = @canvas.getItemByMyID(id);
      @canvas.setActiveObject(obj);
      @canvas.renderAll();
  
  
    lockUnlock: (ev)->
      if(jQuery(ev.currentTarget).prop("tagName") is 'li')
        id = jQuery(ev.currentTarget).data('id')
        $el = jQuery(ev.currentTarget)
      else
        id = jQuery(ev.currentTarget).closest('li').data('id')
        $el = jQuery(ev.currentTarget).closest('li')
  
      object = @canvas.getItemByMyID(id);
      if object.locked is false     
        object.set(
          selection: true
          selectable: false
          lockScalingX  : true
          lockScalingY  : true
          lockUniScaling  : true
          lockRotation  : true
          lockMovementX : true
          lockMovementY : true
          locked  : true
          hasBorders: false
          hasControls: false
          hasRotatingPoint: false
          hoverCursor : 'default'
  
          isResizable: false
          isDraggable: false
        )
        $el.find('.fa-unlock-alt').removeClass('fa-unlock-alt').addClass('fa-lock')
      else
        object.set(
          selection: false
          selectable: true
          lockScalingX  : false
          lockScalingY  : false
          lockUniScaling  : false
          lockRotation  : false
          lockMovementX : false
          lockMovementY : false
          locked  : false
          hasBorders: true
          hasControls: true
          hasRotatingPoint: true
          isResizable: true
          isDraggable: true
  
        )
        $el.find('.fa-lock').removeClass('fa-lock').addClass('fa-unlock-alt')
  
      @canvas.discardActiveObject()
      @canvas.renderAll();
      @parentView.updateModel(id)
  
  
    remove: (ev)->
      if(jQuery(ev.currentTarget).prop("tagName") is 'li')
        id = jQuery(ev.currentTarget).data('id')
        $el = jQuery(ev.currentTarget)
      else
        id = jQuery(ev.currentTarget).closest('li').data('id')
        $el = jQuery(ev.currentTarget).closest('li')
  
      obj = @canvas.getItemByMyID(id);
      obj.remove()
      $el.remove()
      @parentView.getModel(id).destroy()
      @parentView.handleFormUpdate()
  
    scrollLayerWrapper: ($layerContainer) ->
      #return unless $responseFieldEl[0]
      if typeof @$layerContainer is 'undefined' or @$layerContainer.length is 0
        return
  
      li = jQuery(@$layerContainer).find('li.active')
  
      if typeof li is 'undefined' or li.length is 0
        return
  
      bottom = @$layerContainer.offset().top + @$layerContainer.height()
  
      if (li.offset().top + li.height()) > bottom
        jQuery(@$layerContainer).animate({
            scrollTop: li.offset().top
        }, 200);
  
    setSortable: ->
  
      @$layerContainer = @$el.find('.pc-layers-contianer')
      if !@$layerContainer
        return;
      @$layerContainer.sortable('destroy') if @$layerContainer.hasClass('ui-sortable')
      @scroll = ""
      _this = @
  
      @$layerContainer.sortable
        forcePlaceholderSize: true
        placeholder: 'sortable-placeholder'
        containment: "parent",
        scrollSpeed: 2
        items: "li:not(.unsortable)"
        start: (e, ui )->
          ui.placeholder.height(ui.helper.height());
        
        stop: (e, ui) =>
          total = jQuery(e.target).find('li').length;
          jQuery(e.target).find('li').each((index)-> 
            i = total - (index + 1)
            id = jQuery(@).data('id')
  
            model = _this.parentView.getModel(id)
  
            object = _this.canvas.getItemByMyID(id);
            object.moveTo(i);
  
            model.set(Customizer.options.mappings.LAYER_DATA+'.order', i)
            model.set(Customizer.options.mappings.LAYER_DATA+'.zIndex', i)
            model.set('order', i)
            model.trigger 'change'
  
            _this.parentView.bringToppedElementsToFront();
          )
          
          return true
        update: (e, ui) =>
          jQuery(e.target).find('li').each((i)-> 
             jQuery(@).data('order', i + 1);
             jQuery(@).attr('data-order', i + 1);
          )
  
        scroll: true,
        scrollSensitivity: 80,
        scrollSpeed: 3,
        cursor: "move",
        tolerance: "pointer"
  
    forceRender: (id)-> 
      scrolled_val = @$el.scrollTop().valueOf();
      @render()
   */


  /*class EditLayerView extends Backbone.View
    className : 'pc-edit-layer-wraper'
    events:
      'click .align-bottom': 'alignBottom'
      'click .align-top': 'alignTop'
      'click .vertical-align-center': 'verticalCenter'
      'click .align-left': 'alignLeft'
      'click .align-right': 'alignRight'
      'click .hoizontal-align-center': 'horizontalCenter'
      'click .toggle-div': 'toggle'
  
  
      'change .text-font-family': 'fontFamily'
      'keyup .text-font-size': 'fontSize'
      'click .text-bold': 'textBold'
      'click .text-italic': 'textItalic'
      'click .text-underline': 'textUnderline'
      'click .rotate-left': 'rotateLeft'
      'click .rotate-right': 'rotateRight'
      'click .reset-layer': 'resetLayer'
  
      'change .checkbox-removable': 'isRemovable'
      'change .checkbox-draggable': 'isDraggable'
      'change .checkbox-rotatable': 'isRotatable'
      'change .checkbox-unlockable': 'isUnlockable'
      'change .checkbox-resizable': 'isResizable'
      'change .checkbox-hide-layer': 'isHideLayer'
      'change .checkbox-stay-on-top': 'stayOnTop'
  
      'keyup .pc_allowed_colors': 'allowedColors'
      'keyup .pc_layer_name': 'changeLayerName'
      'keyup .pc_default_color': 'defaultColor'
  
  
      'change #enable_bounding': 'boundingEnable'
      'change #another_element_bounding': 'elementBoundingEnable'
      'keyup .input_another_element_bounding_name': 'boundingElementName'
      'keyup .bounding_coords': 'boundingBoxCoords'
      'change .input_bounding_box_mode': 'boundingMode'
  
    initialize: (options) ->
      {@parentView} = options
      {@layer} = options
      {@model} = options.layer
      {@canvas} = options.layer
     
    destroy : ->
      if@$el?
        @$el.find('.colorselector').spectrum('destroy');
        @$el.remove();
  
    render: ->
      $el = Customizer.templates["edit/base"]({layer : @layer, rf : @model})
  
      @$el.html($el)
      @setColorPicker();
  
      @buindSetting()
      return @
    
    toggle : (e)->
      _this = @;
  
      target = jQuery(e.currentTarget).data('target')
      @parentView.$el.find(target).slideToggle();
  
      if jQuery(target).hasClass('tool-tip')  
        jQuery('.toggle-div').each(()->
          if e.currentTarget isnt @
            target = jQuery(@).data('target')
            if jQuery(target).hasClass('tool-tip')
              _this.parentView.$el.find(target).slideUp();
        )
  
    isRemovable : (e)->
      obj = @canvas.getActiveObject();
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data obj,'removable', true
      else
        @update_layer_data obj,'removable', false
  
    isUnlockable : (e)->
      obj = @canvas.getActiveObject();
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data obj,'unlockable', true
      else
        @update_layer_data obj,'unlockable', false
  
    isHideLayer : (e)->
      obj = @canvas.getActiveObject();
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data obj,'hideLayer', true
      else
        @update_layer_data obj,'hideLayer', false
  
    boundingEnable : (e)->
      obj = @canvas.getActiveObject();
      parent = jQuery(e.currentTarget).closest('.pc-define-bounding')
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data(obj,
          'boundingEnable': true
          )
        
      else
        @update_layer_data(obj,
          'boundingEnable': false
          )
  
      @parentView.setBoundry(obj, @parentView)
  
    elementBoundingEnable : (e)->
      obj = @canvas.getActiveObject();
      parent = jQuery(e.currentTarget).closest('.pc-define-bounding')
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data(obj,
          #'boundingEnable': true
          'elementBoundingEnable': true
          'boundingElementName': parent.find('[name="another_element_bounding_name"]').val()
          'boundingCoordsLeft' : ""
          'boundingCoordsTop' : ""
          'boundingCoordsWidth' : ""
          'boundingCoordsHeight'  : ""
          #'boundingMode': parent.find('[name="bounding_box_mode"]').val()
          )
      else
        @update_layer_data(obj,
          #'boundingEnable': true
          'elementBoundingEnable': false
          'boundingElementName': ""
          'boundingCoordsLeft': parent.find('[name="bounding_coords_left"]').val()
          'boundingCoordsTop': parent.find('[name="bounding_coords_top"]').val()
          'boundingCoordsWidth': parent.find('[name="bounding_coords_width"]').val()
          'boundingCoordsHeight': parent.find('[name="bounding_coords_height"]').val()
          #'boundingMode': parent.find('[name="bounding_box_mode"]').val()
        )
      
  
      @parentView.setBoundry(obj, @parentView)
  
    boundingElementName : (e)->
      obj = @canvas.getActiveObject();
      @update_layer_data obj, 'boundingElementName', e.currentTarget.value
      @parentView.setBoundry(obj, @parentView)
  
    boundingBoxCoords : (e)->
      obj = @canvas.getActiveObject();
      coord = jQuery(e.currentTarget).data('coord')
  
      @update_layer_data obj, "boundingCoords#{coord}" , e.currentTarget.value
      
      @parentView.setBoundry(obj, @parentView)
     
    boundingMode : (e)->
      obj = @canvas.getActiveObject();
      @update_layer_data obj, 'boundingMode',e.currentTarget.value
      @parentView.setBoundry(obj, @parentView)
     
  
    isResizable : (e)->
      obj = @canvas.getActiveObject();
      if(obj.locked is true)
        return
  
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data(obj,
          isResizable : true 
          lockScalingX : false
          lockScalingY : false
          hasControls: true
        )
      else
        @update_layer_data(obj, 
          isResizable : false 
          lockScalingX : true
          lockScalingY : true
          hasControls: false
        )
  
    stayOnTop : (e)->
      obj = @canvas.getActiveObject();
  
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data obj, {'stayOnTop': true,  evented : false}
      else
        @update_layer_data obj, {'stayOnTop': false,  evented : true}
  
      @bringToppedElementsToFront();
      @parentView.refreshLayer(obj)
  
  
    defaultColor : (e)->
      obj = @canvas.getActiveObject();
      @update_layer_data obj, {'defaultColor': jQuery(e.currentTarget).val()}
  
  
    
    allowedColors : (e)->
      obj = @canvas.getActiveObject();
      colors = jQuery(e.currentTarget).val()
      colors = colors.split(',');
      colors.map (x,y,z)-> z[y] = x.trim()
      colors = (colors.filter (i) -> /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i))
      @update_layer_data obj, {'allowedColors': colors}
    
    changeLayerName : (e)->
      obj = @canvas.getActiveObject();
      value = jQuery(e.currentTarget).val()
      #obj.set(value)
      obj.model.set 'title', value
      @update_layer_data obj, {'title': value}
  
  
    isDraggable : (e)->
      obj = @canvas.getActiveObject();
      if(obj.locked is true)
        return
  
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data(obj,
          isDraggable : true 
          lockMovementX : false
          lockMovementY : false
        )
      else
        @update_layer_data(obj, 
          isDraggable : false 
          lockMovementX : true
          lockMovementY : true
        )
  
    isRotatable : (e)->
      obj = @canvas.getActiveObject();
      if(obj.locked is true)
        return
      if(jQuery(e.currentTarget).is(':checked'))
        @update_layer_data(obj,
            'lockRotation': false
            hasRotatingPoint: true
          )
      else
        @update_layer_data(obj,
            'lockRotation': true 
            hasRotatingPoint: false
          )
    
    
    buindSetting : ()->
      rivets.bind(@parentView.$el.find('#admin-setting-container'), {model : @model});
  
   
  
    setColorPicker: ()->
      _this = @
      obj =  @canvas.getActiveObject();
      colorPickerArgs = 
        preferredFormat: "hex3"
        showInput : true
        showButtons : false
        clickoutFiresChange : true
        hideAfterPaletteSelect : true
        showInitial : true
        chooseText : "Ok"
        change : (color)-> 
          colorPickerArgs.move(color)
        move :(color)->
          hex = color.toHexString(); 
          jQuery(@).find('.background-color').css({'background-color' : hex})
          jQuery('.colorselector .background-color').css('backgroundColor', "##{hex}")   
          if _this.layer.model.get(Customizer.options.mappings.LAYER_DATA+'.type') is 'text'
            _this.update_layer_data(_this.layer , 'fill',"##{hex}")
          else
            _this.applyFilterValue obj, 0, 'color', "#{hex}"
      
      allowedColors = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.allowedColors')
      if allowedColors isnt undefined and allowedColors isnt null and allowedColors isnt "" and allowedColors.length > 0
        defaultColor = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.defaultColor')
        defaultColor = if defaultColor isnt undefined and defaultColor isnt null and defaultColor isnt "" then defaultColor else allowedColors[0]
        if _this.layer.model.get(Customizer.options.mappings.LAYER_DATA+'.type') is 'text'
          color = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.fill')
        else
          filters = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.filters')
          if filters.length > 0
            color = filters[0].color
          else
            color = defaultColor
        colorPickerArgs.color = color
        colorPickerArgs.showPaletteOnly = true
        colorPickerArgs.showPalette = true
        colorPickerArgs.palette = allowedColors
      else
        if _this.layer.model.get(Customizer.options.mappings.LAYER_DATA+'.type') is 'text'
          color = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.fill')
        else
          filters = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.filters')
          if filters.length > 0
            color = filters[0].color
          else
            color = '#000'
        colorPickerArgs.color = color
  
      _this.$el.find('.colorselector').spectrum colorPickerArgs
  
    applyFilterValue : (obj, index, prop, value) ->
      if obj is undefined
        obj = @canvas.getActiveObject();
      if obj isnt undefined and obj isnt null
        if obj.filters[index]
          obj.filters[index][prop] = value;
        else
          obj.filters.push(
              new fabric.Image.filters.Tint(
                color: value
              )
            )
        obj.applyFilters(@canvas.renderAll.bind(@canvas));
        obj.model.set Customizer.options.mappings.LAYER_DATA+".filters", obj.filters
        obj.model.trigger 'change'
    
    fontFamily : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'fontFamily',  e.currentTarget.value
      font = obj.toJSON().fontSize
      @update_layer_data obj, 'fontSize',  parseInt(font) + 1
      @update_layer_data obj, 'fontSize',  font
    
    fontSize : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'fontSize',  e.currentTarget.value
      
  
    textBold : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'fontWeight',  if obj.getFontWeight() is 'bold' then 'normal' else 'bold'
  
    textItalic : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'fontStyle',  if obj.getFontStyle() is 'italic' then 'normal' else 'italic'
  
    textUnderline : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'textDecoration',  if obj.getTextDecoration() is 'underline' then 'none' else  'underline'
  
    rotateLeft : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
  
      resetOrigin = false;
      if (obj.originX isnt 'center' or obj.originY isnt 'center') and obj.centeredRotation
        obj.setOriginToCenter and obj.setOriginToCenter()
        resetOrigin = true
  
  
      angle = obj.getAngle()
      angle += 5
      @update_layer_data obj, 'angle',  angle    
      if resetOrigin
          obj.setCenterToOrigin and obj.setCenterToOrigin();
      
  
    rotateRight : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
  
      resetOrigin = false;
      if (obj.originX isnt 'center' or obj.originY isnt 'center') and obj.centeredRotation
        obj.setOriginToCenter and obj.setOriginToCenter()
        resetOrigin = true
  
      angle = obj.getAngle()
      angle -= 5
      @update_layer_data obj, 'angle',  angle
  
      if resetOrigin
          obj.setCenterToOrigin and obj.setCenterToOrigin();
  
  
    alignBottom : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'top',  (this.canvas.height - obj.getHeight())
  
    alignTop : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'top', 0
  
    alignLeft : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'left', 0
  
    alignRight : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data obj, 'left', (this.canvas.width - obj.getWidth())
  
  
    horizontalCenter : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data(obj, 'left', ((@canvas.width / 2) - (obj.getWidth() / 2)))
  
    verticalCenter : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      @update_layer_data(obj, 'top', ((@canvas.height / 2) - (obj.getHeight() / 2)))
        
    center : (e)->
      obj = @canvas.getActiveObject();
      if obj is undefined
        return
      top =  (@canvas.height / 2) - (obj.getHeight() / 2)
      left = (@canvas.width / 2) - (obj.getWidth() / 2)
      @update_layer_data(obj, {top : top, left : left})
            
  
    update_layer_data : (obj, key, value)->
  
      if(typeof key is 'object')
        jQuery.each(key, (k, v)->
          obj.set k, v
          obj.model.set Customizer.options.mappings.LAYER_DATA+"."+k, v
        )
      else
        obj.set key, value
        obj.model.set Customizer.options.mappings.LAYER_DATA+"."+key, value
  
      obj.setCoords();
      @canvas.renderAll();
      obj.model.trigger 'change'
  
    forceRender: (id)-> 
      @render()
   */

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
      this.parentView.setBoundry(obj, this.parentView);
      this.parentView.updateBoundry();
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
        var defaultOptions, filters, model;
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
        console.log(model);
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
      'click .canvas-actions .preview': 'saveImage'
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
      this.listenTo(this.canvas, "object:selected", this.objectSelected);
      this.listenTo(this.canvas, "object:modified", this.objectModified);
      this.listenTo(this.canvas, "object:scaling", this.objectScaling);
      this.listenTo(this.canvas, "before:selection:cleared", this.beforeSelectionCleared);
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
      originalWidth = 600;
      originalHeight = 480;
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

      /*if @$el.hasClass('fullscreen')
        @oldCanvasHeight = @canvas.getHeight()
        @oldCanvasWidth = @canvas.getWidth()
        
        offset = @$el.find('.canvas-actions').outerHeight(true)
        @canvas.setHeight(@$el.height() - offset - 8)
        
        
      
        @canvas.setWidth(@$el.find('.pc-canvas').width())
      else
        @canvas.setHeight(@oldCanvasHeight)
        @canvas.setWidth(@oldCanvasWidth)
       */
    };

    CustomizerView.prototype.realWidth = function(obj) {
      var clone, width;
      clone = obj.clone();
      clone.css("visibility", "hidden");
      jQuery('body').append(clone);
      width = clone.outerWidth();
      clone.remove();
      return width;
    };

    CustomizerView.prototype.render = function() {
      var canvas, defaultCanvasArgs, el, j, len1, ref, subview;
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
        preserveObjectStacking: true
      };
      if (Customizer.options.settings.canvas === void 0) {
        Customizer.options.settings.canvas = {};
      }
      this.canvasAttr = jQuery.extend(true, {}, Customizer.options.settings.canvas, defaultCanvasArgs);
      canvas = new fabric.Canvas(el[0], this.canvasAttr);
      this.canvas = canvas;
      this.reSetCanvasSize();
      this.loader.hide();
      return this;
    };

    CustomizerView.prototype.reSetCanvasSize = function() {
      var h, w;
      this.canvas.setWidth(600);
      this.canvas.setHeight(500);
      return;
      h = this.$el.find('.pc-canvas').height();
      w = this.$el.find('.pc-canvas').width();
      if (this.canvasAttr.height !== void 0 && this.canvasAttr.height > 0) {
        this.canvas.setHeight(this.canvasAttr.height);
      } else {
        this.canvas.setHeight(500);
      }
      if (this.canvasAttr.width !== void 0 && this.canvasAttr.width > 0) {
        return this.canvas.setWidth(this.canvasAttr.width);
      } else {
        return this.canvas.setWidth(w);
      }
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

    CustomizerView.prototype.objectSelected = function(evt) {

      /*view = evt.target.canvas.parentView
      view.setLayersActive(evt.target)
      console.log view
      @layersEditView = new EditLayerView
        parentView: view
        layer: evt.target
      
      $el = @layersEditView.render().$el
      view.$el.find('#pc-edit-layer').html($el)
       */
    };

    CustomizerView.prototype.beforeSelectionCleared = function(evt) {
      var view;
      if (evt === void 0 || evt.target === void 0 || evt.target === null) {

      } else {
        view = evt.target.canvas.parentView;
        if (view !== void 0) {
          if (this.layersEditView !== void 0) {
            this.layersEditView.destroy();
          }
          if (view.layersView !== void 0) {
            return view.layersView.unselect();
          }
        }
      }
    };

    CustomizerView.prototype.objectModified = function(evt) {
      var fontSize, old, view;
      view = evt.target.canvas.parentView;
      view.updateModel(evt.target.id);
      if (evt.target.object === 'text') {
        old = evt.target.scaleX;
        return fontSize = (evt.target.fontSize * old).toFixed(0);
      }
    };

    CustomizerView.prototype.objectScaling = function(evt) {};

    CustomizerView.prototype.updateBoundry = function(view) {
      var clipRect;
      if (view === void 0) {
        view = this;
      }
      clipRect = _.filter(view.canvas.getObjects(), function(obj) {
        return obj.clipFor !== void 0 && obj.clipFor !== null && obj.clipFor !== "";
      });
      if (clipRect.length > 0) {
        return _.each(clipRect, function(obj) {
          return view.setBoundry(obj);
        });
      }
    };

    CustomizerView.prototype.setBoundry = function(object, view) {
      var boundRect, boundingBox, params;
      params = object.toJSON(Customizer.options.jsonArgs);
      if (params.boundingEnable === false) {
        delete object.clipTo;
        return;
      }
      if (view !== void 0) {
        view = this;
      }
      if (params.boundingMode === 'clipping') {
        object.set('clipName', params.boundingElementName);
        return this.setCliping(object);
      } else {
        boundingBox = view.getBoundingBoxCoords(object);
        if (!boundingBox) {
          boundingBox = object.canvas;
        }
        return boundRect = object.getBoundingRect();
      }
    };

    CustomizerView.prototype.getBoundingBoxCoords = function(element) {
      var bbRect, i, name, object, objects, params;
      params = element.toJSON(Customizer.options.jsonArgs);
      if (params.boundingEnable) {
        if (typeof params.boundingElement === 'object') {
          return {
            left: params.boundingCoordsTop,
            top: params.boundingCoordsLeft,
            width: params.boundingCoordsWidth,
            height: params.boundingCoordsHeight
          };
        } else {
          objects = element.canvas.getObjects();
          i = 0;
          while (i < objects.length) {
            object = objects[i];
            name = object.title === void 0 ? object.id : object.title;
            if (params.boundingElementName === name) {
              bbRect = object.getBoundingRect();
              return {
                left: bbRect.left,
                top: bbRect.top,
                width: bbRect.width,
                height: bbRect.height
              };
              break;
            }
            ++i;
          }
        }
      }
      return false;
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


    /*refreshLayer: (obj)-> 
      @bringToppedElementsToFront();
      if(obj isnt undefined)
        obj.setCoords();
      @canvas.renderAll()
     */

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


    /*removeLayer: (obj) ->
      if typeof obj isnt 'object'
        obj = @canvas.getItemByMyID(obj);
    
      obj.remove()
      @randerLayers()
      @canvas.renderAll();
      @getModel(obj.id).destroy()
      @handleFormUpdate()
     */


    /*updateLayer: (obj, key, value) ->
      if typeof obj isnt 'object'
        obj = @canvas.getItemByMyID(obj);
    
      if(typeof key is 'object')
        jQuery.each(key, (k, v)->
          obj.set k, v
          obj.model.set Customizer.options.mappings.LAYER_DATA+"."+k, v
        )
      else
        obj.set key, value
        obj.model.set Customizer.options.mappings.LAYER_DATA+"."+key, value
    
      obj.setCoords();
      obj.model.trigger 'change'
      @canvas.renderAll();
     */

    CustomizerView.prototype.setDraggable = function() {

      /*$draggable = @$el.find(".draggable")
      $draggable.draggable(
        handle: ".handle" 
        containment: '.customizer-main'
      )
       */
    };


    /*addTextLayer: (e) ->
      text = jQuery(e.currentTarget).closest('.fb-text-field-wrapper').find('.pc-text')
      attrs = {text : text.val()}
      text = text.val "" 
      @createField Customizer.helpers.defaultLayersAttrs('text', 'text', attrs)
     */

    CustomizerView.prototype.addImageLayer = function(data) {
      var _addNew, _replace, _this, obj;
      _this = this;
      obj = _.where(this.canvas.getObjects(), {
        name: 'background'
      });
      if (obj[0] !== void 0) {
        obj = obj[0];
      }
      console.log(obj);
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
      var _this, image_data, reader;
      image_data = "";
      _this = this;
      if (files && files[0]) {
        reader = new FileReader();
        reader.onload = function(e) {
          var $ul, del, li, session_data, span;
          image_data = e.target.result;
          $ul = _this.$el.find('.uploaded-image-container ul');
          session_data = {};
          session_data.id = 0;
          session_data.url = image_data;
          session_data.path = data.path;
          del = jQuery('<span class="delete-contianer"><span class="mif-bin"></span></span>').on('click', function() {
            var data, li;
            li = jQuery(this).closest('li');
            data = jQuery(li).data('image-data');
            _this.updateSession(null);
            _this.customizer.trigger('remove-uploaded-image', _this, li);
            return li.remove();
          });
          span = jQuery("<span class='image-contianer'><img class='thumb' src='" + image_data + "'/></span>").on('click', function() {
            var data, li;
            li = jQuery(this).closest('li');
            data = jQuery(li).data('image-data');
            return _this.add_uploaded_image(data);
          });
          li = jQuery("<li data-type='dataImage'></li>").data('image-data', session_data).append(span).append(del);
          $ul.prepend(li);
          _this.customizer.trigger('image-upload', _this, data, li);
          return _this.updateSession(session_data);
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

this["Customizer"]["templates"]["edit/administration"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'pc-administration-wrapper pull-right\'>\r\n  \t<div class="pc-style-icon admin-settings toggle-div" data-target="#admin-setting-container" ><i class="fa fa-gear"></i></span></div>\r\n</div>\r\n<div id="admin-setting-container" class="tool-tip" style="display:none">\r\n\t<div class="tool-tip-container-inner">\r\n\t\t' +((__t = ( Customizer.templates['edit/settings']({rf : rf}) )) == null ? '' : __t) +'\r\n\t</div>\r\n</div>\r\n';}return __p};

this["Customizer"]["templates"]["edit/base"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p +=((__t = ( Customizer.templates['edit/header']() )) == null ? '' : __t) +'\n'; if(Customizer.fields[rf.get(Customizer.options.mappings.OBJECT)] !== undefined){ ;__p += '\n\t' +((__t = ( Customizer.fields[rf.get(Customizer.options.mappings.OBJECT)].edit({rf: rf}) )) == null ? '' : __t) +'\n'; } ;__p += '\n' +((__t = ( Customizer.templates['edit/footer']() )) == null ? '' : __t);}return __p};

this["Customizer"]["templates"]["edit/color-picker"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'pc-color-wrapper\'>\r\n\t'; if(rf.get(Customizer.options.mappings.LAYER_DATA+'.type') == 'text'){		color = rf.get(Customizer.options.mappings.LAYER_DATA+'.fill')	}else{		if(rf.get(Customizer.options.mappings.LAYER_DATA+'.filters') !== undefined && rf.get(Customizer.options.mappings.LAYER_DATA+'.filters').length > 0){			color = rf.get(Customizer.options.mappings.LAYER_DATA+'.filters')[0].color		}else{			color = ""		}	};__p += '\r\n  \t<div class="colorselector"><div class="background-color" style="background-color:' +((__t = ( color )) == null ? '' : __t) +'"></div></div>\r\n</div>';}return __p};

this["Customizer"]["templates"]["edit/footer"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

this["Customizer"]["templates"]["edit/header"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

this["Customizer"]["templates"]["edit/settings"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'pc-settings-wrapper\'>\r\n\r\n\t<ul class=\'fb-tabs\'>\r\n\t    <li class=\'active\'><a data-target=\'#element-bounding-panel\'>Bounding Box</a></li>\r\n\t    <li><a data-target=\'#modifications-panel\'>Modifications</a></li>\r\n\t    <li><a data-target=\'#other-settings-panel\'>Other</a></li>\r\n  \t</ul>\r\n\r\n  \t<div class=\'fb-tab-content\'>\r\n\t    <div id="element-bounding-panel" class="fb-tab-pane active">\r\n\r\n\t\t\t<div class="pc-input-container input-checkbox">\r\n\t\t\t\t<label class="input-label" for="enable_bounding">Enable bounding box</label>\r\n\t\t\t\t<div class="input-fields checkbox"> \r\n\t\t\t\t\t<input type="checkbox" class="toggle-div" data-target="#pc-define-bounding" id="enable_bounding" name="enable_bounding" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingEnable") == true ? 'checked' : '' )) == null ? '' : __t) +'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id="pc-define-bounding" class="pc-define-bounding"  ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingEnable") == true ? '' : 'style="display:none"' )) == null ? '' : __t) +'>\r\n\r\n\t\t\t\t<div class="pc-input-container input-checkbox">\r\n\t\t\t\t\t<label class="input-label" for="another_element_bounding">Use another element as bounding box</label>\r\n\t\t\t\t\t<div class="input-fields checkbox"> \r\n\t\t\t\t\t\t<input type="checkbox" class="toggle-div" data-target=".pc-define-bounding-name, .pc-define-bounding-coords" id="another_element_bounding" name="another_element_bounding" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".elementBoundingEnable") == true ? 'checked' : '' )) == null ? '' : __t) +'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<div class="pc-define-bounding-name" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".elementBoundingEnable") == true ? '' : 'style="display:none"' )) == null ? '' : __t) +'>\r\n\r\n\t\t\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t\t\t<label class="input-label">Define Bounding Box</label>\r\n\t\t\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t\t\t<input class="input_another_element_bounding_name" type="text" name="another_element_bounding_name" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingElementName") )) == null ? '' : __t) +'">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="description">Name when you have entered while adding<!-- or id of the layer (I.e. "c1", "c2", "c3", ...) -->.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="pc-define-bounding-coords" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".elementBoundingEnable") == true ? 'style="display:none"' : '' )) == null ? '' : __t) +'>\r\n\t\t\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t\t\t<label class="input-label">Define Bounding Box Coords</label>\r\n\t\t\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t\t\t<div class="pc-input-container pc-half-width">\r\n\t\t\t\t\t\t\t\t<label class="input-label">Left</label>\r\n\t\t\t\t\t\t\t\t<input class="bounding_coords" data-coord="Left"  type="text" name="bounding_coords_x" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingCoordsLeft") )) == null ? '' : __t) +'">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="pc-input-container pc-half-width">\r\n\t\t\t\t\t\t\t\t<label class="input-label">Top</label>\r\n\t\t\t\t\t\t\t\t<input class="bounding_coords" data-coord="Top" type="text" name="bounding_coords_y" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingCoordsTop") )) == null ? '' : __t) +'">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t\t\t<div class="pc-input-container pc-half-width">\r\n\t\t\t\t\t\t\t\t<label class="input-label">Width</label>\r\n\t\t\t\t\t\t\t\t<input class="bounding_coords" data-coord="Width" type="text" name="bounding_coords_width" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingCoordsWidth") )) == null ? '' : __t) +'">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="pc-input-container pc-half-width">\r\n\t\t\t\t\t\t\t\t<label class="input-label">Height</label>\r\n\t\t\t\t\t\t\t\t<input class="bounding_coords" data-coord="Height" type="text" name="bounding_coords_height" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingCoordsHeight") )) == null ? '' : __t) +'">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t\t<label class="input-label">Mode</label> \r\n\t\t\t\t\t<div class="input-fields select">\r\n\t\t\t\t\t\t<select class="input_bounding_box_mode" name="bounding_box_mode">\r\n\t\t\t\t\t\t\t<option value="inside" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingMode") == 'inside' ? 'selected' : '' )) == null ? '' : __t) +'>Inside</option>\r\n\t\t\t\t\t\t\t<option value="clipping" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".boundingMode") == 'clipping' ? 'selected' : '' )) == null ? '' : __t) +'>Clipping</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div id="modifications-panel" class="fb-tab-pane">\r\n\t\t\t<div class="checkbox-group">\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-draggable" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".isDraggable") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Draggable</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-rotatable" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".lockRotation") == false ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Rotatable</label>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-resizable" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".isResizable") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Resizable</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="pc-input-container pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-hide-layer" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".hideLayer") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Hide Layer</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-removable" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".removable") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Removable</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"><input class="checkbox-unlockable" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".unlockable") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Unlockable</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="pc-input-container  pc-half-width">\r\n\t\t\t\t\t<label class="input-label"> <input class="checkbox-stay-on-top" ' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".stayOnTop") == true ? 'checked' : '' )) == null ? '' : __t) +' type="checkbox"> Stay On Top</label>\r\n\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div id="other-settings-panel" class="fb-tab-pane">\r\n\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t<label class="input-label">Layer Name</label>\r\n\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t<input class="pc_layer_name" type="text" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".title") )) == null ? '' : __t) +'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t<label class="input-label">Allowed Colors</label>\r\n\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t<input class="pc_allowed_colors" type="text" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".allowedColors") )) == null ? '' : __t) +'">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="description">Add hexadecimal code of the color. For add multiple colors used comma(,).</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t<label class="input-label">Default color</label>\r\n\t\t\t\t<div class="input-fields text"> \r\n\t\t\t\t\t<input class="pc_default_color" type="text" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".defaultColor") )) == null ? '' : __t) +'">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="description">Add hexadecimal code of the color. I.e. "#000000, #FFF"</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\r\n\r\n\t\r\n\r\n\r\n\r\n  \t<!-- <div class="pc-style-icon bring-forward"></div> -->\r\n  \t \r\n</div>';}return __p};

this["Customizer"]["templates"]["edit/text-alignment"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'pc-alignment-wrapper left-border\'>\r\n  \t<div class="pc-style-icon align-top"><span class="mif-vertical-align-top"></span></div>\r\n  \t<div class="pc-style-icon align-right"><span class="mif-vertical-align-top rotate90"></span></div>\r\n  \t<div class="pc-style-icon align-bottom"><span class="mif-vertical-align-bottom"></span></div>\r\n  \t<div class="pc-style-icon align-left"><span class="mif-vertical-align-bottom rotate90"></span></div>\r\n\r\n  \t<div class="pc-style-icon vertical-align-center"><span class="mif-vertical-align-center"></span></div>\r\n  \t<div class="pc-style-icon hoizontal-align-center"><span class="mif-vertical-align-center rotate90"></span></div>\r\n</div>';}return __p};

this["Customizer"]["templates"]["edit/text-style"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'pc-style-wrapper left-border\'>\r\n\t'; if(rf.get(Customizer.options.mappings.LAYER_DATA+".type") == 'text'){ ;__p += '\r\n  \t<div class="pc-style-icon font-familty toggle-div" data-target="#font-family"><i class="fa fa-font" aria-hidden="true"></i></div>\r\n  \t<div class="pc-style-icon text-bold"><span class="mif-bold"></span></div>\r\n  \t<div class="pc-style-icon text-italic"><span class="mif-italic"></span></div>\r\n  \t<div class="pc-style-icon text-underline"><span class="mif-underline"></span></div>\r\n  \t'; } ;__p += '\r\n  \t<div class="pc-style-icon rotate-left"><i class="fa fa-rotate-left"></i></div>\r\n  \t<div class="pc-style-icon rotate-right"><i class="fa fa-rotate-right"></i></div>  \r\n</div>\r\n\r\n'; fonts = []jQuery.each(Customizer.fonts, function(index,font){	if(rf.get(Customizer.options.mappings.LAYER_DATA+".fontFamily") == font.name){ 		selected = "selected='selected'";	}else{		selected = "";	}	fonts.push("<option value='"+font.name+"' "+selected+" style='font-family:\""+font.name+"\"'>"+font.displayName+"</option>");}); ;__p += '\r\n<div id="font-family" class="tool-tip" style="display: none;">\r\n\t<div class="tool-tip-container-inner">\r\n\t\t<div class="tool-tip-title">Font</div>\r\n\t\t<div class="tool-tip-wraper">\r\n\t\t\t<div class="font-familty-wraper">\r\n\t\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t\t<label class="input-label">Select Font Familty</label>\r\n\t\t\t\t\t<div class="input-fields select">\r\n\t\t\t\t\t\t<select class="text-font-family">\r\n\t\t\t\t\t\t\t' +((__t = ( fonts.join("") )) == null ? '' : __t) +'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="pc-input-container pc-full-width">\r\n\t\t\t\t\t<label class="input-label">Font Size</label>\r\n\t\t\t\t\t<div class="input-fields select">\r\n\t\t\t\t\t\t<input type="number" class="text-font-size" value="' +((__t = ( rf.get(Customizer.options.mappings.LAYER_DATA+".fontSize") )) == null ? '' : __t) +'" class="text-font-family">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';}return __p};

this["Customizer"]["templates"]["page"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '\n<div class=\'fb-left\'>\n\t<div class=\'pc-assets\'>\n\t  <ul class=\'fb-tabs\'>\n\t  \t'; if(Customizer.options.settings.allowUploadImage){ ;__p += '\n\t    <li class=\'active\'><a data-target=\'#pc-upload-image-panel\'><span class="fa fa fa-upload"></span> Background </a></li>\n\t    '; } ;__p += '\n\t    <li><a data-target=\'#pc-backgrounds-panel\'><i class="fa fa-picture-o"></i>  Images</a></li>\n\t    '; if(Customizer.options.settings.allowAddText){ ;__p += '\n\t    <!-- <li><a data-target=\'#pc-text-panel\'><i class="fa fa-file-text"></i> Text</a></li>\n\t    '; } ;__p += ' -->\n\t    \n\t  </ul>\n\n\t  <div class=\'fb-tab-content\'>\n\t  \t'; if(Customizer.options.settings.allowUploadImage){ ;__p += '\n\t    \t' +((__t = ( Customizer.templates['partials/panels/upload-image']() )) == null ? '' : __t) +'\n\t    '; } ;__p += '\n\n\t    ' +((__t = ( Customizer.templates['partials/panels/images']() )) == null ? '' : __t) +'\n\t\t\n\t\t<!-- '; if(Customizer.options.settings.allowAddText){ ;__p += '\n\t    \t' +((__t = ( Customizer.templates['partials/panels/text']() )) == null ? '' : __t) +'\n\t    '; } ;__p += ' -->\n\t    \n\t  </div>\n\t</div>\n</div>\n<div class=\'fb-right\'>\n\t' +((__t = ( Customizer.templates['partials/canvas']() )) == null ? '' : __t) +'\n\n\t' +((__t = ( Customizer.templates['partials/edit']() )) == null ? '' : __t) +'\n</div>\n<!-- ' +((__t = ( Customizer.templates['partials/layers']() )) == null ? '' : __t) +' -->\n<div class=\'fb-clear\'></div>\n\n<div class=\'fb-save-wrapper\'>\n  <button class=\'js-save-data ' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'\'></button>\n</div>\n<div class="pc-loader-container">\n\t<div class="pc-loading-inner">\n\t\t<div class="pc-loading-icon"><!-- <span class="mif-spinner2 mif-ani-spin"></span> --><span class="mif-spinner3 mif-ani-spin"></span></div>\n\t\t<div class="pc-loading-text">Loading...</div>\n\t</div>\n</div>';}return __p};

this["Customizer"]["templates"]["partials/add_field"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'fb-tab-pane active\' id=\'addField\'>\n  <div class=\'fb-add-field-types\'>\n    <div class=\'section\'>\n      '; _.each(_.sortBy(Customizer.inputFields, 'order'), function(f){ ;__p += '\n        <a data-field-type="' +((__t = ( f.field_type )) == null ? '' : __t) +'" class="' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'">\n          ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n        </a>\n      '; }); ;__p += '\n    </div>\n\n    <div class=\'section\'>\n      '; _.each(_.sortBy(Customizer.nonInputFields, 'order'), function(f){ ;__p += '\n        <a data-field-type="' +((__t = ( f.field_type )) == null ? '' : __t) +'" class="' +((__t = ( Customizer.options.BUTTON_CLASS )) == null ? '' : __t) +'">\n          ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n        </a>\n      '; }); ;__p += '\n    </div>\n  </div>\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/canvas"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="pc-canvas-waraper">\n<div class="pc-title canvas-actions">\n\t<div class="pc-icon-inline download" data-title="Download PDF file"><span class="fa fa-file-o"></span></div>\n\t<div class="pc-icon-inline preview" data-title="Preview"><span class="fa fa-eye"></span></div>\n\t<div class="pc-icon-inline-seprater"></div>\n\t<div class="pc-icon-inline zoom-in" data-title="Zoom-in"><span class="fa fa-search-plus "></span></div>\n\t<div class="pc-icon-inline zoom-out" data-title="Zoom-out"><span class="fa fa-search-minus"></span></div>\n\t<div class="pc-icon-inline zoom-reset" data-title="Reset zoom"><span class="fa fa-search"></span></div>\n\t<div class="pc-icon-inline-seprater" ></div>\n\t<div class="pc-icon-inline fullscreen pull-right" data-title="Fullscreen"><span class="fa fa-arrows-alt"></span></div>\n</div>\n<div class=\'pc-canvas\'></div>\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/edit"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="pc-edit-layer" class=\'draggable pc-edit-layer\'></div>\n';}return __p};

this["Customizer"]["templates"]["partials/layers"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="pc-layers" class=\'draggable pc-layersbar\'>\n\t\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/panels/images"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'fb-tab-pane \' id=\'pc-backgrounds-panel\'>\n  <div class=\'fb-add-field-types\'>\n    <div class=\'section\'>\n      \t'; _.each(Customizer.images, function(category){ ;__p += '\n      \t\t'; _.each(_.sortBy(category, 'order'), function(f){ ;__p += '\n        \t\t<a data-field-id="' +((__t = ( f.id )) == null ? '' : __t) +'" data-field-type="' +((__t = ( f.type )) == null ? '' : __t) +'" class="' +((__t = ( f.type )) == null ? '' : __t) +'-image assets">\n\t\t\t\t\t'; if(f.addButton === undefined || f.addButton === null || f.addButton === ""){ ;__p += '\n\t\t\t            '; if(f.thumb === undefined || f.thumb === null || f.thumb === ""){ ;__p += '\n\t\t\t              \t<img src="' +((__t = ( f.full )) == null ? '' : __t) +'">\n\t\t\t            '; }else{ ;__p += '\n\t\t\t              \t<img src="' +((__t = ( f.thumb )) == null ? '' : __t) +'">\n\t\t\t            '; } ;__p += '\n\t\t\t        '; }else{ ;__p += '\n\t\t\t            ' +((__t = ( f.addButton )) == null ? '' : __t) +'\n\t\t\t        '; } ;__p += '\n\t\t\t    </a>\n\n        \t'; }); ;__p += '\n      \t'; }); ;__p += '\n    </div>\n  </div>\n</div>\n';}return __p};

this["Customizer"]["templates"]["partials/panels/text"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'fb-tab-pane\' id=\'pc-text-panel\'>\n  <div class=\'fb-text-field-wrapper\'>\n  \t<div class="input-field-container">\n\t  \t<label>Text</label>\n\t  \t<textarea class="pc-text" placeholder="Please enter text"></textarea>\n\t</div>\n\t<div class="input-field-container">\n\t\t<input type="button" class="add-text fb-button pull-right" value="Add">\n\t</div>\n  </div>\n</div>';}return __p};

this["Customizer"]["templates"]["partials/panels/upload-image"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'fb-tab-pane active\' id=\'pc-upload-image-panel\'>\n  <div class=\'fb-upload-image-field-wrapper\'>\n  \t<div class="input-field-container">\n\t  \t<label>Background Image</label>\n\t  \t<div class="pd-upload-zone">\n\t  \t\t<div class="inner-upload-zone">\n\t\t         <span class="fa fa fa-upload"></span>\n\t\t\t\t <span data-defaulttext="Click or drop images here">Click or drop images here</span>\n\t        </div>\n\t  \t\t<input type="file" class="pc-upload-image">\n\t  \t</div>\n\t</div>\n\t<div class="uploaded-image-container">\n\t\t<ul></ul>\n\t</div>\n  </div>\n</div>';}return __p};

this["Customizer"]["templates"]["partials/text-fonts-css"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<style type="text/css">\r\n    ';     jQuery.each(Customizer.fonts, function(index,font){        var font_str = [];        jQuery.each(font.src, function(type, path){            switch(type){                case 'eot':                 format = "format('embedded-opentype')";                 url = "#iefix";                 break;                case 'woff':                 format = "format('woff')";                 url = "";                 break;                case 'ttf':                 format = "format('truetype')";                 url = "";                 break;                case 'svg':                 format = "format('svg')";                 url = "#"+font.name;                 break;            }            font_str.push("url('"+path+"') "+format);        });         ;__p += '\r\n        @font-face{\r\n            font-family:\'' +((__t = ( font.name )) == null ? '' : __t) +'\';    \r\n            ' +((__t = ( (font_str.length > 0) ? 'src:'+font_str.join(', ')+";" : "" )) == null ? '' : __t) +'\r\n            font-weight:normal;\r\n            font-style:normal;\r\n        }\r\n    '; }); ;__p += '\r\n</style>\r\n</style>';}return __p};

this["Customizer"]["templates"]["view/edit"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

this["Customizer"]["templates"]["view/layers"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="pc-container">\n\t<div class=\'pc-title handle\'><span class="mif-stack"></span> Layers</div>\n  \t<div class=\'pc-body\'>\n  \t\t<ul class="pc-layers-contianer">\n  \t\t\t'; if(layers.length > 0){	  			_.each(_.sortBy(layers, 'order').reverse(), function(_layer){	  				;__p += '\n\t  \t\t\t'; layer = _layer.toJSON(Customizer.options.jsonArgs) ;__p += '\n\t\t\t\t'; active = _layer.canvas.getActiveObject() ;__p += '\n\t\t  \t\t<li \n\t\t  \t\t\tstyle="' +((__t = ( (Customizer.options.settings.administration == false && _layer.hideLayer) || (_layer.displayInLayerBar !== undefined && _layer.displayInLayerBar == false) ? 'display:none' : "" )) == null ? '' : __t) +'" \n\t\t  \t\t\tclass="layers ' +((__t = ( (active !== undefined && active !== null && active.id == _layer.id) ? 'active' : '' )) == null ? '' : __t) +' ' +((__t = ( (Customizer.options.settings.administration == false && (_layer.hideLayer == true || _layer.unlockable == false || _layer.removable == false)) ? 'unsortable' : '' )) == null ? '' : __t) +'" \n\t\t  \t\t\tdata-id="' +((__t = ( _layer.id )) == null ? '' : __t) +'">\n\t\t\t\t    <span class="pc-image-contianer">\n\t\t\t\t    \t'; if(layer.type == 'text'){ ;__p += '\n\t\t\t\t    \t\t<i class="fa fa-text-width"></i>\n\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t    \t\t<img width=50  src="' +((__t = ( layer.src )) == null ? '' : __t) +'">\n\t\t\t\t    \t'; } ;__p += '\n\t\t\t\t    </span>\n\t\t\t\t    <span class="pc-layer-title">\n\t\t\t\t    \t'; if(_layer.title !== undefined && _layer.title !== null ){ ;__p += '\n\t\t\t\t    \t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( _layer.title )) == null ? '' : __t) +'\n\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t\t    \t'; if(layer.type == 'text'){ ;__p += '\n\t\t\t\t\t    \t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( layer.text.substring(0,15) )) == null ? '' : __t) +'\n\t\t\t\t\t    \t'; }else{ ;__p += '\n\t\t\t\t\t\t\t\t' +((__t = ( _layer.id )) == null ? '' : __t) +' - ' +((__t = ( layer.type )) == null ? '' : __t) +'\n\t\t\t\t\t    \t'; } ;__p += '\n\t\t\t\t\t\t'; };__p += '\n\t\t\t\t    </span>\n\t\t\t\t\t<span class="pc-layers-action">\n\t\t\t\t\t\t'; if(Customizer.options.settings.administration == true || layer.removable == true){;__p += '\n\t\t\t  \t\t\t\t<a href="javascript:" class="pc-layers-delete"><i class="fa fa-trash-o fa-1"> </i></a>\n\t\t\t  \t\t\t'; } ;__p += '\n\t\t\t  \t\t\t'; if(Customizer.options.settings.administration == true || layer.unlockable == true){;__p += '\n\t\t\t\t\t\t\t<a href="javascript:" class="pc-layers-lock-unlock"><i class="fa ' +((__t = ( _layer.locked == true ? 'fa-lock' : 'fa-unlock-alt' )) == null ? '' : __t) +'"></i></a>\n\t\t\t\t\t\t'; } ;__p += '\n\t\t  \t\t\t</span>\n\t\t  \t\t</li>\n\t\t  \t\t'; }); ;__p += '\n\n\t\t  \t'; }else{ ;__p += '\n\t\t\t\t<li class="layers no-found">No layer found.</li>\n\t\t  \t'; } ;__p += '\n\t  \t</ul>\n  \t</div>\n</div>';}return __p};

this["Customizer"]["templates"]["view/popup"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="pc-modal">\n\t<div class="model-inner">\n\t\t<div class="modal-heder pc-title">\n\t\t\t'; if(modal.title){ ;__p += '\n\t\t\t<div class="pc-title-text">' +((__t = ( modal.title )) == null ? '' : __t) +'</div>\n\t\t\t'; } ;__p += '\n\t\t\t<div class="pc-model-close"><a href="javascript:" class="close"><span class="mif-cross"></span></a></div>\n\t\t</div>\n\t\t<div class="pc-model-body">\n\t\t\t' +((__t = ( modal.body )) == null ? '' : __t) +'\n\t\t</div>\n\t</div>\n</div>';}return __p};