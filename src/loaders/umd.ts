import { ModkitManifest, ModkitIife, ModkitObject } from '../types/modkit';

import { hasRequire, loadModule as loadAmd } from '../loaders/amd';
import { load as loadIife } from '../loaders/iife';

/**
 * Loads a umd module.
 * @param manifest The module manifest.
 */
export async function load (manifest: ModkitManifest): Promise<ModkitObject> {
  if (hasRequire()) {
    // Use Amd
    return loadAmd(manifest);
  } else {
    // Use Iife
    return loadIife(manifest as ModkitIife);
  }
}
