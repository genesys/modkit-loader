---
title: Modkit Loader - Overview - Getting Started
---
# Getting Started

We highly recommend to go through the documentation first, so that you understand what you can do with the library.

Also, have a look to our [playgrounds](/playground/iife).

## Quick Start

In order to follow this quick start example, you might just need an http-server, to serve an application, and modules.

The `serve` module will become handy, you can install it globally:

``` bash
npm i -g serve
```

### Library Installation

First, you need to add the library to your application.

> If you do not have any, feel free to just use [this simple example](https://github.com/genesys/modkit-loader/tree/master/examples/app) and go to next step.

If you are using any web Framework like React or VueJS, it's easy as that:

``` bash
# Install the dependency
npm install modkit-loader --save
```

``` javascript
// Javascript
const Modkit = require('modkit-loader');
```

``` typescript
// ES6 or TypeScript
import * as Modkit from 'modkit-loader';
```

Otherwise, if you want to use it by CDN (not recommended), you can add it like this:

``` html
<!-- Modern Browsers -->
<script type="module">
  import * as Modkit from 'https://unpkg.com/modkit-loader/dist/module/index.js';
  // Modkit is available
</script>
<!-- IE11 (Needs polyfills and systemjs before loading)-->
<script nomodule src="https://unpkg.com/bluebird/js/browser/bluebird.core.min.js"></script>
<script nomodule src="https://unpkg.com/whatwg-fetch/dist/fetch.umd.js"></script>
<script nomodule src="https://unpkg.com/systemjs/dist/s.min.js"></script>
<script nomodule>
  System.import('https://unpkg.com/modkit-loader/dist/system/index.js').then(function (Modkit) {
    // Modkit is available
  });
</script>
```

### Module Creation

Now that the library is loaded up in your application, it's time to create a first module.
Feel free to use one of our examples as a template, that could speed up things!

In our templates, each module exports a `load()` and an `unload()` method, but everything is no set in stone! It depends on your needs.

> Otherwise, you can just use [the iife module](https://github.com/genesys/modkit-loader/tree/master/examples/iife) as a template, that only add alerts when being **loaded/unloaded**.<br/>
> Please go to next step if you do so.

Create a new repository and copy the content of one of the module templates (can be found in the `examples` folder), and let's do a few things:

* Modify the content of `rollup.config.js`:

``` javascript
// const dest = '../../docs/static/modules/iife';
const dest = './';
```

* Start the module in development:

``` bash
# In a first terminal
npm run dev
# In a second terminal
serve --cors
```

Now the module should be served on a webserver, the url should be printed out on your second terminal, by default it should be: `http://localhost:5000`, but the port can be different if it was already used.

Opening a browser to this url should show your `manifest.json` file: [http://localhost:5000/manifest.json](http://localhost:5000/manifest.json)

### Load the module

Go back to your application, and load your module with this snippet:

``` javascript
Modkit.load('http://localhost:5000/manifest.json')
  .then(({ mod }) => {
    mod.load();
  });
```

If you are using the [simple example](https://github.com/genesys/modkit-loader/tree/master/examples/app), you can just paste the url in the input.

The module should be loaded, and an alert should be shown.

### Conclusion

Well done, you can now load modules to your application at runtime, it's time to create something awesome!
