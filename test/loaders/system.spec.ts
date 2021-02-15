import { ModkitModuleFormatType } from './../../src/types/enum';
import { ModkitManifest } from '../../src/types/modkit';
import { load } from '../../src/loaders/system';

// Mocks
jest.mock('systemjs/dist/s.min.js', () => {
  window.System = {
    import: jest.fn().mockRejectedValueOnce('dummy-error')
  };
});

const manifest = {
  name: 'dummy-system',
  endpoint: 'dummy-endpoint',
  version: 'dummy-version',
  format: {
    type: ModkitModuleFormatType.System
  } as any
} as ModkitManifest;

describe('Modkit System Loader', () => {
  describe('load()', () => {
    it('should load system.js and fail', async () => {
      await expect(load(manifest)).rejects.toThrow('Could not load Module: dummy-error');
    });
    it('should load system.js and succeed', async () => {
      (window.System.import as jest.Mock).mockResolvedValueOnce('dummy-mod');
      expect(await load(manifest)).toEqual('dummy-mod');
    });
  });
});
