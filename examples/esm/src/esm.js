import ModuleView from './ModuleView.vue';

export function load ({ Vue, umdView }) {
  const _ModuleView = Vue.extend(ModuleView);
  new _ModuleView({
    propsData: {
      umdView
    }
  }).$mount('#esm-sample');
  return;
}

export function unload () {
  document.getElementById('esm-sample').innerHTML = '';
}
