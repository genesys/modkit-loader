import { ModkitManager, ModkitManifest, ModkitIife, ModkitObject } from '../types/modkit';

import { hasRequire, loadModule as loadAmd } from '../loaders/amd';
import { load as loadIife } from '../loaders/iife';

/**
 * Loads a umd module.
 * @param manifest The module manifest.
 */
export async function load (this: ModkitManager, manifest: ModkitManifest): Promise<ModkitObject> {
  // Bindings
  const _loadIife = loadIife.bind(this);
  if (hasRequire()) {
    // Use Amd
    return loadAmd(manifest);
  } else {
    // Use Iife
    return _loadIife(manifest as ModkitIife);
  }
}
