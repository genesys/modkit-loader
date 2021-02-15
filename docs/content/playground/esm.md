---
title: Modkit Loader - Playground - Esm
size: full
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
<pg-esm></pg-esm>

# Esm

> Use the toolbar `load/unload` button to **load/unload** the module.

This example shows how to handle module dependencies.

Example location: [https://github.com/genesys/modkit-loader/tree/master/examples/esm](https://github.com/genesys/modkit-loader/tree/master/examples/esm)

The [UMD sample](https://github.com/genesys/modkit-loader/tree/master/examples/umd) is added as a module dependency, and it will loaded just before this one.

``` javascript
// The module dependency is required automatically, you can then get it like this
const umdModule = Modkit.getModule('umd'); // umd is the module name
const esmModule = Modkit.getModule('esm'); // esm is the module name
// The UMD sample exports a UmdView variable, that stores the module view, this is given to the esm module
esmModule.mod.load({ Vue, umdView: umdModule.mod.UmdView });
```

When loaded, it adds the `UMD View` on top right of the page, along with a new [Genesys](https://www.genesys.com/) badge.
