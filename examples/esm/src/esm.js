import ModuleView from './ModuleView.vue';

export function load ({ Vue, modulePath }) {
  const _ModuleView = Vue.extend(ModuleView);
  new _ModuleView({
    propsData: {
      modulePath
    }
  }).$mount('#esm-sample');
  return;
}

export function unload () {
  document.getElementById('esm-sample').innerHTML = '';
}
