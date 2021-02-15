import ModuleView from './ModuleView.vue';

export function load ({ Vue, updatedDate }) {
  const _ModuleView = Vue.extend(ModuleView);
  new _ModuleView({
    propsData: {
      updatedDate
    }
  }).$mount('#umd-sample');
  return;
}

export function unload () {
  document.getElementById('umd-sample').innerHTML = '';
}
