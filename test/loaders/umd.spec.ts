import { ModkitModuleFormatType } from './../../src/types/enum';
import { ModkitManifest } from '../../src/types/modkit';
import { load } from '../../src/loaders/umd';

import { hasRequire, loadModule as loadAmd } from '../../src/loaders/amd';
import { load as loadIife } from '../../src/loaders/iife';

import { mocked } from 'ts-jest/utils';
// Mocks
jest.mock('../../src/loaders/amd');
jest.mock('../../src/loaders/iife');
const mockHasRequire = mocked(hasRequire, true);
const mockLoadAmd = mocked(loadAmd, true);
const mockLoadIife = mocked(loadIife, true);

const manifest = {
  name: 'dummy-umd',
  endpoint: 'dummy-endpoint',
  version: 'dummy-version',
  format: {
    type: ModkitModuleFormatType.Umd
  } as any
} as ModkitManifest;

describe('Modkit Umd Loader', () => {
  describe('load()', () => {
    it('should load with iife by default', async () => {
      await expect(load(manifest));
      expect(mockLoadIife).toHaveBeenCalled();
    });
    it('should load with amd if app has an amd loader', async () => {
      mockHasRequire.mockReturnValueOnce(true as any);
      await expect(load(manifest));
      expect(mockLoadAmd).toHaveBeenCalled();
    });
  });
});
