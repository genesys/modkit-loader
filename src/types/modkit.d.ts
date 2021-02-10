import { ModkitDependencyType, ModkitModuleFormatType } from './enum';

declare global {
  interface Window {
    [key: string]: any;
    /**
     * Defines a module.
     * @param param Module dependencies.
     */
    define?: (param: string|string[]) => any;
    /**
     * Requires a module.
     * @param param Module name.
     * @param onSuccess Success callback.
     * @param onError Error callback.
     */
    require?: (param: string|string[], onSuccess: (mod: any) => void, onError: (err: Error) => void) => any;
    /**
     * Requires a module.
     * @param param Module name.
     * @param onSuccess Success callback.
     * @param onError Error callback.
     */
    requirejs?: (param: string|string[], onSuccess: (mod: any) => void, onError: (err: Error) => void) => any;
    /**
     * System singleton instance.
     */
    System: {
      /**
       * Imports a system module.
       */
      import: (endpoint: string) => Promise<any>;
    };
  }
}

/**
 * Modkit HTML script element.
 */
declare interface HTMLModkitScriptElement extends HTMLScriptElement {
  /**
   * Success callback.
   */
  onmodkitinit?: (mod: any) => void;
  /**
   * Error callback.
   */
  onmodkiterror?: (err: Error) => void;
}

/**
 * This is the main class from Modkit.
 */
declare interface ModkitManager {
  /**
   * List of current loaded modules.
   */
  modules: ModkitPackage[];
  /**
   * Modkit options.
   */
  options: ModkitOptions;
  /**
   * Loads module by manifest(s), or url(s).
   * @param from The module location. [url(s), or manifest(s)]
   * @param validator Custom validation method.
   */
  load: (from: string | string[] | ModkitManifest | ModkitManifest[], validator?: ModkitValidator) => Promise<ModkitPackage | ModkitPackage[]>;
  /**
   * Get module by name.
   * @param name Module name.
   */
  getModule: (name: string) => ModkitPackage|null;
}

/**
 * Modkit configuration options.
 */
declare interface ModkitOptions {
  /**
   * Global validator, that will be called for each module loading.
   */
  validator?: ModkitValidator;
}

/**
 * Iife module manifest.
 */
declare interface ModkitIife {
  /**
   * Module name.
   */
  name: string;
  /**
   * Module endpoint.
   */
  endpoint: string;
  /**
   * Module format.
   */
  format?: {
    /**
     * Global module name to access (window.<name>)
     */
    name: string;
  };
}

/**
 * Modkit package (manifest and module).
 */
interface ModkitPackage extends ModkitManifest {
  /**
   * Module export.
   */
  mod: any;
  /**
   * Module root path.
   */
  rootPath: string;
}

/**
 * Modkit manifest.
 */
declare interface ModkitManifest {
  /**
   * Module name.
   */
  name: string;
  /**
   * Module version.
   */
  version: string;
  /**
   * Module endpoint.
   */
  endpoint: string;
  /**
   * Module format.
   */
  format: {
    /**
     * Module output type (amd, esm, iife, system or umd).
     */
    type: ModkitModuleFormatType;
    /**
     * Global module name to access (window.<name>) (if is a iife format)
     */
    name?: string;
  };
  /**
   * Module dependencies
   */
  dependencies?: ModkitDependency[];
}

/**
 * Module validator.
 * @param manifest The module manifest.
 */
declare type ModkitValidator = (manifest: ModkitManifest) => boolean;

/**
 * Module dependency.
 */
declare interface ModkitDependency {
  /**
   * Dependency name.
   */
  name: string;
  /**
   * Dependency version.
   */
  version: string;
  /**
   * Dependency type (library or module).
   */
  type: ModkitDependencyType;
  /**
   * Dependency cdn endpoint.
   */
  endpoint?: string;
  /**
   * Dependency reference (window.<ref>)
   */
  ref?: string;
  /**
   * Dependency format.
   */
  format?: {
    /**
     * Dependency format type (if is a modkit module).
     */
    type: ModkitModuleFormatType;
  };
  /**
   * Dependency dependencies (if is a modkit module).
   */
  dependencies?: ModkitDependency[];
}

/**
 * Modkit Any Object.
 */
declare interface ModkitObject {
  [key: string]: any;
}
