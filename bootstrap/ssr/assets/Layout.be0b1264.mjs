import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext, mergeProps, openBlock, createElementBlock, createElementVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { UiButton } from "@websolutionbe/ui-library/dist/index.mjs";
import moment from "moment";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  name: "Seo",
  props: {
    meta: { type: Object, required: true }
  },
  computed: {
    clientOnly() {
      return typeof window !== "undefined";
    }
  },
  mounted() {
  },
  methods: {
    setMatomoTracking() {
      const _paq = window._paq = window._paq || [];
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["setCookieDomain", "*.wittelach.be"]);
      _paq.push(["setDomains", ["*.wittelach.be", "*.wittelach.com", "*.wittelach.net"]]);
      _paq.push(["enableCrossDomainLinking"]);
      _paq.push(["setDoNotTrack", true]);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function() {
        const u = "//wittelach.be/admin/advanced/matomo/";
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "2"]);
        const d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      })();
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(ssrRenderComponent(_component_Head, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($props.meta.title)} | ${ssrInterpolate($props.meta.default_title)}</title><meta name="robots"${ssrRenderAttr("content", $props.meta["no_index"] ? "noindex" : "all,index,follow")}${_scopeId}><link rel="icon"${ssrRenderAttr("href", _ctx.imagePath("favicon.svg"))}${_scopeId}><meta name="description"${ssrRenderAttr("content", $props.meta.description)}${_scopeId}><meta${ssrRenderAttr("content", (_a = $props.meta.title) != null ? _a : $props.meta.default_title)} property="og:title"${_scopeId}><meta${ssrRenderAttr("content", $props.meta.description)} property="og:description"${_scopeId}><meta${ssrRenderAttr("content", _ctx.imagePath("share-image.png"))} property="og:image"${_scopeId}><meta${ssrRenderAttr("content", $props.meta.title || $props.meta.default_title)} property="twitter:title"${_scopeId}><meta${ssrRenderAttr("content", $props.meta.description)} property="twitter:description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.meta.title) + " | " + toDisplayString($props.meta.default_title), 1),
          createVNode("meta", {
            name: "robots",
            content: $props.meta["no_index"] ? "noindex" : "all,index,follow"
          }, null, 8, ["content"]),
          createVNode("link", {
            rel: "icon",
            href: _ctx.imagePath("favicon.svg")
          }, null, 8, ["href"]),
          createVNode("meta", {
            name: "description",
            content: $props.meta.description
          }, null, 8, ["content"]),
          createVNode("meta", {
            content: (_b = $props.meta.title) != null ? _b : $props.meta.default_title,
            property: "og:title"
          }, null, 8, ["content"]),
          createVNode("meta", {
            content: $props.meta.description,
            property: "og:description"
          }, null, 8, ["content"]),
          createVNode("meta", {
            content: _ctx.imagePath("share-image.png"),
            property: "og:image"
          }, null, 8, ["content"]),
          createVNode("meta", {
            content: $props.meta.title || $props.meta.default_title,
            property: "twitter:title"
          }, null, 8, ["content"]),
          createVNode("meta", {
            content: $props.meta.description,
            property: "twitter:description"
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/utils/Seo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Seo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "Hamburger",
  methods: {}
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "hamburger" }, _attrs))}><span></span><span></span><span></span></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/utils/Hamburger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "ExitMobileButton"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "reset exit-button" }, _attrs))}></button>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/utils/ExitMobileButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ExitMobileButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const navigation = [
  {
    text: "diensten",
    route: "https://dentalcare.test/diensten"
  },
  {
    text: "procedure",
    route: "https://dentalcare.test/procedure"
  },
  {
    text: "voor- en na foto's",
    route: "https://dentalcare.test/voor-en-na-fotos"
  },
  {
    text: "kliniek",
    route: "https://dentalcare.test/kliniek"
  }
];
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 184.333 37.928",
  fill: "currentColor"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Subtraction 1",
  d: "M30.823 37.928a6.314 6.314 0 0 1-2.017-.347 6.386 6.386 0 0 1-1.093-.478 5.984 5.984 0 0 1-.975-.678 7.592 7.592 0 0 1-.9-.917 12.174 12.174 0 0 1-.874-1.194c-.22-.332-.64-.978-1.127-1.726v-.008c-.406-.624-.866-1.332-1.292-1.983a202.723 202.723 0 0 0-1.731-2.646.022.022 0 0 0-.016-.007 14.32 14.32 0 0 0-1.626 2.356c-1.453 2.238-2.448 3.768-3.015 4.606a6.8 6.8 0 0 1-.94 1.131 6.661 6.661 0 0 1-2.455 1.506 6.948 6.948 0 0 1-1.443.331 5.346 5.346 0 0 1-.668.042 5.264 5.264 0 0 1-1.584-.245 5.871 5.871 0 0 1-1.493-.723 5.95 5.95 0 0 1-1.06-.9 9.971 9.971 0 0 1-1.011-1.3c-.293-.441-.74-1.228-1.227-2.16s-.921-1.83-1.208-2.5a32.36 32.36 0 0 1-1.333-3.815C1.347 24.922 1.013 23.48.744 22s-.468-2.981-.593-4.447a39 39 0 0 1-.14-4.284 26.982 26.982 0 0 1 .445-4.476 14.954 14.954 0 0 1 1.129-3.521 10.027 10.027 0 0 1 .773-1.362 9.7 9.7 0 0 1 .957-1.2 9 9 0 0 1 1.111-1A8.074 8.074 0 0 1 5.661.93 10.7 10.7 0 0 1 8.187.12a9.657 9.657 0 0 1 1.487-.1 11.3 11.3 0 0 1 2.374.211 10.288 10.288 0 0 1 1.942.695 16.2 16.2 0 0 1 2.067 1.187c.712.477 1.314.941 4.482 3.523.456.374 1.191.965 1.9 1.537l.862.693.914.729.008.007c.629.5 1.279 1.021 1.646 1.315.726.577 1.222.964 1.611 1.233a6.472 6.472 0 0 0 1.04.594 6.591 6.591 0 0 0 1.223.457 6.468 6.468 0 0 0 1.3.172c.1.005.209.008.313.008a6.2 6.2 0 0 0 1.6-.207 5.527 5.527 0 0 0 1.4-.579 4.35 4.35 0 0 0 1.08-.889 3.262 3.262 0 0 0 .651-1.136 3.552 3.552 0 0 0 .182-1.844 3.223 3.223 0 0 0-.318-1.064 3.2 3.2 0 0 0-.709-.847A5.877 5.877 0 0 0 31.3 4.3a4.455 4.455 0 0 0-2.321.593 8.427 8.427 0 0 0-2.2 2.02c-.506.612-.67.79-.778.79a.124.124 0 0 1-.075-.029 60.739 60.739 0 0 1-.981-.776l-.03-.024-.679-.541a7.151 7.151 0 0 1-1.483-1.323 18.151 18.151 0 0 1 2.244-2.482 13.225 13.225 0 0 1 1.164-.95 8.637 8.637 0 0 1 1.121-.697A9.987 9.987 0 0 1 28.495.4 8.068 8.068 0 0 1 29.7.087 11.23 11.23 0 0 1 31.243 0a12.552 12.552 0 0 1 1.6.087 9.7 9.7 0 0 1 7.075 4.78 7.547 7.547 0 0 1 .636 2.2 7.857 7.857 0 0 1 .024 2.333 9.354 9.354 0 0 1-.359 1.505 8.136 8.136 0 0 1-.577 1.331 8.03 8.03 0 0 1-1.549 1.928 9.118 9.118 0 0 1-2.121 1.488 9.967 9.967 0 0 1-1.4.547 11.094 11.094 0 0 1-1.528.379 10.4 10.4 0 0 1-1.635.109 12.033 12.033 0 0 1-2.258-.183 12.078 12.078 0 0 1-1.953-.618 11.933 11.933 0 0 1-1.816-.928c-.861-.543-6.037-4.64-9.079-7.186a23.445 23.445 0 0 0-3.756-2.713A5.582 5.582 0 0 0 9.811 4.3a5.137 5.137 0 0 0-1.128.137 4.847 4.847 0 0 0-1.059.363 3.932 3.932 0 0 0-1.135.846 5.6 5.6 0 0 0-.9 1.323 9.929 9.929 0 0 0-.679 1.818 18.437 18.437 0 0 0-.464 2.33c-.062.459-.1 1.589-.1 2.95s.042 2.6.107 3.211a35.1 35.1 0 0 0 3.711 13.4 18.976 18.976 0 0 0 1.016 1.737 3.993 3.993 0 0 0 .774.918 1.08 1.08 0 0 0 .77.24c.859 0 1.339-.327 2.054-1.4a495.266 495.266 0 0 0 3.446-5.3 19.055 19.055 0 0 1 1.657-2.316 4.245 4.245 0 0 1 2.908-1.2 3.521 3.521 0 0 1 .488.034 4.421 4.421 0 0 1 1.3.421 4 4 0 0 1 1.084.762 30.468 30.468 0 0 1 1.822 2.588c.346.537.76 1.174 1.161 1.79.486.748.946 1.455 1.25 1.931.57.87 1.153 1.731 1.3 1.919a2.126 2.126 0 0 0 .748.564 2.148 2.148 0 0 0 .88.207 1.21 1.21 0 0 0 .55-.118c.563-.289 1.219-1.25 2.262-3.316a29.125 29.125 0 0 0 1.789-4.383 28.227 28.227 0 0 0 .886-3.482 13.809 13.809 0 0 1 .53-1.993 1.938 1.938 0 0 1 .787-.809 2.257 2.257 0 0 1 1.107-.289 2.09 2.09 0 0 1 1.055.279 2.427 2.427 0 0 1 1.044 1.414 3.174 3.174 0 0 1-.133 1.53 34.153 34.153 0 0 1-3.272 9.833 26.162 26.162 0 0 1-1.3 2.333 9.31 9.31 0 0 1-1.155 1.471 6.237 6.237 0 0 1-1.944 1.41 5.333 5.333 0 0 1-2.211.474ZM15.949 20.711a1.843 1.843 0 0 1-.729-.14 2.293 2.293 0 0 1-1.32-2.054 1.894 1.894 0 0 1 .165-.791c.056-.123.306-.528.724-1.172.373-.574.859-1.306 1.368-2.062.921-1.366 1.94-2.836 2-2.836a19.624 19.624 0 0 1 1.7 1.29 17.067 17.067 0 0 1 1.591 1.364c0 .085-1.006 1.6-1.941 2.971s-1.991 2.882-2.1 2.959a2.626 2.626 0 0 1-.706.351 2.429 2.429 0 0 1-.752.12Z"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("path", {
  class: "logo-text",
  "data-name": "Path 40",
  d: "M59.966 29.451a2.3 2.3 0 0 1-1.444-.425 2.888 2.888 0 0 1-.881-1.339l-5.653-15.863a1.926 1.926 0 0 1 .143-1.827 2.032 2.032 0 0 1 1.792-.747 2.115 2.115 0 0 1 1.4.42 2.838 2.838 0 0 1 .794 1.315l4.6 13.734h-1.199l4.872-13.722a3.129 3.129 0 0 1 .83-1.32 1.922 1.922 0 0 1 1.292-.425 1.847 1.847 0 0 1 1.273.425 3.114 3.114 0 0 1 .793 1.348l4.652 13.7h-1.04l4.7-13.734a2.927 2.927 0 0 1 .789-1.3 2.02 2.02 0 0 1 1.37-.429 1.789 1.789 0 0 1 1.6.747 1.946 1.946 0 0 1 .116 1.825l-5.7 15.89a2.891 2.891 0 0 1-.858 1.311 2.25 2.25 0 0 1-1.439.425 2.254 2.254 0 0 1-1.435-.425 2.874 2.874 0 0 1-.863-1.339l-4.41-12.5h.669l-4.485 12.519a3.012 3.012 0 0 1-.853 1.311 2.191 2.191 0 0 1-1.425.425Zm26.821-.019a2 2 0 0 1-1.558-.6 2.437 2.437 0 0 1-.544-1.7v-9.571a2.43 2.43 0 0 1 .544-1.706 2.013 2.013 0 0 1 1.558-.59 2.044 2.044 0 0 1 1.568.59 2.4 2.4 0 0 1 .553 1.706v9.571a2.449 2.449 0 0 1-.539 1.7 2.018 2.018 0 0 1-1.582.599Zm0-16.457a2.607 2.607 0 0 1-1.783-.555 1.974 1.974 0 0 1-.626-1.563 1.969 1.969 0 0 1 .629-1.572 2.637 2.637 0 0 1 1.783-.546 2.63 2.63 0 0 1 1.788.546 1.984 1.984 0 0 1 .619 1.572 1.99 1.99 0 0 1-.619 1.562 2.6 2.6 0 0 1-1.791.555Zm11.846 16.532a7.343 7.343 0 0 1-3.24-.633 4.108 4.108 0 0 1-1.915-1.877 6.842 6.842 0 0 1-.627-3.1v-5.27h-1.2a1.686 1.686 0 0 1-1.214-.411 1.527 1.527 0 0 1-.429-1.158 1.52 1.52 0 0 1 .429-1.167 1.711 1.711 0 0 1 1.214-.4h1.2V13.34a2.126 2.126 0 0 1 .553-1.586 2.142 2.142 0 0 1 1.568-.544 2.108 2.108 0 0 1 1.558.544 2.148 2.148 0 0 1 .544 1.586v2.151h2.631a1.708 1.708 0 0 1 1.218.4 1.529 1.529 0 0 1 .425 1.167 1.535 1.535 0 0 1-.425 1.158 1.683 1.683 0 0 1-1.218.411h-2.634v5.1a2.53 2.53 0 0 0 .539 1.768 2.257 2.257 0 0 0 1.731.584 3.536 3.536 0 0 0 .8-.084 4.161 4.161 0 0 1 .661-.1.766.766 0 0 1 .643.241 1.764 1.764 0 0 1 .255 1.144 3 3 0 0 1-.217 1.194 1.3 1.3 0 0 1-.78.715 6.229 6.229 0 0 1-1.008.227 7.044 7.044 0 0 1-1.062.091Zm11.911 0a7.343 7.343 0 0 1-3.24-.633 4.108 4.108 0 0 1-1.918-1.877 6.842 6.842 0 0 1-.627-3.1v-5.27h-1.2a1.686 1.686 0 0 1-1.214-.411 1.527 1.527 0 0 1-.429-1.158 1.52 1.52 0 0 1 .429-1.167 1.711 1.711 0 0 1 1.214-.4h1.2V13.34a2.126 2.126 0 0 1 .553-1.586 2.142 2.142 0 0 1 1.568-.544 2.108 2.108 0 0 1 1.558.544 2.148 2.148 0 0 1 .544 1.586v2.151h2.631a1.708 1.708 0 0 1 1.218.4 1.529 1.529 0 0 1 .425 1.167 1.535 1.535 0 0 1-.425 1.158 1.683 1.683 0 0 1-1.218.411h-2.635v5.1a2.53 2.53 0 0 0 .539 1.768 2.257 2.257 0 0 0 1.731.584 3.536 3.536 0 0 0 .8-.084 4.161 4.161 0 0 1 .661-.1.766.766 0 0 1 .643.241 1.764 1.764 0 0 1 .255 1.144 3 3 0 0 1-.217 1.194 1.3 1.3 0 0 1-.78.715 6.229 6.229 0 0 1-1.008.227 7.044 7.044 0 0 1-1.058.091Zm13.169 0a9.232 9.232 0 0 1-4.17-.876 6.322 6.322 0 0 1-2.7-2.483 7.363 7.363 0 0 1-.944-3.8 7.438 7.438 0 0 1 .907-3.728 6.586 6.586 0 0 1 2.5-2.516 7.184 7.184 0 0 1 3.634-.913 7.132 7.132 0 0 1 2.7.489 5.787 5.787 0 0 1 2.064 1.4 6.093 6.093 0 0 1 1.311 2.207 8.79 8.79 0 0 1 .463 2.91.957.957 0 0 1-.332.8 1.551 1.551 0 0 1-.984.266h-8.778v-2.18h7.044l-.439.384a4.791 4.791 0 0 0-.334-1.917 2.512 2.512 0 0 0-.964-1.158 2.881 2.881 0 0 0-1.561-.4 3.163 3.163 0 0 0-1.759.475 2.99 2.99 0 0 0-1.118 1.367 5.455 5.455 0 0 0-.385 2.163v.213a4.338 4.338 0 0 0 .98 3.141 3.975 3.975 0 0 0 2.955 1 8.227 8.227 0 0 0 1.531-.164 6.6 6.6 0 0 0 1.624-.533 1.811 1.811 0 0 1 1.149-.2 1.3 1.3 0 0 1 .77.462 1.538 1.538 0 0 1 .322.834 1.65 1.65 0 0 1-.206.943 1.88 1.88 0 0 1-.823.762 7.914 7.914 0 0 1-2.159.795 10.8 10.8 0 0 1-2.298.257Zm13.344 0a4.716 4.716 0 0 1-3.728-1.385 6.069 6.069 0 0 1-1.223-4.125V11.382a2.149 2.149 0 0 1 .544-1.586 2.108 2.108 0 0 1 1.558-.544 2.142 2.142 0 0 1 1.57.545 2.126 2.126 0 0 1 .553 1.586v12.456a2.527 2.527 0 0 0 .48 1.7 1.646 1.646 0 0 0 1.3.545 3.191 3.191 0 0 0 .419-.027q.2-.027.418-.046a.6.6 0 0 1 .628.276 2.921 2.921 0 0 1 .184 1.283 2.079 2.079 0 0 1-.332 1.27 1.576 1.576 0 0 1-1.054.559l-.618.069a6.241 6.241 0 0 1-.7.039Zm9.175 0a6.133 6.133 0 0 1-2.726-.582 4.627 4.627 0 0 1-1.861-1.583 3.979 3.979 0 0 1-.67-2.266 3.452 3.452 0 0 1 .783-2.387 4.662 4.662 0 0 1 2.536-1.264 22.535 22.535 0 0 1 4.674-.387h1.468v2.18h-1.458a12.922 12.922 0 0 0-2.291.163 2.507 2.507 0 0 0-1.258.525 1.284 1.284 0 0 0-.385.983 1.677 1.677 0 0 0 .551 1.3 2.239 2.239 0 0 0 1.566.5 2.775 2.775 0 0 0 1.439-.372 2.771 2.771 0 0 0 1.006-1.026 2.979 2.979 0 0 0 .376-1.511v-3.225a2.256 2.256 0 0 0-.563-1.729 2.833 2.833 0 0 0-1.92-.515 8.509 8.509 0 0 0-1.634.174 10.291 10.291 0 0 0-1.928.606 1.61 1.61 0 0 1-1.108.109 1.3 1.3 0 0 1-.726-.558 1.626 1.626 0 0 1-.25-.9 1.8 1.8 0 0 1 .289-.948 1.731 1.731 0 0 1 .921-.689 12.66 12.66 0 0 1 2.471-.716 12.579 12.579 0 0 1 2.128-.2 8.552 8.552 0 0 1 3.546.637 4.321 4.321 0 0 1 2.084 1.939 7.088 7.088 0 0 1 .691 3.338v6.194a2.294 2.294 0 0 1-.5 1.6 1.862 1.862 0 0 1-1.452.553 1.908 1.908 0 0 1-1.466-.553 2.254 2.254 0 0 1-.517-1.6v-1.036l.2.184a3.576 3.576 0 0 1-.712 1.617 3.656 3.656 0 0 1-1.379 1.061 4.612 4.612 0 0 1-1.926.384Zm17.782 0a8.218 8.218 0 0 1-3.892-.877 6.179 6.179 0 0 1-2.566-2.5 7.732 7.732 0 0 1-.907-3.833 8.14 8.14 0 0 1 .511-2.972 6.1 6.1 0 0 1 1.478-2.228 6.516 6.516 0 0 1 2.329-1.411 8.963 8.963 0 0 1 3.046-.489 9 9 0 0 1 1.855.208 7.459 7.459 0 0 1 1.936.708 1.522 1.522 0 0 1 .758.724 1.724 1.724 0 0 1 .144.946 1.821 1.821 0 0 1-.345.874 1.324 1.324 0 0 1-.732.5 1.421 1.421 0 0 1-1.011-.155 4.792 4.792 0 0 0-1.105-.44 4.346 4.346 0 0 0-1.086-.147 3.839 3.839 0 0 0-1.473.263 2.923 2.923 0 0 0-1.079.756 3.284 3.284 0 0 0-.671 1.216 5.529 5.529 0 0 0-.23 1.672 4.341 4.341 0 0 0 .9 2.908 3.17 3.17 0 0 0 2.552 1.057 4.662 4.662 0 0 0 1.076-.133 4.512 4.512 0 0 0 1.115-.435 1.36 1.36 0 0 1 1-.146 1.327 1.327 0 0 1 .712.513 1.727 1.727 0 0 1 .316.874 1.8 1.8 0 0 1-.172.946 1.492 1.492 0 0 1-.748.7 7.656 7.656 0 0 1-1.887.688 8.6 8.6 0 0 1-1.825.213Zm8.965-.056a2.087 2.087 0 0 1-1.558-.553 2.183 2.183 0 0 1-.543-1.601V11.382a2.149 2.149 0 0 1 .544-1.586 2.108 2.108 0 0 1 1.558-.544 2.142 2.142 0 0 1 1.568.544 2.126 2.126 0 0 1 .553 1.586v6.682h-.409a4.632 4.632 0 0 1 1.916-2.133 5.656 5.656 0 0 1 2.889-.738 5.269 5.269 0 0 1 2.713.628 3.844 3.844 0 0 1 1.594 1.908 8.515 8.515 0 0 1 .531 3.243v6.325a2.183 2.183 0 0 1-.544 1.6 2.086 2.086 0 0 1-1.558.553 2.12 2.12 0 0 1-1.568-.553 2.16 2.16 0 0 1-.553-1.6v-6.144a3.268 3.268 0 0 0-.518-2.063 1.913 1.913 0 0 0-1.575-.635 2.782 2.782 0 0 0-2.123.842 3.135 3.135 0 0 0-.8 2.244v5.756a1.887 1.887 0 0 1-2.118 2.154Z"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$9,
  _hoisted_3$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$3);
}
const SvgLogo = { render: render$9 };
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 19.545 19.523"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", { d: "M15.772 1.5h-1.25V.75a.75.75 0 1 0-1.5 0v.75h-6.5V.75a.75.75 0 1 0-1.5 0v.75h-1.25a3.383 3.383 0 0 0-3.75 3.75v10.5a3.383 3.383 0 0 0 3.75 3.75h12a3.383 3.383 0 0 0 3.75-3.75V5.25a3.383 3.383 0 0 0-3.75-3.75Zm-12 1.5h1.25v.75a.75.75 0 0 0 1.5 0V3h6.5v.75a.75.75 0 0 0 1.5 0V3h1.25c1.577 0 2.25.673 2.25 2.25V6h-16.5v-.75c0-1.577.673-2.25 2.25-2.25Zm12 15h-12c-1.577 0-2.25-.673-2.25-2.25V7.5h16.5v8.25c0 1.577-.673 2.25-2.25 2.25Zm-2.97-7.45a.75.75 0 0 1 0 1.061l-3.33 3.339a.748.748 0 0 1-1.06 0l-1.67-1.67a.75.75 0 0 1 1.06-1.06l1.137 1.136 2.8-2.8a.749.749 0 0 1 1.063-.006Z" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const SvgCalendar = { render: render$8 };
const _hoisted_1$7 = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "close"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", { d: "M14.121 12 18 8.117A1.5 1.5 0 0 0 15.883 6L12 9.879 8.11 5.988A1.5 1.5 0 1 0 5.988 8.11L9.879 12 6 15.882A1.5 1.5 0 1 0 8.118 18L12 14.121 15.878 18A1.5 1.5 0 0 0 18 15.878Z" }, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const SvgExit = { render: render$7 };
const _sfc_main$5 = {
  name: "MobileNavigation",
  emits: ["close"],
  components: {
    SvgLogo,
    SvgCalendar,
    SvgExit,
    Link,
    UiButton
  },
  data() {
    return {
      navigation
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_exit = resolveComponent("svg-exit");
  const _component_Link = resolveComponent("Link");
  const _component_svg_logo = resolveComponent("svg-logo");
  const _component_ui_button = resolveComponent("ui-button");
  const _component_svg_calendar = resolveComponent("svg-calendar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_svg_exit, {
    onClick: ($event) => _ctx.$emit("close")
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "home-logo-link",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_logo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="navigation"><!--[-->`);
  ssrRenderList($data.navigation, (link, i) => {
    _push(ssrRenderComponent(_component_Link, {
      class: "link",
      href: link.route
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.text)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.text), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="actions">`);
  _push(ssrRenderComponent(_component_ui_button, {
    class: "btn--theme btn--resize btn--with-icon",
    size: "big",
    color: "primary",
    outlined: "",
    onClick: ($event) => _ctx.$emit("close")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_calendar, null, null, _parent2, _scopeId));
        _push2(` ${ssrInterpolate(_ctx.__t("header.cta"))}`);
      } else {
        return [
          createVNode(_component_svg_calendar),
          createTextVNode(" " + toDisplayString(_ctx.__t("header.cta")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/MobileNavigation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MobileNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "Header",
  data() {
    return {
      mobileNavOpen: false,
      openModal: false,
      navigation,
      screenHeight: 0
    };
  },
  computed: {
    clientOnly() {
      return typeof window !== "undefined";
    }
  },
  components: {
    MobileNavigation,
    UiButton,
    Link,
    Hamburger,
    ExitMobileButton,
    SvgLogo,
    SvgCalendar
  },
  beforeMount() {
    window.addEventListener("scroll", () => {
      this.screenHeight = window.scrollY;
    });
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
    toggleModal() {
      this.openModal = !this.openModal;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_svg_logo = resolveComponent("svg-logo");
  const _component_ui_button = resolveComponent("ui-button");
  const _component_svg_calendar = resolveComponent("svg-calendar");
  const _component_hamburger = resolveComponent("hamburger");
  const _component_MobileNavigation = resolveComponent("MobileNavigation");
  _push(`<!--[--><header class="${ssrRenderClass({ "fixed": $data.screenHeight > 200 })}"><div class="container container--xl header-wrap">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "home-logo-link",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_logo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="navigation"><!--[-->`);
  ssrRenderList($data.navigation, (link, i) => {
    _push(`<a class="link"${ssrRenderAttr("href", link.route)}>${ssrInterpolate(link.text)}</a>`);
  });
  _push(`<!--]--></div><div class="actions">`);
  _push(ssrRenderComponent(_component_ui_button, {
    class: "btn--theme btn--resize btn--with-icon",
    size: "big",
    pill: "",
    color: "text",
    outlined: "",
    onClick: $options.toggleModal
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_calendar, null, null, _parent2, _scopeId));
        _push2(` ${ssrInterpolate(_ctx.__t("header.cta"))}`);
      } else {
        return [
          createVNode(_component_svg_calendar),
          createTextVNode(" " + toDisplayString(_ctx.__t("header.cta")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_hamburger, { onClick: $options.toggleMobileNav }, null, _parent));
  _push(`</div></div></header>`);
  if ($data.mobileNavOpen) {
    _push(ssrRenderComponent(_component_MobileNavigation, { onClose: $options.toggleMobileNav }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "11.333",
  height: "10.858"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "star (2)",
  d: "M11.088 4.921a.813.813 0 0 0-.451-1.386l-2.744-.4a.358.358 0 0 1-.27-.2L6.396.453a.813.813 0 0 0-1.458 0L3.711 2.939a.359.359 0 0 1-.27.2l-2.74.396a.813.813 0 0 0-.455 1.386l1.986 1.932a.359.359 0 0 1 .1.318l-.468 2.733a.8.8 0 0 0 .177.659.821.821 0 0 0 1 .2l2.46-1.29a.367.367 0 0 1 .334 0l2.454 1.29a.8.8 0 0 0 .378.095.815.815 0 0 0 .624-.292.8.8 0 0 0 .177-.659l-.467-2.733a.359.359 0 0 1 .1-.321Z",
  fill: "#e6bd31"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const SvgStar = { render: render$6 };
const _sfc_main$3 = {
  name: "Rating",
  components: { SvgStar }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_star = resolveComponent("svg-star");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rating" }, _attrs))}>${ssrInterpolate(_ctx.__t("app.rating"))} <!--[-->`);
  ssrRenderList(5, (i) => {
    _push(ssrRenderComponent(_component_svg_star, {
      key: `star_${i}`
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/utils/Rating.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Rating = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 14.063",
  fill: "currentColor"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M18.242 0H1.758A1.76 1.76 0 0 0 0 1.758V12.3a1.76 1.76 0 0 0 1.758 1.758h16.484A1.76 1.76 0 0 0 20 12.3V1.758A1.76 1.76 0 0 0 18.242 0ZM18 1.172l-6.753 6.717a1.758 1.758 0 0 1-2.487 0L2 1.172ZM1.172 12.066V2l5.064 5.037Zm.828.825 5.062-5.03.862.857a2.93 2.93 0 0 0 4.142 0l.863-.858L18 12.891Zm16.823-.824-5.064-5.032L18.828 2Z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const SvgMail = { render: render$5 };
const _sfc_main$2 = {
  name: "Ribbon",
  components: { Rating, SvgMail }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_mail = resolveComponent("svg-mail");
  const _component_rating = resolveComponent("rating");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ribbon" }, _attrs))}><div class="container"><div class="contact-information"><div class="email"><a${ssrRenderAttr("href", "mailto:" + _ctx.__t("ribbon.info-mail"))}>`);
  _push(ssrRenderComponent(_component_svg_mail, null, null, _parent));
  _push(` ${ssrInterpolate(_ctx.__t("ribbon.info-mail"))}</a></div></div><div class="more-information"><div class="benefit">${ssrInterpolate(_ctx.__t("ribbon.benefit"))}</div>`);
  _push(ssrRenderComponent(_component_rating, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/Ribbon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Ribbon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 35.549 35.549"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M17.774 0a17.774 17.774 0 1 0 17.775 17.774A17.774 17.774 0 0 0 17.774 0Zm4.5 16.091-.295 2.477a.468.468 0 0 1-.468.416h-2.567v7.344a.332.332 0 0 1-.327.334H16a.332.332 0 0 1-.327-.337l.014-7.341h-1.952a.468.468 0 0 1-.468-.468v-2.475a.468.468 0 0 1 .468-.468h1.935v-2.4c0-2.776 1.653-4.287 4.069-4.287h1.981a.468.468 0 0 1 .468.468v2.084a.468.468 0 0 1-.468.468h-1.214c-1.314.021-1.562.65-1.562 1.59v2.07h2.881a.468.468 0 0 1 .454.524Z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const SvgFacebook = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 35.549 35.549"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("g", null, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "2.809",
    cy: "2.809",
    transform: "translate(14.966 14.966)",
    r: "2.809"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M21.367 10.676h-7.185a3.508 3.508 0 0 0-3.508 3.508v7.182a3.508 3.508 0 0 0 3.508 3.508h7.185a3.508 3.508 0 0 0 3.508-3.508v-7.184a3.508 3.508 0 0 0-3.508-3.506Zm-3.592 11.7a4.6 4.6 0 1 1 4.6-4.6 4.6 4.6 0 0 1-4.601 4.596Zm4.624-8.059a1.137 1.137 0 1 1 1.135-1.139 1.137 1.137 0 0 1-1.136 1.135Z" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M17.774 0a17.774 17.774 0 1 0 17.775 17.774A17.774 17.774 0 0 0 17.774 0Zm8.887 21.367a5.3 5.3 0 0 1-5.295 5.295h-7.184a5.3 5.3 0 0 1-5.295-5.295v-7.185a5.3 5.3 0 0 1 5.295-5.295h7.185a5.3 5.3 0 0 1 5.295 5.295Z" })
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const SvgInstagram = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 35.549 35.549",
  fill: "currentColor"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "m19.159 17.225 4.359-2.411-4.859 5.155-2.262-2.414-4.418 2.414 4.858-5.155Z" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", { d: "M17.774 0a17.774 17.774 0 1 0 17.775 17.774A17.774 17.774 0 0 0 17.774 0Zm0 25.347A9.5 9.5 0 0 1 15.225 25L12.2 26.662v-3.139a8 8 0 0 1-3.312-6.406c0-4.547 3.976-8.23 8.887-8.23s8.887 3.686 8.887 8.23-3.976 8.23-8.888 8.23Z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$2);
}
const SvgMessenger = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 35.549 35.549"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "m22.686 12.863-.035-.035a6.9 6.9 0 0 0-11.027 8.005l.3.6-.569 2.754v.035l2.729-.648.622.309a6.895 6.895 0 0 0 7.975-11.02Zm-.276 7.718a2.882 2.882 0 0 1-1.527 1.331c-1.169.283-2.949 0-5.178-2.06l-.028-.026c-1.939-1.81-2.453-3.319-2.339-4.514a2.862 2.862 0 0 1 1.111-1.693.634.634 0 0 1 .994.234l.718 1.637a.631.631 0 0 1-.077.645l-.365.468a.62.62 0 0 0-.049.69 6.782 6.782 0 0 0 1.232 1.364 7.154 7.154 0 0 0 1.707 1.223.617.617 0 0 0 .676-.143l.419-.423a.636.636 0 0 1 .643-.2l1.707.491a.638.638 0 0 1 .36.954Z" }, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M17.774 0a17.774 17.774 0 1 0 17.775 17.774A17.774 17.774 0 0 0 17.774 0Zm8.81 17.983A8.819 8.819 0 0 1 13.848 25.6L9.4 26.652a.344.344 0 0 1-.36-.14.337.337 0 0 1-.054-.264l.935-4.542a8.817 8.817 0 1 1 16.666-3.723Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
const SvgWhatsapp = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 121.5 17.901"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M12.56 14.318a1.706 1.706 0 0 1-1.219-2.9l2.455-2.508-6.059-5.993a1.706 1.706 0 0 1 2.4-2.426l7.265 7.186a1.706 1.706 0 0 1 .019 2.406l-3.642 3.721a1.7 1.7 0 0 1-1.219.514ZM8.972 17.902a1.7 1.7 0 0 1-1.2-.493L.507 10.223a1.706 1.706 0 0 1-.019-2.406L4.13 4.096a1.706 1.706 0 1 1 2.438 2.387L4.113 8.991l6.059 5.992a1.706 1.706 0 0 1-1.2 2.919Z" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "1.791",
  cy: "1.791",
  transform: "translate(7.18 7.177)",
  r: "1.791"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", { d: "M28.375 13.723h1.382l1.909-5.327 2 5.327h1.4l3.164-8.582h-2.491L34.23 9.614l-1.8-4.654h-1.4l-1.691 4.545-1.473-4.364h-2.618Zm14.636.036a4.98 4.98 0 0 0 3.782-1.654l-1.291-1.437a3 3 0 0 1-2.254 1 2.091 2.091 0 0 1-2.218-1.636h5.908a5.126 5.126 0 0 0 .091-1.073 4.01 4.01 0 0 0-4.164-4.073 4.28 4.28 0 0 0-4.364 4.473 4.278 4.278 0 0 0 4.51 4.4Zm-2.018-5.418a1.834 1.834 0 0 1 1.836-1.564 1.76 1.76 0 0 1 1.782 1.564Zm12.491 5.418a4.2 4.2 0 0 0 4.054-4.436 4.181 4.181 0 0 0-4-4.436 3.507 3.507 0 0 0-2.527 1.055V.596h-2.436v12.909h2.345v-.818a3.494 3.494 0 0 0 2.564 1.072Zm-.491-2.218a2.1 2.1 0 0 1-2.073-2.218 2.1 2.1 0 0 1 2.073-2.218 2.137 2.137 0 0 1 2.109 2.218 2.137 2.137 0 0 1-2.109 2.218Zm9.272 2.218c2.2 0 3.654-1.091 3.654-2.764 0-1.345-.927-2.254-2.927-2.745-1.255-.291-1.655-.491-1.655-.873s.309-.545.927-.545a3.553 3.553 0 0 1 2.364 1.018l1.236-1.691a5.4 5.4 0 0 0-3.545-1.273c-2.073 0-3.454 1.109-3.454 2.727q0 2.018 2.891 2.673c1.255.273 1.691.491 1.691.891s-.4.636-1.091.636a3.954 3.954 0 0 1-2.673-1.217l-1.327 1.672a5.438 5.438 0 0 0 3.909 1.491Zm9.236 0a4.431 4.431 0 0 0 4.491-4.436 4.431 4.431 0 0 0-4.491-4.436 4.409 4.409 0 0 0-4.491 4.436 4.431 4.431 0 0 0 4.491 4.436Zm0-2.309a1.979 1.979 0 0 1-2-2.145 1.968 1.968 0 0 1 2-2.109 1.968 1.968 0 0 1 2 2.109 1.979 1.979 0 0 1-2 2.145Zm6.036 2.054h2.436V.596h-2.436Zm7.491.255a2.917 2.917 0 0 0 2.382-1.255v1h2.345V5.141h-2.436v4.527c0 1.127-.6 1.873-1.509 1.873s-1.491-.709-1.491-1.818V5.141h-2.436v5.182a3.221 3.221 0 0 0 3.145 3.436Zm10.309 0a3.467 3.467 0 0 0 2.545-.982l-.964-1.618a1.8 1.8 0 0 1-1.164.473c-.691 0-1-.473-1-1.236V7.105h2.309V5.141h-2.308V2.777h-2.436v2.364h-1.291v1.964h1.291v3.491c0 2 1.073 3.163 3.018 3.163Zm3.764-.255h2.436V5.141h-2.436Zm1.218-9.654a1.413 1.413 0 0 0 1.418-1.436 1.408 1.408 0 0 0-1.418-1.418 1.424 1.424 0 0 0-1.436 1.418 1.428 1.428 0 0 0 1.436 1.436Zm7.273 9.909a4.431 4.431 0 0 0 4.491-4.436 4.431 4.431 0 0 0-4.491-4.436 4.409 4.409 0 0 0-4.491 4.436 4.431 4.431 0 0 0 4.49 4.436Zm0-2.309a1.979 1.979 0 0 1-2-2.145 1.968 1.968 0 0 1 2-2.109 1.968 1.968 0 0 1 2 2.109 1.979 1.979 0 0 1-2.001 2.145Zm6.036 2.054h2.436V8.978c0-1.127.6-1.873 1.509-1.873s1.491.709 1.491 1.818v4.582h2.436V8.323a3.221 3.221 0 0 0-3.145-3.436 2.893 2.893 0 0 0-2.382 1.255v-1h-2.346Z" }, null, -1);
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_5);
}
const SvgLogoWebsolution = { render };
const _sfc_main$1 = {
  name: "Footer",
  components: {
    SvgLogo,
    SvgFacebook,
    SvgInstagram,
    SvgMessenger,
    SvgWhatsapp,
    SvgLogoWebsolution
  },
  data() {
    return {
      year: moment().year()
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_logo = resolveComponent("svg-logo");
  const _component_svg_facebook = resolveComponent("svg-facebook");
  const _component_svg_instagram = resolveComponent("svg-instagram");
  const _component_svg_messenger = resolveComponent("svg-messenger");
  const _component_svg_whatsapp = resolveComponent("svg-whatsapp");
  const _component_svg_logo_websolution = resolveComponent("svg-logo-websolution");
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="container container--xl"><div class="socials">`);
  _push(ssrRenderComponent(_component_svg_logo, null, null, _parent));
  _push(`<ul><li><a href="#">`);
  _push(ssrRenderComponent(_component_svg_facebook, null, null, _parent));
  _push(`</a></li><li><a href="#">`);
  _push(ssrRenderComponent(_component_svg_instagram, null, null, _parent));
  _push(`</a></li><li><a href="#">`);
  _push(ssrRenderComponent(_component_svg_messenger, null, null, _parent));
  _push(`</a></li><li><a href="#">`);
  _push(ssrRenderComponent(_component_svg_whatsapp, null, null, _parent));
  _push(`</a></li></ul></div><div class="footer-links"><div class="footer-group"><h3>${ssrInterpolate(_ctx.__t("app.footer.links.title"))}</h3><ul><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.links.link1"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.links.link2"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.links.link3"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.links.link4"))}</a></li></ul></div><div class="footer-group"><h3>${ssrInterpolate(_ctx.__t("app.footer.services.title"))}</h3><ul><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.services.link1"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.services.link2"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.services.link3"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.services.link4"))}</a></li></ul></div><div class="footer-group"><h3>${ssrInterpolate(_ctx.__t("app.footer.login.title"))}</h3><ul><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.login.link1"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.login.link2"))}</a></li><li><a href="#">${ssrInterpolate(_ctx.__t("app.footer.login.link3"))}</a></li></ul></div></div></div><div class="legal"><div class="container container--xl"><div class="content"><span>@${ssrInterpolate($data.year)} wittelach.be</span><a href="#">${ssrInterpolate(_ctx.__t("app.footer.legal.cookies"))}</a><a href="#">${ssrInterpolate(_ctx.__t("app.footer.legal.privacy"))}</a><a href="#">${ssrInterpolate(_ctx.__t("app.footer.legal.requirements"))}</a></div><div class="logo"><a href="https://websolution.be/" target="_blank">`);
  _push(ssrRenderComponent(_component_svg_logo_websolution, null, null, _parent));
  _push(`</a></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Layout",
  components: { Footer, Ribbon, Header }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Ribbon = resolveComponent("Ribbon");
  const _component_Header = resolveComponent("Header");
  const _component_Footer = resolveComponent("Footer");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Ribbon, null, null, _parent));
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/layout/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L,
  Rating as R,
  Seo as S,
  _export_sfc as _,
  SvgCalendar as a
};
