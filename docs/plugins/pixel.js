import Vue from 'vue';
import { applyPolyfills, defineCustomElements } from '@pixel/components/loader';

Vue.config.ignoredElements = [
  /pixel-\w*/
];

applyPolyfills().then(() => {
  defineCustomElements();
});
