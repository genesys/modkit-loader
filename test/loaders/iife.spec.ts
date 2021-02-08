import { ModkitIife } from '../../src/types/modkit';
import { load } from '../../src/loaders/iife';

const manifest = {
  name: 'dummy-iife',
  endpoint: 'dummy-endpoint',
  format: {
    name: 'dummy-name'
  } as any
} as ModkitIife;

describe('Modkit Iife Loader', () => {
  describe('load()', () => {
    beforeAll(() => {
      (window as any)['dummy-name'] = 'dummy-mod';
      (window as any)['dummy-iife'] = 'dummy-mod-2';
    });
    it('should resolve with format name', async (done) => {
      load(manifest).then((_mod) => {
        expect(_mod).toEqual('dummy-mod');
        done();
      });
      const script: HTMLScriptElement|null = document.querySelector('script[src=dummy-endpoint]');
      if (script && script.onload) { script.onload(new Event('')); }
    });
    it('should resolve with iife name', async (done) => {
      document.getElementsByTagName('head')[0].innerHTML = '';
      if (manifest.format) { manifest.format.name = ''; }
      load(manifest).then((_mod) => {
        expect(_mod).toEqual('dummy-mod-2');
        done();
      });
      const script: HTMLScriptElement|null = document.querySelector('script[src=dummy-endpoint]');
      if (script && script.onload) { script.onload(new Event('')); }
    });
    it('should reject', async (done) => {
      document.getElementsByTagName('head')[0].innerHTML = '';
      load(manifest).catch((err: Error) => {
        expect(err.message).toEqual('Could not load Module: dummy-error');
        done();
      });
      const script: HTMLScriptElement|null = document.querySelector('script[src=dummy-endpoint]');
      if (script && script.onerror) { script.onerror('dummy-error'); }
    });
  });
});
