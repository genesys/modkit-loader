import * as Modkit from './libs/modkit-loader';

export default (context, inject) => {
  inject('modkit', Modkit);
};
