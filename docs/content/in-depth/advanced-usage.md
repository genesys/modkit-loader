---
title: Modkit Loader - In Depth - Advanced Usage
---
# Advanced Usage

There is plenty other things you can do with Modkit, check this out!

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
* A list of URLS to JSON manifests.
* A manifest.
* A list of manifests.

## Handling static assets

You can find the root path of your module under the `rootPath` attribute inside your module manifest.

When initializing your module, you should pass this variable, and use inside your views.
