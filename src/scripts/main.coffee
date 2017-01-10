fabric.Canvas::getItemByMyID = (myID) ->
  object = null
  objects = @getObjects()
  i = 0
  len = @size()
  while i < len
    if objects[i].id and objects[i].id is myID
      object = objects[i]
      break
    i++
  object



fabric.Canvas::getItemByName = (title) ->
  object = null
  objects = @getObjects()
  i = 0
  len = @size()
  while i < len
    if objects[i].title and objects[i].title is title
      object = objects[i]
      break
    i++
  object




fabric.Object::setOriginToCenter = ->
  @_originalOriginX = @originX
  @_originalOriginY = @originY
  center = @getCenterPoint()
  @set
    originX: 'center'
    originY: 'center'
    left: center.x
    top: center.y

fabric.Object::setCenterToOrigin = ->
  originPoint = @translateToOriginPoint(@getCenterPoint(), @_originalOriginX, @_originalOriginY)
  @set
    originX: @_originalOriginX
    originY: @_originalOriginY
    left: originPoint.x
    top: originPoint.y


degToRad = (degrees) ->
  return degrees * (Math.PI / 180);




clipByName = (ctx) ->
  @setCoords()
  clipRect = _.where(@canvas.getObjects(), { clipFor: @clipName })

  if clipRect.length > 0
    clipRect = clipRect[0]
  else
    return;
  scaleXTo1 = 1 / @scaleX
  scaleYTo1 = 1 / @scaleY

  ctx.save()
  oldStrokeWidth = clipRect.strokeWidth
  clipRect.strokeWidth = 0
  ctxLeft = -(@width / 2) + clipRect.strokeWidth
  ctxTop = -(@height / 2) + clipRect.strokeWidth
  ctxWidth = clipRect.width - (clipRect.strokeWidth)
  ctxHeight = clipRect.height - (clipRect.strokeWidth)
  ctx.translate ctxLeft, ctxTop

  clipRect.strokeWidth = oldStrokeWidth

  ctx.rotate degToRad(@angle * -1)
  ctx.scale scaleXTo1, scaleYTo1
  ctx.beginPath()
  ctx.rect clipRect.left - (@oCoords.tl.x), clipRect.top - (@oCoords.tl.y), (clipRect.width * clipRect.scaleX), (clipRect.height * clipRect.scaleY)

  ctx.closePath()
  ctx.restore()
  return


fabric.Object::set
  transparentCorners: false
  borderColor: '#16A085'
  cornerColor: '#16A085'
  cornerSize: 7
  



class CustomizerProductModel extends Backbone.DeepModel
  sync: -> 
    # noop
    # noop

  defaults: ()->
    # { order: CustomizerCollection.nextOrder() }



class CustomizerProductCollection extends Backbone.Collection
  nextOrder : 0
  initialize: (options)-> 
    {@parentView} = options
    @on 'add', @copyCid

  model: CustomizerProductModel

  comparator: (model) ->
    model.get('order') 
  _order_by: 'order'

  copyCid: (model) ->
    model.cid = model.attributes.cid
   



class CustomizerModel extends Backbone.DeepModel
  sync: -> 
    # noop
    # noop

  defaults: ()->
    # { order: CustomizerCollection.nextOrder() }

  indexInDOM: ->
    $wrapper = jQuery(".pc-layers-contianer.layers").filter ( (_, el) => jQuery(el).data('id') is @cid  )
    jQuery(".pc-layers-contianer.layers").index $wrapper


class CustomizerCollection extends Backbone.Collection

  nextOrder : 0
  initialize: (options)-> 
    {@parentView} = options
    @on 'add', @copyCidToModel
    @on 'reset', @resetModel
    @sort()
    @setNextOrder()

  model: CustomizerModel
  
  resetModel :(collection)  ->
    _this = @
    @sort()
    @setNextOrder()

  comparator: (model) ->
    model.get(Customizer.options.mappings.LAYER_DATA+'.order') 
  
  setNextOrder : ->
    if @length is 0
      @nextOrder = 0
      return
    if(@last() isnt undefined)
      last_order = @last().get(Customizer.options.mappings.LAYER_DATA+'.order') 
      last_order = if last_order >= 0 then last_order else 0
      @nextOrder = parseInt(last_order) + 1
      return

  _order_by: 'order'

  copyCidToModel: (model) ->
    model.attributes.cid = model.cid
    model.set("order",@nextOrder);
    model.set(Customizer.options.mappings.LAYER_DATA+'.order', @nextOrder)
    model.set(Customizer.options.mappings.LAYER_DATA+'.zIndex', @nextOrder)
    model.trigger 'change'

    @parentView.canvas.renderAll();    

    @setNextOrder()
    

  copyCid: (model) ->
    model.cid = model.attributes.cid



class ModelView extends Backbone.View
  className : 'model-warper'
  events:
    'click .close': 'closeModel'
    'click .pc-prompt-cancel': 'closeModel'
    'click .pc-prompt-ok': 'promptOk'

    'click .pc-confirm-yes': 'confirmYes'
    'click .pc-confirm-no': 'confirmNo'
    
 

  render:(modal) ->
    $el = Customizer.templates["view/popup"]({modal : modal})
    @$el.html($el).hide(0)
    jQuery('body').append(@$el)
    @showModel()
    return $el

  alert : (message, title, callback)->
    @render(
      body : "<p class='pc-model-alert-body'>#{message}</p>"
      title : title
      )
    @callback = callback
    @

  confirm : (message, title, callback)->
    @render(
      body : "<div class='pc-model-confirm-body'><p>#{message}</p><div class='pc-model-button-container fb-button-group'><button class='pc-confirm-yes fb-button'>Yes</button><button class='pc-confirm-no fb-button fb-button-default'>No</button></div></div>"
      title : title
      )
    @callback = callback
    @

  prompt : (message, title, callback)->
    @render(
      body : "<div class='input-field-container'><label class='pc-model-alert-body'>#{message}</label><input class='pc-input-field promt-input'></div><div class='pc-prompt-error-message' style='display:none'></div> <div class='pc-model-button-container fb-button-group'><button class='pc-prompt-ok fb-button'>OK</button><button class='pc-prompt-cancel fb-button fb-button-default'>Cancel</button></div>"
      title : title
      )
    @callback = callback
    @

  promptOk : ->
    val = @$el.find('.promt-input').val()
    if(val isnt undefined and val isnt null and val isnt '')
      @callback val
      @closeModel()
    else
      @$el.find('.pc-prompt-error-message').html("Plesae enter value.").show(500)

  confirmYes : ->
    @callback true
    @closeModel()

  confirmNo : ->
    @callback false
    @closeModel()
     
  closeModel : ->
    _this = @
    @$el.find('.pc-prompt-error-message').html("").hide(500)
    @$el.fadeOut(500, ->_this.$el.remove())

  showModel :->
    @$el.fadeIn(500)


class ChnageProductView extends Backbone.View
  className : 'pc-change-product-wraper'
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

    $el = Customizer.templates["view/product-view"]({views : layers})
    @$el.html($el)
    @setSortable()
    return @



class ViewLayerView extends Backbone.View
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



class EditLayerView extends Backbone.View
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
      ###if jQuery('.input_another_element_bounding_name').is(':checked')
        @update_layer_data(obj,
          'boundingEnable': true
          #'elementBoundingEnable': true
          #'boundingElementName': parent.find('[name="another_element_bounding_name"]').val()
          'boundingMode': parent.find('[name="bounding_box_mode"]').val()
          )
      else
        @update_layer_data(obj,
          'boundingEnable': true
          #'elementBoundingEnable': false
          #'boundingCoordsLeft': parent.find('[name="bounding_coords_left"]').val()
          #'boundingCoordsTop': parent.find('[name="bounding_coords_top"]').val()
          #'boundingCoordsWidth': parent.find('[name="bounding_coords_width"]').val()
          #'boundingCoordsHeight': parent.find('[name="bounding_coords_height"]').val()
          #'boundingMode': parent.find('[name="bounding_box_mode"]').val()
        )###
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

    @$el.find('.colorselector').spectrum colorPickerArgs

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

class CanvasView

  initialize: (options) ->
    @parentView = options

  resetOrders : ()->
    layers = @parentView.canvas.getObjects()
    layers.sort (a,b) ->
      return if a.model.get('order') >= b.model.get('order') then 1 else -1

    jQuery.each(layers, (index,layer)-> 
      layer.moveTo(index) 
    )
    @parentView.canvas.renderAll()

  update_layer: (obj, options)->
    order = options.model.get(Customizer.options.mappings.LAYER_DATA+'.order')
    
    if order isnt undefined
      obj.moveTo(order);
      obj.set 'order', order


    @parentView.updateModel obj.model.get('cid')

    @parentView.setBoundry(obj, @parentView)
    @parentView.updateBoundry();
    @parentView.randerLayers()

    @parentView.refreshLayer(obj)
    @resetOrders()


  add: (obj)-> 
    if obj.type is undefined
      obj.type = obj.template.options.type 
    @[obj.type](obj)


  text : (obj) ->
    template = obj.template
    options = template.options

    defaultOptions = if Customizer.options.settings.canvas.object.text isnt undefined and typeof Customizer.options.settings.canvas.object.text is 'object' then Customizer.options.settings.canvas.object.text else {}

    options = jQuery.extend(true, {}, @getDefault(defaultOptions, obj), options);
    delete options.clipTo
    if options.template.text
      text = options.template.text
    else
      text = ""

    text = new fabric.IText(text, options);
    obj.canvas.add(text)
    @update_layer(text, options);
    

  rect: (obj)->
    template = obj.template
    options = template.options
    
    defaultOptions = if Customizer.options.settings.canvas.object.rect isnt undefined and typeof Customizer.options.settings.canvas.object.rect is 'object' then Customizer.options.settings.canvas.object.rect else {}

    options = jQuery.extend(true, {}, @getDefault(defaultOptions, obj), options);
    delete options.clipTo
    rect = new fabric.Rect(options)
    obj.canvas.add(rect)
    #.setActiveObject(rect)
    @update_layer(rect, options);

  image: (obj) ->
    _this = @
    template = obj.template
    options = template.options

    if template.full isnt undefined
      url = template.full
    else if template.imageDate isnt undefined
      url = template.imageDate

    img = fabric.Image.fromURL template.full, (image)->

      defaultOptions = if Customizer.options.settings.canvas.object.image isnt undefined and typeof Customizer.options.settings.canvas.object.image is 'object' then Customizer.options.settings.canvas.object.image else {}

      defaultOptions = jQuery.extend(true,{}, defaultOptions, {
        width : image.width
        height : image.height
      });

      options = jQuery.extend(true,{}, _this.getDefault(defaultOptions, obj), options);
      delete options.clipTo
      filters = {}
      if(options.filters isnt undefined and options.filters.length > 0)
        filters = options.filters
        delete options.filters

      image.set(options)
      obj.canvas.add(image)
      #.setActiveObject(image)

      if(filters.length > 0)
        _this.setFilterValue(image, filters)

      _this.update_layer(image, options);
      obj.canvas.renderAll()


  setFilterValue : (obj, filters) ->
    if(filters)
      jQuery.each(filters, (index, filter) ->
        if obj.filters[index]
          obj.filters[index] = filter;
        else
          obj.filters.push(
              new fabric.Image.filters.Tint(filter)
            )
      )
      obj.applyFilters(obj.canvas.renderAll.bind(obj.canvas));

      obj.model.set Customizer.options.mappings.LAYER_DATA+".filters", obj.filters
      obj.model.trigger 'change'

  getDefault : (options, obj)->
    defaultOptions = {
        id: obj.model.cid
        model: obj.model
        template: obj.template
        locked : false
        removable : true
        hideLayer : false
        displayInLayerBar : true
        boundingEnable : false
        boundingElementName : ""
        elementBoundingEnable : false
        boundingCoordsLeft : ""
        boundingCoordsTop : ""
        boundingCoordsWidth : ""
        boundingCoordsHeight : ""
        boundingMode : "clipping"
        stayOnTop : false
        unlockable : true
        isResizable : true
        isDraggable : true
        lockRotation : false
      }

    if Customizer.options.settings.boundingBoxCoords isnt undefined and Customizer.options.settings.boundingBoxCoords isnt null
      defaultOptions.boundingEnable = true
      if(typeof Customizer.options.settings.boundingBoxCoords is 'object')
        defaultOptions.elementBoundingEnable = true
        defaultOptions.boundingCoordsLeft = Customizer.options.settings.boundingBoxCoords.x
        defaultOptions.boundingCoordsTop = Customizer.options.settings.boundingBoxCoords.y
        defaultOptions.boundingCoordsWidth = Customizer.options.settings.boundingBoxCoords.width
        defaultOptions.boundingCoordsHeight = Customizer.options.settings.boundingBoxCoords.height
      else
        defaultOptions.elementBoundingEnable = false
        defaultOptions.boundingElementName = Customizer.options.settings.boundingBoxCoords

    if Customizer.options.settings.administration is true
      defaultOptions.administration = true
    else
      defaultOptions.administration = false
      


    jQuery.extend(true,{}, defaultOptions, options);
  


class CustomizerView extends Backbone.View
  SUBVIEWS: []
  canvasView : new CanvasView()
  events:
    'click .js-save-data': 'saveForm'
    'click .fb-tabs a': 'showTab'
    'click .fb-add-field-types a': 'addField'
    'click #pc-text-panel .add-text': 'addTextLayer'
    'change #pc-upload-image-panel .pc-upload-image': 'uploadImages'
    'click .canvas-actions .fullscreen': 'fullscreen'
    'click .canvas-actions .download': 'savePDF'
    'click .canvas-actions .zoom-in': (e)-> @canvas.setZoom(@canvas.getZoom() * 1.1 )
    'click .canvas-actions .zoom-out': (e)-> @canvas.setZoom(@canvas.getZoom() / 1.1 )
    'click .canvas-actions .zoom-reset': (e)-> @canvas.setZoom(1)
    'click .canvas-actions .preview': 'saveImage'
  
  initialize: (options) ->
    {selector, @customizer, @bootstrapData, settings, @productViewData} = options
    if selector?
      @setElement jQuery(selector) 

    defaultSettings =
      administration : true
      allowAddText : true
      allowUploadImage : true
      replaceImage : false,  # false, true, 'confirm'
      canvas :
        object :
          text  : {}
          rect  : {}
          images: {}

      boundingBoxCoords: null


    @canvasView.initialize(@)


    @settings = jQuery.extend(true, {},defaultSettings, settings);

    if @settings?
       Customizer.options.settings = @settings

    if @settings.images isnt undefined
      if typeof @settings.images is 'object' or typeof @settings.images is 'array'
        jQuery.each(@settings.images, (index, v)->
          if v isnt undefined
            if typeof v is 'object' or typeof v is 'array'
                jQuery.each(v, (i, value)->
                  value.type  = if value.type is undefined then index else value.type
                  value.id    = if value.id is undefined then i else value.id
                  Customizer.registerImages index, value
                )
        )
    if @settings.fonts isnt undefined
      jQuery.each(@settings.fonts, (index, v)->
        Customizer.registerFonts(v)
      )

    if @settings.fonts.length > 0 and Customizer.options.settings.canvas.object.text.fontFamily is undefined
      Customizer.options.settings.canvas.object.text.fontFamily = @settings.fonts[0]

    Customizer.registerText()
    Customizer.registerImage()


    @collection = new CustomizerCollection({parentView : @})
    @collection.bind 'add', @addOne, @
    @collection.bind 'reset', @reset, @
    @collection.bind 'change', @handleFormUpdate, @


    @productViewCollection = new CustomizerProductCollection({parentView : @})
    @productViewCollection.bind 'add', @addOneProductView, @
    @productViewCollection.bind 'reset', @resetProductView, @

    @render()
    @reSizeWindow()
    @renderFontsCSS()
    
    @bindSaveEvent()


    @canvas.parentView = @


    @listenTo @canvas, "mouse:up", (o) -> @isDown = false;
    @listenTo @canvas, "mouse:down", (o) -> @isDown = true;
    @listenTo @canvas, "object:selected", @objectSelected
    @listenTo @canvas, "object:modified", @objectModified
    @listenTo @canvas, "object:scaling", @objectScaling
    @listenTo @canvas, "before:selection:cleared", @beforeSelectionCleared
    @listenTo @canvas, "after:render", (evt)-> @calcOffset()
    
    jQuery(window).on 'resize', @reSizeWindow.bind(@)

    if @bootstrapData.views?
      @productViewCollection.reset(@productViewData.views)
    else if @bootstrapData.fields?
      @collection.reset(@bootstrapData.fields)

    console.log @collection


  addOneProductView :()->
    #@addOne
  resetProductView :()->
    if(@productViewCollection.models.length > 0){
      activeView = @productViewCollection.models[0]
      @reset()
    }

  
  reSizeWindow : ()->
    originalWidth = 600;
    originalHeight = 480;
    width = @$el.find('.pc-canvas-waraper .pc-canvas').innerWidth();

    widthRatio = width / originalWidth ;
   
    width = originalWidth * widthRatio;
    height = originalHeight * widthRatio;

    @canvas.wrapperEl.style.transform = "scale(#{widthRatio})";
    @canvas.wrapperEl.style.transformOrigin = "0 0";

    @canvas.wrapperEl.parentElement.style.height = height+"px";



  fullscreen : (ev)->
    if(jQuery(ev.currentTarget).prop("tagName") is 'span')
      $el = jQuery(ev.currentTarget)
    else
      $el = jQuery(ev.currentTarget).find('span')

    $el.toggleClass('mif-shrink mif-enlarge')
    @$el.toggleClass('fullscreen')


    @reSizeWindow()
   
    ###if @$el.hasClass('fullscreen')
      @oldCanvasHeight = @canvas.getHeight()
      @oldCanvasWidth = @canvas.getWidth()
      
      offset = @$el.find('.canvas-actions').outerHeight(true)
      @canvas.setHeight(@$el.height() - offset - 8)
      
      

      @canvas.setWidth(@$el.find('.pc-canvas').width())
    else
      @canvas.setHeight(@oldCanvasHeight)
      @canvas.setWidth(@oldCanvasWidth)###

  realWidth : (obj)->
      clone = obj.clone();
      clone.css("visibility","hidden");
      jQuery('body').append(clone);
      width = clone.outerWidth();
      clone.remove();
      return width;
  



  render: ->
    @$el.html Customizer.templates['page']()

    @loader = @$el.find('.pc-loader-container')
    @loader.show()
    #@hideShowNoResponseFields()
    new subview({parentView: @}).render() for subview in @SUBVIEWS

    el = jQuery('<canvas/>')
    @$el.find('.pc-canvas').html(el)
    
    defaultCanvasArgs = 
      selection: false
      hoverCursor: 'pointer'
      controlsAboveOverlay: true
      centeredScaling: false
      preserveObjectStacking: true

    if Customizer.options.settings.canvas is undefined
      Customizer.options.settings.canvas = {}

    @canvasAttr = jQuery.extend(true, {}, Customizer.options.settings.canvas, defaultCanvasArgs)

    canvas = new fabric.Canvas(el[0],
      @canvasAttr
    )
    

    @canvas = canvas
    @reSetCanvasSize();
    @randerLayers()
    @randerUploadedImages()

    @loader.hide()
    return @

  reSetCanvasSize : ()->
    @canvas.setWidth(600)
    @canvas.setHeight(500)
    return;
    h = @$el.find('.pc-canvas').height()
    w = @$el.find('.pc-canvas').width()

    if(@canvasAttr.height isnt undefined and @canvasAttr.height > 0)
      @canvas.setHeight(@canvasAttr.height)
    else
      @canvas.setHeight(500)

    if(@canvasAttr.width isnt undefined and @canvasAttr.width > 0)    
      @canvas.setWidth(@canvasAttr.width)
    else  
      @canvas.setWidth(w)

  randerLayers : (canvas)->
    layers = @canvas.getObjects()

    @layersView = new ViewLayerView
      parentView: @
      canvas: @canvas

    $el = @layersView.render().$el
    @$el.find('#pc-layers').html($el) 

  renderFontsCSS : ()->
    @settings.fonts
    $el = Customizer.templates["partials/text-fonts-css"]()
    @$el.prepend($el) 


  saveImage : ()->
    window.open(@exportCanvas().toDataURL(), "Preview", "width=#{@canvas.getWidth()}, height=#{@canvas.getWidth()}")

  getImageData : ()->
    @exportCanvas().toDataURL()

  exportCanvas : ()->
    @canvas

  savePDF : ()->
    try 
      width = @canvas.getWidth();
      height = @canvas.getHeight();

      $oldColor = @canvas.backgroundColor
      @canvas.backgroundColor = '#fff'
      imgData = @exportCanvas().toDataURL(format: 'jpeg' )
      @canvas.backgroundColor = $oldColor
      @canvas.renderAll();

      imgWidth = 210; 
      pageHeight = 295;  
      imgHeight = height * imgWidth / width;
      heightLeft = imgHeight;

      doc = new jsPDF('p', 'mm');
      position = 0;
      doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while heightLeft >= 0
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      finename = prompt 'Please enter file name' , 'Product'
      doc.save(finename + '.pdf');
    catch e
      alert("Error description: " + e.message);

  objectSelected: (evt)->
    view = evt.target.canvas.parentView
    view.setLayersActive(evt.target)
    @layersEditView = new EditLayerView
      parentView: view
      layer: evt.target

    $el = @layersEditView.render().$el
    view.$el.find('#pc-edit-layer').html($el)


  beforeSelectionCleared: (evt)->
    if evt is undefined or evt.target is undefined or evt.target is null
      return
    else
      view = evt.target.canvas.parentView
      if(view isnt undefined)
        if @layersEditView isnt undefined
          @layersEditView.destroy()


        if view.layersView isnt undefined
          view.layersView.unselect()
        #view.$el.find('#pc-edit-layer').html("")


  objectModified: (evt)->
    view = evt.target.canvas.parentView
    view.updateModel(evt.target.id)

    if evt.target.object is 'text'
      old = evt.target.scaleX;
      fontSize = (evt.target.fontSize * old).toFixed(0);
      view.updateLayer(evt.target, {fontSize : fontSize, scaleX : 1, scaleY : 1})
    
  objectScaling : (evt)->
    #object = evt.target
    #view = evt.target.canvas.parentView

  updateBoundry :  (view) ->
    if view is undefined
      view = @
  
    clipRect = _.filter(view.canvas.getObjects(), (obj)-> return obj.clipFor isnt undefined and obj.clipFor isnt null and obj.clipFor isnt "" )
    if clipRect.length > 0
      _.each clipRect, (obj)->
        view.setBoundry(obj)
    


  setBoundry : (object, view)->
    params = object.toJSON(Customizer.options.jsonArgs)
    if params.boundingEnable is false
      delete object.clipTo
      return

    if view isnt undefined
      view = @

    if params.boundingMode is 'clipping'
      object.set 'clipName', params.boundingElementName
      @setCliping object
    else
      boundingBox = view.getBoundingBoxCoords(object)
      if !boundingBox
        boundingBox = object.canvas

      boundRect = object.getBoundingRect()

  getBoundingBoxCoords : (element) ->
    params = element.toJSON(Customizer.options.jsonArgs)
    if params.boundingEnable 
      if typeof params.boundingElement is 'object'
        return {
          left: params.boundingCoordsTop
          top: params.boundingCoordsLeft
          width: params.boundingCoordsWidth
          height: params.boundingCoordsHeight
        }
      else
        objects = element.canvas.getObjects()
        i = 0
        while i < objects.length
          object = objects[i]
          
          name = if(object.title is undefined) then object.id else object.title 
          if params.boundingElementName is name
            bbRect = object.getBoundingRect()
            return {
              left: bbRect.left
              top: bbRect.top
              width: bbRect.width
              height: bbRect.height
            }
            break
          ++i
    false


  setCliping : (obj)->
    clipRect = _.where(obj.canvas.getObjects(), { clipFor: obj.clipName })
    if clipRect.length > 0
      obj.clipTo = (ctx)-> return _.bind(clipByName, @)(ctx)
    else if obj.clipTo isnt undefined
      delete obj.clipTo


  bindSaveEvent: ->
    @formSaved = true
    @saveFormButton = @$el.find(".js-save-data")
    if @saveFormButton.length > 0
      @saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED)

    ###unless !Customizer.options.AUTOSAVE
      setInterval =>
        @saveForm.call(@)
      , 5000

    jQuery(window).bind 'beforeunload', =>
      if @formSaved then undefined else Customizer.options.dict.UNSAVED_CHANGES###

  reset: ->
    @addAll()
    

  setLayersActive : (obj)->
    if(@$el.find('#pc-layers ul > li'))
      li = @$el.find('#pc-layers ul > li').filter( (i, li)-> jQuery(li).data('id') is obj.id )  

    if(li.length is 0)
      @randerLayers()
    else
      if(!li.hasClass('active'))
        @$el.find('#pc-layers ul > li').removeClass('active')
        li.addClass('active')

  updateModel: (id)-> 
    obj = @canvas.getItemByMyID id
    model = @getModel id
    data = obj.toJSON(Customizer.options.jsonArgs)

    jQuery.each data, (index, vlaue)->
      model.set(Customizer.options.mappings.LAYER_DATA+'.'+index, vlaue)

    if model.get('type') is 'text'
      model.set('text', obj.__text)

    model.trigger 'change'


  refreshLayer: (obj)-> 
    @bringToppedElementsToFront();
    if(obj isnt undefined)
      obj.setCoords();
    @canvas.renderAll()

  bringToppedElementsToFront : ()->
    objects = @canvas.getObjects()
    bringToFrontObj = []
    @canvas.renderAll();

    i = 0
    while i < objects.length
      object = objects[i]
      if object.model and object.model.get(Customizer.options.mappings.LAYER_DATA+".stayOnTop") is true
        bringToFrontObj.push object
      ++i
    i = 0
    while i < bringToFrontObj.length
      bringToFrontObj[i].bringToFront()
      ++i

    return

  renderOnFontLoaded : (fontName)->
    _this = @
    WebFont.load(
      custom : 
        families: [fontName]
      fontactive: (familyName, fvd)->
        jQuery('body').mouseup()
        _this.canvas.renderAll() 
    )

  getModel: (id)-> 
    @collection.find((model)-> model.cid is id)

  showTab: (e) ->
    $el = jQuery(e.currentTarget)
    target = $el.data('target')
    $el.closest('li').addClass('active').siblings('li').removeClass('active')
    jQuery(target).addClass('active').siblings('.fb-tab-pane').removeClass('active')

  addOne: (model, _, options) ->
      if model.attributes[Customizer.options.mappings.LAYER_DATA] isnt undefined 
        model.attributes.cid = model.cid
        model.attributes[Customizer.options.mappings.LAYER_DATA].id = model.cid
        model_option = model.get(Customizer.options.mappings.LAYER_DATA)
        model_option.object = model.get('object')
        model_option.name = model.get('name')
        model_option.type = model.get('type')
        if model.get('title')
          model_option.title = model.get('title')
          model_option.clipFor = model.get('title')
      else
        model_option = {}


      if model.get(Customizer.options.mappings.OBJECT) is 'text'
        template = Customizer.text
        model_option.text = model.get('text')

      else if model.get(Customizer.options.mappings.OBJECT) is 'image'
        template = Customizer.image
        template.full = model.get('full')
        if model.get('title')
          template.title = model.get('title')
          template.clipFor = model.get('title')

      else
        template = {}
        template.object = model_option.object
        template.type = model_option.type
        template.title = model_option.title
        template.clipFor = model_option.title
        
        if model.get('options') isnt undefined
          template.options = jQuery.extend(true,{}, template.options, model.get('options'));
        else
          template.options = model_option
        
     

      newTemplate = jQuery.extend(true,{}, template);

      if newTemplate.options is undefined or newTemplate.options is null
        newTemplate.options = {}


      newTemplate.options = jQuery.extend(true,{}, newTemplate.options, model_option);

      @canvasView.add(
        type : newTemplate.object
        template : newTemplate
        model : model
        canvas : @canvas
      )
    

  addAll: ->
    @collection.each @addOne, @

  addField: (e) ->
    _this = @ 
    id = jQuery(e.currentTarget).data('field-id')
    type = jQuery(e.currentTarget).data('field-type')
    attrs = jQuery.extend true,{}, Customizer.images[type][id]
    _this.addImageLayer(attrs)

    
  createField: (attrs, options) ->
    if Customizer.options.settings.administration is true
      attrs.administration = true
    else
      attrs.administration = false

    rf = @collection.create attrs, options

    @handleFormUpdate()
    rf

  removeLayer: (obj) ->
    if typeof obj isnt 'object'
      obj = @canvas.getItemByMyID(obj);

    obj.remove()
    @randerLayers()
    @canvas.renderAll();
    @getModel(obj.id).destroy()
    @handleFormUpdate()

  updateLayer: (obj, key, value) ->
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

  setDraggable: ->
    ###$draggable = @$el.find(".draggable")
    $draggable.draggable(
      handle: ".handle" 
      containment: '.customizer-main'
    )###
    
  addTextLayer: (e) ->
    text = jQuery(e.currentTarget).closest('.fb-text-field-wrapper').find('.pc-text')
    attrs = {text : text.val()}
    text = text.val "" 
    @createField Customizer.helpers.defaultLayersAttrs('text', 'text', attrs)


  addImageLayer: (data) ->
    _this = @
    
    _replace = ()->
      fabric.util.loadImage( data.full, (img) ->
        obj.setElement img 

        obj.canvas.renderAll();
        obj.model.set 'full', data.full

        _this.updateLayer obj, {src : data.full, width : img.width, 
        height : img.height}
      )
      return;
      
    _addNew = ()->
      _addImageLayer = (value)->
        newData = jQuery.extend(true, {}, data)

        if(newData.url and newData.full is undefined)
          newData.full = newData.url

        if newData.id isnt undefined
          delete newData.id
        
        if(value isnt undefined)
          newData.title = value

        _this.createField Customizer.helpers.defaultLayersAttrs('img', 'image', newData)

      if(Customizer.options.settings.administration)
        model = new ModelView().prompt('Please enter name.', 'Name', (value)->
          _addImageLayer(value)
        )
      else
        _addImageLayer()


    obj =  @canvas.getActiveObject();
    if obj isnt undefined and obj isnt null and obj isnt ""
      if Customizer.options.settings.replaceImage is true
        _replace()
      else if Customizer.options.settings.replaceImage is 'confirm'
        new ModelView().confirm('Are you want to replace the image?', 'Replace', (value)->
            if value is true
              _replace()
            else
              _addNew()
          )
      else
        _addNew()
    else
      _addNew()

  uploadImages: (evt) ->
    @ajax_upload_image(evt.target.files)

  randerUploadedImages : ()->
    uploadImages = sessionStorage.getItem('uploadImages');
    if uploadImages is undefined or uploadImages is null
      uploadImages = {}
    else   
      uploadImages = JSON.parse(uploadImages)
    
    _this = @
    _this.LastUploadImageId = 0
    if uploadImages is undefined or uploadImages is null or uploadImages is ""
      uploadImages = {}
    else
      jQuery.each(uploadImages, (id, data)->
        _this.LastUploadImageId = data.id

        if data
          _this.randerUploadedImage(data, data.id)
      )
    
  randerUploadedImage : (data, id)->
    _this = @

    $ul = @$el.find('.uploaded-image-container ul')
    session_data = {}

    if(id is undefined)
      id = _this.LastUploadImageId
      id = if parseInt(id) > 0 then parseInt(id) else 0
      next_id = id + 1
      _this.LastUploadImageId = next_id;
    else
      id = if parseInt(id) > 0 then parseInt(id) else 1
      next_id = id

    session_data.id = next_id
    session_data.url = data.url
    session_data.moved = if data.moved is 'true' then 'true' else 'false'
    session_data.path = data.path
    del = jQuery('<span class="delete-contianer"><span class="mif-bin"></span></span>').on('click', ()->
        li = jQuery(@).closest('li')
        data = jQuery(li).data('image-data')
        
        if(data.moved isnt 'true')
          _this.ajax_remove_image(data)

        _this.updateSession null, data.id

        _this.customizer.trigger 'remove-uploaded-image', _this, li
        li.remove();
      )

    span = jQuery("<span class='image-contianer'><img class='thumb' src='#{data.url}'/></span>").on('click', ()->
      li = jQuery(@).closest('li')
      data = jQuery(li).data('image-data')
      _this.add_uploaded_image(data, li)
    )

    li = jQuery("<li data-id='#{next_id}' data-type='dataImage'></li>").data('image-data',session_data).append(span).append(del)
    $ul.prepend li

    _this.customizer.trigger 'image-upload', _this, data, li

    _this.updateSession session_data, session_data.id
 
    if(_this.LastUploadImageId < session_data.id)
      _this.LastUploadImageId = session_data.id

  updateSession : (data, id)->
    uploadImages = sessionStorage.getItem('uploadImages');
    if uploadImages is undefined or uploadImages is null
      uploadImages = {}
    else   
      uploadImages = JSON.parse(uploadImages)

    if(uploadImages[id] isnt undefined and data is null)
        delete uploadImages[id]
    else
      uploadImages[id] = data

    sessionStorage.setItem 'uploadImages', JSON.stringify(uploadImages)

  ajax_upload_image : (files)->
    formData = new FormData(jQuery('<form></from>')[0])

    formData.append('image', files[0])
    formData.append('action', 'pc_upload_image')

    _this = @
    jQuery.ajax
      url : @settings.imageUploadUrl
      type : "post"
      data : formData
      dataType : 'json'
      contentType: false
      processData: false
      cache: false
      beforeSend: ()->
        _this.loader.show()
      success: (data) ->
        if data.status is 'success'
          image_url = data.url
          if(image_url isnt undefined and image_url isnt null)
            attrs = {uploadedImage : image_url}
          else if (image_temp_url isnt undefined and image_temp_url isnt null)
            attrs = {uploadedImage : image_url}
          else
            return
          _this.randerUploadedImage(data)
          _this.loader.hide()
        else
          _this.loader.hide()

      error: ()->
        _this.loader.hide()

  ajax_remove_image : (file)->
    _this = @
    jQuery.ajax
      url : @settings.imageUploadUrl
      type : "post"
      data : {action : 'pc_remove_uploaded_image', file : file}
      dataType : 'json'
      beforeSend: ()-> _this.loader.show()
      success: (data) ->  _this.loader.hide()
      error: ()->  _this.loader.hide()

  add_uploaded_image : (file, li)->

    _this = @
    if file.moved is 'true'
      _this.addImageLayer({full : file.url})
      return

    
    jQuery.ajax
      url : @settings.imageUploadUrl
      type : "post"
      data : {action : 'pc_added_uploaded_image', file : file}
      dataType : 'json'
      beforeSend: ()-> _this.loader.show()
      success: (data) -> 
        if data.status is 'success'
          if(li isnt undefined)
            old_data = li.data('image-data');
            data.id = old_data.id
            data.moved = 'true'
            _this.updateSession data, old_data.id
            li.data('image-data', data)
            _this.addImageLayer({full : data.url})

          _this.loader.hide()
        else
          _this.loader.hide()

      error: ()-> 
        _this.loader.hide()


  handleFormUpdate: ->
    return if @updatingBatch
    @formSaved = false
    if @saveFormButton isnt undefined
      @saveFormButton.removeAttr('disabled').text(Customizer.options.dict.SAVE_FORM)
    else
      return
    
  saveForm: (e) ->
    return if @formSaved
    @formSaved = true
    @saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED)
    
    payload = @getPayload()

    if Customizer.options.HTTP_ENDPOINT then @doAjaxSave(payload)
    @customizer.trigger 'save', payload

  getPayload : (type)->
    @collection.sort()
    fields = @collection.toJSON(Customizer.options.jsonArgs)
    newFields = [];
    if fields.length > 0
      jQuery.each(fields, (index, vlaue)-> 
        if vlaue.layer_data.clipTo isnt undefined
          delete vlaue.layer_data.clipTo
        if vlaue.clipTo isnt undefined
          delete vlaue.clipTo
        if !(vlaue.dontSync is true or vlaue.layer_data.dontSync is true) or type is 'all'
          newFields.push(vlaue)
        else
          vlaue.layer_data.opacity = 0;
          newFields.push(vlaue)
      )
    JSON.stringify fields: newFields

  doAjaxSave: (payload) ->
    jQuery.ajax
      url: Customizer.options.HTTP_ENDPOINT
      type: Customizer.options.HTTP_METHOD
      data: payload
      contentType: "application/json"
      success: (data) =>
        @updatingBatch = true

        for datum in data
          # set the IDs of new response fields, returned from the server
          @collection.get(datum.cid)?.set({id: datum.id})
          @collection.trigger 'sync'

        @updatingBatch = undefined



class Customizer 
  @helpers:
    defaultLayersAttrs: (type, name, extra_attrs) ->
      attrs = {}
      attrs[Customizer.options.mappings.TYPE] = type
      attrs[Customizer.options.mappings.DATA_ID] = name
      attrs.layer_data = {}

      if extra_attrs isnt undefined 
        attrs = _.extend attrs, extra_attrs

      layer = {}
      if type is 'text'  
        layer = Customizer.text
      else if type is 'img'  
        layer = Customizer.image

      attrs.object = if layer.object isnt undefined then layer.object else '';

      layer.defaultAttributes?(attrs) or attrs


  @options:
    BUTTON_CLASS: 'fb-button'
    HTTP_ENDPOINT: ''
    HTTP_METHOD: 'POST'
    AUTOSAVE: true
    CLEAR_FIELD_CONFIRM: false

    jsonArgs : ['id','unlockable', 'removable', 'hideLayer', 'displayInLayerBar', 'order', 'selection', 'selectable', 'locked', 'lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling', 'hasBorders', 'hasControls', 'hasRotatingPoint', 'hoverCursor', 'isResizable', 'isDraggable', 'boundingEnable', 'boundingElementName', 'boundingMode', 'stayOnTop', 'title', 'elementBoundingEnable','boundingCoordsLeft','boundingCoordsTop','boundingCoordsWidth','boundingCoordsHeight', 'clipFor', 'clipName', 'evented', 'dontSync','defaultColor','allowedColors', 'object','administration']

    mappings:
      DATA_ID    : 'data_id'
      TYPE  : 'type'
      NAME  : 'name'
      OBJECT: 'object'
      LAYER: 'layer'
      LAYER_DATA : 'layer_data'
      ORDER : 'order'
      #FIELD_TYPE : 'object'

    dict:
      ALL_CHANGES_SAVED: 'All changes saved'
      SAVE_FORM: 'Save changes'
      UNSAVED_CHANGES: 'You have unsaved changes. If you leave this page, you will lose those changes!'

  @layers: []

  @backgrounds: {}
  @text: {}
  @images: {}
  @fonts : {}

  @fields: {}
  @image: {}

  @inputFields: {}
  @nonInputFields: {}

  @addLayers: (opts) ->
    Customizer.layers.push(opts)


  @registerField: (name, opts) ->

    for x in ['view', 'edit']
      opts[x] = _.template(opts[x])

    Customizer.fields[name] = opts


  @registerImages: (category, opts) ->

    if opts.type is undefined
      opts.type = category

    if opts.object is undefined
      opts.object = 'image'

    if opts.id isnt undefined
      id = opts.id

    if(Customizer.images[category] is undefined)
      Customizer.images[category] = {}

    Customizer.images[category][id] = opts


  @registerFonts: (font) ->
    if font.name is undefined
        filename = font.url.split('/').pop().split('#')[0].split('?')[0]
        font.name = filename.split('.')[0];
        font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase()
    else
      font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase()

    if font.displayName is undefined 
      font.displayName = font.name #.replace(/[^_-]/gi, ' ');
    
    if font.src is undefined
        font.src = {};
    
    if font.url isnt undefined
        filename = font.url.split('/').pop().split('#')[0].split('?')[0];
        ext = filename.split('.')[1];
        if(ext isnt undefined)
            font.src[ext] = font.url;
    
    Customizer.fonts[font.name] = font

  @registerShape: () ->
    opts =
      type : 'text'
      object : 'text'
    Customizer.shape = opts

  @registerText: () ->
    opts =
      type : 'text'
      object : 'text'
    Customizer.text = opts

  @registerImage: () ->
    opts =
      type : 'image'
      object : 'image'
    Customizer.image = opts


  setSettings : (key, value)->
    Customizer.options.settings[key] = value

  constructor: (opts={}) ->
    _.extend @, Backbone.Events
    @args = _.extend opts, {customizer: @}
    @rander()
    @mainView

  rander : ()->
    if(@mainView isnt undefined)
      @mainView.destroy();
    
    @mainView = new CustomizerView  @args

     
  
    

window.Customizer = Customizer
if module?
  module.exports = Customizer
else
  window.Customizer = Customizer
