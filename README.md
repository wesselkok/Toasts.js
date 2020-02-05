# Toasts.js
**Toasts.js** is a Javascript library for non-blocking notifications where jQuery is required. The goal is to create a simple and lightweight library that can be used in every project.

## Current Version
1.0.0

## Demo
- Demo can be found at ...

## Download
- [toasts.min.js](https://raw.githubusercontent.com/wesselkok/Toasts.js/master/toasts.min.js)
- [toasts.min.css](https://raw.githubusercontent.com/wesselkok/Toasts.js/master/toasts.min.css)

## Wiki and Change Log
[Wiki including Change Log](https://github.com/wesselkok/Toasts.js/wiki)

## Quick Start

### 3 Easy Steps
1. Link to toasts.min.css `<link href="toasts.min.css" rel="stylesheet"/>`

2. Link to toasts.min.js `<script src="toasts.min.js"></script>`

3. Use Toasts.js to display a toast for success, info, warning, error or custom message
  ```js
  
  // Display a Success Toast
  var myToast = new Toast({title: 'Success', description: 'Your purchase has been confirmed!', type: 'success'}).show();
  
  // Display an Error Toast
  var myToast = new Toast({title: 'Sorry,', description: 'Something went wrong.', type: 'error'}).show();
  
  ```

### Other Options
```js

// Create a Toast and display after x seconds
var myToast = new Toast({title: 'Sorry,', description: 'Something went wrong.', type: 'error'});
var x = 300;
setTimeout(myToast.show(), x);

// Display an info Toast, with a title and description
var myToast = new Toast({title: 'Friend Request', description: 'John Doe wants to be friends with you.', type: 'info'}).show();

// Display an error Toast, with a title
var myToast = new Toast({title: 'Error', type: 'error'}).show();

// Display a custom Toast, with a title, where your_class_name is your custom class
var myToast = new Toast({title: 'Error', type: 'your_class_name'}).show();

// Remove created toast
myToast.remove()

```

### Use HTML instead of the Title and Description option
In case you want to use HTML inside op the Toast
```js
var myToast = new Toast({html: '<div>My custom div</div>', type: 'your_class_name'}).show();
````

### Close Button
Optionally disable the close button
```js
var myToast = new Toast({title: 'Success', type: 'success', closeButton: false}).show();
````

### Display Sequence and Position
Show newest Toast at the bottom (top is default)
```js
var myToast = new Toast({title: 'Success', type: 'success', newestOnTop: false}).show();
```

Show Toast at other positions (`bottom-left` is default, other predefined positions are: `top-left`, `top-right`, `bottom-right`)
```js
var myToast = new Toast({title: 'Success', type: 'success', position: 'top-right'}).show();
```

Show Toasts at custom positions, where `custom_position_class` is the class for the custom created container
```js
var myToast = new Toast({title: 'Success', type: 'success', position: 'custom_position_class'}).show();
```

### Callbacks
```js
// Define a callback for when the Toast is shown/hidden/clicked
var myToast = new Toast({title: 'Success', type: 'success', onShown: function() { console.log('Hello'); }}).show();
var myToast = new Toast({title: 'Success', type: 'success', onHidden: function() { console.log('Goodbye'); }}).show();
var myToast = new Toast({title: 'Success', type: 'success', onClick: function() { console.log('Clicked'); }}).show();
var myToast = new Toast({title: 'Success', type: 'success', onCloseClick: function() { console.log('Close button clicked'); }}).show();
```

### Transitions Options
Toasts.js supplies default transition methods, so you do not have to provide any of these settings. However you have th option to override the transition methods if you like. 

Change Toast show transition method (default is `slideDown`, other options are: `fadeIn` or `show`)
```js
var myToast = new Toast({title: 'Success', type: 'success', showMethod: 'fadeIn'}).show();
```
Change Toast hide transition method (default is `fadeOut`, other options are: `slideUp` or `hide`)
```js
var myToast = new Toast({title: 'Success', type: 'success', hideMethod: 'slideUp'}).show();
```

### Durations and Timeout
Change show- and hide durations (default is `300`) and timeout (default is `5000`) for Toasts in ms
```js
var myToast = new Toast({title: 'Success', description: 'Your purchase has been confirmed!', showDuration: 350, hideDuration: 100, timeOut: 3000}).show();
```

To prevent Toasts.js from auto closing based on the timeouts, set the  `timeOut` options to `0`
```js
var myToast = new Toast({title: 'Success', description: 'Your purchase has been confirmed!', timeOut: 0}).show();
```

## Authors
**Wessel Kok**
+ [https://twitter.com/wesselkok_](https://twitter.com/wesselkok_)
+ [https://www.instagram.com/wesselkok_](https://www.instagram.com/wesselkok_/)

## Copyright
Copyright © 2020

## License
Toasts.js is under MIT license - http://www.opensource.org/licenses/mit-license.php
