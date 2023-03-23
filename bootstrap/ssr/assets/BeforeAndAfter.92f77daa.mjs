import { _ as _export_sfc, S as Seo, L as Layout } from "./Layout.be0b1264.mjs";
import { P as PageBanner } from "./PageBanner.dee25053.mjs";
/* empty css                      */import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/inertia-vue3";
import "@websolutionbe/ui-library/dist/index.mjs";
import "moment";
import "./Heading.70738e6f.mjs";
const _sfc_main = {
  name: "BeforeAndAfter",
  components: { Seo, PageBanner, Layout, Swiper, SwiperSlide },
  data() {
    return {
      clients: [
        {
          beforePath: "before-and-after/1/1_before.jpg",
          afterPath1: "before-and-after/1/1_after_1.jpg",
          afterPath2: "before-and-after/1/1_after_2.jpg"
        },
        {
          beforePath: "before-and-after/2/2_before.jpg",
          afterPath1: "before-and-after/2/2_after_1.jpg",
          afterPath2: "before-and-after/2/2_after_2.jpg"
        },
        {
          beforePath: "before-and-after/3/3_before.jpg",
          afterPath1: "before-and-after/3/3_after_1.jpg",
          afterPath2: "before-and-after/3/3_after_2.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_seo = resolveComponent("seo");
  const _component_Layout = resolveComponent("Layout");
  const _component_PageBanner = resolveComponent("PageBanner");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_seo, {
    meta: _ctx.$page.props.meta
  }, null, _parent));
  _push(ssrRenderComponent(_component_Layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PageBanner, {
          title: _ctx.__t("before-and-after.title"),
          subtitle: _ctx.__t("before-and-after.subtitle")
        }, null, _parent2, _scopeId));
        _push2(`<section class="before-and-after-content"${_scopeId}><div class="container" style="${ssrRenderStyle({ "overflow": "hidden" })}"${_scopeId}><div class="clients mobile"${_scopeId}><!--[-->`);
        ssrRenderList($data.clients, (client, i) => {
          _push2(`<div class="client"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_swiper, {
            "slides-per-view": 1.5,
            style: { "overflow": "visible" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_swiper_slide, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (i === 0) {
                        _push4(`<span${_scopeId3}>${_ctx.__t("before-and-after.before")}</span>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`<div class="img"${_scopeId3}><picture${_scopeId3}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.beforePath))}${_scopeId3}><img loading="lazy"${ssrRenderAttr("src", _ctx.imagePath(client.beforePath))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId3}></picture></div>`);
                    } else {
                      return [
                        i === 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          innerHTML: _ctx.__t("before-and-after.before")
                        }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                        createVNode("div", { class: "img" }, [
                          createVNode("picture", null, [
                            createVNode("source", {
                              srcset: _ctx.imagePath(client.beforePath)
                            }, null, 8, ["srcset"]),
                            createVNode("img", {
                              loading: "lazy",
                              src: _ctx.imagePath(client.beforePath),
                              alt: _ctx.__t("before-and-after.image-alt-text")
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_swiper_slide, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (i === 0) {
                        _push4(`<span${_scopeId3}>${_ctx.__t("before-and-after.after")}</span>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`<div class="img"${_scopeId3}><picture${_scopeId3}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.afterPath1))}${_scopeId3}><img loading="lazy"${ssrRenderAttr("src", _ctx.imagePath(client.afterPath1))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId3}></picture></div>`);
                    } else {
                      return [
                        i === 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          innerHTML: _ctx.__t("before-and-after.after")
                        }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                        createVNode("div", { class: "img" }, [
                          createVNode("picture", null, [
                            createVNode("source", {
                              srcset: _ctx.imagePath(client.afterPath1)
                            }, null, 8, ["srcset"]),
                            createVNode("img", {
                              loading: "lazy",
                              src: _ctx.imagePath(client.afterPath1),
                              alt: _ctx.__t("before-and-after.image-alt-text")
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_swiper_slide, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (i === 0) {
                        _push4(`<span${_scopeId3}>${_ctx.__t("before-and-after.after")}</span>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`<div class="img"${_scopeId3}><picture${_scopeId3}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.afterPath2))}${_scopeId3}><img loading="lazy"${ssrRenderAttr("src", _ctx.imagePath(client.afterPath2))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId3}></picture></div>`);
                    } else {
                      return [
                        i === 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          innerHTML: _ctx.__t("before-and-after.after")
                        }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                        createVNode("div", { class: "img" }, [
                          createVNode("picture", null, [
                            createVNode("source", {
                              srcset: _ctx.imagePath(client.afterPath2)
                            }, null, 8, ["srcset"]),
                            createVNode("img", {
                              loading: "lazy",
                              src: _ctx.imagePath(client.afterPath2),
                              alt: _ctx.__t("before-and-after.image-alt-text")
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_swiper_slide, null, {
                    default: withCtx(() => [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.before")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.beforePath)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            loading: "lazy",
                            src: _ctx.imagePath(client.beforePath),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_swiper_slide, null, {
                    default: withCtx(() => [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.after")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.afterPath1)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            loading: "lazy",
                            src: _ctx.imagePath(client.afterPath1),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_swiper_slide, null, {
                    default: withCtx(() => [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.after")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.afterPath2)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            loading: "lazy",
                            src: _ctx.imagePath(client.afterPath2),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="clients desktop"${_scopeId}><!--[-->`);
        ssrRenderList($data.clients, (client, i) => {
          _push2(`<div class="client"${_scopeId}><div${_scopeId}>`);
          if (i === 0) {
            _push2(`<span${_scopeId}>${_ctx.__t("before-and-after.before")}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="img"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.beforePath))}${_scopeId}><img${ssrRenderAttr("src", _ctx.imagePath(client.beforePath))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId}></picture></div></div><div${_scopeId}>`);
          if (i === 0) {
            _push2(`<span${_scopeId}>${_ctx.__t("before-and-after.after")}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="img"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.afterPath1))}${_scopeId}><img${ssrRenderAttr("src", _ctx.imagePath(client.afterPath1))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId}></picture></div></div><div${_scopeId}>`);
          if (i === 0) {
            _push2(`<span${_scopeId}>${_ctx.__t("before-and-after.after")}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="img"${_scopeId}><picture${_scopeId}><source${ssrRenderAttr("srcset", _ctx.imagePath(client.afterPath2))}${_scopeId}><img${ssrRenderAttr("src", _ctx.imagePath(client.afterPath2))}${ssrRenderAttr("alt", _ctx.__t("before-and-after.image-alt-text"))}${_scopeId}></picture></div></div></div>`);
        });
        _push2(`<!--]--></div></div></section>`);
      } else {
        return [
          createVNode(_component_PageBanner, {
            title: _ctx.__t("before-and-after.title"),
            subtitle: _ctx.__t("before-and-after.subtitle")
          }, null, 8, ["title", "subtitle"]),
          createVNode("section", { class: "before-and-after-content" }, [
            createVNode("div", {
              class: "container",
              style: { "overflow": "hidden" }
            }, [
              createVNode("div", { class: "clients mobile" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.clients, (client, i) => {
                  return openBlock(), createBlock("div", {
                    class: "client",
                    key: `client_${i}`
                  }, [
                    createVNode(_component_swiper, {
                      "slides-per-view": 1.5,
                      style: { "overflow": "visible" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_swiper_slide, null, {
                          default: withCtx(() => [
                            i === 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              innerHTML: _ctx.__t("before-and-after.before")
                            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                            createVNode("div", { class: "img" }, [
                              createVNode("picture", null, [
                                createVNode("source", {
                                  srcset: _ctx.imagePath(client.beforePath)
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  loading: "lazy",
                                  src: _ctx.imagePath(client.beforePath),
                                  alt: _ctx.__t("before-and-after.image-alt-text")
                                }, null, 8, ["src", "alt"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_swiper_slide, null, {
                          default: withCtx(() => [
                            i === 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              innerHTML: _ctx.__t("before-and-after.after")
                            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                            createVNode("div", { class: "img" }, [
                              createVNode("picture", null, [
                                createVNode("source", {
                                  srcset: _ctx.imagePath(client.afterPath1)
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  loading: "lazy",
                                  src: _ctx.imagePath(client.afterPath1),
                                  alt: _ctx.__t("before-and-after.image-alt-text")
                                }, null, 8, ["src", "alt"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_swiper_slide, null, {
                          default: withCtx(() => [
                            i === 0 ? (openBlock(), createBlock("span", {
                              key: 0,
                              innerHTML: _ctx.__t("before-and-after.after")
                            }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                            createVNode("div", { class: "img" }, [
                              createVNode("picture", null, [
                                createVNode("source", {
                                  srcset: _ctx.imagePath(client.afterPath2)
                                }, null, 8, ["srcset"]),
                                createVNode("img", {
                                  loading: "lazy",
                                  src: _ctx.imagePath(client.afterPath2),
                                  alt: _ctx.__t("before-and-after.image-alt-text")
                                }, null, 8, ["src", "alt"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["slides-per-view"])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "clients desktop" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.clients, (client, i) => {
                  return openBlock(), createBlock("div", {
                    class: "client",
                    key: `client_${i}`
                  }, [
                    createVNode("div", null, [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.before")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.beforePath)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            src: _ctx.imagePath(client.beforePath),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.after")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.afterPath1)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            src: _ctx.imagePath(client.afterPath1),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      i === 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        innerHTML: _ctx.__t("before-and-after.after")
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                      createVNode("div", { class: "img" }, [
                        createVNode("picture", null, [
                          createVNode("source", {
                            srcset: _ctx.imagePath(client.afterPath2)
                          }, null, 8, ["srcset"]),
                          createVNode("img", {
                            src: _ctx.imagePath(client.afterPath2),
                            alt: _ctx.__t("before-and-after.image-alt-text")
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/pages/BeforeAndAfter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BeforeAndAfter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BeforeAndAfter as default
};
