import { ModkitModuleFormatType } from './../../src/types/enum';
import { ModkitManifest, HTMLModkitScriptElement } from '../../src/types/modkit';
import { load } from '../../src/loaders/esm';

// Mocks
jest.mock('es6-template-strings', () => {
  return {
    default: () => ''
  };
});

const manifest = {
  name: 'dummy-esm',
  endpoint: 'dummy-endpoint',
  version: 'dummy-version',
  format: {
    type: ModkitModuleFormatType.Esm
  } as any
} as ModkitManifest;

describe('Modkit Esm Loader', () => {
  describe('load()', () => {
    it('should resolve', async (done) => {
      load(manifest).then((_mod) => {
        expect(_mod).toEqual('dummy-mod');
        done();
      });
      const moduleScript: HTMLModkitScriptElement|null = document.querySelector('script[type=module]');
      if (moduleScript && moduleScript.onmodkitinit) { moduleScript.onmodkitinit('dummy-mod'); }
    });
    it('should reject on unsupported browser', async (done) => {
      document.getElementsByTagName('head')[0].innerHTML = '';
      load(manifest).catch((err: Error) => {
        expect(err.message).toEqual('Could not load Module: Error: dummy-error');
        done();
      });
      const nomoduleScript: HTMLModkitScriptElement|null = document.querySelector('script[nomodule]');
      if (nomoduleScript && nomoduleScript.onmodkiterror) { nomoduleScript.onmodkiterror(new Error('dummy-error')); }
    });
  });
});
