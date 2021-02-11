---
title: Modkit Loader - In Depth - Advanced Usage
---
# Advanced Usage

There is plenty other things you can do with `Modkit Loader`, check this out!

## Validation

If you want to make a validation before loading your modules, you can pass a function to Modkit returning a `boolean`.
You have two options:

### Global validation

You can add a validation function that will be called each time Modkit loads a manifest.

``` javascript
Modkit.options.validator = (manifest) => {
  if (manifest.version !== '1.0.0') {
    return false;
  }
  return true;
};
```

### Specific validation

You can also pass a validator to the `load` function:

``` javascript
const myModule = await Modkit.load('http://my-server/my-module/manifest.json', (manifest) => {
  if (manifest.version !== '1.0.0') {
    return false;
  }
  return true;
});
```

## Loading

You can load a module easily with the `load` function.
The function accepts four different params:

* A URL to a JSON manifest.

``` javascript
await Modkit.load('http://my-server/my-module/manifest.json');
```

* A list of URLS to JSON manifests.

``` javascript
await Modkit.load([
  'http://my-server/my-first-module/manifest.json',
  'http://my-server/my-second-module/manifest.json'
]);
```

* A manifest.

``` javascript
await Modkit.load({
  name: "my-module",
  endpoint: "./dist/entryfile.js",
  format: {
    type: "umd",
    name: "MyModule"
  },
  version: "0.0.8"
});
```

* A list of manifests.

``` javascript
await Modkit.load([
  {
    name: "my-first-module",
    endpoint: "./dist/entryfile.js",
    format: {
      type: "umd",
      name: "MyFirstModule"
    },
    version: "0.0.8"
  },
  {
    name: "my-second-module",
    endpoint: "./dist/entryfile.js",
    format: {
      type: "iife",
      name: "MySecondModule"
    },
    version: "1.2.4"
  }
]);
```

## Handling static assets

You can find the root path of your module under the `rootPath` attribute inside your module manifest.

When initializing your module, you should pass this variable, and use inside your views.

``` javascript
// Application Side
const { mod, rootPath } = await Modkit.load({
  name: "my-module",
  endpoint: "http://my-server/my-module/utils/entry.js",
  format: {
    type: "umd",
    name: "MyModule"
  },
  version: "0.8.5"
});
// Here we call an exported "load" function of the module, giving the rootPath context
res.mod.load({ rootPath });

// Module Side
export function load ({ rootPath }) {
  // In this example, with that manifest
  // rootPath = 'http://my-server/my-module/utils'
}
```
