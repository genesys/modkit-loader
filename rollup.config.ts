import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { string } from 'rollup-plugin-string';
import json from 'rollup-plugin-json';

const camelName = 'ModkitLoader';
const cjsPackage = 'dist/commonjs';
const esmPackage = 'dist/module';
const sysPackage = 'dist/system';
const docsPackage = 'docs/plugins/libs/modkit-loader';

export default {
  input: 'src/index.ts',
  output: [
    { dir: cjsPackage, name: camelName, format: 'cjs', sourcemap: true },
    { dir: esmPackage, format: 'es', sourcemap: true },
    { dir: sysPackage, format: 'system', sourcemap: true },
    { dir: docsPackage, format: 'es', sourcemap: true }
  ],
  watch: {
    include: 'src/**'
  },
  plugins: [
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true
    }),
    string({
      include: 'src/templates/**'
    }),
    commonjs(),
    resolve({
      browser: true
    }),
    sourceMaps()
  ]
};
