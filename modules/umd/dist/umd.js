(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('dayjs')) :
	typeof define === 'function' && define.amd ? define(['exports', 'dayjs'], factory) :
	(global = global || self, factory(global.UMD = {}, global.dayjs));
}(this, function (exports, dayjs) { 'use strict';

	dayjs = dayjs && dayjs.hasOwnProperty('default') ? dayjs['default'] : dayjs;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var calendar = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t,a){var n="h:mm A",d={lastDay:"[Yesterday at] "+n,sameDay:"[Today at] "+n,nextDay:"[Tomorrow at] "+n,nextWeek:"dddd [at] "+n,lastWeek:"[Last] dddd [at] "+n,sameElse:"MM/DD/YYYY"};t.prototype.calendar=function(e,t){var n=t||this.$locale().calendar||d,s=a(e||void 0).startOf("d"),o=this.diff(s,"d",!0),i=o<-6?"sameElse":o<-1?"lastWeek":o<0?"lastDay":o<1?"sameDay":o<2?"nextDay":o<7?"nextWeek":"sameElse",f=n[i]||d[i];return "function"==typeof f?f.call(this,a()):this.format(f)};}});
	});

	//
	dayjs.extend(calendar);
	var config = {
	  sameDay: '[Updated Today at] h:mm A',
	  nextDay: '[Updated Tomorrow]',
	  nextWeek: '[Updated] dddd',
	  lastDay: '[Updated Yesterday]',
	  lastWeek: '[Last] dddd',
	  sameElse: '[Updated on] DD/MM/YYYY'
	};
	var script = {
	  name: 'ModuleView',
	  props: {
	    updatedDate: String
	  },
	  computed: {
	    text: function text() {
	      return dayjs(this.updatedDate).calendar(null, config);
	    }
	  }
	};

	/* script */
	            const __vue_script__ = script;
	            
	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { attrs: { id: "umd-sample" } }, [
	    _c("div", { staticClass: "container" }, [
	      _c("div", { staticClass: "date" }, [_vm._v(_vm._s(_vm.text))]),
	      _vm._v(" "),
	      _c("div", { staticClass: "slot" }, [_vm._t("default")], 2)
	    ])
	  ])
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  const __vue_inject_styles__ = function (inject) {
	    if (!inject) return
	    inject("data-v-878b3fde_0", { source: "div#umd-sample[data-v-878b3fde] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#umd-sample > div.container[data-v-878b3fde] {\n    display: flex;\n    flex-direction: column;\n}\ndiv#umd-sample > div.container > div.date[data-v-878b3fde] {\n      padding-top: 1em;\n      padding-right: 1em;\n      color: var(--madoc-github-grey-2);\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */", map: {"version":3,"sources":["/home/runner/work/modkit-loader/modkit-loader/examples/umd/src/ModuleView.vue","ModuleView.vue"],"names":[],"mappings":"AAqCA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AAAA;AAHA;IAKA,aAAA;IACA,sBAAA;AAAA;AANA;MAQA,gBAAA;MACA,kBAAA;MACA,iCAAA;AAAA;;ACnCA,yCAAyC","file":"ModuleView.vue","sourcesContent":[null,"div#umd-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n  div#umd-sample > div.container {\n    display: flex;\n    flex-direction: column; }\n    div#umd-sample > div.container > div.date {\n      padding-top: 1em;\n      padding-right: 1em;\n      color: var(--madoc-github-grey-2); }\n\n/*# sourceMappingURL=ModuleView.vue.map */"]}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__ = "data-v-878b3fde";
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* component normalizer */
	  function __vue_normalize__(
	    template, style, script,
	    scope, functional, moduleIdentifier,
	    createInjector, createInjectorSSR
	  ) {
	    const component = (typeof script === 'function' ? script.options : script) || {};

	    // For security concerns, we use only base name in production mode.
	    component.__file = "/home/runner/work/modkit-loader/modkit-loader/examples/umd/src/ModuleView.vue";

	    if (!component.render) {
	      component.render = template.render;
	      component.staticRenderFns = template.staticRenderFns;
	      component._compiled = true;

	      if (functional) component.functional = true;
	    }

	    component._scopeId = scope;

	    {
	      let hook;
	      if (style) {
	        hook = function(context) {
	          style.call(this, createInjector(context));
	        };
	      }

	      if (hook !== undefined) {
	        if (component.functional) {
	          // register for functional component in vue file
	          const originalRender = component.render;
	          component.render = function renderWithStyleInjection(h, context) {
	            hook.call(context);
	            return originalRender(h, context)
	          };
	        } else {
	          // inject component registration as beforeCreate hook
	          const existing = component.beforeCreate;
	          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	      }
	    }

	    return component
	  }
	  /* style inject */
	  function __vue_create_injector__() {
	    const head = document.head || document.getElementsByTagName('head')[0];
	    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
	    const isOldIE =
	      typeof navigator !== 'undefined' &&
	      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

	    return function addStyle(id, css) {
	      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

	      const group = isOldIE ? css.media || 'default' : id;
	      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

	      if (!style.ids.includes(id)) {
	        let code = css.source;
	        let index = style.ids.length;

	        style.ids.push(id);

	        if (isOldIE) {
	          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
	        }

	        if (!style.element) {
	          const el = style.element = document.createElement('style');
	          el.type = 'text/css';

	          if (css.media) el.setAttribute('media', css.media);
	          if (isOldIE) {
	            el.setAttribute('data-group', group);
	            el.setAttribute('data-next-index', '0');
	          }

	          head.appendChild(el);
	        }

	        if (isOldIE) {
	          index = parseInt(style.element.getAttribute('data-next-index'));
	          style.element.setAttribute('data-next-index', index + 1);
	        }

	        if (style.element.styleSheet) {
	          style.parts.push(code);
	          style.element.styleSheet.cssText = style.parts
	            .filter(Boolean)
	            .join('\n');
	        } else {
	          const textNode = document.createTextNode(code);
	          const nodes = style.element.childNodes;
	          if (nodes[index]) style.element.removeChild(nodes[index]);
	          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
	          else style.element.appendChild(textNode);
	        }
	      }
	    }
	  }
	  /* style inject SSR */
	  

	  
	  var ModuleView = __vue_normalize__(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    __vue_create_injector__);

	function load(_ref) {
	  var Vue = _ref.Vue,
	      updatedDate = _ref.updatedDate;

	  var _ModuleView = Vue.extend(ModuleView);

	  new _ModuleView({
	    propsData: {
	      updatedDate: updatedDate
	    }
	  }).$mount('#umd-sample');
	  return;
	}
	function unload() {
	  document.getElementById('umd-sample').innerHTML = '';
	}
	var UmdView = ModuleView;

	exports.UmdView = UmdView;
	exports.load = load;
	exports.unload = unload;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
