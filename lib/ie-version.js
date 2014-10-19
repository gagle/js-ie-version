(function (root, fn){
  if (typeof define === "function" && define.amd){
    define (fn);
  }else if (typeof exports === "object"){
    module.exports = fn ();
  }
})(this, function (){
  "use strict";
  
  var win = window;
  var doc = win.document;
  var input = doc.createElement ("input");
  
  var ie = (function (){
    //"!win.ActiveXObject" is evaluated to true in IE11
    if (win.ActiveXObject === undefined) return null;
    if (!win.XMLHttpRequest) return 6;
    if (!doc.querySelector) return 7;
    if (!doc.addEventListener) return 8;
    if (!win.atob) return 9;
    //"!doc.body.dataset" is faster but the body is null when the DOM is not
    //ready. Anyways, an input tag needs to be created to check if IE is being
    //emulated
    if (!input.dataset) return 10;
    return 11;
  })();
  
  //http://www.pinlady.net/PluginDetect/IE
  var emulated = false;
  if (ie && doc.documentMode){
    try{
      input.style.behavior = "url(#default#clientcaps)";
      emulated = doc.documentMode !== win.parseInt (
          input.getComponentVersion (
          "{45EA75A0-A269-11D1-B5BF-0000F8051515}", "componentid"));
    }catch (e){
      //getComponentVersion() is not available in IE11+ and if a lower version
      //is emulated, it also doesn't exist
      //"if(input.getComponentVersion)" cannot be used
    }
  }
  
  return {
    version: ie,
    emulated: !!ie && emulated
  };
});