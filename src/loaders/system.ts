import { ModkitManifest, ModkitObject } from '../types/modkit';

/**
 * Loads a system module.
 * @param manifest The module manifest.
 */
export async function load (manifest: ModkitManifest): Promise<ModkitObject> {
  if (!hasSystem()) {
    console.debug('[Modkit] Adding SystemJS to the application.');
    await import('systemjs/dist/s.min.js');
  }
  return loadModule(manifest);
}

/**
 * Loads the module with system.js
 * @param manifest The module manifest.
 */
async function loadModule (manifest: ModkitManifest): Promise<ModkitObject> {
  return new Promise((resolve, reject) => {
    window.System.import(manifest.endpoint)
      .then((_mod) => {
        resolve(_mod);
      })
      .catch((err) => {
        reject(new Error(`Could not load Module: ${err}`));
      });
  });
}

/**
 * Checks whether application has system loader or not.
 */
function hasSystem (): boolean {
  return (window.System && window.System.import) ? true : false;
}
