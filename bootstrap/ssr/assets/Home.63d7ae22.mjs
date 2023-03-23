import { Modal, Grid, UiInput, FormControl, UiButton } from "@websolutionbe/ui-library/dist/index.mjs";
import { _ as _export_sfc, R as Rating, a as SvgCalendar, S as Seo, L as Layout } from "./Layout.be0b1264.mjs";
import { openBlock, createElementBlock, createElementVNode, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createStaticVNode, createBlock, createCommentVNode, resolveDynamicComponent, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { Head } from "@inertiajs/inertia-vue3";
import { H as Heading } from "./Heading.70738e6f.mjs";
/* empty css                      */import { B as BottomCta } from "./BottomCta.c0126ea0.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "moment";
const _hoisted_1$b = {
  class: "arrow",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 35.332 47.413"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Path 14",
  d: "M11.596 40.587c9.18 1.345 16.61-4.842 18.619-13.48 2.044-8.793-1.027-18.999-7.094-25.557-1.268-1.363-3.129.574-2.029 1.979C25.9 9.67 28.537 17.7 27.27 25.487a16.315 16.315 0 0 1-4.523 8.949c-3.147 3.208-7.112 3.828-11.318 4.502-1.012.161-.67 1.521.168 1.648Z"
}, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Path 15",
  d: "M2.16 41.514c3.926 1.443 8.195 3.329 12.474 3.02a.6.6 0 0 0 .03-1.19A41.517 41.517 0 0 1 3.968 40.13c1.496-1.952 3.342-3.703 4.51-5.846a.922.922 0 0 0-1.43-1.128 31.6 31.6 0 0 0-5.452 6.884 1.021 1.021 0 0 0 .563 1.474Z"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$b,
  _hoisted_3$a
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$4);
}
const SvgArrow = { render: render$b };
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1935.482 1454.859"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("ellipse", {
  "data-name": "Ellipse 6",
  cx: "860.5",
  cy: "510",
  rx: "860.5",
  ry: "510",
  transform: "rotate(-16 1687.666 237.186)"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$9);
}
const SvgEllipse = { render: render$a };
const _hoisted_1$9 = {
  class: "logo-icon",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 54.966 50.995"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", { d: "M41.442 51a8.49 8.49 0 0 1-2.712-.466 8.586 8.586 0 0 1-1.47-.642 8.046 8.046 0 0 1-1.31-.911 10.208 10.208 0 0 1-1.212-1.232 16.368 16.368 0 0 1-1.176-1.606c-.3-.446-.861-1.315-1.515-2.321v-.007l-.007-.01c-.546-.839-1.165-1.791-1.737-2.666a326.168 326.168 0 0 0-2.328-3.558.029.029 0 0 0-.021-.009c-.106 0-.479.561-2.173 3.178-1.954 3.01-3.291 5.066-4.054 6.193a9.146 9.146 0 0 1-1.264 1.521 8.955 8.955 0 0 1-3.3 2.025 9.342 9.342 0 0 1-1.94.445 7.189 7.189 0 0 1-.9.057 7.078 7.078 0 0 1-2.129-.33 7.894 7.894 0 0 1-2.007-.973 8 8 0 0 1-1.426-1.208A13.407 13.407 0 0 1 7.4 46.727c-.394-.592-1-1.651-1.65-2.9a54.756 54.756 0 0 1-1.625-3.355 43.509 43.509 0 0 1-1.792-5.129c-.522-1.834-.97-3.773-1.333-5.768s-.63-4-.8-5.974a52.432 52.432 0 0 1-.188-5.76 36.278 36.278 0 0 1 .6-6.018 20.106 20.106 0 0 1 1.519-4.735 13.482 13.482 0 0 1 1.04-1.831 13.038 13.038 0 0 1 1.287-1.613 12.107 12.107 0 0 1 1.494-1.35 10.856 10.856 0 0 1 1.66-1.043 14.393 14.393 0 0 1 3.4-1.09 12.984 12.984 0 0 1 2-.128A15.193 15.193 0 0 1 16.2.317a13.832 13.832 0 0 1 2.612.928 21.78 21.78 0 0 1 2.779 1.6c.958.641 1.767 1.265 6.026 4.737.613.5 1.6 1.3 2.557 2.066l1.159.932 1.229.981.011.009c.845.675 1.719 1.372 2.213 1.768.976.776 1.643 1.3 2.166 1.658a8.7 8.7 0 0 0 1.4.8 8.861 8.861 0 0 0 1.648.613 8.7 8.7 0 0 0 1.753.231c.14.007.282.01.421.01a8.342 8.342 0 0 0 2.147-.278 7.432 7.432 0 0 0 1.877-.779 5.848 5.848 0 0 0 1.452-1.2 4.386 4.386 0 0 0 .875-1.527 4.776 4.776 0 0 0 .245-2.48 4.333 4.333 0 0 0-.427-1.43 4.3 4.3 0 0 0-.954-1.138 7.9 7.9 0 0 0-5.3-2.046 5.99 5.99 0 0 0-3.12.8A11.331 11.331 0 0 0 36 9.29c-.681.823-.9 1.062-1.046 1.062a.167.167 0 0 1-.1-.039c-.079-.055-.6-.469-1.319-1.043l-.04-.032-.913-.727a9.615 9.615 0 0 1-1.994-1.779A24.4 24.4 0 0 1 33.606 3.4a17.782 17.782 0 0 1 1.564-1.282 11.613 11.613 0 0 1 1.511-.934 13.428 13.428 0 0 1 1.63-.646 10.848 10.848 0 0 1 1.623-.421A15.1 15.1 0 0 1 42.007 0a16.876 16.876 0 0 1 2.148.117 13.045 13.045 0 0 1 9.512 6.427 10.147 10.147 0 0 1 .855 2.956 10.564 10.564 0 0 1 .036 3.134 12.576 12.576 0 0 1-.483 2.024 10.94 10.94 0 0 1-.775 1.79 10.8 10.8 0 0 1-2.083 2.592 12.259 12.259 0 0 1-2.851 2 13.4 13.4 0 0 1-1.888.735 14.916 14.916 0 0 1-2.055.51 13.984 13.984 0 0 1-2.2.146 16.178 16.178 0 0 1-3.036-.246 16.24 16.24 0 0 1-2.626-.831 16.045 16.045 0 0 1-2.442-1.248c-1.158-.73-8.118-6.238-12.207-9.662A31.523 31.523 0 0 0 16.863 6.8a7.5 7.5 0 0 0-3.671-1.022 6.907 6.907 0 0 0-1.516.185 6.516 6.516 0 0 0-1.424.493 5.286 5.286 0 0 0-1.528 1.137 7.529 7.529 0 0 0-1.213 1.779 13.35 13.35 0 0 0-.911 2.444 24.789 24.789 0 0 0-.624 3.133c-.083.617-.134 2.137-.132 3.967s.056 3.495.143 4.317c.768 7.42 2.26 12.807 4.99 18.012a25.514 25.514 0 0 0 1.366 2.335 5.368 5.368 0 0 0 1.04 1.234 1.453 1.453 0 0 0 1.036.322c1.155 0 1.8-.439 2.762-1.879a652.08 652.08 0 0 0 4.633-7.127 25.619 25.619 0 0 1 2.228-3.113A5.707 5.707 0 0 1 27.95 31.4a4.734 4.734 0 0 1 .656.045 5.945 5.945 0 0 1 1.75.566 5.381 5.381 0 0 1 1.458 1.024 40.964 40.964 0 0 1 2.45 3.48c.465.722 1.022 1.579 1.561 2.407a365.024 365.024 0 0 1 1.681 2.6c.766 1.17 1.55 2.327 1.749 2.58a2.858 2.858 0 0 0 1.006.758 2.888 2.888 0 0 0 1.184.279 1.627 1.627 0 0 0 .74-.159c.757-.389 1.638-1.681 3.041-4.459a39.16 39.16 0 0 0 2.406-5.893 37.952 37.952 0 0 0 1.192-4.681 18.566 18.566 0 0 1 .713-2.68 2.605 2.605 0 0 1 1.058-1.087 3.034 3.034 0 0 1 1.489-.389 2.81 2.81 0 0 1 1.418.375 3.263 3.263 0 0 1 1.4 1.9 4.267 4.267 0 0 1-.178 2.057 45.919 45.919 0 0 1-4.4 13.22 35.173 35.173 0 0 1-1.745 3.137 12.517 12.517 0 0 1-1.552 1.978 8.386 8.386 0 0 1-2.614 1.9 7.171 7.171 0 0 1-2.97.642Zm-20-23.149a2.478 2.478 0 0 1-.98-.189 3.083 3.083 0 0 1-1.779-2.762 2.546 2.546 0 0 1 .222-1.063c.075-.165.412-.71.974-1.575.5-.772 1.155-1.756 1.84-2.772 1.238-1.837 2.608-3.814 2.688-3.814a26.384 26.384 0 0 1 2.283 1.734 22.947 22.947 0 0 1 2.138 1.835c0 .115-1.352 2.151-2.609 3.994s-2.677 3.875-2.826 3.978a3.53 3.53 0 0 1-.95.472 3.266 3.266 0 0 1-.999.158Z" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
}
const SvgLogoIcon = { render: render$9 };
const _sfc_main$8 = {
  name: "ContactModal",
  components: {
    Modal,
    Grid,
    UiInput,
    FormControl,
    UiButton,
    SvgLogoIcon
  },
  emits: ["close"],
  data() {
    return {
      submitting: false,
      inputs: [
        {
          id: "firstname",
          type: "text",
          label: "Voornaam",
          validation: ["required"],
          required: true,
          value: null
        },
        {
          id: "lastname",
          type: "text",
          label: "Voornaam",
          validation: ["required"],
          required: true,
          value: null
        },
        {
          id: "email",
          type: "email",
          label: "E-mailadres",
          validation: ["required", "email"],
          required: true,
          value: null
        },
        {
          id: "phone",
          type: "text",
          label: "Telefoonnummer",
          validation: ["required"],
          required: true,
          value: null
        },
        {
          id: "message",
          type: "textarea",
          label: "Bericht",
          validation: ["required"],
          required: true,
          value: null
        }
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.formControl.validate()) {
        this.submitting = true;
        this.login();
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  const _component_svg_logo_icon = resolveComponent("svg-logo-icon");
  const _component_form_control = resolveComponent("form-control");
  const _component_grid = resolveComponent("grid");
  const _component_ui_input = resolveComponent("ui-input");
  const _component_ui_button = resolveComponent("ui-button");
  _push(ssrRenderComponent(_component_modal, mergeProps({
    onClose: ($event) => _ctx.$emit("close")
  }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_logo_icon, null, null, _parent2, _scopeId));
        _push2(`<h2${_scopeId}>Contacteer ons</h2>`);
      } else {
        return [
          createVNode(_component_svg_logo_icon),
          createVNode("h2", null, "Contacteer ons")
        ];
      }
    }),
    main: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_form_control, {
          class: "form--theme",
          inputs: $data.inputs,
          ref: "formControl"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_grid, { cols: 2 }, {
                col1: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ui_input, {
                      item: $data.inputs[0]
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ui_input, {
                      item: $data.inputs[2]
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ui_input, {
                        item: $data.inputs[0]
                      }, null, 8, ["item"]),
                      createVNode(_component_ui_input, {
                        item: $data.inputs[2]
                      }, null, 8, ["item"])
                    ];
                  }
                }),
                col2: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ui_input, {
                      item: $data.inputs[1]
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ui_input, {
                      item: $data.inputs[3]
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ui_input, {
                        item: $data.inputs[1]
                      }, null, 8, ["item"]),
                      createVNode(_component_ui_input, {
                        item: $data.inputs[3]
                      }, null, 8, ["item"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ui_input, {
                item: $data.inputs[4]
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_grid, { cols: 2 }, {
                  col1: withCtx(() => [
                    createVNode(_component_ui_input, {
                      item: $data.inputs[0]
                    }, null, 8, ["item"]),
                    createVNode(_component_ui_input, {
                      item: $data.inputs[2]
                    }, null, 8, ["item"])
                  ]),
                  col2: withCtx(() => [
                    createVNode(_component_ui_input, {
                      item: $data.inputs[1]
                    }, null, 8, ["item"]),
                    createVNode(_component_ui_input, {
                      item: $data.inputs[3]
                    }, null, 8, ["item"])
                  ]),
                  _: 1
                }),
                createVNode(_component_ui_input, {
                  item: $data.inputs[4]
                }, null, 8, ["item"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_form_control, {
            class: "form--theme",
            inputs: $data.inputs,
            ref: "formControl"
          }, {
            default: withCtx(() => [
              createVNode(_component_grid, { cols: 2 }, {
                col1: withCtx(() => [
                  createVNode(_component_ui_input, {
                    item: $data.inputs[0]
                  }, null, 8, ["item"]),
                  createVNode(_component_ui_input, {
                    item: $data.inputs[2]
                  }, null, 8, ["item"])
                ]),
                col2: withCtx(() => [
                  createVNode(_component_ui_input, {
                    item: $data.inputs[1]
                  }, null, 8, ["item"]),
                  createVNode(_component_ui_input, {
                    item: $data.inputs[3]
                  }, null, 8, ["item"])
                ]),
                _: 1
              }),
              createVNode(_component_ui_input, {
                item: $data.inputs[4]
              }, null, 8, ["item"])
            ]),
            _: 1
          }, 8, ["inputs"])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ui_button, {
          class: "btn--theme btn--resize",
          size: "big",
          color: "primary",
          pill: "",
          loading: $data.submitting,
          onClick: $options.submit
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Verzenden `);
            } else {
              return [
                createTextVNode(" Verzenden ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ui_button, {
            class: "btn--theme btn--resize",
            size: "big",
            color: "primary",
            pill: "",
            loading: $data.submitting,
            onClick: $options.submit
          }, {
            default: withCtx(() => [
              createTextVNode(" Verzenden ")
            ]),
            _: 1
          }, 8, ["loading", "onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/utils/ContactModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ContactModal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  name: "Banner",
  components: { ContactModal, Rating, UiButton, SvgArrow, SvgEllipse, SvgCalendar },
  data() {
    return {
      openModal: false,
      versions: [
        {
          subtitle: this.__t("home.banner.subtitle")
        }
      ]
    };
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
    scrollAnimation() {
      this.animator.timeline({
        scrollTrigger: {
          trigger: ".animation-start-banner",
          start: "top center",
          end: "bottom top"
        }
      }).from(".animate-banner-title", { y: 30, opacity: 0, duration: 0.4 }).from(".animate-banner-body", { y: 30, opacity: 0, duration: 0.3 });
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button = resolveComponent("ui-button");
  const _component_svg_calendar = resolveComponent("svg-calendar");
  const _component_svg_arrow = resolveComponent("svg-arrow");
  const _component_rating = resolveComponent("rating");
  const _component_svg_ellipse = resolveComponent("svg-ellipse");
  const _component_contact_modal = resolveComponent("contact-modal");
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "banner" }, _attrs))}><div class="container overflow-hidden animation-start-banner"><div class="content"><span class="subtitle">${_ctx.__t("home.banner.subtitle")}</span><h1 class="animate-banner-title">${ssrInterpolate(_ctx.__t("home.banner.title"))}</h1><div class="body animate-banner-body">${_ctx.__t("home.banner.body")}</div><div class="cta-box">`);
  _push(ssrRenderComponent(_component_ui_button, {
    onClick: $options.toggleModal,
    color: "primary",
    size: "big",
    class: "btn--theme btn--resize btn--with-icon"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_calendar, null, null, _parent2, _scopeId));
        _push2(` ${ssrInterpolate(_ctx.__t("home.banner.cta"))}`);
      } else {
        return [
          createVNode(_component_svg_calendar),
          createTextVNode(" " + toDisplayString(_ctx.__t("home.banner.cta")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_svg_arrow, null, null, _parent));
  _push(ssrRenderComponent(_component_rating, null, null, _parent));
  _push(`</div></div><div class="image"><img alt="blond meisje"${ssrRenderAttr("src", _ctx.imagePath("blonde-girl.png"))}>`);
  _push(ssrRenderComponent(_component_svg_ellipse, null, null, _parent));
  _push(`</div></div>`);
  if ($data.openModal) {
    _push(ssrRenderComponent(_component_contact_modal, { onClose: $options.toggleModal }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _hoisted_1$8 = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 27.395 27.389"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<path data-name="Path 1" d="M2.185 14.229c.253.419.515.851.749 1.289a11.039 11.039 0 0 1 1.327 3.967 29.868 29.868 0 0 0 .8 4.7c.3 1.118.862 3.2 2.649 3.2 1.4 0 2.487-2.678 3.222-7.96.248-1.749 1-1.921 1.384-1.968a.262.262 0 0 1 .042.008c.025.071.05.142.077.211a10.033 10.033 0 0 0 .806 1.525c.156.257.312.515.456.784a6.626 6.626 0 0 1 .8 2.378 22.518 22.518 0 0 0 .37 2.4.235.235 0 0 0 0 .032l.011.029c.036.154.068.309.111.462.183.682.565 2.1 1.8 2.1.4 0 1.453 0 2.157-5.049.13-.913.473-1.029.678-1.058l.057.01c.137.028.5.1.639 1.05.7 5.048 1.757 5.048 2.154 5.048 1.232 0 1.6-1.365 1.8-2.1a18.743 18.743 0 0 0 .5-2.925 6.641 6.641 0 0 1 .8-2.38c.144-.272.3-.532.456-.791a9.892 9.892 0 0 0 .8-1.518c.766-1.944.97-4.607-.752-6.253a4.369 4.369 0 0 0-1.862-1.037c.934-3.435.348-6.568-1.612-8.447a8.063 8.063 0 0 0-10.273-.191 8.065 8.065 0 0 0-10.274.192C-.634 4.519-.306 8.722.899 11.8a16.037 16.037 0 0 0 1.286 2.429Zm23.793 3.119a9.15 9.15 0 0 1-.73 1.38c-.166.274-.332.548-.483.834a7.544 7.544 0 0 0-.9 2.706 18.044 18.044 0 0 1-.471 2.784c-.188.689-.429 1.424-.911 1.424-.183-.056-.8-.961-1.26-4.265-.151-1.05-.608-1.662-1.362-1.816a1.745 1.745 0 0 0-.18-.03h-.05a.452.452 0 0 0-.053-.005c-.859.1-1.376.716-1.536 1.846-.46 3.306-1.081 4.21-1.253 4.265-.494 0-.734-.735-.92-1.427a18.126 18.126 0 0 1-.469-2.784 7.5 7.5 0 0 0-.9-2.706c-.15-.283-.315-.556-.48-.827a9.235 9.235 0 0 1-.734-1.384c-.654-1.67-.858-3.929.534-5.262a4.255 4.255 0 0 1 5.5.048c.134.131 1.856 1.772 3.4 1.772a.457.457 0 0 0 0-.913 4.552 4.552 0 0 1-2.376-1.173 4.491 4.491 0 0 1 3.224-.65 3.556 3.556 0 0 1 1.875.916c1.398 1.342 1.162 3.673.535 5.267ZM2.685 2.6c2.36-2.263 6.808-2.227 9.333.077.178.173 2.919 2.8 5.33 2.8a.457.457 0 0 0 0-.913c-1.6 0-3.525-1.515-4.322-2.21C15.599.38 19.727.448 21.971 2.6c1.726 1.655 2.216 4.484 1.344 7.619a5.281 5.281 0 0 0-3.679.989 5.15 5.15 0 0 0-6.448.215 5.266 5.266 0 0 0-1.1 5.157c-1.139.208-1.836 1.115-2.062 2.718-.794 5.675-1.865 7.174-2.321 7.174-1 0-1.439-1.3-1.769-2.528a29.714 29.714 0 0 1-.771-4.564 11.915 11.915 0 0 0-1.429-4.3c-.245-.46-.513-.9-.776-1.333a15.137 15.137 0 0 1-1.217-2.293C.652 8.664.321 4.866 2.685 2.6Zm0 0"></path><path data-name="Path 2" d="M2.63 9.551a.456.456 0 0 0 .44-.577C2.051 5.238 4.432 4.006 4.54 3.952a.457.457 0 0 0-.4-.821c-.031.015-3.18 1.586-1.954 6.084a.457.457 0 0 0 .444.336Zm0 0"></path><path data-name="Path 3" d="M6.395 2.744a.456.456 0 1 1-.456-.456.456.456 0 0 1 .456.456Zm0 0"></path><path data-name="Path 4" d="M15.03 12.579c-.7.4-1.816 1.75-1.024 4.028a.456.456 0 1 0 .862-.3c-.73-2.1.552-2.9.615-2.936a.456.456 0 1 0-.454-.792Zm0 0"></path><path data-name="Path 5" d="M16.892 12.328a.456.456 0 1 1-.456-.457.456.456 0 0 1 .456.457Zm0 0"></path>', 5);
const _hoisted_7 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_7);
}
const SvgHollywood = { render: render$8 };
const _hoisted_1$7 = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 38.326 38.327"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", { d: "M32.561 21.01a8.233 8.233 0 0 0-.881-3.686l1.323-1.322a2.543 2.543 0 0 0-1.794-4.341 2.541 2.541 0 0 0-2.54-2.539 2.542 2.542 0 0 0-2.538-2.54 2.544 2.544 0 0 0-4.343-1.794l-2.624 2.624-1.46-1.46a2.544 2.544 0 0 0-4.343 1.8 2.542 2.542 0 0 0-2.539 2.538 2.543 2.543 0 0 0-2.221 3.774 2.542 2.542 0 0 0-1 4.215l1.06 1.06L.237 27.75a.749.749 0 1 0 1.059 1.059l5.707-5.706 5.346 5.346-8.563 8.561a.749.749 0 1 0 1.059 1.059l11.572-11.573a2.723 2.723 0 0 1 .718-.516l1.811 1.193a5.745 5.745 0 0 0 4.068.869l10.064 10.065a.749.749 0 0 0 1.059-1.059l-5.84-5.84.706-.706a.749.749 0 1 0-1.058-1.06l-.706.706-1.653-1.653 6.172-6.172 1.653 1.653-.7.7a.75.75 0 1 0 1.054 1.066l.7-.7 2.578 2.578a.749.749 0 1 0 1.059-1.059ZM22.847 5.842a1.047 1.047 0 0 1 1.48 1.48l-1.645 1.645a.749.749 0 0 0 1.059 1.059l1.645-1.645a1.047 1.047 0 0 1 1.48 1.48l-2.512 2.512a.749.749 0 1 0 1.059 1.059l2.512-2.512a1.047 1.047 0 1 1 1.48 1.48l-2.512 2.516a.749.749 0 1 0 1.059 1.059l2.512-2.512a1.047 1.047 0 1 1 1.48 1.48l-6.187 6.187a10.42 10.42 0 0 1-7.417 3.072 4.191 4.191 0 0 0-2.124.573l-4.333-4.333a2.547 2.547 0 0 0 1.644-2.377 2.539 2.539 0 0 0 2.538-2.538 2.542 2.542 0 0 0 2.539-2.539 2.544 2.544 0 0 0 1.8-4.343l-.177-.177Zm-7.682 1.164a1.047 1.047 0 0 1 1.48 0l2.7 2.7a1.047 1.047 0 0 1-1.48 1.481l-2.7-2.7a1.047 1.047 0 0 1 0-1.48Zm-2.539 2.539a1.048 1.048 0 0 1 1.48 0l2.7 2.7a1.047 1.047 0 0 1-1.48 1.481l-2.7-2.7a1.047 1.047 0 0 1 0-1.48Zm-2.539 2.539a1.047 1.047 0 0 1 1.48 0l2.7 2.7a1.047 1.047 0 0 1-1.48 1.48l-2.7-2.7a1.048 1.048 0 0 1 0-1.48Zm-1.432 3.65a1.048 1.048 0 0 1 1.48 0l1.59 1.59a1.047 1.047 0 0 1-1.48 1.481l-1.59-1.591a1.048 1.048 0 0 1 0-1.48Zm-.594 6.308 1.653-1.653 5.346 5.346-1.653 1.653Zm15.728 4.657a.748.748 0 0 0-.7-.2 4.241 4.241 0 0 1-3.316-.576l-.405-.267a11.9 11.9 0 0 0 7.45-3.467l3.736-3.736a6.738 6.738 0 0 1 .511 2.45l-6.538 6.539Z" }, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", { d: "M30.32 27.064a.748.748 0 1 0 .529-.219.753.753 0 0 0-.529.219ZM5.052 6.116a.75.75 0 0 0 1.063-1.059L2.592 1.533a.749.749 0 0 0-1.059 1.059ZM9.133 4.081a.749.749 0 0 0 .749-.749V.749a.75.75 0 1 0-1.5 0v2.583a.749.749 0 0 0 .751.749ZM.749 9.884h2.583a.75.75 0 1 0 0-1.5H.749a.75.75 0 1 0 0 1.5ZM32.74 6.335a.746.746 0 0 0 .529-.219l3.523-3.524a.749.749 0 0 0-1.059-1.059l-3.522 3.524a.749.749 0 0 0 .529 1.278ZM29.194 4.081a.749.749 0 0 0 .749-.749V.749a.75.75 0 1 0-1.5 0v2.583a.749.749 0 0 0 .751.749ZM34.245 9.133a.749.749 0 0 0 .749.749h2.584a.75.75 0 0 0 0-1.5h-2.584a.749.749 0 0 0-.749.751Z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$7,
  _hoisted_3$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$3);
}
const SvgHelp = { render: render$7 };
const _hoisted_1$6 = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 27.398 27.4"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Path 11",
  d: "M19.016 17.385a.856.856 0 0 0-1.208-.082 4.781 4.781 0 0 1-7.383-1.389h3.564a.857.857 0 1 0 0-1.713H9.904a4.909 4.909 0 0 1-.029-.507 4.833 4.833 0 0 1 .027-.509h4.085a.857.857 0 1 0 0-1.713h-3.56a4.788 4.788 0 0 1 4.234-2.564 4.738 4.738 0 0 1 2.955 1.021.856.856 0 1 0 1.058-1.344 6.432 6.432 0 0 0-4.013-1.387 6.5 6.5 0 0 0-6.1 4.278H7.314a.856.856 0 1 0 0 1.712h.876c-.013.171-.026.337-.026.509s.013.337.025.5h-.875a.857.857 0 0 0 0 1.713h1.247a6.49 6.49 0 0 0 10.372 2.679.856.856 0 0 0 .082-1.208Z"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Path 12",
  d: "M13.699 27.4a13.7 13.7 0 1 1 8.055-24.783A.856.856 0 0 1 20.746 4a11.97 11.97 0 1 0 3.5 4 .856.856 0 0 1 1.506-.813A13.7 13.7 0 0 1 13.699 27.4Z"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  "data-name": "Path 13",
  d: "M23.472 6.222a.856.856 0 0 1-.652-.3l-.154-.178a.856.856 0 1 1 1.283-1.134l.175.2a.856.856 0 0 1-.651 1.411Z"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$6,
  _hoisted_3$6,
  _hoisted_4$2
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_5$1);
}
const SvgMoney = { render: render$6 };
const _sfc_main$6 = {
  name: "Benefits",
  components: {
    Grid,
    SvgHollywood,
    SvgHelp,
    SvgMoney
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_grid = resolveComponent("grid");
  const _component_svg_hollywood = resolveComponent("svg-hollywood");
  const _component_svg_money = resolveComponent("svg-money");
  const _component_svg_help = resolveComponent("svg-help");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "benefits" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_grid, { cols: 3 }, {
    col1: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="benefit"${_scopeId}><div class="icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_svg_hollywood, null, null, _parent2, _scopeId));
        _push2(`</div><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.hollywood.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.hollywood.body"))}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "benefit" }, [
            createVNode("div", { class: "icon" }, [
              createVNode(_component_svg_hollywood)
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h3", null, toDisplayString(_ctx.__t("home.benefits.hollywood.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.__t("home.benefits.hollywood.body")), 1)
            ])
          ])
        ];
      }
    }),
    col2: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="benefit"${_scopeId}><div class="icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_svg_money, null, null, _parent2, _scopeId));
        _push2(`</div><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.money.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.money.body"))}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "benefit" }, [
            createVNode("div", { class: "icon" }, [
              createVNode(_component_svg_money)
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h3", null, toDisplayString(_ctx.__t("home.benefits.money.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.__t("home.benefits.money.body")), 1)
            ])
          ])
        ];
      }
    }),
    col3: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="benefit"${_scopeId}><div class="icon"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_svg_help, null, null, _parent2, _scopeId));
        _push2(`</div><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.help.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.benefits.help.body"))}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "benefit" }, [
            createVNode("div", { class: "icon" }, [
              createVNode(_component_svg_help)
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h3", null, toDisplayString(_ctx.__t("home.benefits.help.title")), 1),
              createVNode("p", null, toDisplayString(_ctx.__t("home.benefits.help.body")), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Benefits.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Benefits = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16.199 9.463",
  fill: "currentColor"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("g", { "data-name": "Group 65" }, [
  /* @__PURE__ */ createElementVNode("g", { "data-name": "Group 64" }, [
    /* @__PURE__ */ createElementVNode("path", {
      "data-name": "angle-small-right (4)",
      d: "M15.553 3.17 12.66.277a.946.946 0 1 0-1.338 1.339l2.893 2.892a.315.315 0 0 1 0 .447l-2.893 2.892a.946.946 0 0 0 1.338 1.339l2.893-2.893a2.211 2.211 0 0 0 0-3.123ZM.646 6.293l2.893 2.893a.946.946 0 0 0 1.338-1.339L1.984 4.955a.315.315 0 0 1 0-.447l2.893-2.892A.946.946 0 0 0 3.539.277L.646 3.17a2.211 2.211 0 0 0 0 3.123Z"
    })
  ])
], -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const SvgSlider = { render: render$5 };
const _sfc_main$5 = {
  name: "ImgSlider",
  props: {
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    alt1: { type: String, required: true },
    alt2: { type: String, required: true }
  },
  data() {
    return {
      position: 40
    };
  },
  components: {
    SvgSlider
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_slider = resolveComponent("svg-slider");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "img-slider" }, _attrs))}><picture><source${ssrRenderAttr("srcset", _ctx.imagePath($props.img1))}><img${ssrRenderAttr("src", _ctx.imagePath($props.img1))}${ssrRenderAttr("alt", $props.alt1)}></picture><picture style="${ssrRenderStyle(`clip-path: inset(0 0 0 ${$data.position}%);`)}"><source${ssrRenderAttr("srcset", _ctx.imagePath($props.img2))}><img${ssrRenderAttr("src", _ctx.imagePath($props.img2))}${ssrRenderAttr("alt", $props.alt2)}></picture><div class="handler"><input class="slider" type="range" step="1" min="0" max="100"${ssrRenderAttr("value", $data.position)}><div class="handle" style="${ssrRenderStyle(`left:${$data.position}%`)}">`);
  _push(ssrRenderComponent(_component_svg_slider, null, null, _parent));
  _push(`</div></div><div class="splitter" style="${ssrRenderStyle(`left:${$data.position}%`)}"></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/details/ImgSlider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ImgSlider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 17.131",
  fill: "currentColor"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M20 8.558a2.857 2.857 0 0 0-.843-2L13.029.416a1.43 1.43 0 1 0-2.014 2.029l4.7 4.686H1.429a1.429 1.429 0 0 0 0 2.857h14.285l-4.7 4.7a1.43 1.43 0 0 0 2.014 2.029l6.129-6.143A2.857 2.857 0 0 0 20 8.558Z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const SvgArrowRight = { render: render$4 };
const _sfc_main$4 = {
  name: "Mission",
  components: { ImgSlider, Heading, Grid, UiButton, SvgArrowRight }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_grid = resolveComponent("grid");
  const _component_heading = resolveComponent("heading");
  const _component_ui_button = resolveComponent("ui-button");
  const _component_svg_arrow_right = resolveComponent("svg-arrow-right");
  const _component_img_slider = resolveComponent("img-slider");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mission" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_grid, { cols: 2 }, {
    col1: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_heading, {
          value: _ctx.__t("home.mission.title"),
          "sub-title": _ctx.__t("home.mission.subtitle")
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.__t("home.mission.body"))}</p>`);
        _push2(ssrRenderComponent(_component_ui_button, {
          class: "btn--theme btn--resize btn--with-icon_right",
          color: "text",
          size: "big",
          outlined: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.__t("home.mission.button"))} `);
              _push3(ssrRenderComponent(_component_svg_arrow_right, null, null, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__t("home.mission.button")) + " ", 1),
                createVNode(_component_svg_arrow_right)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "content" }, [
            createVNode(_component_heading, {
              value: _ctx.__t("home.mission.title"),
              "sub-title": _ctx.__t("home.mission.subtitle")
            }, null, 8, ["value", "sub-title"]),
            createVNode("p", null, toDisplayString(_ctx.__t("home.mission.body")), 1),
            createVNode(_component_ui_button, {
              class: "btn--theme btn--resize btn--with-icon_right",
              color: "text",
              size: "big",
              outlined: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__t("home.mission.button")) + " ", 1),
                createVNode(_component_svg_arrow_right)
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    col2: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_img_slider, {
          img1: "home/mission-before.jpg",
          img2: "home/mission-after.jpg",
          alt1: "Missie wittelach.be foto voor",
          alt2: "Missie wittelach.be foto na"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_img_slider, {
            img1: "home/mission-before.jpg",
            img2: "home/mission-after.jpg",
            alt1: "Missie wittelach.be foto voor",
            alt2: "Missie wittelach.be foto na"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Mission.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Mission = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 11.842 23.991",
  fill: "currentColor"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M0 22.495a1.5 1.5 0 0 1 .44-1.06l7.672-7.672a2.5 2.5 0 0 0 0-3.536L.45 2.56A1.5 1.5 0 1 1 2.571.439l7.662 7.656a5.506 5.506 0 0 1 0 7.779l-7.672 7.677A1.5 1.5 0 0 1 0 22.495Z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const SvgChevronRight = { render: render$3 };
const _sfc_main$3 = {
  name: "Procedure",
  components: { Heading, Grid, SvgChevronRight },
  data() {
    return {
      activeTab: "transfer",
      activeImg: "home/procedure/transfer.jpg"
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
      this.activeImg = null;
      this.activeImg = `home/procedure/${tab}.jpg`;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_heading = resolveComponent("heading");
  const _component_grid = resolveComponent("grid");
  const _component_svg_chevron_right = resolveComponent("svg-chevron-right");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "procedure" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_heading, {
    value: _ctx.__t("home.procedure.title"),
    "sub-title": _ctx.__t("home.procedure.subtitle"),
    center: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_grid, { cols: 2 }, {
    col1: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="tabs"${_scopeId}><div class="${ssrRenderClass([{ active: $data.activeTab === "preparation" }, "tab"])}"${_scopeId}><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.preparation.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.preparation.body"))}</p></div>`);
        _push2(ssrRenderComponent(_component_svg_chevron_right, null, null, _parent2, _scopeId));
        _push2(`</div><div class="${ssrRenderClass([{ active: $data.activeTab === "transfer" }, "tab"])}"${_scopeId}><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.transfer.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.transfer.body"))}</p></div>`);
        _push2(ssrRenderComponent(_component_svg_chevron_right, null, null, _parent2, _scopeId));
        _push2(`</div><div class="${ssrRenderClass([{ active: $data.activeTab === "help" }, "tab"])}"${_scopeId}><div class="content"${_scopeId}><h3${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.help.title"))}</h3><p${_scopeId}>${ssrInterpolate(_ctx.__t("home.procedure.help.body"))}</p></div>`);
        _push2(ssrRenderComponent(_component_svg_chevron_right, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "tabs" }, [
            createVNode("div", {
              class: ["tab", { active: $data.activeTab === "preparation" }],
              onClick: ($event) => $options.setActiveTab("preparation")
            }, [
              createVNode("div", { class: "content" }, [
                createVNode("h3", null, toDisplayString(_ctx.__t("home.procedure.preparation.title")), 1),
                createVNode("p", null, toDisplayString(_ctx.__t("home.procedure.preparation.body")), 1)
              ]),
              createVNode(_component_svg_chevron_right)
            ], 10, ["onClick"]),
            createVNode("div", {
              class: ["tab", { active: $data.activeTab === "transfer" }],
              onClick: ($event) => $options.setActiveTab("transfer")
            }, [
              createVNode("div", { class: "content" }, [
                createVNode("h3", null, toDisplayString(_ctx.__t("home.procedure.transfer.title")), 1),
                createVNode("p", null, toDisplayString(_ctx.__t("home.procedure.transfer.body")), 1)
              ]),
              createVNode(_component_svg_chevron_right)
            ], 10, ["onClick"]),
            createVNode("div", {
              class: ["tab", { active: $data.activeTab === "help" }],
              onClick: ($event) => $options.setActiveTab("help")
            }, [
              createVNode("div", { class: "content" }, [
                createVNode("h3", null, toDisplayString(_ctx.__t("home.procedure.help.title")), 1),
                createVNode("p", null, toDisplayString(_ctx.__t("home.procedure.help.body")), 1)
              ]),
              createVNode(_component_svg_chevron_right)
            ], 10, ["onClick"])
          ])
        ];
      }
    }),
    col2: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="image-wrapper"${_scopeId}>`);
        if ($data.activeImg) {
          _push2(`<div class="image"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.imagePath($data.activeImg))}${_scopeId}><img${ssrRenderAttr("src", _ctx.imagePath($data.activeImg))} alt="procedure wittelach.be"${_scopeId}></picture></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "image-wrapper" }, [
            $data.activeImg ? (openBlock(), createBlock("div", {
              key: 0,
              class: "image"
            }, [
              createVNode("picture", null, [
                createVNode("source", {
                  srcset: _ctx.imagePath($data.activeImg)
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  src: _ctx.imagePath($data.activeImg),
                  alt: "procedure wittelach.be"
                }, null, 8, ["src"])
              ])
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Procedure.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Procedure = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 39.946 58.916"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "m5.514 44.676-.663-1.707a.96.96 0 0 0-1.8.664l.664 1.707a.88.88 0 0 0 1.233.569.987.987 0 0 0 .569-1.233Z" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", { d: "M38.903 30.353h-7.02a7.682 7.682 0 0 0-6.639-3.794H14.713a7.682 7.682 0 0 0-6.64 3.794H.961a.893.893 0 0 0-.949.949 26.192 26.192 0 0 0 1.613 8.537.96.96 0 0 0 1.8-.664 25.166 25.166 0 0 1-1.512-6.925h36.041a27.811 27.811 0 0 1-1.041 6.356l-5.217 16.6a2.271 2.271 0 0 1-2.283 1.706 2.063 2.063 0 0 1-2.371-1.8l-2.178-8.823a4.313 4.313 0 0 0-8.347 0l-2.182 8.821a2.447 2.447 0 0 1-2.371 1.8 2.543 2.543 0 0 1-2.466-1.518l-2.561-6.83a.96.96 0 0 0-1.8.664l2.561 6.83a4.274 4.274 0 0 0 4.079 2.846 4.182 4.182 0 0 0 4.363-3.225l2.179-8.818a2.421 2.421 0 0 1 2.277-1.8 2.337 2.337 0 0 1 2.277 1.8l2.182 8.821a4.246 4.246 0 0 0 4.079 3.225 4.079 4.079 0 0 0 4.268-3.035l5.122-16.6a24.928 24.928 0 0 0 1.138-7.968.727.727 0 0 0-.759-.949Zm-28.551 0a5.812 5.812 0 0 1 4.361-1.894h10.531a6.351 6.351 0 0 1 4.363 1.9ZM.961 15.177h30.352a.95.95 0 1 0 0-1.9h-29.4c.095-3.13.854-8.727 3.32-10.719a3.58 3.58 0 0 1 4.268 0 11.807 11.807 0 0 0-2.277 1.518.939.939 0 0 0 1.328 1.328A9.475 9.475 0 0 1 11.585 3.7a6.28 6.28 0 0 1 6.166 1.518c3.6 3.32 7.114 2.182 9.3 0 0 0 2.277-2.751 3.984-3.32 3.415-1.138 5.027 2.846 5.027 2.94a26.548 26.548 0 0 1 1.9 8.442h-3.13a.95.95 0 0 0 0 1.9h4.174a.951.951 0 0 0 .949-.949 25.67 25.67 0 0 0-2.087-9.96C37.67 4.079 36.057 0 32.168 0a5.878 5.878 0 0 0-3.889 1.518A12.978 12.978 0 0 0 22.303 0a11.512 11.512 0 0 0-6.735 2.087 8.141 8.141 0 0 0-3.984-.095C10.446.949 7.41-1.518 3.901 1.518.677 4.174-.087 11.1.013 14.228a.951.951 0 0 0 .949.949ZM22.398 1.9a11.605 11.605 0 0 1 4.458.949S24.675 5.5 22.213 5.5c-2.087 0-4.174-2.277-4.648-2.561A12.237 12.237 0 0 1 22.398 1.9Z" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", { d: "M34.919 11.382a.94.94 0 0 0 .759-1.043 33.983 33.983 0 0 0-1.709-6.071.934.934 0 1 0-1.707.759 23.548 23.548 0 0 1 1.613 5.6.94.94 0 0 0 1.043.759ZM19.932 17.074a.9.9 0 0 0-.949.949v3.415s-.854-.949-1.613-.285a.917.917 0 0 0 0 1.328l1.9 1.9a1.025 1.025 0 0 0 1.328 0l1.9-1.9a.917.917 0 0 0 0-1.328c-.759-.759-1.613.285-1.613.285v-3.415a.9.9 0 0 0-.953-.949Z" }, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5);
}
const SvgZirkonium = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 39.946 56.479"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M38.746 5.786a.828.828 0 0 0-1.469.763 8.986 8.986 0 0 1 .638 6.724c-.266.9-2.606 8.826-2.708 9.219a.177.177 0 0 1-.17.134H15.513a.828.828 0 0 0 0 1.655h17.014l-.46 2.528a.176.176 0 0 1-.173.144H8.056a.175.175 0 0 1-.172-.144l-.46-2.528h4.486a.828.828 0 0 0 0-1.655h-7a.177.177 0 0 1-.17-.133l-.007-.026-2.7-9.194a9.051 9.051 0 0 1 8.681-11.618 9.066 9.066 0 0 1 2.522.356 24.191 24.191 0 0 0 13.478 0 9.073 9.073 0 0 1 8.515 1.911.828.828 0 1 0 1.1-1.238A10.729 10.729 0 0 0 26.254.421a22.536 22.536 0 0 1-12.554 0A10.729 10.729 0 0 0 10.714 0 10.7 10.7 0 0 0 .448 13.74l2.7 9.182a1.831 1.831 0 0 0 1.765 1.358h.829l.514 2.82a1.829 1.829 0 0 0 1.8 1.5h3.605l.584 5.033-.583.156a2.337 2.337 0 0 0 1.129 4.535l.3 2.56-.791.216a2.337 2.337 0 1 0 1.21 4.515l.124-.033.3 2.557-.675.181a2.338 2.338 0 0 0 .6 4.6 2.355 2.355 0 0 0 .609-.081h.011l.225 1.939a1.926 1.926 0 0 0 1.914 1.7h6.719a1.927 1.927 0 0 0 1.914-1.7l.579-4.981.867-.233a2.337 2.337 0 0 0-.309-4.575l.338-2.909.926-.248a2.337 2.337 0 0 0-.365-4.582l.336-2.887.667-.178a2.337 2.337 0 0 0-.118-4.543l.12-1.031h3.6a1.83 1.83 0 0 0 1.8-1.5l.514-2.825h.828a1.831 1.831 0 0 0 1.772-1.372c.073-.281 1.65-5.635 2.693-9.166a10.636 10.636 0 0 0-.753-7.962Zm-15.141 48.8a.272.272 0 0 1-.27.241h-6.72a.272.272 0 0 1-.27-.241l-.253-2.186 8.016-2.148Zm3.144-7.457a.683.683 0 0 1-.483.836L14.037 51.24a.683.683 0 0 1-.353-1.319l12.229-3.277a.675.675 0 0 1 .177-.023.683.683 0 0 1 .659.506Zm-2.061-1.868-9.142 2.45-.3-2.558L25 42.537Zm3.017-5.865a.684.684 0 0 1-.483.836l-14.14 3.789a.683.683 0 1 1-.353-1.319l14.14-3.789a.683.683 0 0 1 .836.483Zm.637-7.648a.684.684 0 0 1-.483.836L22.8 33.937a.828.828 0 0 0 .428 1.6l2.672-.717-.316 2.722L14.7 40.458l-.3-2.557 5.342-1.431a.828.828 0 0 0-.428-1.6l-6.877 1.843a.683.683 0 0 1-.768-1 .677.677 0 0 1 .415-.318l15.415-4.131a.684.684 0 0 1 .843.482Zm-1.861-1.921-12.62 3.382-.534-4.6h13.3Zm0 0" }, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M26.254 4.834a22.536 22.536 0 0 1-12.557 0 .828.828 0 0 0-.46 1.59 24.183 24.183 0 0 0 13.478 0 .828.828 0 1 0-.46-1.59Zm0 0" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
}
const SvgAllOn = { render: render$1 };
const _sfc_main$2 = {
  name: "Services",
  components: { Rating, Heading, UiButton },
  data: function() {
    return {
      services: [
        {
          icon: SvgZirkonium,
          title: "Zirkonium kronen",
          link: "diensten#zirkonium",
          intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. "
        },
        {
          icon: SvgAllOn,
          title: "All-on-4 gebit",
          link: "diensten#all-on-4",
          intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. "
        },
        {
          icon: SvgAllOn,
          title: "All-on-6 gebit",
          link: "diensten#all-on-6",
          intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. "
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_heading = resolveComponent("heading");
  const _component_ui_button = resolveComponent("ui-button");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_heading, {
    value: _ctx.__t("home.services.title"),
    "sub-title": _ctx.__t("home.services.subtitle")
  }, null, _parent));
  _push(`<div class="services-list"><!--[-->`);
  ssrRenderList(_ctx.services, (service, i) => {
    _push(`<a class="service"${ssrRenderAttr("href", `https://dentalcare.test/${service.link}`)}><div class="icon">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), null, null), _parent);
    _push(`</div><div class="content"><h3>${ssrInterpolate(service.title)}</h3><p>${ssrInterpolate(service.intro)}</p></div></a>`);
  });
  _push(`<!--]--></div><div class="contact"><p>${ssrInterpolate(_ctx.__t("home.services.contact.body"))}</p>`);
  _push(ssrRenderComponent(_component_ui_button, {
    class: "btn--theme btn--resize",
    color: "primary",
    pill: "",
    size: "big"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.__t("home.services.contact.button"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.__t("home.services.contact.button")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 49 34.708"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M16.333 0H8.167A8.167 8.167 0 0 0 0 8.167v8.167a4.083 4.083 0 0 0 4.083 4.083H16.15A12.262 12.262 0 0 1 4.083 30.625a2.042 2.042 0 1 0 0 4.083 16.352 16.352 0 0 0 16.334-16.333V4.083A4.083 4.083 0 0 0 16.333 0ZM44.916 0H36.75a8.167 8.167 0 0 0-8.167 8.167v8.167a4.083 4.083 0 0 0 4.083 4.083h12.067a12.262 12.262 0 0 1-12.067 10.208 2.042 2.042 0 1 0 0 4.083A16.352 16.352 0 0 0 49 18.375V4.083A4.083 4.083 0 0 0 44.916 0Z" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const SvgQuote = { render };
const _sfc_main$1 = {
  name: "Testimonials",
  components: { Rating, Heading, SvgQuote, Swiper, SwiperSlide },
  data() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="bullet ' + className + '"></div>';
        }
      },
      modules: [Pagination],
      testimonials: [
        {
          name: "Luc W.",
          created_at: "12 juni 2022",
          image: "testimonials/luc.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. In condimentum mollis suscipit. Cras vel orci eros. "
        },
        {
          name: "Luc W.",
          created_at: "12 juni 2022",
          image: "testimonials/luc.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. In condimentum mollis suscipit. Cras vel orci eros. "
        },
        {
          name: "Luc W.",
          created_at: "12 juni 2022",
          image: "testimonials/luc.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. In condimentum mollis suscipit. Cras vel orci eros. "
        },
        {
          name: "Luc W.",
          created_at: "12 juni 2022",
          image: "testimonials/luc.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae fermentum dui. In condimentum mollis suscipit. Cras vel orci eros. "
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_heading = resolveComponent("heading");
  const _component_rating = resolveComponent("rating");
  const _component_svg_quote = resolveComponent("svg-quote");
  const _component_Swiper = resolveComponent("Swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials" }, _attrs))}><div class="container container--xl">`);
  _push(ssrRenderComponent(_component_heading, {
    value: _ctx.__t("home.testimonials.title"),
    "sub-title": _ctx.__t("home.testimonials.subtitle"),
    style: { "text-align": "center" },
    center: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_rating, null, null, _parent));
  _push(`<div class="testimonial-list desktop"><!--[-->`);
  ssrRenderList($data.testimonials, (testimonial, i) => {
    _push(`<div class="testimonial"><p>${testimonial.text}</p><div class="writer"><div class="avatar"><img${ssrRenderAttr("src", _ctx.imagePath(testimonial.image))} alt="testimonial avatar"></div><div class="content"><span class="name">${ssrInterpolate(testimonial.name)}</span><span class="date">${ssrInterpolate(testimonial.created_at)}</span></div><div class="quote">`);
    _push(ssrRenderComponent(_component_svg_quote, null, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div class="testimonial-list animate-gallery tablet">`);
  _push(ssrRenderComponent(_component_Swiper, {
    "slides-per-view": 2,
    "space-between": 5,
    direction: "horizontal",
    pagination: $data.pagination,
    modules: $data.modules,
    ref: "gallerySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonials, (testimonial, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: `testimonial_${i}`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial"${_scopeId2}><p${_scopeId2}>${testimonial.text}</p><div class="writer"${_scopeId2}><div class="avatar"${_scopeId2}><img${ssrRenderAttr("src", _ctx.imagePath(testimonial.image))} alt="testimonial avatar"${_scopeId2}></div><div class="content"${_scopeId2}><span class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</span><span class="date"${_scopeId2}>${ssrInterpolate(testimonial.created_at)}</span></div><div class="quote"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_svg_quote, null, null, _parent3, _scopeId2));
                _push3(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial" }, [
                    createVNode("p", {
                      innerHTML: testimonial.text
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", { class: "writer" }, [
                      createVNode("div", { class: "avatar" }, [
                        createVNode("img", {
                          src: _ctx.imagePath(testimonial.image),
                          alt: "testimonial avatar"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "content" }, [
                        createVNode("span", { class: "name" }, toDisplayString(testimonial.name), 1),
                        createVNode("span", { class: "date" }, toDisplayString(testimonial.created_at), 1)
                      ]),
                      createVNode("div", { class: "quote" }, [
                        createVNode(_component_svg_quote)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonials, (testimonial, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: `testimonial_${i}`
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial" }, [
                  createVNode("p", {
                    innerHTML: testimonial.text
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", { class: "writer" }, [
                    createVNode("div", { class: "avatar" }, [
                      createVNode("img", {
                        src: _ctx.imagePath(testimonial.image),
                        alt: "testimonial avatar"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "content" }, [
                      createVNode("span", { class: "name" }, toDisplayString(testimonial.name), 1),
                      createVNode("span", { class: "date" }, toDisplayString(testimonial.created_at), 1)
                    ]),
                    createVNode("div", { class: "quote" }, [
                      createVNode(_component_svg_quote)
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="testimonial-list animate-gallery mobile">`);
  _push(ssrRenderComponent(_component_Swiper, {
    "slides-per-view": 1,
    "space-between": 5,
    direction: "horizontal",
    pagination: $data.pagination,
    modules: $data.modules,
    ref: "gallerySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonials, (testimonial, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: `testimonial_${i}`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial"${_scopeId2}><p${_scopeId2}>${testimonial.text}</p><div class="writer"${_scopeId2}><div class="avatar"${_scopeId2}><img${ssrRenderAttr("src", _ctx.imagePath(testimonial.image))} alt="testimonial avatar"${_scopeId2}></div><div class="content"${_scopeId2}><span class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</span><span class="date"${_scopeId2}>${ssrInterpolate(testimonial.created_at)}</span></div><div class="quote"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_svg_quote, null, null, _parent3, _scopeId2));
                _push3(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial" }, [
                    createVNode("p", {
                      innerHTML: testimonial.text
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", { class: "writer" }, [
                      createVNode("div", { class: "avatar" }, [
                        createVNode("img", {
                          src: _ctx.imagePath(testimonial.image),
                          alt: "testimonial avatar"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "content" }, [
                        createVNode("span", { class: "name" }, toDisplayString(testimonial.name), 1),
                        createVNode("span", { class: "date" }, toDisplayString(testimonial.created_at), 1)
                      ]),
                      createVNode("div", { class: "quote" }, [
                        createVNode(_component_svg_quote)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonials, (testimonial, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: `testimonial_${i}`
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial" }, [
                  createVNode("p", {
                    innerHTML: testimonial.text
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", { class: "writer" }, [
                    createVNode("div", { class: "avatar" }, [
                      createVNode("img", {
                        src: _ctx.imagePath(testimonial.image),
                        alt: "testimonial avatar"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "content" }, [
                      createVNode("span", { class: "name" }, toDisplayString(testimonial.name), 1),
                      createVNode("span", { class: "date" }, toDisplayString(testimonial.created_at), 1)
                    ]),
                    createVNode("div", { class: "quote" }, [
                      createVNode(_component_svg_quote)
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sections/home/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Home",
  components: {
    BottomCta,
    Testimonials,
    Procedure,
    Mission,
    Benefits,
    Seo,
    Layout,
    Banner,
    Head,
    Services
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_seo = resolveComponent("seo");
  const _component_Layout = resolveComponent("Layout");
  const _component_banner = resolveComponent("banner");
  const _component_benefits = resolveComponent("benefits");
  const _component_mission = resolveComponent("mission");
  const _component_procedure = resolveComponent("procedure");
  const _component_services = resolveComponent("services");
  const _component_testimonials = resolveComponent("testimonials");
  const _component_bottom_cta = resolveComponent("bottom-cta");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_seo, {
    meta: _ctx.$page.props.meta
  }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_banner, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_benefits, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_mission, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_procedure, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_services, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_testimonials, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_bottom_cta, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_banner),
          createVNode(_component_benefits),
          createVNode(_component_mission),
          createVNode(_component_procedure),
          createVNode(_component_services),
          createVNode(_component_testimonials),
          createVNode(_component_bottom_cta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
