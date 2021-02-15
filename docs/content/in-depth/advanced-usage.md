---
title: Modkit Loader - In Depth - Advanced Usage
---
# Advanced Usage

There is plenty other things you can do with `Modkit Loader`, check this out!

## Manifest Parsing

If you want to parse the manifest, in order to modify values, or even reject the loading of a module, you can pass an `async` function to Modkit.
It should either resolve with the manifest, or resolve empty (it we keep original manifest).

``` javascript
const parseManifest = async (manifest) => {
  return new Promise((resolve, reject) => {
    if (manifest.version !== '1.0.0') {
      // Rewrite manifest properties
      manifest.name += '-rewritten';
      resolve();
    } else {
      // Do not load the module
      reject(new Error('The module version is invalid.'));
    }
  });
};
```

You have two options:

### Globally

``` javascript
Modkit.options.parseManifest = parseManifest;
```

### On load

You can also pass the parse function as the second parameter of the `load` function:

``` javascript
await Modkit.load('http://my-server/my-module/manifest.json', parseManifest);
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
