import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json';

export default () => {
  const dest = '../../docs/static/modules/system';
  const destDist = `${dest}/dist`;
  return {
    input: [
      'src/system.js'
    ],
    output: [
      {
        dir: destDist,
        format: 'system',
        sourcemap: false
      }
    ],
    plugins: [
      json(),
      copy({
        targets: [
          { src: 'manifest.json', dest },
          { src: 'src/static', dest: destDist }
        ]
      }),
      resolve({
        browser: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      VuePlugin(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  };
}
