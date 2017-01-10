

fabric.Canvas::getItemByMyID = (myID) ->
  object = null
  objects = @getObjects()
  i = 0
  len = @size()
  while i < len
    if objects[i].id and objects[i].id == myID
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
    if objects[i].title and objects[i].title == title
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
  if(clipRect.length > 0)
    clipRect = clipRect[0]

  scaleXTo1 = 1 / @scaleX
  scaleYTo1 = 1 / @scaleY
  ctx.save()
  ctxLeft = -(@width / 2) + clipRect.strokeWidth
  ctxTop = -(@height / 2) + clipRect.strokeWidth
  ctxWidth = clipRect.width - (clipRect.strokeWidth)
  ctxHeight = clipRect.height - (clipRect.strokeWidth)
  ctx.translate ctxLeft, ctxTop
  ctx.rotate degToRad(@angle * -1)
  ctx.scale scaleXTo1, scaleYTo1
  ctx.beginPath()


  ctx.rect clipRect.left - (@oCoords.tl.x), clipRect.top - (@oCoords.tl.y), clipRect.width, clipRect.height
  
  ctx.closePath()
  ctx.restore()


fabric.Object::set
  transparentCorners: false
  borderColor: '#16A085'
  cornerColor: '#16A085'
  cornerSize: 7
  



class CustomizerModel extends Backbone.DeepModel
  sync: -> 
    # noop
    # noop

  defaults: ()->
    # { order: CustomizerCollection.nextOrder() }

  indexInDOM: ->
    $wrapper = jQuery(".pc-layers-contianer.layers").filter ( (_, el) => jQuery(el).data('id') == @cid  )
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
    if @length == 0
      @nextOrder = 0
      return
    if(@last() != undefined)
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

  prompt : (message, title, callback)->
    @render(
      body : "<div class='input-field-container'><label class='pc-model-alert-body'>#{message}</label><input class='pc-input-field promt-input'></div><div class='pc-prompt-error-message' style='display:none'></div> <div class='pc-model-button-container fb-button-group'><button class='pc-prompt-ok fb-button'>OK</button><button class='pc-prompt-cancel fb-button fb-button-default'>Cancel</button></div>"
      title : title
      )
    @callback = callback
    @

  promptOk : ->
    val = @$el.find('.promt-input').val()
    if(val != undefined && val != null && val != '')
      @callback val
      @closeModel()
    else
      @$el.find('.pc-prompt-error-message').html("Plesae enter value.").show(500)

  closeModel : ->
    _this = @
    @$el.find('.pc-prompt-error-message').html("").hide(500)
    @$el.fadeOut(500, ->_this.$el.remove())

  showModel :->
    @$el.fadeIn(500)


class ViewLayerView extends Backbone.View
  className : 'pc-layers-wraper'
  events:
    'click li': 'focusEditView'
    'click .pc-layers-delete': 'remove'
    'click .pc-layers-lock-unlock': 'lockUnlock'

  initialize: (options) ->
    {@parentView} = options
    @canvas = @parentView.canvas;

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
    #current = ev.currentTarget;
    if(jQuery(ev.currentTarget).prop("tagName") == 'li')
      id = jQuery(ev.currentTarget).data('id')
      $el = jQuery(ev.currentTarget)
    else
      id = jQuery(ev.currentTarget).closest('li').data('id')
      $el = jQuery(ev.currentTarget).closest('li')

    object = @canvas.getItemByMyID(id);
    if object.locked == false     
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
    #@forceRender()


  remove: (ev)->
    if(jQuery(ev.currentTarget).prop("tagName") == 'li')
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
    #@forceRender()

  scrollLayerWrapper: ($layerContainer) ->
    #return unless $responseFieldEl[0]
    if typeof @$layerContainer == 'undefined' || @$layerContainer.length == 0
      return

    li = jQuery(@$layerContainer).find('li.active')

    if typeof li == 'undefined' || li.length == 0
      return

    bottom = @$layerContainer.offset().top + @$layerContainer.height()

    if (li.offset().top + li.height()) > bottom
      jQuery(@$layerContainer).animate({
          scrollTop: li.offset().top
      }, 200);
    
    #jQuery.scrollWindowTo ((li.offset().top + @$layerContainer.offset().top) - @$layerContainer.offset().top), 200
      

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
      stop: (e, ui) =>
        total = jQuery(e.target).find('li').length;
        jQuery(e.target).find('li').each((index)-> 
          i = total - (index + 1)
          id = jQuery(@).data('id')
          #jQuery(@).data('order', i);
          #jQuery(@).attr('data-order', i);

          model = _this.parentView.getModel(id)

          object = _this.canvas.getItemByMyID(id);
          object.moveTo(i);

          model.set(Customizer.options.mappings.LAYER_DATA+'.order', i)
          model.set(Customizer.options.mappings.LAYER_DATA+'.zIndex', i)
          model.set('order', i)
          model.trigger 'change'

          _this.parentView.bringToppedElementsToFront();
        )
        
        #@focusEditView()
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
    'keydown .text-font-size': 'fontSize'
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
        if e.currentTarget != @
          target = jQuery(@).data('target')
          if jQuery(target).hasClass('tool-tip')
            _this.parentView.$el.find(target).slideUp();
      )

  isRemovable : (e)->
    obj = @canvas.getActiveObject();
    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date obj,'removable', true
    else
      @update_layer_date obj,'removable', false

  isUnlockable : (e)->
    obj = @canvas.getActiveObject();
    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date obj,'unlockable', true
    else
      @update_layer_date obj,'unlockable', false

  isHideLayer : (e)->
    obj = @canvas.getActiveObject();
    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date obj,'hideLayer', true
    else
      @update_layer_date obj,'hideLayer', false

  boundingEnable : (e)->
    obj = @canvas.getActiveObject();
    parent = jQuery(e.currentTarget).closest('.pc-define-bounding')
    if(jQuery(e.currentTarget).is(':checked'))
      if jQuery('.input_another_element_bounding_name').is(':checked')
        @update_layer_date(obj,
          'boundingEnable': true
          'elementBoundingEnable': true
          'boundingElementName': parent.find('[name="another_element_bounding_name"]').val()
          'boundingMode': parent.find('[name="bounding_box_mode"]').val()
          )
      else
        @update_layer_date(obj,
          'boundingEnable': true
          'elementBoundingEnable': false
          'boundingCoordsLeft': parent.find('[name="bounding_coords_left"]').val()
          'boundingCoordsTop': parent.find('[name="bounding_coords_top"]').val()
          'boundingCoordsWidth': parent.find('[name="bounding_coords_width"]').val()
          'boundingCoordsHeight': parent.find('[name="bounding_coords_height"]').val()
          'boundingMode': parent.find('[name="bounding_box_mode"]').val()
        )
    else
      @update_layer_date(obj,
        'boundingEnable': false
        )

    @parentView.setBoundry(obj, @parentView)

  elementBoundingEnable : (e)->
    obj = @canvas.getActiveObject();
    parent = jQuery(e.currentTarget).closest('.pc-define-bounding')
    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date(obj,
        'boundingEnable': true
        'elementBoundingEnable': true
        'boundingElementName': parent.find('[name="another_element_bounding_name"]').val()
        'boundingCoordsLeft' : ""
        'boundingCoordsTop' : ""
        'boundingCoordsWidth' : ""
        'boundingCoordsHeight'  : ""
        'boundingMode': parent.find('[name="bounding_box_mode"]').val()
        )
    else
      @update_layer_date(obj,
        'boundingEnable': true
        'elementBoundingEnable': false
        'boundingElementName': ""
        'boundingCoordsLeft': parent.find('[name="bounding_coords_left"]').val()
        'boundingCoordsTop': parent.find('[name="bounding_coords_top"]').val()
        'boundingCoordsWidth': parent.find('[name="bounding_coords_width"]').val()
        'boundingCoordsHeight': parent.find('[name="bounding_coords_height"]').val()
        'boundingMode': parent.find('[name="bounding_box_mode"]').val()
      )
    

    @parentView.setBoundry(obj, @parentView)

  boundingElementName : (e)->
    obj = @canvas.getActiveObject();
    @update_layer_date obj, 'boundingElementName', jQuery(e.currentTarget).val()
    @parentView.setBoundry(obj, @parentView)

  boundingBoxCoords : (e)->
    obj = @canvas.getActiveObject();
    coord = jQuery(e.currentTarget).data('coord')

    @update_layer_date obj, "boundingCoords#{coord}" , jQuery(e.currentTarget).val()
    
    @parentView.setBoundry(obj, @parentView)
   
  boundingMode : (e)->
    obj = @canvas.getActiveObject();
    @update_layer_date obj, 'boundingMode',jQuery(e.currentTarget).val()
    @parentView.setBoundry(obj, @parentView)
   

  isResizable : (e)->
    obj = @canvas.getActiveObject();
    if(obj.locked == true)
      return

    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date(obj,
        isResizable : true 
        lockScalingX : false
        lockScalingY : false
        hasControls: true
      )
    else
      @update_layer_date(obj, 
        isResizable : false 
        lockScalingX : true
        lockScalingY : true
        hasControls: false
      )

  stayOnTop : (e)->
    obj = @canvas.getActiveObject();

    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date obj, {'stayOnTop': true,  evented : false}
    else
      @update_layer_date obj, {'stayOnTop': false,  evented : true}

    @bringToppedElementsToFront();
    @parentView.refreshLayer(obj)


  isDraggable : (e)->
    obj = @canvas.getActiveObject();
    if(obj.locked == true)
      return

    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date(obj,
        isDraggable : true 
        lockMovementX : false
        lockMovementY : false
      )
    else
      @update_layer_date(obj, 
        isDraggable : false 
        lockMovementX : true
        lockMovementY : true
      )

  isRotatable : (e)->
    obj = @canvas.getActiveObject();
    if(obj.locked == true)
      return
    if(jQuery(e.currentTarget).is(':checked'))
      @update_layer_date(obj,
          'lockRotation': false
          hasRotatingPoint: true
        )
    else
      @update_layer_date(obj,
          'lockRotation': true 
          hasRotatingPoint: false
        )
  
  
  buindSetting : ()->
    rivets.bind(@parentView.$el.find('#admin-setting-container'), {model : @model});

 

  setColorPicker: ()->
    _this = @
    color = @layer.model.get(Customizer.options.mappings.LAYER_DATA+'.fill')

    @$el.find('.colorselector').ColorPicker(
        color: color,
        onShow: (colpkr) ->
          jQuery(colpkr).fadeIn(500);
          return false;
        onHide: (colpkr) ->
          jQuery(colpkr).fadeOut(500);
          return false;
        onChange: (hsb, hex, rgb) ->
          jQuery('.colorselector .background-color').css('backgroundColor', "##{hex}")
          
          if _this.layer.model.get(Customizer.options.mappings.LAYER_DATA+'.type') == 'text'
            _this.update_layer_date(_this.layer , 'fill',"##{hex}")
          else
            _this.applyFilterValue 0, 'color', "##{hex}"


        #onSubmit: (hsb, hex, rgb) ->
          
    );

  applyFilterValue : (index, prop, value) ->
    obj = @canvas.getActiveObject();
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
    if(obj == undefined)
      return
    @update_layer_date obj, 'fontFamily',  jQuery(e.currentTarget).val()
    font = obj.toJSON().fontSize
    @update_layer_date obj, 'fontSize',  parseInt(font) + 1
    @update_layer_date obj, 'fontSize',  font
  
  fontSize : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'fontSize',  jQuery(e.currentTarget).val()

    @parentView.setBoundry(obj, @parentView)

  textBold : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'fontWeight',  if obj.getFontWeight() == 'bold' then 'normal' else 'bold'

  textItalic : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'fontStyle',  if obj.getFontStyle() == 'italic' then 'normal' else 'italic'

  textUnderline : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'textDecoration',  if obj.getTextDecoration() == 'underline' then 'none' else  'underline'

  rotateLeft : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return

    resetOrigin = false;
    if (obj.originX != 'center' || obj.originY != 'center') && obj.centeredRotation
      obj.setOriginToCenter && obj.setOriginToCenter()
      resetOrigin = true


    angle = obj.getAngle()
    angle += 5
    @update_layer_date obj, 'angle',  angle    
    if resetOrigin
        obj.setCenterToOrigin && obj.setCenterToOrigin();
    

  rotateRight : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return

    resetOrigin = false;
    if (obj.originX != 'center' || obj.originY != 'center') && obj.centeredRotation
      obj.setOriginToCenter && obj.setOriginToCenter()
      resetOrigin = true

    angle = obj.getAngle()
    angle -= 5
    @update_layer_date obj, 'angle',  angle

    if resetOrigin
        obj.setCenterToOrigin && obj.setCenterToOrigin();


  alignBottom : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'top',  (this.canvas.height - obj.getHeight())

  alignTop : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'top', 0

  alignLeft : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'left', 0

  alignRight : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date obj, 'left', (this.canvas.width - obj.getWidth())


  horizontalCenter : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date(obj, 'left', ((@canvas.width / 2) - (obj.getWidth() / 2)))

  verticalCenter : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    @update_layer_date(obj, 'top', ((@canvas.height / 2) - (obj.getHeight() / 2)))
      
  center : (e)->
    obj = @canvas.getActiveObject();
    if(obj == undefined)
      return
    top =  (@canvas.height / 2) - (obj.getHeight() / 2)
    left = (@canvas.width / 2) - (obj.getWidth() / 2)
    @update_layer_date(obj, {top : top, left : left})
          

  update_layer_date : (obj, key, value)->

    if(typeof key == 'object')
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

  update_layer: (obj, options)->
    order = options.model.get(Customizer.options.mappings.LAYER_DATA+'.order')
    
    if order != undefined
      obj.moveTo(order);
      obj.set 'order', order
      #obj.model.set Customizer.options.mappings.LAYER_DATA+".order", order

    if(obj.getTop() == 0 && obj.getLeft() == 0)
      obj.center();


    @parentView.updateModel obj.model.get('cid')



    @parentView.setBoundry(obj, @parentView)
    @parentView.randerLayers()

    @parentView.refreshLayer(obj)


  add: (obj)-> 
    if obj.type == undefined
      obj.type = obj.template.options.type 
    @[obj.type](obj)


  text : (obj) ->
    template = obj.template
    options = template.options
    defaultOptions = {}

    options = jQuery.extend(true, {}, @getDefault(defaultOptions, obj), options);
    delete options.clipTo
    if options.template.text
      text = options.template.text
    else
      text = ""

    text = new fabric.IText(text, options);
    obj.canvas.add(text)
    #.setActiveObject(text)
    @update_layer(text, options);
    

  rect: (obj)->
    template = obj.template
    options = template.options
    defaultOptions = {}
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

    if template.full != undefined
      url = template.full
    else if template.imageDate != undefined
      url = template.imageDate

    img = fabric.Image.fromURL template.full, (image)->
      defaultOptions = {
        width : image.width
        height : image.height
      }
      options = jQuery.extend(true,{}, _this.getDefault(defaultOptions, obj), options);
      delete options.clipTo
      filters = {}
      if(options.filters != undefined && options.filters.length > 0)
        filters = options.filters
        delete options.filters

      image.set(options)
      obj.canvas.add(image)
      #.setActiveObject(image)

      if(filters.length > 0)
        _this.setFilterValue(image, filters)

      _this.update_layer(image, options);


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
        boundingMode : "inside"
        stayOnTop : false
        unlockable : true
        isResizable : true
        isDraggable : true
        lockRotation : false
      }

    if Customizer.options.settings.boundingBoxCoords != undefined
      defaultOptions.boundingEnable = true
      if(typeof Customizer.options.settings.boundingBoxCoords == 'object')
        defaultOptions.elementBoundingEnable = true
        defaultOptions.boundingCoordsLeft = Customizer.options.settings.boundingBoxCoords.x
        defaultOptions.boundingCoordsTop = Customizer.options.settings.boundingBoxCoords.y
        defaultOptions.boundingCoordsWidth = Customizer.options.settings.boundingBoxCoords.width
        defaultOptions.boundingCoordsHeight = Customizer.options.settings.boundingBoxCoords.height
      else
        defaultOptions.elementBoundingEnable = false
        defaultOptions.boundingElementName = Customizer.options.settings.boundingBoxCoords

    
    jQuery.extend(true,{}, defaultOptions, options);
  


class CustomizerView extends Backbone.View
  SUBVIEWS: []
  canvasView : new CanvasView()
  events:
    'click .js-save-form': 'saveForm'
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
    {selector, @customizer, @bootstrapData, settings} = options
    if selector?
      @setElement jQuery(selector) 

    defaultSettings =
      administration : true
      boundingBoxColor: '#005ede'
      boundingBoxCoords: ''

    @canvasView.initialize(@)


    @settings = jQuery.extend(true, {},defaultSettings, settings);

    if @settings?
       Customizer.options.settings = @settings

    if @settings.images != undefined
      if typeof @settings.images == 'object' || typeof @settings.images == 'array'
        jQuery.each(@settings.images, (index, v)->
          if v != undefined
            if typeof v == 'object' || typeof v == 'array'
                jQuery.each(v, (i, value)->
                  value.type  = if value.type == undefined then index else value.type
                  value.id    = if value.id == undefined then i else value.id
                  Customizer.registerImages index, value
                )
        )
    if @settings.fonts != undefined
      jQuery.each(@settings.fonts, (index, v)->
        Customizer.registerFonts(v)
      )

    Customizer.registerText()
    Customizer.registerImage()


    @collection = new CustomizerCollection({parentView : @})
    @collection.bind 'add', @addOne, @
    @collection.bind 'reset', @reset, @
    @collection.bind 'change', @handleFormUpdate, @
    #@collection.bind 'destroy add reset', @hideShowNoResponseFields, @

    @render()

    @renderFontsCSS()
    
    @bindSaveEvent()


    @canvas.parentView = @


    @listenTo @canvas, "mouse:up", (o) -> @isDown = false;
    @listenTo @canvas, "mouse:down", (o) -> @isDown = true;
    @listenTo @canvas, "object:moving", @objectMoveing
    @listenTo @canvas, "object:selected", @objectSelected
    @listenTo @canvas, "object:modified", @objectModified
    @listenTo @canvas, "object:scaling", @objectScaling
    @listenTo @canvas, "before:selection:cleared", @beforeSelectionCleared
    @listenTo @canvas, "after:render", (evt)-> @calcOffset()

    @collection.reset(@bootstrapData)


  fullscreen : (ev)->
    if(jQuery(ev.currentTarget).prop("tagName") == 'span')
      $el = jQuery(ev.currentTarget)
    else
      $el = jQuery(ev.currentTarget).find('span')

    $el.toggleClass('mif-shrink mif-enlarge')
    @$el.toggleClass('fullscreen')
   
    if @$el.hasClass('fullscreen')
      @oldCanvasHeight = @canvas.getHeight()
      @oldCanvasWidth = @canvas.getWidth()
      
      offset = @$el.find('.canvas-actions').outerHeight(true)
      @canvas.setHeight(@$el.height() - offset - 8)
      
      @canvas.setWidth(@$el.find('.pc-canvas').width())
    else
      @canvas.setHeight(@oldCanvasHeight)
      @canvas.setWidth(@oldCanvasWidth)


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
      centeredScaling: true
      preserveObjectStacking: true

    if Customizer.options.settings.canvas == undefined
      Customizer.options.settings.canvas = {}

    canvasAttr = jQuery.extend(true, {}, Customizer.options.settings.canvas, defaultCanvasArgs)

    canvas = new fabric.Canvas(el[0],
      canvasAttr
    )
    h = @$el.find('.pc-canvas').height()
    w = @$el.find('.pc-canvas').width()

    if(canvasAttr.height != undefined && canvasAttr.height > 0)
      canvas.setHeight(canvasAttr.height)
    else
      canvas.setHeight(500)

    if(canvasAttr.width != undefined && canvasAttr.width > 0)    
      canvas.setWidth(canvasAttr.width)
    else  
      canvas.setWidth(w)

    @canvas = canvas
    @randerLayers()
    @randerUploadedImages()

    @loader.hide()
    return @

  randerLayers : (canvas)->
    layers = @canvas.getObjects()

    layersView = new ViewLayerView
      parentView: @
      canvas: @canvas

    $el = layersView.render().$el
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
    #newCanvas= new fabric.Canvas(jQuery('<canvas></canvas>')[0]);
    #objects = @canvas.getObjects()
    @canvas

    ###newCanvas.setWidth @canvas.getWidth()
    newCanvas.setHeight @canvas.getHeight()

    if objects.length > 0
      jQuery.each(objects, (index, vlaue)-> 
        perams = vlaue.toJSON(Customizer.options.jsonArgs)
        if !(perams.dontSync == true)
            newCanvas.add(vlaue)
      )
    newCanvas###

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

  
    
  clearSelection : (evt)->

  objectSelected: (evt)->
    view = evt.target.canvas.parentView

    view.setLayersActive(evt.target)
    layersEditView = new EditLayerView
      parentView: view
      layer: evt.target

    $el = layersEditView.render().$el
    view.$el.find('#pc-edit-layer').html($el)


  beforeSelectionCleared: (evt)->
    view = evt.target.canvas.parentView
    if(view != undefined)
      view.$el.find('#pc-edit-layer').html("")

  objectModified: (evt)->
    view = evt.target.canvas.parentView
    view.updateModel(evt.target.id)
    

  objectScaling : (evt)->
    view = evt.target.canvas.parentView
    obj = evt.target;

    view.setBoundry(obj, view)   
    #view.updateModel(evt.target.id)

  objectMoveing: (evt)->
    view = evt.target.canvas.parentView
    obj = evt.target;

    view.setBoundry(obj, view)

    #view.updateModel(evt.target.id)


  setBoundry : (object, view)->
    if view != undefined
      view = @

    boundingBox = view.getBoundingBoxCoords(object)
    if !boundingBox
      boundingBox = object.canvas

    boundRect = object.getBoundingRect()

    if object.getHeight() > boundingBox.height
      h = Math.min(object.getHeight(), boundingBox.height)
      object.scaleToHeight(h)
      object.setCoords(); 
      boundRect = object.getBoundingRect()

    if object.getWidth() > boundingBox.width
      w = Math.min(object.getWidth(), boundingBox.width)
      object.scaleToWidth(w)
      object.setCoords(); 
      boundRect = object.getBoundingRect()


    object.setCoords(); 

    if boundRect.top < boundingBox.top
        object.top = Math.max(object.top, boundingBox.top)

    #left  corner
    if boundRect.left < boundingBox.left
        object.left = Math.max(object.left, boundingBox.left)
  
    #bottom corner

    if (boundRect.top + boundRect.height)  > (boundingBox.top + boundingBox.height)
        object.top = Math.min(object.top, (boundingBox.height - boundRect.height + boundingBox.top))

    #right corner
    if (boundRect.left + boundRect.width)  > (boundingBox.left + boundingBox.width)
      object.left = Math.min(object.left, (boundingBox.width - boundRect.width + boundingBox.left))

    #object.canvas.renderAll();

    view.updateModel(object.id)

  ###getBoundingBoxCoords : (obj, _this)->
    if(_this == undefined)
      _this = @
    if(obj == undefined)
      obj = @canvas.getActiveObject()

    elemParams = obj.toJSON(Customizer.options.jsonArgs)

    if elemParams.boundingEnable
      bbCoords = _this._getBoundingBoxCoords(obj, _this)
      if bbCoords
        currentBoundingObject = new (fabric.Rect)(
          left: bbCoords.left
          top: bbCoords.top
          width: bbCoords.width
          height: bbCoords.height
          stroke: Customizer.options.settings.boundingBoxColor
          strokeWidth: 1
          fill: false
          selectable: false
          evented: false
          originX: 'left'
          originY: 'top'
          name: 'bounding-box'
          params:
            x: bbCoords.left
            y: bbCoords.top
            scale: 1)
        _this.canvas.add currentBoundingObject
        currentBoundingObject.bringToFront()###

  getBoundingBoxCoords : (element) ->
    params = element.toJSON(Customizer.options.jsonArgs)

    if params.boundingMode == 'clipping'
      element.set 'clipName', params.boundingElementName
      @setCliping element
    else
      if params.boundingEnable
        boundingEnable = undefined
        if typeof params.boundingElement == 'object'
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
            #get all layers from first view
            object = objects[i]
            
            name = if(object.title == undefined) then object.id else object.title 
            if params.boundingElementName == name
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
    
    obj.clipTo = (ctx)-> return _.bind(clipByName, @)(ctx)

  removeCliping : (obj)->
    delete obj.clipTo

  bindSaveEvent: ->
    @formSaved = true
    @saveFormButton = @$el.find(".js-save-data")
    @saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED)

    unless !Customizer.options.AUTOSAVE
      setInterval =>
        @saveForm.call(@)
      , 5000

    jQuery(window).bind 'beforeunload', =>
      if @formSaved then undefined else Customizer.options.dict.UNSAVED_CHANGES

  reset: ->
    @addAll()
    

  setLayersActive : (obj)->
    if(@$el.find('#pc-layers ul > li'))
      li = @$el.find('#pc-layers ul > li').filter( (i, li)-> jQuery(li).data('id') == obj.id )  

    if(li.length == 0)
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

    if model.get('type') == 'text'
      model.set('text', obj.__text)

    model.trigger 'change'


  refreshLayer: (obj)-> 
    @bringToppedElementsToFront();

    if(obj != undefined)
      obj.setCoords();
      #if obj.model.get(Customizer.options.mappings.LAYER_DATA+'.boundingEnable') == true
        #@_clipElement(obj, @);
      
      
    @canvas.renderAll()

  _clipElement : (element, _this) ->
    bbCoords = @getBoundingBoxCoords(element)
    if bbCoords
      element.clippingRect = bbCoords
      element.setClipTo (ctx) ->
        _this._clipById ctx, this
        return
    return

  _clipById = (ctx, _this, scale) ->
    scale = if scale == undefined then 1 else scale
    clipRect = _this.clippingRect
    scaleXTo1 = 1 / _this.scaleX
    scaleYTo1 = 1 / _this.scaleY
    ctx.save()
    ctx.translate 0, 0
    ctx.rotate fabric.util.degreesToRadians(_this.angle * -1)
    ctx.scale scaleXTo1, scaleYTo1
    ctx.beginPath()
    ctx.rect clipRect.left * responsiveScale - (_this.left) - (if _this.originX == 'left' then _this.width * .5 * responsiveScale else 0), clipRect.top * responsiveScale - (_this.top) - (if _this.originY == 'top' then _this.height * .5 * responsiveScale else 0), clipRect.width * responsiveScale * scale, clipRect.height * responsiveScale * scale
    ctx.fillStyle = 'transparent'
    ctx.fill()
    ctx.closePath()
    ctx.restore()
    return

  bringToppedElementsToFront : ()->
    objects = @canvas.getObjects()
    bringToFrontObj = []
    @canvas.renderAll();

    i = 0
    while i < objects.length
      object = objects[i]
      if object.model && object.model.get(Customizer.options.mappings.LAYER_DATA+".stayOnTop") == true
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
    @collection.find((model)-> model.cid == id)

  showTab: (e) ->
    $el = jQuery(e.currentTarget)

    target = $el.data('target')

    $el.closest('li').addClass('active').siblings('li').removeClass('active')
    jQuery(target).addClass('active').siblings('.fb-tab-pane').removeClass('active')

    #@unlockLeftWrapper() unless target == '#editField'

  #reset : (collection)->

  addOne: (model, _, options) ->
      if model.attributes[Customizer.options.mappings.LAYER_DATA] != undefined 
        #model.cid = model.attributes[Customizer.options.mappings.LAYER_DATA].id
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


      if model.get(Customizer.options.mappings.OBJECT) == 'text'
        template = Customizer.text
        model_option.text = model.get('text')

      else if model.get(Customizer.options.mappings.OBJECT) == 'image'
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
        
        if model.get('options') != undefined
          template.options = jQuery.extend(true,{}, template.options, model.get('options'));
        else
          template.options = model_option
        
     

      newTemplate = jQuery.extend(true,{}, template);

      if newTemplate.options == undefined || newTemplate.options == null
        newTemplate.options = {}


      newTemplate.options = jQuery.extend(true,{}, newTemplate.options, model_option);

      @canvasView.add(
        type : newTemplate.object
        template : newTemplate
        model : model
        canvas : @canvas
      )
      #@setDraggable();
    

  addAll: ->
    @collection.each @addOne, @
    #@canvas.discardActiveObject()

  addField: (e) ->
    _this = @ 
    id = jQuery(e.currentTarget).data('field-id')
    type = jQuery(e.currentTarget).data('field-type')
    attrs = jQuery.extend true,{}, Customizer.images[type][id]
    _this.addImageLayer(attrs)

    
  createField: (attrs, options) ->
    rf = @collection.create attrs, options
    @handleFormUpdate()
    rf

  removeLayer: (obj) ->
    if typeof obj != 'object'
      obj = @canvas.getItemByMyID(obj);

    obj.remove()
    @randerLayers()
    @canvas.renderAll();
    @getModel(obj.id).destroy()
    @handleFormUpdate()

    
    
  updateLayer: (obj, key, value) ->
    if typeof obj != 'object'
      obj = @canvas.getItemByMyID(obj);

    if(typeof key == 'object')
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

  setDraggable: ->
    ###$draggable = @$el.find(".draggable")
    $draggable.draggable(
      handle: ".handle" 
      containment: '.customizer-main'
    )###
    
  #hideShowNoResponseFields: ->
  #  @$el.find(".fb-no-response-fields")[if @collection.length > 0 then 'hide' else 'show']()

  addTextLayer: (e) ->
    text = jQuery(e.currentTarget).closest('.fb-text-field-wrapper').find('.pc-text')
    attrs = {text : text.val()}
    text = text.val "" 
    @createField Customizer.helpers.defaultLayersAttrs('text', 'text', attrs)


  addImageLayer: (data) ->
    _this = @
    _addImageLayer = (value)->
      newData = jQuery.extend(true, {}, data)

      if(newData.url && newData.full == undefined)
        newData.full = newData.url

      if newData.id != undefined
        delete newData.id
      
      if(value != undefined)
        newData.title = value

      _this.createField Customizer.helpers.defaultLayersAttrs('img', 'image', newData)

    if(Customizer.options.settings.administration)
      model = new ModelView().prompt('Please enter name.', 'Name', (value)->
        _addImageLayer(value)
      )
    else
      _addImageLayer()




    


  uploadImages: (evt) ->
    @ajax_upload_image(evt.target.files)



  randerUploadedImages : ()->
    uploadImages = sessionStorage.getItem('uploadImages');
    if uploadImages == undefined || uploadImages == null
      uploadImages = {}
    else   
      uploadImages = JSON.parse(uploadImages)
    
    _this = @
    _this.LastUploadImageId = 0
    if uploadImages == undefined || uploadImages == null || uploadImages == ""
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

    if(id == undefined)
      id = _this.LastUploadImageId
      id = if parseInt(id) > 0 then parseInt(id) else 0
      next_id = id + 1
      _this.LastUploadImageId = next_id;
    else
      id = if parseInt(id) > 0 then parseInt(id) else 1
      next_id = id

    session_data.id = next_id
    session_data.url = data.url
    session_data.moved = if data.moved == 'true' then 'true' else 'false'
    session_data.path = data.path
    del = jQuery('<span class="delete-contianer"><span class="mif-bin"></span></span>').on('click', ()->
        li = jQuery(@).closest('li')
        data = jQuery(li).data('image-data')
        
        if(data.moved != 'true')
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
    if uploadImages == undefined || uploadImages == null
      uploadImages = {}
    else   
      uploadImages = JSON.parse(uploadImages)

    if(uploadImages[id] != undefined && data == null)
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
        if data.status == 'success'
          image_url = data.url
          if(image_url != undefined && image_url != null)
            attrs = {uploadedImage : image_url}
          else if (image_temp_url != undefined && image_temp_url != null)
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
    if file.moved == 'true'
      _this.addImageLayer({full : file.url})
      return

    
    jQuery.ajax
      url : @settings.imageUploadUrl
      type : "post"
      data : {action : 'pc_added_uploaded_image', file : file}
      dataType : 'json'
      beforeSend: ()-> _this.loader.show()
      success: (data) -> 
        if data.status == 'success'
          if(li != undefined)
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
    @saveFormButton.removeAttr('disabled').text(Customizer.options.dict.SAVE_FORM)
    
  saveForm: (e) ->
    return if @formSaved
    @formSaved = true
    @saveFormButton.attr('disabled', true).text(Customizer.options.dict.ALL_CHANGES_SAVED)
    @collection.sort()
    fields = @collection.toJSON()
    newFields = [];
    if fields.length > 0
      jQuery.each(fields, (index, vlaue)-> 
        if !((vlaue.dontSync == true) || (vlaue.layer_data.dontSync == true))
          newFields.push(vlaue)
      )
    payload = JSON.stringify fields: newFields

    if Customizer.options.HTTP_ENDPOINT then @doAjaxSave(payload)
    @customizer.trigger 'save', payload


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

      if extra_attrs != undefined 
        attrs = _.extend attrs, extra_attrs

      layer = {}
      if type == 'text'  
        layer = Customizer.text
      else if type == 'img'  
        layer = Customizer.image

      attrs.object = if layer.object != undefined then layer.object else '';

      layer.defaultAttributes?(attrs) || attrs


  @options:
    BUTTON_CLASS: 'fb-button'
    HTTP_ENDPOINT: ''
    HTTP_METHOD: 'POST'
    AUTOSAVE: true
    CLEAR_FIELD_CONFIRM: false

    jsonArgs : ['id','unlockable', 'removable', 'hideLayer', 'displayInLayerBar', 'order', 'selection', 'selectable', 'locked', 'lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling', 'hasBorders', 'hasControls', 'hasRotatingPoint', 'hoverCursor', 'isResizable', 'isDraggable', 'boundingEnable', 'boundingElementName', 'boundingMode', 'stayOnTop', 'title', 'elementBoundingEnable','boundingCoordsLeft','boundingCoordsTop','boundingCoordsWidth','boundingCoordsHeight', 'clipFor', 'clipName', 'evented', 'dontSync']

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
  @cliparts: {}
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

    if opts.type == undefined
      opts.type = category


    if opts.object == undefined
      opts.object = 'image'


    if opts.id != undefined
      id = opts.id

    if opts.title == undefined && opts.name != undefined
      opts.title = opts.name

    if(Customizer.images[category] == undefined)
      Customizer.images[category] = {}

    Customizer.images[category][id] = opts


  @registerFonts: (font) ->
    if font.name == undefined
        filename = font.url.split('/').pop().split('#')[0].split('?')[0]
        font.name = filename.split('.')[0];
        font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase()
    else
      font.name = font.name.replace(/[^a-z0-9_-]/gi, '-').toLowerCase()

    if font.displayName == undefined 
      font.displayName = font.name #.replace(/[^_-]/gi, ' ');
    
    if font.src == undefined
        font.src = {};
    
    if font.url != undefined
        filename = font.url.split('/').pop().split('#')[0].split('?')[0];
        ext = filename.split('.')[1];
        if(ext != undefined)
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

  @registerClipArts: (name, opts) ->
    
    #for x in ['view', 'edit']
    #  opts[x] = _.template(opts[x])

    if opts.type == undefined
      opts.type = name

    if opts.object == undefined
      opts.object = 'image'

    Customizer.cliparts[name] = opts

  setSettings : (key, value)->
    Customizer.options.settings[key] = value

  constructor: (opts={}) ->
    _.extend @, Backbone.Events
    args = _.extend opts, {customizer: @}
    @mainView = new CustomizerView args
    @mainView
    

window.Customizer = Customizer
if module?
  module.exports = Customizer
else
  window.Customizer = Customizer
