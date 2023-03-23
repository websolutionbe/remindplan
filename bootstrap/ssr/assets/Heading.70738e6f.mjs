import { useSSRContext, mergeProps, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout.be0b1264.mjs";
const _sfc_main = {
  name: "Heading",
  props: {
    value: { type: String, required: true },
    size: { type: Number, required: false, default: 2 },
    subTitle: { type: String, required: false, default: null },
    center: { type: Boolean, required: false, default: false }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["heading", { center: $props.center }]
  }, _attrs))}>`);
  if ($props.subTitle) {
    _push(`<span class="subtitle">${$props.subTitle}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(`h${$props.size}`), null, null), _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/details/Heading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Heading = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Heading as H
};
