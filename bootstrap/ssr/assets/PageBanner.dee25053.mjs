import { H as Heading } from "./Heading.70738e6f.mjs";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./Layout.be0b1264.mjs";
const _sfc_main = {
  name: "PageBanner",
  components: { Heading },
  props: {
    title: { type: String, required: false, default: null },
    subtitle: { type: String, required: false, default: null }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_heading = resolveComponent("heading");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-banner" }, _attrs))}><div class="container">`);
  if ($props.title) {
    _push(ssrRenderComponent(_component_heading, {
      value: $props.title,
      size: 1,
      "sub-title": $props.subtitle
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/global/PageBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PageBanner as P
};
