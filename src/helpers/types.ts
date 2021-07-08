import { ModkitManifest, ModkitDependency } from '../types/modkit';

/**
 * Checks whether the object is a modkit module manifest or not.
 * @param manifest The potential module manifest.
 */
export function instanceOfManifest (manifest: ModkitManifest): manifest is ModkitManifest {
  return (
    'name' in manifest &&
    'format' in manifest &&
    'type' in manifest.format &&
    'version' in manifest
  );
}

/**
 * Checks whether the object is a modkit module dependency or not.
 * @param dependency The potential dependency manifest.
 */
export function instanceOfDependency (dependency: ModkitDependency): dependency is ModkitDependency {
  return (
    'name' in dependency &&
    'type' in dependency
  );
}
