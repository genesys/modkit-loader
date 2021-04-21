import { ModkitOptions, ModkitPackage } from './types/modkit';
import { loadPackage, getPackage } from './helpers/package';

/**
 * The list of modules currently loaded in the application.
 */
export const modules: ModkitPackage[] = [];
/**
 * Properties that customizes the Modkit behavior.
 */
export const options: ModkitOptions = {};

/**
 * Loads package by manifest(s), or url(s).
 * @param from The package location. [url(s), or manifest(s)]
 * @param parseManifest Custom parseManifest method.
 */
export const load = loadPackage;

/**
 * Get package by name.
 * @param name Package name.
 */
export const getModule = getPackage;
