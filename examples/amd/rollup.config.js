import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';

export default () => {
  const dest = '../../docs/static/modules/amd';
  const destDist = `${dest}/dist`;
  return {
    input: [
      'src/amd.js'
    ],
    output: [
      {
        dir: destDist,
        format: 'amd',
        sourcemap: false
      }
    ],
    plugins: [
      copy({
        targets: [
          { src: 'src/static', dest: destDist },
          { src: 'manifest.json', dest }
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
