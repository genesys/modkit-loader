import * as Modkit from '../../src/index';
import { ModkitManifest, ModkitPackage } from '../../src/types/modkit';
import { getPackage, loadPackage } from '../../src/helpers/package';
import { loadByManifest, loadByUrl } from '../../src/helpers/manifest';

import { mocked } from 'ts-jest/utils';
// Mocks
const _getPackage = getPackage.bind(Modkit);
const _loadPackage = loadPackage.bind(Modkit);
jest.mock('../../src/helpers/manifest');
const mockLoadByManifest = mocked(loadByManifest, true);
const mockLoadByUrl = mocked(loadByUrl, true);

describe('Modkit Package Helper', () => {
  describe('loadPackage()', () => {
    it('should load package by url', () => {
      const url = '';
      _loadPackage(url);
      expect(mockLoadByUrl).toHaveBeenCalled();
    });
    it('should load package by manifest', () => {
      const manifest = {} as ModkitManifest;
      _loadPackage(manifest);
      expect(mockLoadByManifest).toHaveBeenCalled();
    });
    it('should load packages by urls', () => {
      const urls = ['', ''];
      _loadPackage(urls);
      expect(mockLoadByUrl).toHaveBeenCalledTimes(2);
    });
    it('should load packages by manifests', () => {
      const manifests = [{}, {}] as ModkitManifest[];
      _loadPackage(manifests);
      expect(mockLoadByManifest).toHaveBeenCalledTimes(2);
    });
  });
  describe('getPackage()', () => {
    it('should not get package by name', () => {
      const pkg = _getPackage('dummy');
      expect(pkg).toEqual(null);
    });
    it('should get package by name', () => {
      const mod = { name: 'dummy' } as ModkitPackage;
      const mod2 = { name: 'dummy2' } as ModkitPackage;
      Modkit.modules.push(mod);
      Modkit.modules.push(mod2);
      const pkg = _getPackage('dummy');
      expect(pkg).toEqual(mod);
    });
  });
});
