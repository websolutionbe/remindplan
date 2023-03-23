import { _ as _export_sfc, L as Layout, S as Seo } from "./Layout.be0b1264.mjs";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/inertia-vue3";
import "@websolutionbe/ui-library/dist/index.mjs";
import "moment";
const _sfc_main = {
  name: "Privacy",
  components: { Layout, Seo }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_seo = resolveComponent("seo");
  const _component_Layout = resolveComponent("Layout");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_seo, {
    meta: _ctx.$page.props.meta
  }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section id="legal"${_scopeId}><div class="container"${_scopeId}><h1${_scopeId}>${_ctx.__t("privacy.title")}</h1><div class="body"${_scopeId}>${_ctx.__t("privacy.body.block1")}</div><div class="body"${_scopeId}>${_ctx.__t("privacy.body.block2")}</div><div class="body"${_scopeId}>${_ctx.__t("privacy.body.block3")}</div><div class="body"${_scopeId}>${_ctx.__t("privacy.body.block4")}</div><div class="body"${_scopeId}>${_ctx.__t("privacy.body.block5")}</div></div></section>`);
      } else {
        return [
          createVNode("section", { id: "legal" }, [
            createVNode("div", { class: "container" }, [
              createVNode("h1", {
                innerHTML: _ctx.__t("privacy.title")
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "body",
                innerHTML: _ctx.__t("privacy.body.block1")
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "body",
                innerHTML: _ctx.__t("privacy.body.block2")
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "body",
                innerHTML: _ctx.__t("privacy.body.block3")
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "body",
                innerHTML: _ctx.__t("privacy.body.block4")
              }, null, 8, ["innerHTML"]),
              createVNode("div", {
                class: "body",
                innerHTML: _ctx.__t("privacy.body.block5")
              }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/Privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Privacy as default
};
