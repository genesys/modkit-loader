# Umd Example

This example shows how to handle library dependencies.

It contains only two different manifests: `manifest.ref.json` and `manifest.cdn.json`.

## manifest.ref.json

It will only load the module if the library is present in the parent application.

It checks the `ref` properties, here `window.dayjs` and `window.dayjs_plugin_calendar`.

## manifest.cdn.json

As the first manifest, it will first check if the library is present checking the `ref` property. (If it does not exist, it'll fallback with `window.<name>`)

If not present, it will load automatically the library using the `endpoint` property, here by CDN.
