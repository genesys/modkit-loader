import { ModkitIife, ModkitObject } from '../types/modkit';

/**
 * Loads a iife module.
 * @param data The module manifest.
 */
export async function load (data: ModkitIife): Promise<ModkitObject> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute('src', data.endpoint);
    script.onload = () => {
      const name = (data.format && data.format.name) ? data.format.name : data.name;
      resolve(window[name]);
    };
    script.onerror = (error) => {
      reject(new Error(`Could not load Module: ${error}`));
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}
