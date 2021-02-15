---
title: Modkit Loader - Playground - Umd
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
<pg-umd></pg-umd>

# Umd

> Use the toolbar `load/unload` button to **load/unload** the module.

This example shows how to handle external dependencies.

Example location: [https://github.com/genesys/modkit-loader/tree/master/examples/umd](https://github.com/genesys/modkit-loader/tree/master/examples/umd)

This one makes use of [DayJS](https://day.js.org/) in order to add a new view, containing date information of the post.

[DayJS](https://day.js.org/) is added as an external dependency, therefore, it is not bundled in the module, but it should be present in the parent application.

> The `Load DayJS` button will load [DayJS](https://day.js.org/) via CDN.<br/>
> This has to be done prior to use the `Load #1` button.

> The `Load #1` button will load the module, assuming the dependency is present in the application, under the global `window.dayjs` variable.<br/>
> If dayjs has not been loaded before, it should result in an error.

> The `Load #2` button will load the module, but as a requirement, it will load `window.dayjs` with a cdn endpoint if not already present in the application.<br/>
> It should load [DayJS](https://day.js.org/), load the module and add a new view on the current page.

It should add the last documentation update date on the top right part of the page.
