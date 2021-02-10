# Iife Example

This example might be the simplest one you could find.

It contains only two files, the `manifest.json` file, containing information about the module, and an `iife.js` file, that is the entrypoint of the module.

As the module is in the [iife](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression) format, the code is pretty short.

It exports a `load()`, and an `unload()` function, that will just create an alert on the browser.

## Usage

### Directly from Github

<!-- TODO: replace link by github pages when available -->
The module can be used directly from github with this url: [https://github.com/genesys/modkit-loader/tree/master/examples/iife/manifest.json](https://github.com/genesys/modkit-loader/tree/master/examples/iife/manifest.json)

### If you copied the content

Serve it using `serve` or any http-server and enter your module url to your module.

``` bash
# Install serve globally
npm i -g serve
# Serve the file
serve --cors
