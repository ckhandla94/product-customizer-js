fabric.Object::set	
	cornerSize: 15	
	transparentCorners: false
	borderColor: '#16A085'
	cornerColor: '#16A085'
	hasRotatingPoint : false
	

fabric.Object::setControlsVisibility
	mt: false, 
	mb: false, 
	ml: false, 
	mr: false, 
	bl: true,
	br: true, 
	tl: true, 
	tr: true,
	mtr: false, 



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




	add: (obj)-> 
		console.log obj
		if obj.type is undefined
			obj.type = obj.type 
		new_obj = @[obj.type](obj);



	addPlaceholder: (canvas, _this)-> 

		options = _this.getDefault({
			bringToFront: true
			bottom: 0
			left: 0
			top: canvas.height - 60
			width: canvas.width
			height: 60
			fill: '#fff'
			hasBorders: false
			hasControls: false
			hasRotatingPoint: false
			isDraggable: false
			lockMovementX: true
			lockMovementY: true
		});

		rect = new fabric.Rect(options);

		text1 = new fabric.Text("PLANT TODAY TO ENJOY TOMORROW!", {
			bringToFront: true,
			fontSize: 22,
			top: canvas.height - 50,
			fontWidth:'bold',
			hasBorders: false,
			hasControls: false,
			hasRotatingPoint: false,
			isDraggable: false,
			lockMovementX: true,
			lockMovementY: true,
			textAlign : "center",
			#width: canvas.width
		});
		text2 = new fabric.Text("www.platingpuzzle.com", {
			bringToFront: true,
			fontSize: 20,
			top: canvas.height - 30,
			textAlign : "center",
			#width: canvas.width,
		});


		group = new fabric.Group( [rect, text1, text2], {
			bringToFront: true, 
			#width: canvas.width,
			hasBorders: false,
			hasControls: false,
			hasRotatingPoint: false,
			isDraggable: false,
			lockMovementX: true,
			lockMovementY: true,
		});
		

		#text1_left = (group.width / 2) - (text1.width / 2)
		#text1.set({left : text1_left })

		#text1.set({left : 0})
		text1.set({
			#left: (group.width / 2),
			#originX: 'left'
		});
		text1.setCoords();

		#text1.set({left : 0})
		text2.set({
			#left: (group.width / 2),
			#originX: 'left'
		});
		text2.setCoords();
		
		#group_left = (canvas.width / 2) - (group.width / 2)
		#group.set({left : group_left })

		console.log([canvas, group.width, text2.width])

		canvas.add(group)
		#canvas.add(rect)
		canvas.renderAll()
		



	image: (obj) ->
		_this = @
		options = obj.options

		if obj.full isnt undefined
			url = obj.full
		else if obj.imageDate isnt undefined
			url = obj.imageDate

		img = fabric.Image.fromURL obj.full, (image)->
			
			scw = obj.canvas.width / image.width;
			
			if scw < 1
				image.width = obj.canvas.width;
				image.height = image.height * scw;
	
			sch = obj.canvas.height / image.height;
			if sch < 1
				image.height = obj.canvas.height;
				image.width = image.width * sch;

			defaultOptions = jQuery.extend(true,{}, Customizer.image, {
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
			obj.canvas.renderAll()

			model = obj.model;

	
	getDefault : (options, obj)->
		defaultOptions = {
				#id: obj.model.cid ? obj.model.cid : null
				#model: obj.model ? obj.model : {}
				#template: obj.template ? obj.template : {}
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
				hasBorders: true
				hasControls: true
				hasRotatingPoint: false
				#lockMovementX: false
				#lockMovementY: false
			}


		jQuery.extend(true,{}, defaultOptions, options);
	


class CustomizerView extends Backbone.View
	SUBVIEWS: []
	canvasView : new CanvasView()
	events:
		'change .pc-upload-image': 'uploadImages'
		'click .change_background': 'change_background'
		'click .canvas-actions .fullscreen': 'fullscreen'
		'click .canvas-actions .download': 'savePDF'
		'click .canvas-actions .social_share_popop': 'social_share_popop'
	
	initialize: (options) ->
		{selector, @customizer, @bootstrapData, settings, @productViewData} = options
		if selector?
			@setElement jQuery(selector) 

		defaultSettings =
			administration : false
			canvas :
				object :
					text  : {}
					rect  : {}
					images: {}

			boundingBoxCoords: null


		@canvasView.initialize(@)


		@settings = jQuery.extend(true, {},defaultSettings, settings);

	
		@collection = new CustomizerCollection({parentView : @})
		@collection.bind 'add', @addOne, @
		@collection.bind 'reset', @reset, @
		@collection.bind 'change', @handleFormUpdate, @


		@productViewCollection = new CustomizerProductCollection({parentView : @})
		@productViewCollection.bind 'add', @addOneProductView, @
		@productViewCollection.bind 'reset', @resetProductView, @

		@render()
		@reSizeWindow()
		
	

		@canvas.parentView = @


		@listenTo @canvas, "mouse:up", (o) -> @isDown = false;
		@listenTo @canvas, "mouse:down", (o) -> @isDown = true;
		@listenTo @canvas, "after:render", (evt)-> @calcOffset()
		
		@listenTo @canvas, "object:added", @updateOrder




		
		
		
		jQuery(window).on 'resize', @reSizeWindow.bind(@)

		
		@collection.reset(@bootstrapData)

	
		if(@productViewCollection.models.length > 0)
			activeView = @productViewCollection.models[0]
			@reset()
		

	
	updateOrder : (evt)->
		canvas = evt.target.canvas;
		objs = canvas.getObjects();
		jQuery.each objs, (index, obj)->
			if obj.bringToFront == true
				console.log obj
				canvas.bringForward(obj)
		canvas.renderAll()

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
		@renderCanvas()
		_this = @;
		$(document).on 'click','.js-social-share', (e) ->
			e.preventDefault()
			_this.getBlob((blob)->
				_this.openSocialSharePopup(e, blob)
			)

		@loader.hide()
		return @

	renderCanvas : ()->
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

		@canvasView.addPlaceholder(@canvas, @canvasView)


	reSetCanvasSize : ()->
		@canvas.setWidth(1920)
		@canvas.setHeight(1080)




	saveImage : ()->
		window.open(@exportCanvas().toDataURL(), "Preview", "width=#{@canvas.getWidth()}, height=#{@canvas.getWidth()}")

	getImageData : ()->
		@exportCanvas().toDataURL()

	exportCanvas : ()->
		@canvas

	savePDF : ()->
		download = (filename, dataUrl) ->
			element = document.createElement('a')
			dataBlob = dataURLtoBlob(dataUrl)
			element.setAttribute 'href', URL.createObjectURL(dataBlob)
			element.setAttribute 'download', filename
			element.style.display = 'none'
			document.body.appendChild element
			element.click()
			clickHandler = undefined
			element.addEventListener 'click',
			clickHandler = ->
				# ..and to wait a frame
				requestAnimationFrame ->
					URL.revokeObjectURL element.href
					return
				element.removeAttribute 'href'
				element.removeEventListener 'click', clickHandler
				return

			document.body.removeChild element
			return

		# from Abhinav's answer at  https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error/

		dataURLtoBlob = (dataurl) ->
			parts = dataurl.split(',')
			mime = parts[0].match(/:(.*?);/)[1]
			if parts[0].indexOf('base64') != -1
				bstr = atob(parts[1])
				n = bstr.length
				u8arr = new Uint8Array(n)
				while n--
					u8arr[n] = bstr.charCodeAt(n)
				new Blob([ u8arr ], type: mime)
			else
				raw = decodeURIComponent(parts[1])
				new Blob([ raw ], type: mime)

		

		try 
			width = @canvas.getWidth();
			height = @canvas.getHeight();

			$oldColor = @canvas.backgroundColor
			@canvas.backgroundColor = '#fff'
			imgData = @exportCanvas().toDataURL(format: 'jpeg' )
			@canvas.backgroundColor = $oldColor
			@canvas.renderAll();

			download("product.jpeg", imgData)
			

		catch e
			console.log("Error description: " + e.message);


	social_share_popop : (e)->
		
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

	reset: ->
		@addAll()

	updateModel: (id)-> 
		obj = @canvas.getItemByMyID id
		model = @getModel id
		data = obj.toJSON(Customizer.options.jsonArgs)

		jQuery.each data, (index, vlaue)->
			model.set(Customizer.options.mappings.LAYER_DATA+'.'+index, vlaue)

		if model.get('type') is 'text'
			model.set('text', obj.__text)

		model.trigger 'change'


	getModel: (id)-> 
		@collection.find((model)-> model.cid is id)

	addOne: (model, _, options) ->
		
		console.log(options)

		new_options = jQuery.extend(true,{}, options.options);
		

		@canvasView.add(
			type : options.type
			options : new_options
			full :  model.get('full')
			model : model
			canvas : @canvas
		)
		

	addAll: ->
		@collection.each @addOne, @
		
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
		if Customizer.has_iamge 
			return
		

		Customizer.has_iamge = true;
		obj = _.where(@canvas.getObjects(), { name: data.name });
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
				newData.type = 'image'
				if(newData.url and newData.full is undefined)
					newData.full = newData.url

				if newData.id isnt undefined
					delete newData.id
				rf = _this.collection.create newData, newData
				return rf
				
			return _addImageLayer()


		if obj != undefined && obj != null && obj.name != undefined
			_replace(obj)
		else
			obj = _addNew();


	change_background: (evt) ->
		#_this.$el.find(".pc-canvas").height(600);
		@$el.find(".canvas-container").hide();
		@$el.find(".background-upload-container").show();
		#@$el.find('.pc-upload-image').click();

	uploadImages: (evt) ->
		@background_upload_image(evt.target.files, evt.target)
		

	clearFileInput : (ele) ->
		console.log(ele);
		oldInput = ele; 

		newInput = document.createElement("input"); 

		newInput.type = "file"; 
		newInput.id = oldInput.id; 
		newInput.name = oldInput.name; 
		newInput.className = oldInput.className; 
		newInput.style.cssText = oldInput.style.cssText; 
		#TODO: copy any other relevant attributes 

		oldInput.parentNode.replaceChild(newInput, oldInput); 

	background_upload_image : (files, ele)->

		image_data = "";
		_this = @		

		$ul = _this.$el.find('.pd-upload-zone')
		$preview = $ul.find('.image-preview');
		#console.log(files);
		setCanvasImage = ()->

			_this.$uploadCrop.croppie('result', {
				type: 'base64',
				size: { width : 1920, height : 1080}
			}).then((image_data)->
				_this.$el.find(".pc-canvas").height(600);
				_this.$el.find(".canvas-container").show();
				_this.$el.find(".background-upload-container").hide();
				
				_this.reSizeWindow();

				_this.addImageLayer(Customizer.image)

				#$preview.css('background-image', "url('#{image_data}')");
				_this.canvas.setBackgroundImage(image_data, _this.canvas.renderAll.bind(_this.canvas), {
					width: _this.canvas.width,
					height: _this.canvas.height,
					originX: 'left',
					originY: 'top',
				});
			)
			

			#@canvas.setWidth(1920)
			#_this.canvas.setHeight(700)


		

		is_update = false;

		Customizer.background = true;

		if files && files[0]
			reader = new FileReader();
			
			if _this.$uploadCrop != undefined
				_this.$uploadCrop.croppie('destroy');

			_this.$uploadCrop = $('#upload-image').croppie({
				showZoomer : false,
				viewport: { width: 192, height: 108 },
				boundary: { width: 355, height: 200 },
				
				update : (croppe)->
					is_update = true;
				#enableExif: true
			});
			#_this.$uploadCrop.croppie 'setZoom', 1
			###setInterval(()=>
				if is_update
					is_update = false;
					setCanvasImage();
			, 1000)
			###

			reader.onload = (e)->
				image_data = e.target.result;
				$('.upload-image').addClass('ready');
				_this.$uploadCrop.croppie('bind', {
					url: e.target.result
				}).then(()->
					_this.$uploadCrop.croppie('setZoom', 0)
					setCanvasImage();
				);

				_this.clearFileInput(ele)
				

			reader.readAsDataURL(files[0]);
				



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

	watermarkImage = (elemImage, text) ->
		# Create test image to get proper dimensions of the image.
		###testImage = new Image

		testImage.onload = ->
		h = testImage.height
		w = testImage.width
		img = new Image
		# Once the image with the SVG of the watermark is loaded...

		img.onload = ->
			# Make canvas with image and watermark
			canvas = Object.assign(document.createElement('canvas'),
			width: w
			height: h
			)
				ctx = canvas.getContext('2d')
				ctx.drawImage testImage, 0, 0
				ctx.drawImage img, 0, 0
				# If PNG can't be retrieved show the error in the console
			try
			elemImage.src = canvas.toDataURL('image/png')
			catch e
			console.error 'Cannot watermark image with text:',
			  src: elemImage.src
			  text: text
			  error: e
			return

		# SVG image watermark (HTML of text at bottom right)
		img.src = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" height="' + h + '" width="' + w + '">' + '<foreignObject width="100%" height="100%">' + '<div xmlns="http://www.w3.org/1999/xhtml">' + '<div style="position: absolute;' + 'right: 0;' + 'bottom: 0;' + 'font-family: Tahoma;' + 'font-size: 10pt;' + 'background: #000;' + 'color: #fff;' + 'padding: 0.25em;' + 'border-radius: 0.25em;' + 'opacity: 0.6;' + 'margin: 0 0.125em 0.125em 0;' + '">' + text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div>' + '</div>' + '</foreignObject>' + '</svg>')
		return

		testImage.src = elemImage.src###
		return

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

		settings : 
			  canvas : {}

		jsonArgs : ['id','unlockable', 'removable', 'hideLayer', 'displayInLayerBar', 'order', 'selection', 'selectable', 'locked', 'lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling', 'hasBorders', 'hasControls', 'hasRotatingPoint', 'hoverCursor', 'isResizable', 'isDraggable', 'boundingEnable', 'boundingElementName', 'boundingMode', 'stayOnTop', 'title', 'elementBoundingEnable','boundingCoordsLeft','boundingCoordsTop','boundingCoordsWidth','boundingCoordsHeight', 'clipFor', 'clipName', 'evented', 'dontSync','defaultColor','allowedColors', 'object','administration']

		mappings:
			DATA_ID : 'data_id'
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


	@has_iamge: false;
	@background: false;
	@image: false


	setImage : (url)->
		url.object = "image"
		url.name = "product"
		Customizer.image = url

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
