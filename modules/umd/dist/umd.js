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

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	const isOldIE = typeof navigator !== 'undefined' &&
	    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function createInjector(context) {
	    return (id, style) => addStyle(id, style);
	}
	let HEAD;
	const styles = {};
	function addStyle(id, css) {
	    const group = isOldIE ? css.media || 'default' : id;
	    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
	    if (!style.ids.has(id)) {
	        style.ids.add(id);
	        let code = css.source;
	        if (css.map) {
	            // https://developer.chrome.com/devtools/docs/javascript-debugging
	            // this makes source maps inside style tags work properly in Chrome
	            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
	            // http://stackoverflow.com/a/26603875
	            code +=
	                '\n/*# sourceMappingURL=data:application/json;base64,' +
	                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
	                    ' */';
	        }
	        if (!style.element) {
	            style.element = document.createElement('style');
	            style.element.type = 'text/css';
	            if (css.media)
	                style.element.setAttribute('media', css.media);
	            if (HEAD === undefined) {
	                HEAD = document.head || document.getElementsByTagName('head')[0];
	            }
	            HEAD.appendChild(style.element);
	        }
	        if ('styleSheet' in style.element) {
	            style.styles.push(code);
	            style.element.styleSheet.cssText = style.styles
	                .filter(Boolean)
	                .join('\n');
	        }
	        else {
	            const index = style.ids.size - 1;
	            const textNode = document.createTextNode(code);
	            const nodes = style.element.childNodes;
	            if (nodes[index])
	                style.element.removeChild(nodes[index]);
	            if (nodes.length)
	                style.element.insertBefore(textNode, nodes[index]);
	            else
	                style.element.appendChild(textNode);
	        }
	    }
	}

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
	    inject("data-v-878b3fde_0", { source: "div#umd-sample[data-v-878b3fde] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#umd-sample > div.container[data-v-878b3fde] {\n  display: flex;\n  flex-direction: column;\n}\ndiv#umd-sample > div.container > div.date[data-v-878b3fde] {\n  padding-top: 1em;\n  padding-right: 1em;\n  color: var(--madoc-github-grey-2);\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */", map: {"version":3,"sources":["/home/runner/work/modkit-loader/modkit-loader/examples/umd/src/ModuleView.vue","ModuleView.vue"],"names":[],"mappings":"AAqCA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;ACpCA;ADqCA;EACA,aAAA;EACA,sBAAA;ACnCA;ADoCA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;AClCA;;AAEA,yCAAyC","file":"ModuleView.vue","sourcesContent":["<template>\n  <div id=\"umd-sample\">\n    <div class=\"container\">\n      <div class=\"date\">{{ text }}</div>\n      <div class=\"slot\">\n        <slot/>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport dayjs from 'dayjs';\nimport dayjs_plugin_calendar from 'dayjs/plugin/calendar';\ndayjs.extend(dayjs_plugin_calendar);\nconst config = {\n  sameDay: '[Updated Today at] h:mm A',\n  nextDay: '[Updated Tomorrow]',\n  nextWeek: '[Updated] dddd',\n  lastDay: '[Updated Yesterday]',\n  lastWeek: '[Last] dddd',\n  sameElse: '[Updated on] DD/MM/YYYY'\n};\nexport default {\n  name: 'ModuleView',\n  props: {\n    updatedDate: String\n  },\n  computed: {\n    text () {\n      return dayjs(this.updatedDate).calendar(null, config);\n    }\n  }\n};\n</script>\n\n<style lang=\"scss\" scoped>\ndiv#umd-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  > div.container {\n    display: flex;\n    flex-direction: column;\n    > div.date {\n      padding-top: 1em;\n      padding-right: 1em;\n      color: var(--madoc-github-grey-2);\n    }\n    > div.slot {\n\n    }\n  }\n}\n</style>\n","div#umd-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#umd-sample > div.container {\n  display: flex;\n  flex-direction: column;\n}\ndiv#umd-sample > div.container > div.date {\n  padding-top: 1em;\n  padding-right: 1em;\n  color: var(--madoc-github-grey-2);\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */"]}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__ = "data-v-878b3fde";
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	function load(_ref) {
	  var Vue = _ref.Vue,
	      updatedDate = _ref.updatedDate;

	  var _ModuleView = Vue.extend(__vue_component__);

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
	var UmdView = __vue_component__;

	exports.UmdView = UmdView;
	exports.load = load;
	exports.unload = unload;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
