import { ModkitModuleFormatType } from './../../src/types/enum';
import { ModkitManifest } from '../../src/types/modkit';
import { load } from '../../src/loaders/amd';

// Mocks
let shouldResolve = false;
const mockRequire = jest.fn().mockImplementation((param, resolve, reject) => {
  if (shouldResolve) {
    resolve(param[0]);
  } else {
    reject(param[0]);
  }
});
jest.mock('../../src/libs/require.js', () => {
  throw new Error('dummy-error');
});

const manifest = {
  name: 'dummy-amd',
  endpoint: 'dummy-endpoint',
  version: 'dummy-version',
  format: {
    type: ModkitModuleFormatType.Amd
  } as any
} as ModkitManifest;

describe('Modkit Amd Loader', () => {
  describe('load()', () => {
    it('should load require.js and fail', async () => {
      await expect(load(manifest)).rejects.toThrow('Could not load RequireJS: Error: dummy-error');
    });
    it('should load require.js if not yet available', async () => {
      jest.mock('../../src/libs/require.js', () => {
        return {
          define: 'define',
          require: mockRequire,
          requirejs: 'requirejs'
        };
      });
      await expect(load(manifest)).rejects.toThrow('Could not load Module: dummy-endpoint');
    });
    it('should load require.js and get module data', async () => {
      shouldResolve = true;
      const pkg = await load(manifest);
      expect(pkg).toEqual('dummy-endpoint');
    });
  });
});
