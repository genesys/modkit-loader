---
title: Modkit Loader - Playground - System
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
<pg-main name="system"></pg-main>

# System

> Use the toolbar `load/unload` button to **load/unload** the module.

This example uses code splitting to load dependencies when needed.

> When the `load` button is clicked, a dependency is imported (check-people.js).

> When the `unload` button is clicked, another dependency (left-message.js) is also imported

> Until these buttons are clicked, the dependency files are not imported

Example location: [https://github.com/genesys/modkit-loader/tree/master/examples/system](https://github.com/genesys/modkit-loader/tree/master/examples/system)

This sample uses [mollitia library](https://github.com/genesys/mollitia) for resiliency aspect. Ratelimit from mollitia is used to prevent the user from clicking too much on the `Random persons` button
