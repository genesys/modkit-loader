---
title: Modkit Loader
description: Runtime Module Loader
---

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=genesys_modkit-loader&metric=alert_status)](https://sonarcloud.io/dashboard?id=genesys_modkit-loader)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=genesys_modkit-loader&metric=coverage)](https://sonarcloud.io/dashboard?id=genesys_modkit-loader)
[![Version](https://img.shields.io/npm/v/modkit-loader)](https://www.npmjs.com/package/modkit-loader)
[![Downloads](https://img.shields.io/npm/dt/modkit-loader)](https://www.npmjs.com/package/modkit-loader)
[![License](https://img.shields.io/npm/l/modkit-loader)](https://github.com/cadgerfeast/modkit-loader/blob/master/LICENSE)

`Modkit Loader` is a customization library that allows you to add modules to your application, at runtime.

## Documentation

[Full documentation website can be found here.](https://genesys.github.io/modkit-loader/)

## Installation

### With any web UI Framework

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

### With CDN

As `Modkit Loader` uses **code-splitting**, we cannot bundle the library as a standard **UMD** build.
With modern browsers, that's not an issue, but when targeting IE11, you'll need something more.

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

## Usage

### Load a module

Once the Modkit Singleton is imported, you can load a module:

``` javascript
Modkit.load('/path/to/my-module/manifest.json')
  .then((m) => {
    // Here, "m" is an object containing all manifest properties along with other computed properties
    m.mod // This is the module itself
    m.rootPath // This is the root path to the module build, that is helpful for static assets
  });
```

## Features

* Dynamically load packages at runtime, supporting all formats via a single `load` method.
* Will automatically load what is needed depending on the module format ([require.js](https://requirejs.org/) for amd modules, [system.js](https://github.com/systemjs/systemjs) for system modules).
* Has module manifest validation (global and on-load)
* Supports module dependencies (libraries or other modules), with [semver](https://semver.org/) versioning for compatibility.

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © [Genesys](https://www.genesys.com/).
