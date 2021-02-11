import { ModkitOptions, ModkitPackage } from './types/modkit';
import { loadPackage as load, getPackage as getModule } from './helpers/package';

/**
 * The list of modules currently loaded in the application.
 */
const modules: ModkitPackage[] = [];
/**
 * Properties that customizes the Modkit behavior.
 */
const options: ModkitOptions = {};

export {
  modules,
  options,
  load,
  getModule
};
