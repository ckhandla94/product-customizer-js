fabric.Object::set	
	cornerSize: 40	
	transparentCorners: false
	borderColor: '#16A085'
	cornerColor: '#16A085'


fabric.Canvas::customiseControls {
	tr:
		settings: {
			cornerSize: 45
		},
		action: 'remove'
		cursor: 'pointer'
}, ->
	canvas.renderAll()
	return

fabric.Object::customiseCornerIcons({
	tr: {
		icon: 'data:image/png;base64,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'
	}
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
	},
	
});



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
			
			scw = obj.canvas.width / image.width;
			
			if scw < 1
				image.width = obj.canvas.width;
				image.height = image.height * scw;
	
			sch = obj.canvas.height / image.height;
			if sch < 1
				image.height = obj.canvas.height;
				image.width = image.width * sch;
			
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

			model = obj.model;


			_this.update_layer_data(image, model.attributes);

			if(model.get('isResizable') == false)
				_this.update_layer_data(image, {
					isResizable : false 
					lockScalingX : true
					lockScalingY : true
				})
			else
				_this.update_layer_data(image, {
					isResizable : true 
					lockScalingX : false
					lockScalingY : false
				})


			if(model.get('isDraggable') == false)
				_this.update_layer_data(image, {
						isDraggable : false 
						lockMovementX : true
						lockMovementY : true
					})
			else
				_this.update_layer_data(image, {
					isDraggable : true 
					lockMovementX : false
					lockMovementY : false
				})

			if(model.get('hasControls') == false)
				_this.update_layer_data(image, {
						hasControls: false
					})
			else
				_this.update_layer_data(image, {
					hasControls: true
				})



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
		obj.canvas.renderAll();
		obj.model.trigger 'change'

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
		#'click #pc-text-panel .add-text': 'addTextLayer'
		'change #pc-upload-image-panel .pc-upload-image': 'uploadImages'
		'click .canvas-actions .fullscreen': 'fullscreen'
		'click .canvas-actions .download': 'savePDF'
		'click .canvas-actions .zoom-in': (e)-> @canvas.setZoom(@canvas.getZoom() * 1.1 )
		'click .canvas-actions .zoom-out': (e)-> @canvas.setZoom(@canvas.getZoom() / 1.1 )
		'click .canvas-actions .zoom-reset': (e)-> @canvas.setZoom(1)
		'click .canvas-actions .preview': 'saveImage'
		'click .canvas-actions .social_share_popop': 'social_share_popop'
	
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

		#Customizer.registerText()
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
		@listenTo @canvas, "after:render", (evt)-> @calcOffset()
		
		jQuery(window).on 'resize', @reSizeWindow.bind(@)

		#if @bootstrapData.views?
		#  @productViewCollection.reset(@productViewData.views)
		#else if @bootstrapData.fields?
		
		@collection.reset(@bootstrapData)


		#addOneProductView :()->
			#@addOne
		#resetProductView :()->
		if(@productViewCollection.models.length > 0)
			activeView = @productViewCollection.models[0]
			@reset()
		

	
	reSizeWindow : ()->
		originalWidth = 1920;
		originalHeight = 1080;
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
			width: 1920, 
			height: 1080

		if Customizer.options.settings.canvas is undefined
			Customizer.options.settings.canvas = {}

		@canvasAttr = jQuery.extend(true, {}, Customizer.options.settings.canvas, defaultCanvasArgs)

		canvas = new fabric.Canvas(el[0],
			@canvasAttr
		)
		

		@canvas = canvas
		@reSetCanvasSize();
		#@randerLayers()
		#@randerUploadedImages()

		_this = @;

		

		$(document).on 'click','.js-social-share', (e) ->
			console.log(this);
			e.preventDefault()
			_this.getBlob((blob)->
				_this.openSocialSharePopup(e, blob)
			)

		@loader.hide()
		return @

	reSetCanvasSize : ()->
		@canvas.setWidth(1920)
		@canvas.setHeight(1080)

	###randerLayers : (canvas)->
		layers = @canvas.getObjects()

		@layersView = new ViewLayerView
			parentView: @
			canvas: @canvas

		$el = @layersView.render().$el
		@$el.find('#pc-layers').html($el) ###

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


	social_share_popop : (e)->
		console.log e;
		modelView = new ModelView();
		modelView.alert('<a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="twitter" data-share-text="Share this awesome link on Twitter" data-share-title="Twitter Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Twitter</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="facebook" data-share-text="Share this awesome link on Facebook" data-share-title="Facebook Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Facebook</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="linkedin" data-share-text="Share this awesome link on LinkedIn" data-share-title="LinkedIn Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on LinkedIn</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="googleplus" data-share-text="Share this awesome link on Google+" data-share-title="Google+ Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Google+</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="pinterest" data-share-text="Share this awesome link on Pinterest" data-share-title="Pinterest Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Pinterest</a> <a class="share-button js-social-share" data-share-url="http://mightymedia.nl" data-share-network="reddit" data-share-text="Share this awesome link on Reddit" data-share-title="Reddit Share" data-share-via="" data-share-tags="" data-share-media="" href="#">Share on Reddit</a> ', 'Share');

	openSocialSharePopup : (e, blob) ->
		self = this
		imgData = @exportCanvas().toDataURL(format: 'jpeg' );
		
		doShare = false
		shareUrl = window.location #$(e.currentTarget).data('share-url')
		shareNetwork = $(e.currentTarget).data('share-network')
		shareText = $(e.currentTarget).data('share-text')
		shareTitle = $(e.currentTarget).data('share-title')
		shareVia = $(e.currentTarget).data('share-via')
		shareTags = $(e.currentTarget).data('share-tags')
		shareMedia = imgData #self.$element.data('share-media')
		networkShareUrl = '';
	
		if typeof shareUrl != 'undefined' and typeof shareNetwork != 'undefined'
			doShare = true
		
		if doShare == true
			switch shareNetwork
				when 'facebook'
					networkShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl)
				when 'googleplus'
					networkShareUrl = 'https://plus.google.com/share?url=' + encodeURIComponent(shareUrl)
				when 'linkedin'
					networkShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(shareUrl) + '&source=' + encodeURIComponent(shareUrl)
					if typeof shareTitle != 'undefined' and shareTitle != ''
						networkShareUrl += '&title=' + encodeURIComponent(shareTitle)
					if typeof shareText != 'undefined' and shareText != ''
						networkShareUrl += '&summary=' + encodeURIComponent(shareText)
				when 'pinterest'
					networkShareUrl = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(shareUrl)
					if typeof shareMedia != 'undefined' and shareMedia != ''
						networkShareUrl += '&media=' + encodeURIComponent(shareMedia)
					if typeof shareText != 'undefined' and shareText != ''
						networkShareUrl += '&description=' + encodeURIComponent(shareText)
					if typeof shareTags != 'undefined' and shareTags != ''
						networkShareUrl += '&hashtags=' + shareTags
				when 'reddit'
					networkShareUrl = 'http://www.reddit.com/submit/?url=' + encodeURIComponent(shareUrl)
				when 'twitter'
					networkShareUrl = 'https://twitter.com/intent/tweet?&url=' + encodeURIComponent(shareUrl)
					if typeof shareText != 'undefined' and shareText != ''
						networkShareUrl += '&text=' + encodeURIComponent(shareText)
					if typeof shareVia != 'undefined' and shareVia != ''
						networkShareUrl += '&via=' + encodeURIComponent(shareVia)
					if typeof shareTags != 'undefined' and shareTags != ''
						networkShareUrl += '&hashtags=' + shareTags
				else
					return false
		if doShare
			console.log blob
			console.log networkShareUrl
			# Calculate the position of the popup so it’s centered on the screen.
			#@windowPopup networkShareUrl, 500, 300
			width = 500
			height = 300
			left = screen.width / 2 - (width / 2)
			top = screen.height / 2 - (height / 2)
			window.open networkShareUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
		return


	dataURLtoBlob : (dataUrl, callback) ->
		req = new XMLHttpRequest
		req.open 'GET', dataUrl
		req.responseType = 'arraybuffer'
	 
		req.onload = (e) ->
		
			mime = @getResponseHeader('content-type')
			callback new Blob([ @response ], type: mime)
			return

		req.send()
		return

	getBlob :  (callback)->
		imgData = @exportCanvas().toDataURL(format: 'jpeg' );

		@dataURLtoBlob imgData, (blob) ->
			
			callback(blob)
			return


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

		###if(li.length is 0)
			@randerLayers()
		else
			if(!li.hasClass('active'))
				@$el.find('#pc-layers ul > li').removeClass('active')
				li.addClass('active')###

	updateModel: (id)-> 
		obj = @canvas.getItemByMyID id
		model = @getModel id
		data = obj.toJSON(Customizer.options.jsonArgs)

		jQuery.each data, (index, vlaue)->
			model.set(Customizer.options.mappings.LAYER_DATA+'.'+index, vlaue)

		if model.get('type') is 'text'
			model.set('text', obj.__text)

		model.trigger 'change'


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



	addImageLayer: (data) ->
		_this = @
		obj = _.where(@canvas.getObjects(), { name: 'background' });
		if(obj[0] != undefined)
			obj = obj[0];

		_replace = (obj)->
			fabric.util.loadImage( data.full, (img) ->
				obj.setElement img 

				obj.canvas.renderAll();
				obj.model.set 'full', data.full
			)
			return;
			
		_addNew = ()->
			_addImageLayer = ()->
				newData = jQuery.extend(true, {}, data)

				if(newData.url and newData.full is undefined)
					newData.full = newData.url

				if newData.id isnt undefined
					delete newData.id
			
				return _this.createField Customizer.helpers.defaultLayersAttrs('img', 'image', newData)
				
			return _addImageLayer()


		if obj != undefined && obj != null && obj.name != undefined
			_replace(obj)
		else
			obj = _addNew();


	uploadImages: (evt) ->

		@background_upload_image(evt.target.files)
		#@ajax_upload_image(evt.target.files)

	randerUploadedImages : ()->
		uploadImages = sessionStorage.getItem('uploadImages');
		if uploadImages == undefined || uploadImages == null
			uploadImages = {};
		
		@add_uploaded_image(uploadImages)
		#@randerUploadedImage(data)

	updateSession : (data)->
		if data is undefined or uploadImages is null
			uploadImages = {}
		else   
			uploadImages = data;


		sessionStorage.setItem 'uploadImages', JSON.stringify(uploadImages)




	background_upload_image : (files)->
		image_data = "";
		_this = @		

		$ul = _this.$el.find('.pd-upload-zone')
		$preview = $ul.find('.image-preview');

		setCanvasImage = ()->	
			_this.$uploadCrop.croppie('result', {
				type: 'base64',
				size: { width : 1920, height : 1080}
			}).then((image_data)->
				$preview.css('background-image', "url('#{image_data}')");
				_this.canvas.setBackgroundImage(image_data, _this.canvas.renderAll.bind(_this.canvas), {
					width: _this.canvas.width,
					height: _this.canvas.height,
					originX: 'left',
					originY: 'top',
				});
			)

		is_update = false;
		if files && files[0]
			reader = new FileReader();
			
			if _this.$uploadCrop != undefined
				_this.$uploadCrop.croppie('destroy');

			_this.$uploadCrop = $('#upload-image').croppie({
				showZoomer : false,
				viewport: { width: 192, height: 108 },
				boundary: { width: "100%", height: 200 },
				update : (croppe)->
					is_update = true;
				#enableExif: true
			});

			setInterval(()=>
				if is_update
					is_update = false;
					setCanvasImage();
			, 1000)

			reader.onload = (e)->
				image_data = e.target.result;
				$('.upload-image').addClass('ready');
				_this.$uploadCrop.croppie('bind', {
					url: e.target.result
				}).then(()->
					setCanvasImage();
				);
			reader.readAsDataURL(files[0]);
				

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

	add_uploaded_image : (file)->

		_this = @
		#if file.moved is 'true'
		_this.addImageLayer({
			full : file.url 
			fit : true
			name : 'background'
			isResizable : false 
			hasControls: false
			isDraggable : false 
		})


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

	###@registerText: () ->
		opts =
			type : 'text'
			object : 'text'
		Customizer.text = opts###

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
