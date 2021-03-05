# AMD Example

This example is a very simple AMD module.

The module contains: 
* `manifest.json` file, containing information about the module
* `amd.js` file, that is the entrypoint of the module.
* `anotherfile.js` file, that is another file used by the module, with a single method. The aim of this file is just to show how to use define in amd.js

The module is in the [amd](https://en.wikipedia.org/wiki/Asynchronous_module_definition) format

It exports a `load()`, and an `unload()` function, that will just create an alert on the browser.
