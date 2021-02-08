import { ModkitOptions, ModkitPackage } from './types/modkit';
import { loadPackage as load, getPackage as getModule } from './helpers/package';

const modules: ModkitPackage[] = [];
const options: ModkitOptions = { withCredentials: false };

/**
 * Modkit singleton instance.
 */
export {
  modules,
  options,
  load,
  getModule
};
