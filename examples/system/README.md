This example uses code splitting to load dependencies when needed.

> When the `load` button is clicked, a dependency is imported (check-people.js).

> When the `unload` button is clicked, another dependency (left-message.js) is also imported

> Until these buttons are clicked, the dependency files are not imported

This sample uses [mollitia library](https://github.com/genesys/mollitia) for resiliency aspect. Ratelimit from mollitia is used to prevent the user from clicking too much on the `Random persons` button
