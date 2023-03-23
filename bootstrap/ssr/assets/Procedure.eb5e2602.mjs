import { _ as _export_sfc, S as Seo, L as Layout } from "./Layout.be0b1264.mjs";
import { P as PageBanner } from "./PageBanner.dee25053.mjs";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/inertia-vue3";
import "@websolutionbe/ui-library/dist/index.mjs";
import "moment";
import "./Heading.70738e6f.mjs";
const _sfc_main$1 = {
  name: "ProcedureStep",
  props: {
    step: { type: Number, required: true },
    title: { type: String, required: true },
    hideLine: { type: Boolean, required: false, default: false }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "procedure-step" }, _attrs))}><div class="timeline"><div class="counter">${$props.step}</div>`);
  if (!$props.hideLine) {
    _push(`<div class="line"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="content"><h2>${$props.title}</h2><div class="body-wrapper">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/procedure/ProcedureStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProcedureStep = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Procedure",
  components: { ProcedureStep, Seo, PageBanner, Layout }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_seo = resolveComponent("seo");
  const _component_Layout = resolveComponent("Layout");
  const _component_PageBanner = resolveComponent("PageBanner");
  const _component_procedure_step = resolveComponent("procedure-step");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_seo, {
    meta: _ctx.$page.props.meta
  }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageBanner, {
          title: _ctx.__t("procedure.title"),
          subtitle: _ctx.__t("procedure.subtitle")
        }, null, _parent2, _scopeId));
        _push2(`<section class="procedure-content"${_scopeId}><div class="container container--s"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 1,
          title: _ctx.__t("procedure.step1.title")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step1.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step1.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 2,
          title: _ctx.__t("procedure.step2.title")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step2.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step2.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 3,
          title: _ctx.__t("procedure.step3.title")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step3.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step3.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 4,
          title: _ctx.__t("procedure.step4.title")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step4.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step4.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 5,
          title: _ctx.__t("procedure.step5.title")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step5.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step5.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure_step, {
          step: 6,
          title: _ctx.__t("procedure.step6.title"),
          "hide-line": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="body"${_scopeId2}>${_ctx.__t("procedure.step6.body")}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "body",
                  innerHTML: _ctx.__t("procedure.step6.body")
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></section>`);
      } else {
        return [
          createVNode(_component_PageBanner, {
            title: _ctx.__t("procedure.title"),
            subtitle: _ctx.__t("procedure.subtitle")
          }, null, 8, ["title", "subtitle"]),
          createVNode("section", { class: "procedure-content" }, [
            createVNode("div", { class: "container container--s" }, [
              createVNode(_component_procedure_step, {
                step: 1,
                title: _ctx.__t("procedure.step1.title")
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step1.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_procedure_step, {
                step: 2,
                title: _ctx.__t("procedure.step2.title")
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step2.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_procedure_step, {
                step: 3,
                title: _ctx.__t("procedure.step3.title")
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step3.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_procedure_step, {
                step: 4,
                title: _ctx.__t("procedure.step4.title")
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step4.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_procedure_step, {
                step: 5,
                title: _ctx.__t("procedure.step5.title")
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step5.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_procedure_step, {
                step: 6,
                title: _ctx.__t("procedure.step6.title"),
                "hide-line": ""
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "body",
                    innerHTML: _ctx.__t("procedure.step6.body")
                  }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["title"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/Procedure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Procedure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Procedure as default
};
