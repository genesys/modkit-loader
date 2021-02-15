import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';

export default () => {
  const dest = '../../docs/static/modules/umd';
  const destDist = `${dest}/dist`;
  return {
    input: [
      'src/umd.js'
    ],
    output: [
      {
        dir: destDist,
        format: 'umd',
        name: 'UMD',
        sourcemap: false,
        globals: {
          dayjs: 'dayjs'
        }
      }
    ],
    external: [
      'dayjs'
    ],
    plugins: [
      copy({
        targets: [
          { src: 'manifest.ref.json', dest },
          { src: 'manifest.cdn.json', dest }
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
