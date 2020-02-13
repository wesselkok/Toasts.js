// Toast
class Toast {

	// Constructor: Initialize Toast with options
    constructor (options) {
		
		// 1. Extend options
        var _options = $.extend({
			
			// Basic Options
            'title': '',
			'description': '',
			'type': 'success',
			'html': null,

			// Detailed Options
			'closeButton': true,
			'closeButtonHtml': null,
			'button': null,
			'buttonHtml': null,
			'position': 'bottom-left',
			'newestOnTop': true,
			
			// Transitions
			'showMethod': 'slideDown',
			'hideMethod': 'fadeOut',
			'showEasing': 'linear',
			'hideEasing': 'linear',
			
			// Duration
			'showDuration': 300,
			'hideDuration': 300,
			'timeOut': 5000,
			  
			// Callbacks
			'onShown': null,
			'onHidden': null,
			'onClick': null,
			'onCloseClick': null
			
        }, options);
		
		// 2. Set options
		this.options = _options;
		
		// 3. Document get container
		if ($(".toast-container." + this.options.position).length <= 0) {
			
			// If no container => create
			$('<div class="toast-container ' + this.options.position + '"></div>').appendTo("body");
		}

		// 4. Basic html
		var toastHtml = '<div class="toast ' + this.options.type +'"><div class="toast-content">';
		if (this.options.html !== null){

			// Raw Html
			toastHtml+= this.options.html;
		} else {

			if (this.options.type === 'success' || this.options.type === 'info' || this.options.type === 'warning' || this.options.type === 'error'){
				// Icon
				toastHtml += '<div class="icon">';
				if (this.options.type === 'success') toastHtml += '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>';
				else if (this.options.type === 'info') toastHtml += '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>';
				else if (this.options.type === 'warning') toastHtml += '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>';
				else if (this.options.type === 'error') toastHtml += '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>';
				toastHtml += '</div>';
			}
			// Content
			toastHtml += '<div class="content ' + (this.options.title !== '' && this.options.description !== '' ? 'margin' : '') + '">';
			if (this.options.title !== ''){
				toastHtml += '<div class="title">' + this.options.title + '</div>';
			}
			if (this.options.description !== ''){
				toastHtml += '<div class="description">' + this.options.description + '</div>';
			}
			toastHtml += '</div>'

			// CloseButtonHtml
			if (this.options.closeButtonHtml) toastHtml += this.options.closeButtonHtml;

			// Action Button
			else if (this.options.button && this.options.button.label) toastHtml += '<div class="button" ' + (this.options.button.attributes ? this.options.button.attributes : '') + '>' + this.options.button.label + '</div>';

			// ActionButtonHtml
			else if (this.options.buttonHtml) toastHtml += this.options.buttonHtml;

			// Close
			else if (this.options.closeButton) toastHtml += '<div class="close"><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg></div>';


		}

		// Closing containers
		toastHtml += '</div></div>';

		// 5. Create new toast
		if (this.options.newestOnTop){
			this.content = $(toastHtml).prependTo(".toast-container." + this.options.position);
		} else {
			this.content = $(toastHtml).appendTo(".toast-container." + this.options.position);
		}
		

		// 6. Create binds
		var that = this;

		// Bind: Close button
		this.content.find(".close").click(function() { 
			// Hide toast
			that.hide();

			// Callback
			if (that.options.onCloseCallback !== null && that.options.onCloseCallback instanceof Function){
				that.options.onCloseCallback();
			}
		});

		// Bind: on click
		this.content.click(function() {
			// Callback
			if (that.options.onClick !== null && that.options.onClick instanceof Function){
				that.options.onClick();
			}
		});

		// Push Toast
		// Toast.allInstances.push(this);
	}
	

	//=== Static constructors

	// Static: Success
	static success(title, description, options)
	{
		// 1. Extend options
		var _options = Toast.extendOptions(options);

		// 2. Set basic info
		_options.title = title;
		_options.description = description;
		_options.type = 'success';

		// 3. Return new Toast
		return new Toast(_options).show();
	}

	// Static: Info
	static info(title, description, options)
	{
		// 1. Extend options
		var _options = Toast.extendOptions(options);

		// 2. Set basic info
		_options.title = title;
		_options.description = description;
		_options.type = 'info';

		// 3. Return new Toast
		return new Toast(_options).show();
	}

	// Static: Warning
	static warning(title, description, options)
	{
		// 1. Extend options
		var _options = Toast.extendOptions(options);

		// 2. Set basic info
		_options.title = title;
		_options.description = description;
		_options.type = 'warning';

		// 3. Return new Toast
		return new Toast(_options).show();
	}

	// Static: Error
	static error(title, description, options)
	{
		// 1. Extend options
		var _options = Toast.extendOptions(options);

		// 2. Set basic info
		_options.title = title;
		_options.description = description;
		_options.type = 'error';

		// 3. Return new Toast
		return new Toast(_options).show();
	}

	// Static: Custom
	static custom(html, type, options)
	{
		// 1. Extend options
		var _options = Toast.extendOptions(options);

		// 2. Set basic info
		_options.html = html;
		_options.type = type;

		// 3. Return new Toast
		return new Toast(_options).show();
	}
	

	//=== Static helpers

	// // Static: hide All toasts
	// static hideAll(){
	// 	Toast.allInstances.forEach(x => x.hide());
	// };

	// Static: extend options
	static extendOptions(options){
		
		// Return
		return $.extend({
					
			// Basic Options
            'title': '',
			'description': '',
			'type': 'success',
			'html': null,

			// Detailed Options
			'closeButton': true,
			'closeButtonHtml': null,
			'button': null,
			'buttonHtml': null,
			'position': 'bottom-left',
			'newestOnTop': true,
			
			// Transitions
			'showMethod': 'slideDown',
			'hideMethod': 'fadeOut',
			'showEasing': 'linear',
			'hideEasing': 'linear',
			
			// Duration
			'showDuration': 300,
			'hideDuration': 300,
			'timeOut': 5000,
			  
			// Callbacks
			'onShown': null,
			'onHidden': null,
			'onClick': null,
			'onCloseClick': null
			
		}, options);
	}


	//=== Functions

	// Function: Show toast
	show(){
		
		// Store instance in var
		var that = this;

		// Show with method
		if (this.options.showMethod === 'slideDown'){
			$(this.content).slideDown(this.options.showDuration, this.options.showEasing, function () {
				// Auto hide
				if (that.options.timeOut > 0) setTimeout(that.hide.bind(that), that.options.timeOut);

				// Callback
				if (that.options.onShown !== null && that.options.onShown instanceof Function){
					that.options.onShown();
				}
			});
		} else if (this.options.showMethod === 'fadeIn'){
			$(this.content).fadeIn(this.options.showDuration, this.options.showEasing, function () {
				// Auto hide
				if (that.options.timeOut > 0) setTimeout(that.hide.bind(that), that.options.timeOut);

				// Callback
				if (that.options.onShown !== null && that.options.onShown instanceof Function){
					that.options.onShown();
				}
			});
		} else {
			$(this.content).show(this.options.showDuration, this.options.showEasing, function () {
				// Auto hide
				if (that.options.timeOut > 0) setTimeout(that.hide.bind(that), that.options.timeOut);

				// Callback
				if (that.options.onShown !== null && that.options.onShown instanceof Function){
					that.options.onShown();
				}
			});
		}
		
		
	}
	
	// Function: Hide toast
	hide(){

		// Store instance in var
		var that = this;

		// Hide with method
		if (this.options.hideMethod === 'slideUp'){
			$(this.content).slideUp(this.options.hideDuration, this.options.hideEasing, function() {
				// Remove from DOM
				$(that.content).remove();

				// Callback
				if (that.options.onHidden !== null && that.options.onHidden instanceof Function){
					that.options.onHidden();
				}
			});
		} else if (this.options.hideMethod === 'fadeOut'){
			$(this.content).fadeOut(this.options.hideDuration, this.options.hideEasing, function() {
				// Remove from DOM
				$(that.content).remove();

				// Callback
				if (that.options.onHidden !== null && that.options.onHidden instanceof Function){
					that.options.onHidden();
				}
			});
		} else {
			$(this.content).hide(this.options.hideDuration, this.options.hideEasing, function() {
				// Remove from DOM
				$(that.content).remove();

				// Callback
				if (that.options.onHidden !== null && that.options.onHidden instanceof Function){
					that.options.onHidden();
				}
			});
		}

		// // Remove from instances
		// var i = 0;
		// while (Toast.allInstances[i] !== that) { i++; }
		// Toast.allInstances.splice(i, 1);
	}
}

// // Toast instances
// Toast.allInstances = [];