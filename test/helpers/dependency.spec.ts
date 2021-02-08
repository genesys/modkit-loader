import * as Modkit from '../../src/index';
import { loadLibDependency, loadModuleDependency } from '../../src/helpers/dependency';
import { ModkitDependency, ModkitPackage } from '../../src/types/modkit';
import { ModkitModuleFormatType } from '../../src/types/enum';

import { load as loadDependency } from '../../src/loaders/iife';

import { mocked } from 'ts-jest/utils';
// Mocks
const _loadLibDependency = loadLibDependency.bind(Modkit);
const _loadModuleDependency = loadModuleDependency.bind(Modkit);
jest.mock('semver', () => {
  return {
    default: {
      satisfies: jest.fn()
    }
  };
});
jest.mock('../../src/loaders/iife');
const mockLoadDependency = mocked(loadDependency, true);

const libDependency = {
  name: 'dummy-dependency'
} as ModkitDependency;
const modDependency = {
  name: 'dummy-dependency'
} as ModkitDependency;

describe('Modkit Dependency Helper', () => {
  describe('loadLibDependency()', () => {
    it('should resolve directly if ref is defined', async () => {
      Object.defineProperty(window, 'dummy-dependency', { value: 'dummy' });
      expect(await _loadLibDependency(libDependency)).toEqual(undefined);
    });
    it('should throw if ref is still undefined', async () => {
      libDependency.name = 'dummy-dependency-2';
      libDependency.version = 'dummy-version';
      await expect(_loadLibDependency(libDependency)).rejects.toThrow('Library Dependency [dummy-dependency-2@dummy-version] could not be found: Error: Reference is undefined');
    });
    it('should resolve if ref is defined after loading', async () => {
      libDependency.name = 'dummy-dependency-3';
      libDependency.version = 'dummy-version';
      libDependency.endpoint = 'dummy-endpoint';
      mockLoadDependency.mockImplementation(() => {
        return new Promise((resolve) => {
          Object.defineProperty(window, 'dummy-dependency-3', { value: 'dummy' });
          resolve({ value: 'dummy' });
        });
      });
      await _loadLibDependency(libDependency);
      expect(mockLoadDependency).toHaveBeenCalled();
    });
  });
  describe('loadModuleDependency()', () => {
    beforeAll(() => {
      spyOn(Modkit, 'load');
    });
    it('should throw if module is unavailable', async () => {
      await expect(_loadModuleDependency(modDependency)).rejects.toThrow('Module Dependency [dummy-dependency] is not available.');
    });
    it('should load module is has endpoint', async () => {
      modDependency.endpoint = 'dummy-endpoint';
      await _loadModuleDependency(modDependency);
      expect(Modkit.load).toHaveBeenCalled();
    });
    it('should load module is has manifest', async () => {
      modDependency.version = '';
      modDependency.format = {
        type: ModkitModuleFormatType.Amd
      };
      await _loadModuleDependency(modDependency);
      expect(Modkit.load).toHaveBeenCalled();
    });
    it('should resolve if module is loaded', async () => {
      const pkg = {
        ...modDependency,
        mod: 'dummy-mod',
        version: '0.0.1',
        rootPath: ''
      } as ModkitPackage;
      Modkit.modules.push(pkg);
      expect(await _loadModuleDependency(modDependency)).toEqual(undefined);
    });
    it('should throw if module is loaded with uncompatible version', async () => {
      modDependency.version = '1.0.0';
      await expect(_loadModuleDependency(modDependency)).rejects.toThrow('Module Dependency [dummy-dependency] has incompatible version: (needs 1.0.0, has 0.0.1)');
    });
  });
});
