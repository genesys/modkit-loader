import axios from 'axios';
import resolveUrl from 'resolve-url';

import { ModkitManifest, ModkitManifestParser, ModkitManager, ModkitIife, ModkitPackage } from '../types/modkit';
import { ModkitModuleFormatType, ModkitDependencyType } from '../types/enum';

import { loadLibDependency, loadModuleDependency } from './dependency';
import { instanceOfManifest, instanceOfDependency } from './types';

import { load as loadAmd } from '../loaders/amd';
import { load as loadEsm } from '../loaders/esm';
import { load as loadIife } from '../loaders/iife';
import { load as loadSystem } from '../loaders/system';
import { load as loadUmd } from '../loaders/umd';

const JSON_SPACES = 2;

/**
 * Loads a module by manifest.
 * @param manifest Module manifest.
 * @param parseManifest Module parseManifest.
 */
export async function loadByManifest (this: ModkitManager, manifest: ModkitManifest, parseManifest?: ModkitManifestParser): Promise<ModkitPackage> {
  // Bindings
  const _validateManifest = validateManifest.bind(this);
  const _loadIife = loadIife.bind(this);
  const _loadUmd = loadUmd.bind(this);
  if (instanceOfManifest(manifest)) {
    const _module = this.getModule(manifest.name);
    if (_module) {
      console.warn(`[Modkit] ${manifest.name}@${manifest.version} module is already loaded.`);
      return _module;
    } else {
      console.info(`[Modkit] ${manifest.name} manifest: ${JSON.stringify(manifest, null, JSON_SPACES)}`);
      await _validateManifest(manifest, parseManifest);
      let _mod = undefined;
      switch (manifest.format.type) {
        case ModkitModuleFormatType.None:
          _mod = undefined;
          break;
        case ModkitModuleFormatType.Amd:
          _mod = await loadAmd(manifest);
          break;
        case ModkitModuleFormatType.Esm:
          _mod = await loadEsm(manifest);
          break;
        case ModkitModuleFormatType.Iife:
          _mod = await _loadIife(manifest as ModkitIife);
          break;
        case ModkitModuleFormatType.System:
          _mod = await loadSystem(manifest);
          break;
          case ModkitModuleFormatType.Umd:
          _mod = await _loadUmd(manifest);
          break;
        default:
          throw new Error('The format is not supported by Modkit, use one of these: amd, esm, iife, umd, system.');
      }
      console.info(`[Modkit] ${manifest.name} successfully loaded.`);
      this.modules.push({
        ...manifest,
        rootPath: resolveUrl(manifest.endpoint || '', './').slice(0, -1),
        mod: _mod
      });
      return this.modules[this.modules.length - 1];
    }
  } else {
    throw new Error('The manifest seems to have a bad syntax.');
  }
}

/**
 * Loads a module by endpoint url.
 * @param manifestPath Endpoint url.
 * @param parseManifest Module parseManifest.
 */
export async function loadByUrl (this: ModkitManager, manifestPath: string, parseManifest?: ModkitManifestParser): Promise<ModkitPackage> {
  // Bindings
  const _loadByManifest = loadByManifest.bind(this);
  const res: any = await axios.get(manifestPath, { withCredentials: this.options.withCredentials });
  if (instanceOfManifest(res.data)) {
    const manifest = {
      ...res.data,
      endpoint: resolveUrl(manifestPath, res.data.endpoint || '')
    };
    return _loadByManifest(manifest, parseManifest);
  } else {
    throw new Error('The manifest seems to have a bad syntax.');
  }
}

/**
 * Validates a manifest.
 * @param manifest Package manifest.
 * @param parseManifest Custom parseManifest.
 */
export async function validateManifest (this: ModkitManager, manifest: ModkitManifest, parseManifest?: ModkitManifestParser): Promise<void> {
  // Bindings
  const _loadLibDependency = loadLibDependency.bind(this);
  const _loadModuleDependency = loadModuleDependency.bind(this);
  // Manifest Parser
  if (parseManifest) {
    await parseManifest(manifest);
  } else {
    if (this.options.parseManifest) {
      await this.options.parseManifest(manifest);
    }
  }
  // Dependencies
  if (manifest.dependencies) {
    for (const dep of manifest.dependencies) {
      if (instanceOfDependency(dep)) {
        switch (dep.type) {
          case ModkitDependencyType.Library:
            await _loadLibDependency(dep);
            break;
          case ModkitDependencyType.Module:
          default:
            await _loadModuleDependency(dep);
            break;
        }
      } else {
        throw new Error('Dependency seems to have a bad syntax.');
      }
    }
  }
  return;
}
