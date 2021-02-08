declare module 'resolve-url' {
  /**
   * Resolves relative urls.
   * @param rootPath
   * @param relativePath
   */
  export default function resolveUrl (rootPath: string, relativePath: string): string;
}
