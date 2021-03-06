/**
 * Module dependency type.
 */
export enum ModkitDependencyType {
  Library = 'lib',
  Module = 'module'
}

/**
 * Module format.
 */
export enum ModkitModuleFormatType {
  None = 'none',
  Amd = 'amd',
  Esm = 'esm',
  Iife = 'iife',
  Umd = 'umd',
  System = 'system'
}
