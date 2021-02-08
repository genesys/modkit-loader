---
title: Modkit Loader
description: Runtime Module Loader
---

# Modkit Loader

<!-- TODO Badges -->

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
import Modkit from 'modkit-loader';
```

### With CDN

``` html
<!-- CDN -->
<script type="text/javascript" src="https://unpkg.com/modkit-loader"></script>
<script>
  const Modkit = window.Modkit;
</script>
```

<!-- Better explanation about esm and system -->

## Usage

### Load a module

Once the Modkit Singleton is imported, you can load a module:

``` javascript
Modkit.load('/path/to/my-module/manifest.json')
  .then((_mod) => {
    // {
    //  "name": "my-module",
    //  "version": "0.0.2",
    //  "format": {
    //    "type": "umd"
    //  },
    //  "mod": MY-EXPORTED-MODULE
    // }
    }
  });
```

## Features

<!-- TODO -->

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © [Genesys](https://www.genesys.com/).
