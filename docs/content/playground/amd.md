---
title: Modkit Loader - Playground - Amd
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
<pg-main name="amd"></pg-main>

# AMD
> Use the toolbar `load/unload` button to **load/unload** the module.

This really simple example will just create an alert when being **loaded/unloaded**.

Example location: [https://github.com/genesys/modkit-loader/tree/master/examples/amd](https://github.com/genesys/modkit-loader/tree/master/examples/amd)

Here is the code that will be loaded in the application:

``` javascript
define(['./anotherfile.js'], function(af) {
  var methods = {
    load: function () {
      window.alert(`AMD module has been loaded. Random number: ${af.random(20)}`);
    },
    unload: function () {
      window.alert(`AMD module has been unloaded. Random number: ${af.random(30)}`);
    }
  }
  return methods;
});
```

anotherfile.js is just very simple code to calculate a random number.
``` javascript
define([], function() {
  var methods = {
    random: function (nb) {
      return Math.floor(Math.random() * nb);
    }
  }
  return methods;
});
```

This extra file is just there to show how to the use define in amd.js file.
