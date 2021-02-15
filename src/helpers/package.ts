import { ModkitManifest, ModkitManifestParser, ModkitManager, ModkitPackage } from '../types/modkit';

import { isObject } from '../utils/object';
import { loadByManifest, loadByUrl } from './manifest';

/**
 * Loads package by manifest(s), or url(s).
 * @param from The package location. [url(s), or manifest(s)]
 * @param parseManifest Custom parseManifest method.
 */
export async function loadPackage
  (
    this: ModkitManager,
    from: string|string[]|ModkitManifest|ModkitManifest[],
    parseManifest?: ModkitManifestParser
  ): Promise<ModkitPackage|ModkitPackage[]> {
  // Bindings
  const _loadByManifest = loadByManifest.bind(this);
  const _loadByUrl = loadByUrl.bind(this);
  if (Array.isArray(from)) {
    const _mods: ModkitPackage[] = [];
    for (const p of from) {
      if (isObject(p)) {
        _mods.push(await _loadByManifest(p as ModkitManifest, parseManifest));
      } else {
        _mods.push(await _loadByUrl(p as string, parseManifest));
      }
    }
    return _mods;
  } else {
    if (isObject(from)) {
      return _loadByManifest(from as ModkitManifest, parseManifest);
    } else {
      return _loadByUrl(from as string, parseManifest);
    }
  }
}

/**
 * Get package by name.
 * @param name Package name.
 */
export function getPackage (this: ModkitManager, name: string): ModkitPackage|null {
  let _mod = null;
  for (const mod of this.modules) {
    if (mod.name === name) {
      _mod = mod;
    }
  }
  return _mod;
}
