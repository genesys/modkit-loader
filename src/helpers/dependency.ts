import { isCompatibleVersion } from './version';
import { load as loadDependency } from '../loaders/iife';
import { deepFind } from '../utils/object';
import { ModkitDependency, ModkitIife, ModkitManager, ModkitManifest } from '../types/modkit';
import { instanceOfManifest } from '../helpers/types';

/**
 * Loads a library dependency.
 * @param dependency Dependency manifest.
 */
export async function loadLibDependency (this: ModkitManager, dependency: ModkitDependency): Promise<void> {
  // Bindings
  const _loadDependency = loadDependency.bind(this);
  let depFullName = dependency.name;
  if (dependency.version) {
    depFullName += `@${dependency.version}`;
  }
  let ref: ModkitIife;
  try {
    ref = deepFind(window, dependency.ref || dependency.name) as ModkitIife;
    if (typeof ref === 'undefined') {
      throw new Error('Reference is undefined');
    }
  } catch (err) {
    if (dependency.endpoint) {
      await _loadDependency(dependency as ModkitIife);
    }
    try {
      ref = deepFind(window, dependency.ref || dependency.name) as ModkitIife;
      if (typeof ref === 'undefined') {
        throw new Error('Reference is undefined');
      }
    } catch (err2) {
      throw new Error(`Library Dependency [${depFullName}] could not be found: ${err2}`);
    }
  }
  return;
}

/**
 * Loads a module dependency.
 * @param dependency Dependency manifest.
 */
export async function loadModuleDependency (this: ModkitManager, dependency: ModkitDependency): Promise<void> {
  const _depMod = this.getModule(dependency.name);
  if (_depMod) {
    if (!isCompatibleVersion(_depMod.version, dependency.version)) {
      throw new Error(`Module Dependency [${dependency.name}] has incompatible version: (needs ${dependency.version}, has ${_depMod.version})`);
    }
  } else {
    if (instanceOfManifest(dependency as ModkitManifest)) {
      await this.load(dependency as ModkitManifest);
    } else if (dependency.endpoint) {
      await this.load(dependency.endpoint);
    } else {
      throw new Error(`Module Dependency [${dependency.name}] is not available.`);
    }
  }
  return;
}
