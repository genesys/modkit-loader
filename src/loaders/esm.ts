import template from 'es6-template-strings';
import { v4 } from 'uuid';

import { ModkitManifest, HTMLModkitScriptElement, ModkitObject } from '../types/modkit';

// Templates
import moduleTpl from '../templates/esm-module.tpl';
import nomoduleTpl from '../templates/esm-nomodule.tpl';

/**
 * Loads a esm module.
 * @param manifest The module manifest.
 */
export async function load (manifest: ModkitManifest): Promise<ModkitObject> {
  return new Promise((resolve, reject) => {
    const onmodkiterror = (err: Error) => {
      reject(new Error(`Could not load Module: ${err}`));
    };
    // Module
    const _moduleId = v4();
    const _modulescript: HTMLModkitScriptElement = document.createElement('script');
    _modulescript.setAttribute('type', 'module');
    _modulescript.setAttribute('id', _moduleId);
    _modulescript.text = template(moduleTpl, { moduleId: _moduleId, endpoint: manifest.endpoint });
    _modulescript.onmodkitinit = (_mod) => {
      resolve(_mod);
    };
    _modulescript.onmodkiterror = onmodkiterror;
    document.getElementsByTagName('head')[0].appendChild(_modulescript);
    // Nomodule
    const _nomoduleId = v4();
    const _nomodulescript: HTMLModkitScriptElement = document.createElement('script');
    _nomodulescript.setAttribute('nomodule', '');
    _nomodulescript.setAttribute('id', _nomoduleId);
    _nomodulescript.text = template(nomoduleTpl, { nomoduleId: _nomoduleId });
    _nomodulescript.onmodkiterror = onmodkiterror;
    document.getElementsByTagName('head')[0].appendChild(_nomodulescript);
  });
}
