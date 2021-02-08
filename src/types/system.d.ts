declare module 'systemjs/dist/s.min.js' {
  /**
   * System singleton instance.
   */
  export interface System {
    /**
     * Imports a system module.
     */
    import: (endpoint: string) => Promise<any>;
  }
}
