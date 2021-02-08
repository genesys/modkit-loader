import { ModkitObject } from '../types/modkit';

/**
 * Finds an deep attribute inside an object.
 * @param obj The related object.
 * @param path The path to attribute.
 */
export function deepFind (obj: ModkitObject, path: string): ModkitObject {
  let result: ModkitObject = obj;
  const arrPath = path.split('.');
  for (const key of arrPath) {
    result = result[key];
  }
  return result;
}

/**
 * Returns whether the param is an object or not.
 * @param obj The related object.
 */
export function isObject (obj: any): boolean {
  const type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}
