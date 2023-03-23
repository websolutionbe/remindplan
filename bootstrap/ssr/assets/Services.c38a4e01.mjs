import { _ as _export_sfc, S as Seo, L as Layout } from "./Layout.be0b1264.mjs";
import { P as PageBanner } from "./PageBanner.dee25053.mjs";
import { H as Heading } from "./Heading.70738e6f.mjs";
/* empty css                      */import { B as BottomCta } from "./BottomCta.c0126ea0.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/inertia-vue3";
import "@websolutionbe/ui-library/dist/index.mjs";
import "moment";
const _sfc_main$1 = {
  name: "ServiceTabs",
  components: { Heading, Swiper, SwiperSlide },
  data() {
    return {
      activeTab: "zirkonium"
    };
  },
  beforeMount() {
    this.checkTab();
  },
  computed: {
    clientOnly() {
      return typeof window !== "undefined";
    }
  },
  methods: {
    setTab(tab) {
      if (this.clientOnly) {
        this.activeTab = tab;
        window.location.href = window.location.href.split("#")[0] + "#" + tab;
      }
    },
    checkTab() {
      if (this.clientOnly) {
        const url = window.location.href;
        const hash = url.split("#")[1];
        if (hash) {
          this.setTab(hash);
        }
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_heading = resolveComponent("heading");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-tabs" }, _attrs))}><div class="tabs mobile">`);
  _push(ssrRenderComponent(_component_Swiper, {
    "slides-per-view": 3.5,
    "space-between": 12.5,
    direction: "horizontal",
    pagination: _ctx.pagination,
    modules: _ctx.modules,
    ref: "gallerySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ active: $data.activeTab === "zirkonium" }, "tab"])}"${_scopeId2}><span${_scopeId2}>Zirkonium</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["tab", { active: $data.activeTab === "zirkonium" }],
                  onClick: ($event) => $options.setTab("zirkonium")
                }, [
                  createVNode("span", null, "Zirkonium")
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-4" }, "tab"])}"${_scopeId2}><span${_scopeId2}>All-on-4</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["tab", { active: $data.activeTab === "all-on-4" }],
                  onClick: ($event) => $options.setTab("all-on-4")
                }, [
                  createVNode("span", null, "All-on-4")
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-6" }, "tab"])}"${_scopeId2}><span${_scopeId2}>All-on-6</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["tab", { active: $data.activeTab === "all-on-6" }],
                  onClick: ($event) => $options.setTab("all-on-6")
                }, [
                  createVNode("span", null, "All-on-6")
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-8" }, "tab"])}"${_scopeId2}><span${_scopeId2}>All-on-8</span></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["tab", { active: $data.activeTab === "all-on-8" }],
                  onClick: ($event) => $options.setTab("all-on-8")
                }, [
                  createVNode("span", null, "All-on-8")
                ], 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["tab", { active: $data.activeTab === "zirkonium" }],
                onClick: ($event) => $options.setTab("zirkonium")
              }, [
                createVNode("span", null, "Zirkonium")
              ], 10, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["tab", { active: $data.activeTab === "all-on-4" }],
                onClick: ($event) => $options.setTab("all-on-4")
              }, [
                createVNode("span", null, "All-on-4")
              ], 10, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["tab", { active: $data.activeTab === "all-on-6" }],
                onClick: ($event) => $options.setTab("all-on-6")
              }, [
                createVNode("span", null, "All-on-6")
              ], 10, ["onClick"])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", {
                class: ["tab", { active: $data.activeTab === "all-on-8" }],
                onClick: ($event) => $options.setTab("all-on-8")
              }, [
                createVNode("span", null, "All-on-8")
              ], 10, ["onClick"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="container"><div class="tabs desktop"><div class="${ssrRenderClass([{ active: $data.activeTab === "zirkonium" }, "tab"])}"><span>Zirkonium</span></div><div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-4" }, "tab"])}"><span>All-on-4 gebit</span></div><div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-6" }, "tab"])}"><span>All-on-6 gebit</span></div><div class="${ssrRenderClass([{ active: $data.activeTab === "all-on-8" }, "tab"])}"><span>All-on-8 gebit</span></div></div></div><div class="content"><div class="container">`);
  if ($data.activeTab === "zirkonium") {
    _push(`<!--[--><div class="text">`);
    _push(ssrRenderComponent(_component_heading, {
      value: _ctx.__t("services.zirkonium.title"),
      size: 3,
      "sub-title": _ctx.__t("services.zirkonium.subtitle")
    }, null, _parent));
    _push(`<div class="body">${_ctx.__t("services.zirkonium.body")}</div><div class="note">${_ctx.__t("services.zirkonium.note")}</div></div><div class="images"><picture><source${ssrRenderAttr("srcset", _ctx.imagePath("services/zirkonium/zirkonium-1.png"))}><img${ssrRenderAttr("src", _ctx.imagePath("services/zirkonium/zirkonium-1.png"))}${ssrRenderAttr("alt", "zirkonium kronen")}></picture><picture><source${ssrRenderAttr("srcset", _ctx.imagePath("services/zirkonium/zirkonium-2.png"))}><img${ssrRenderAttr("src", _ctx.imagePath("services/zirkonium/zirkonium-2.png"))}${ssrRenderAttr("alt", "zirkonium kronen")}></picture></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab === "all-on-4") {
    _push(`<!--[--><div class="text">`);
    _push(ssrRenderComponent(_component_heading, {
      value: _ctx.__t("services.all-on-4.title"),
      size: 3,
      "sub-title": _ctx.__t("services.all-on-4.subtitle")
    }, null, _parent));
    _push(`<div class="body">${_ctx.__t("services.all-on-4.body")}</div><div class="note">${_ctx.__t("services.all-on-4.note")}</div></div><div class="images"><picture><source${ssrRenderAttr("srcset", _ctx.imagePath("services/all-on-4/all-on-4-1.png"))}><img${ssrRenderAttr("src", _ctx.imagePath("services/all-on-4/all-on-4.png"))}${ssrRenderAttr("alt", "all-on-4 implantaten")}></picture></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab === "all-on-6") {
    _push(`<!--[--><div class="text">`);
    _push(ssrRenderComponent(_component_heading, {
      value: _ctx.__t("services.all-on-6.title"),
      size: 3,
      "sub-title": _ctx.__t("services.all-on-6.subtitle")
    }, null, _parent));
    _push(`<div class="body">${_ctx.__t("services.all-on-6.body")}</div><div class="note">${_ctx.__t("services.all-on-6.note")}</div></div><div class="images"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab === "all-on-8") {
    _push(`<!--[--><div class="text">`);
    _push(ssrRenderComponent(_component_heading, {
      value: _ctx.__t("services.all-on-8.title"),
      size: 3,
      "sub-title": _ctx.__t("services.all-on-8.subtitle")
    }, null, _parent));
    _push(`<div class="body">${_ctx.__t("services.all-on-8.body")}</div><div class="note">${_ctx.__t("services.all-on-8.note")}</div></div><div class="images"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/services/ServiceTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceTabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Services",
  components: { BottomCta, ServiceTabs, Seo, PageBanner, Layout }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_seo = resolveComponent("seo");
  const _component_Layout = resolveComponent("Layout");
  const _component_PageBanner = resolveComponent("PageBanner");
  const _component_ServiceTabs = resolveComponent("ServiceTabs");
  const _component_BottomCta = resolveComponent("BottomCta");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_seo, {
    meta: _ctx.$page.props.meta
  }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageBanner, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ServiceTabs, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BottomCta, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PageBanner),
          createVNode(_component_ServiceTabs),
          createVNode(_component_BottomCta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Services as default
};
