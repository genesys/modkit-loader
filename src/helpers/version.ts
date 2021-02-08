import semver from 'semver';

/**
 * Checks whether versions are compatible.
 * @param depVersion Version A.
 * @param modVersion Version B (to check).
 */
export function isCompatibleVersion (depVersion: string, modVersion?: string): boolean {
  if (modVersion) {
    return semver.satisfies(modVersion, depVersion);
  }
  return true;
}
