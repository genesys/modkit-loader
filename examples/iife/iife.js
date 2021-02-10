var IIFE = (function (exports) {
  'use strict';

  function load () {
    window.alert('IIFE module has been loaded.');
  }
  function unload () {
    window.alert('IIFE module has been unloaded.');
  }

  exports.load = load;
  exports.unload = unload;
  return exports;
}({}));
