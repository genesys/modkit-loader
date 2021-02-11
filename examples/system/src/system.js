import ModuleView from './ModuleView.vue';

export async function load ({ Vue, modulePath }) {
  const checkPeople = await import('./check-people.js');
  const _ModuleView = Vue.extend(ModuleView);
  new _ModuleView({
    propsData: {
      modulePath,
      men: checkPeople.listMen(),
      women: checkPeople.listWomen()
    }
  }).$mount('#system-sample');
  return;
}

export async function unload () {
  const mod = await import('./left-message.js');
  document.getElementById('system-sample').innerHTML = mod.default();
  
}
