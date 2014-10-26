ie-version
==========

#### Checks the Internet Explorer's version ####

[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]

The module uses feature detection and detects from IE6 up to IE11. Furthermore, it also checks if Internet Explorer is being emulated by changing the document mode.

Only AMD and CommonJS module loaders are supported. This means that the module cannot be registered into the window object. Feel free to adapt it to your needs.

The module returns an object with the following properties:

- __ie : Number | null__  
  The Internet Explorer's version. Versions lower than 6 return 6. If the browser is not Internet Explorer, returns null.
- __emulated : Boolean__  
  If Internet Explorer is being emulated by changing the document mode, returns true, otherwise false.

```javascript
require (["path/to/ie-version"], function (ie){
  alert ("version: " + ie.version + ", emulated: " + ie.emulated);
});
```

[npm-image]: http://img.shields.io/npm/v/ie-version.svg
[npm-url]: https://npmjs.org/package/ie-version
[bower-image]: http://img.shields.io/bower/v/ie-version.svg
[bower-url]: http://bower.io