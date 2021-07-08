import * as Modkit from '../../src/index';
import { ModkitManifest, ModkitDependency } from '../../src/types/modkit';
import { loadByManifest, loadByUrl, validateManifest } from '../../src/helpers/manifest';
import { ModkitModuleFormatType, ModkitDependencyType } from '../../src/types/enum';

import { load as loadAmd } from '../../src/loaders/amd';
import { load as loadEsm } from '../../src/loaders/esm';
import { load as loadIife } from '../../src/loaders/iife';
import { load as loadSystem } from '../../src/loaders/system';
import { load as loadUmd } from '../../src/loaders/umd';

import { loadLibDependency, loadModuleDependency } from '../../src/helpers/dependency';

import axios from 'axios';
import { mocked } from 'ts-jest/utils';
// Mocks
const _loadByManifest = loadByManifest.bind(Modkit);
const _loadByUrl = loadByUrl.bind(Modkit);
const _validateManifest = validateManifest.bind(Modkit);
jest.mock('axios');
jest.mock('resolve-url', () => {
  return {
    default: () => ''
  };
});
jest.mock('../../src/loaders/amd');
jest.mock('../../src/loaders/esm');
jest.mock('../../src/loaders/iife');
jest.mock('../../src/loaders/system');
jest.mock('../../src/loaders/umd');
jest.mock('../../src/helpers/dependency');
const mockAxios = axios as jest.Mocked<typeof axios>;
const mockLoadAmd = mocked(loadAmd, true);
const mockLoadEsm = mocked(loadEsm, true);
const mockLoadIife = mocked(loadIife, true);
const mockLoadSystem = mocked(loadSystem, true);
const mockLoadUmd = mocked(loadUmd, true);
const mockLoadLibDependency = mocked(loadLibDependency, true);
const mockLoadModuleDependency = mocked(loadModuleDependency, true);

const manifest = {
  name: 'dummy-amd',
  endpoint: 'dummy-endpoint',
  version: 'dummy-version',
  format: {
    type: 'unsupported'
  } as any
} as ModkitManifest;
const badManifest = {} as ModkitManifest;

describe('Modkit Manifest Helper', () => {
  describe('loadByManifest()', () => {
    it('should not load package with bad manifest', async () => {
      await expect(_loadByManifest(badManifest)).rejects.toThrow('The manifest seems to have a bad syntax.');
    });
    it('should not load unsupported package', async () => {
      await expect(_loadByManifest(manifest)).rejects.toThrow('The format is not supported by Modkit, use one of these: amd, esm, iife, umd, system.');
    });
    it('should load none package', async () => {
      const data = await _loadByManifest({
        ...manifest,
        name: 'dummy-none',
        format: {
          type: ModkitModuleFormatType.None
        },
        endpoint: undefined
      } as any);
      expect(data.mod).toBeUndefined();
    });
    it('should load amd package', async () => {
      manifest.name = 'dummy-amd';
      manifest.format.type = ModkitModuleFormatType.Amd;
      await _loadByManifest(manifest);
      expect(mockLoadAmd).toHaveBeenCalled();
    });
    it('should load esm package', async () => {
      manifest.name = 'dummy-esm';
      manifest.format.type = ModkitModuleFormatType.Esm;
      await _loadByManifest(manifest);
      expect(mockLoadEsm).toHaveBeenCalled();
    });
    it('should load iife package', async () => {
      manifest.name = 'dummy-iife';
      manifest.format.type = ModkitModuleFormatType.Iife;
      await _loadByManifest(manifest);
      expect(mockLoadIife).toHaveBeenCalled();
    });
    it('should load system package', async () => {
      manifest.name = 'dummy-system';
      manifest.format.type = ModkitModuleFormatType.System;
      await _loadByManifest(manifest);
      expect(mockLoadSystem).toHaveBeenCalled();
    });
    it('should load umd package', async () => {
      manifest.name = 'dummy-umd';
      manifest.format.type = ModkitModuleFormatType.Umd;
      await _loadByManifest(manifest);
      expect(mockLoadUmd).toHaveBeenCalled();
    });
    it('should not load already loaded package', async () => {
      const pkg = await _loadByManifest(manifest);
      expect(pkg).toEqual({
        ...manifest,
        mod: undefined,
        rootPath: ''
      });
    });
  });
  describe('loadByUrl()', () => {
    it('should load by url and reject bad manifest', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: badManifest });
      await expect(_loadByUrl('')).rejects.toThrow('The manifest seems to have a bad syntax.');
    });
    it('should load by url without endpoint', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: {
        ...manifest,
        endpoint: undefined
      } });
      const pkg = await _loadByUrl('');
      expect(pkg).toEqual({
        ...manifest,
        mod: undefined,
        rootPath: ''
      });
    });
    it('should load by url', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: manifest });
      const pkg = await _loadByUrl('');
      expect(pkg).toEqual({
        ...manifest,
        mod: undefined,
        rootPath: ''
      });
    });
  });
  describe('validateManifest()', () => {
    it('should throw with a bad syntax for dependency', async () => {
      manifest.dependencies = [
        {} as ModkitDependency
      ];
      await expect(_validateManifest(manifest)).rejects.toThrow('Dependency seems to have a bad syntax.');
    });
    it('should load dependencies', async () => {
      const dep1 = {
        name: 'dummy-1',
        type: ModkitDependencyType.Library
      } as ModkitDependency;
      const dep2 = {
        name: 'dummy-2',
        type: ModkitDependencyType.Module
      } as ModkitDependency;
      manifest.dependencies = [
        dep1,
        dep2
      ];
      await _validateManifest(manifest);
      expect(mockLoadLibDependency).toHaveBeenCalled();
      expect(mockLoadModuleDependency).toHaveBeenCalled();
    });
    it('should check onload parseManifest', async () => {
      expect(await _validateManifest(manifest, async () => { return; })).toEqual(undefined);
      expect(manifest.name).toEqual('dummy-umd');
      expect(await _validateManifest(manifest, async () => {
        manifest.name = 'other-name';
      })).toEqual(undefined);
      expect(manifest.name).toEqual('other-name');
      expect(
        _validateManifest(
          manifest,
          async () => { throw new Error('Module validation has failed.'); }
        )).rejects.toThrow('Module validation has failed.');
    });
    it('should check global parseManifest', async () => {
      Modkit.options.parseManifest = async () => { return; };
      expect(await _validateManifest(manifest)).toEqual(undefined);
      expect(manifest.name).toEqual('other-name');
      Modkit.options.parseManifest = async () => {
        manifest.name = 'other-name-2';
      };
      expect(await _validateManifest(manifest)).toEqual(undefined);
      expect(manifest.name).toEqual('other-name-2');
      Modkit.options.parseManifest = async () => { throw new Error('Module validation has failed.'); };
      await expect(_validateManifest(manifest)).rejects.toThrow('Module validation has failed.');
    });
  });
});
