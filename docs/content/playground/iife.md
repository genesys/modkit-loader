---
title: Modkit Loader - Playground - Iife
sidebar:
  links:
    - title: Iife
      path: /playground/iife
    - title: Amd
      path: /playground/amd
    - title: Umd
      path: /playground/umd
    - title: Esm
      path: /playground/esm
    - title: System
      path: /playground/system
---
<pg-main name="iife"></pg-main>

# Iife

> Use the toolbar `load/unload` button to **load/unload** the module.

This really simple example will just create an alert when being **loaded/unloaded**.

Example location: [https://github.com/genesys/modkit-loader/tree/master/examples/iife](https://github.com/genesys/modkit-loader/tree/master/examples/iife)

Here is the code that will be loaded in the application:

``` javascript
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
```
