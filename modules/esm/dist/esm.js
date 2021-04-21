//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "Badge"
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

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "129",
        height: "20",
        role: "img",
        "aria-label": "Powered by Genesys"
      }
    },
    [
      _c("title", [_vm._v("Powered by Genesys")]),
      _vm._v(" "),
      _c(
        "clipPath",
        { attrs: { xmlns: "http://www.w3.org/2000/svg", id: "a" } },
        [
          _c("rect", {
            attrs: { width: "127", height: "20", rx: "3", fill: "#ffffff" }
          })
        ]
      ),
      _vm._v(" "),
      _c("g", { attrs: { "clip-path": "url(#a)" } }, [
        _c("rect", { attrs: { width: "24", height: "20", fill: "#FFFFFF" } }),
        _vm._v(" "),
        _c("rect", {
          attrs: { x: "24", width: "105", height: "20", fill: "#FFFFFF" }
        })
      ]),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            "text-anchor": "middle",
            "font-family": "Roboto,Verdana,Geneva,DejaVu Sans,sans-serif",
            "text-rendering": "geometricPrecision",
            "font-size": "110"
          }
        },
        [
          _c("image", {
            attrs: {
              x: "5",
              y: "3",
              width: "14",
              height: "14",
              "xlink:href": "https://github.com/genesys.png"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                x: "722",
                y: "140",
                transform: "scale(.1)",
                fill: "#FF4F1F",
                textLength: "950"
              }
            },
            [_vm._v("\n      Powered by Genesys\n    ")]
          )
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
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
    undefined,
    undefined,
    undefined
  );

//
var script$1 = {
  name: 'ModuleView',
  components: {
    Badge: __vue_component__
  },
  props: {
    umdView: {
      type: Object,
      "default": function _default() {
        return null;
      }
    }
  }
};

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
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { id: "esm-sample" } },
    [
      _c(_vm.umdView, { tag: "component" }, [
        _c(
          "a",
          { staticClass: "badge", attrs: { href: "https://www.genesys.com/" } },
          [_c("Badge")],
          1
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-39f28c5c_0", { source: "div#esm-sample[data-v-39f28c5c] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#esm-sample a.badge[data-v-39f28c5c] {\n  justify-content: flex-end;\n  display: flex;\n  padding-right: 1em;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */", map: {"version":3,"sources":["/home/runner/work/modkit-loader/modkit-loader/examples/esm/src/ModuleView.vue","ModuleView.vue"],"names":[],"mappings":"AAyBA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;ACxBA;ADyBA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;ACvBA;;AAEA,yCAAyC","file":"ModuleView.vue","sourcesContent":["<template>\n  <div id=\"esm-sample\">\n    <component :is=\"umdView\">\n      <a class=\"badge\" href=\"https://www.genesys.com/\"><Badge/></a>\n    </component>\n  </div>\n</template>\n\n<script>\nimport Badge from './Badge.vue';\nexport default {\n  name: 'ModuleView',\n  components: {\n    Badge\n  },\n  props: {\n    umdView: {\n      type: Object,\n      default: () => { return null; }\n    }\n  }\n};\n</script>\n\n<style lang=\"scss\" scoped>\ndiv#esm-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  a.badge {\n    justify-content: flex-end;\n    display: flex;\n    padding-right: 1em;\n    margin-top: 5px;\n  }\n}\n</style>\n","div#esm-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#esm-sample a.badge {\n  justify-content: flex-end;\n  display: flex;\n  padding-right: 1em;\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-39f28c5c";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

function load(_ref) {
  var Vue = _ref.Vue,
      umdView = _ref.umdView;

  var _ModuleView = Vue.extend(__vue_component__$1);

  new _ModuleView({
    propsData: {
      umdView: umdView
    }
  }).$mount('#esm-sample');
  return;
}
function unload() {
  document.getElementById('esm-sample').innerHTML = '';
}

export { load, unload };
