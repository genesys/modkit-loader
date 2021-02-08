import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

export default () => {
  const dest = '../../docs/static/modules/iife';
  const destDist = `${dest}/dist`;
  return {
    input: [
      'src/iife.js'
    ],
    output: [
      {
        dir: destDist,
        format: 'iife',
        name: 'IIFE',
        sourcemap: false
      }
    ],
    plugins: [
      copy({
        targets: [
          { src: 'manifest.json', dest }
        ]
      }),
      resolve({
        browser: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  };
}
