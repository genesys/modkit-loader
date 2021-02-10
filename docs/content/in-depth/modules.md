---
title: Modkit Loader - In Depth - Modules
---
# Modules

Here is what you need to know to make your own Modkit module:

## Manifest

Here is the manifest interface you should use:

``` typescript
declare interface ModkitManifest {
  /**
   * Module name.
   */
  name: string;
  /**
   * Module version.
   */
  version: string;
  /**
   * Module endpoint. (can be a relative to the manifest.json location if loaded by url)
   */
  endpoint: string;
  /**
   * Module format.
   */
  format: {
    /**
     * Module output type (amd, esm, iife, system or umd).
     */
    type: ModkitModuleFormatType;
    /**
     * Global module name to access (window.<name>) (if is a iife format)
     */
    name?: string;
  };
  /**
   * Module dependencies
   */
  dependencies?: ModkitDependency[];
}
```

## Formats

Modkit supports five module formats.

Moreover, Modkit is smart, and will load dynamically what he needs to load a module.

### Amd

[Asynchronous Module Definition](https://en.wikipedia.org/wiki/Asynchronous_module_definition), used with module loaders like RequireJS, or Dojo.

If your application does not have an amd-loader, [RequireJS](https://requirejs.org/) will be loaded.

This supports code-splitting builds.

### Esm

[ECMAScript Modules](https://nodejs.org/api/esm.html) are supported on various modern browsers.

If you do not need to support old browsers, you might want to use this format, moreover, this requires no dependency!

This supports code-splitting builds.

### Iife

[Immediately invoked function expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression) is the simplest module format and requirejs no dependency.

This does not support code-splitting builds.

### System

The [SystemJS](https://github.com/systemjs/systemjs) format enables backwards compatibility workflows for ES modules in browsers.

[SystemJS](https://github.com/systemjs/systemjs) will be loaded if no present in your application.

This supports code-splitting builds.

### Umd

Finally, [UMD](https://github.com/umdjs/umd) is one of the most used module format. It works everywhere.
It is kind of a mix of the [Amd](#Amd) and the [Iife](#Iife) format.

This does not support code-splitting builds.

## Dependencies

You can add `Dependencies` to your module.

### Library dependencies

If your module needs a dependency in order to work, and you wish to check if it exists in the parent application, you can add it as a module dependency.

Here is an example:

``` json
{
  "name": "my-module",
  "endpoint": "./dist/entryfile.js",
  "format": {
    "type": "umd",
    "name": "MyModule"
  },
  "version": "0.0.5",
  "dependencies": [
    {
      "type": "lib",
      "name": "jquery",
      // If ref is specified, Modkit will search the library at this location
      "ref": "window.mySuperLibs.$"
    },
    {
      "type": "lib",
      "name": "_",
      // If endpoint is specified, Modkit will load the dependency for you.
      "endpoint": "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"
    }
  ]
}
```

### Module dependencies

Modkit also supports Module dependencies, that means that Modkit Modules, can depend on other Modkit Modules to work.

``` json
{
  "name": "my-module-2",
  "endpoint": "./dist/entryfile.js",
  "format": {
    "type": "umd",
    "name": "MyModule2"
  },
  "version": "1.0.8",
  "dependencies": [
    {
      "type": "module",
      "name": "my-module",
      // If the version is not compatible, Modkit will not load the module.
      "version": "^0.0.4",
      // If endpoint is specified, Modkit will load the module by his manifest.
      "endpoint": "http://localhost:8081/modules/iife/liife/manifest.json"
    }
  ]
}
```
