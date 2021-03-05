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
    component.__file = "/home/runner/work/modkit-loader/modkit-loader/examples/esm/src/Badge.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Badge = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__);

//
var script$1 = {
  name: 'ModuleView',
  components: {
    Badge: Badge
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
    inject("data-v-39f28c5c_0", { source: "div#esm-sample[data-v-39f28c5c] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\ndiv#esm-sample a.badge[data-v-39f28c5c] {\n    justify-content: flex-end;\n    display: flex;\n    padding-right: 1em;\n    margin-top: 5px;\n}\n\n/*# sourceMappingURL=ModuleView.vue.map */", map: {"version":3,"sources":["/home/runner/work/modkit-loader/modkit-loader/examples/esm/src/ModuleView.vue","ModuleView.vue"],"names":[],"mappings":"AAyBA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AAAA;AAHA;IAKA,yBAAA;IACA,aAAA;IACA,kBAAA;IACA,eAAA;AAAA;;ACvBA,yCAAyC","file":"ModuleView.vue","sourcesContent":[null,"div#esm-sample {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n  div#esm-sample a.badge {\n    justify-content: flex-end;\n    display: flex;\n    padding-right: 1em;\n    margin-top: 5px; }\n\n/*# sourceMappingURL=ModuleView.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-39f28c5c";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/home/runner/work/modkit-loader/modkit-loader/examples/esm/src/ModuleView.vue";

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
  

  
  var ModuleView = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__,
    __vue_create_injector__);

function load(_ref) {
  var Vue = _ref.Vue,
      umdView = _ref.umdView;

  var _ModuleView = Vue.extend(ModuleView);

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
