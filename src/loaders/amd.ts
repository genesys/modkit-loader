import { ModkitManifest, ModkitObject } from '../types/modkit.js';

/**
 * Loads a amd module.
 * @param manifest The module manifest.
 */
export async function load (manifest: ModkitManifest): Promise<ModkitObject> {
  if (!hasRequire()) {
    await loadRequire();
  }
  return loadModule(manifest);
}

/**
 * Loads require.js.
 */
async function loadRequire (): Promise<void> {
  return new Promise((resolve, reject) => {
    import('../libs/require.js')
      .then((_rjs) => {
        console.debug('[Modkit] Adding RequireJS to the application.');
        window.define = _rjs.define;
        window.require = _rjs.require;
        window.requirejs = _rjs.requirejs;
        resolve();
      })
      .catch((err) => {
        reject(new Error(`Could not load RequireJS: ${err}`));
      });
  });
}

/**
 * Loads the module with require.js
 * @param manifest The module manifest.
 */
export async function loadModule (manifest: ModkitManifest): Promise<ModkitObject> {
  return new Promise((resolve, reject) => {
    window.require([manifest.endpoint], (_mod) => {
      resolve(_mod);
    }, (err) => {
      reject(new Error(`Could not load Module: ${err}`));
    });
  });
}

/**
 * Checks whether application has a amd loader or not.
 */
export function hasRequire () {
  return window.define && window.require && window.requirejs;
}
