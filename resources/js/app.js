import {createApp, h} from "vue";
import {createInertiaApp, Link, Head, usePage} from "@inertiajs/inertia-vue3";

import {ZiggyVue} from "./ziggyVue";
import {Ziggy} from "./ziggy";
import {gsap} from "gsap";

import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import ScrollSmoother from "./gsap/ScrollSmoother";
import SplitText from "./gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("ScrollSmoother", ScrollSmoother);
gsap.core.globals("SplitText", SplitText);

import "@/images/icon.png";

import "@websolutionbe/ui-library/dist/style.css";
import axios from "axios";
import VueApexCharts from 'vue3-apexcharts';
import * as Sentry from "@sentry/browser";
import 'vite/modulepreload-polyfill';
import {Toast} from "@/js/components/ui";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./components/pages/*.vue');

        return (await pages[`./components/pages/${name}.vue`]()).default;
    },
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(VueApexCharts)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({
                computed: {
                  $app(){
                      return usePage().props.value
                  }
                },
                methods: {
                    __t: function (key) {
                        const translation = usePage().props.value.translations.find(translation => translation.key === key);
                        if (!translation) {
                            this.createTranslation(key);
                        } else {
                            const localeTranslation = translation['value_' + usePage().props.value.locale];

                            if (localeTranslation) {
                                return localeTranslation;
                            } else {
                                return key;
                            }
                        }
                    },
                    createTranslation: async function (key) {
                        await axios.post('async/translation', {key}).then(({data}) => {
                            return data.key;
                        })
                    },
                    imagePath: function (path) {
                        return `/images/${path}`
                    },
                    filePath: function (path) {
                        return `/files/${path}`
                    },
                    $showToast(text, status){
                        const toast = createApp({
                            setup () {
                                return () => h(Toast, {
                                    status : status,
                                    title : text,
                                    onClose: () => {
                                        toast.unmount();
                                    }
                                })
                            }
                        });

                        const popup = document.createElement('div');

                        document.body.appendChild(popup);

                        toast.mount(popup);

                        popup.remove();

                    },

                    $animateText(element, trigger, delay, duration){
                        const el = new SplitText(element, { type : "lines" });

                        gsap.from(el.lines, {
                            delay: delay,
                            duration: duration ? duration : 1.5,
                            opacity: 0,
                            x: 0,
                            y: 20,
                            ease: "power3.out",
                            stagger: 0.08,
                            scrollTrigger: {
                                trigger: trigger,
                                start: "top center",
                                end: "bottom top",
                            }
                        })
                    },

                    $animateFade(element, trigger, delay){
                        gsap.from(element, {
                            delay: delay,
                            duration: 2,
                            opacity: 0,
                            x: 0,
                            y: "-30",
                            ease: "power3.out",
                            stagger: 0.2,
                            scrollTrigger: {
                                trigger: trigger,
                                start: "-=600",
                                end: "bottom top",
                            }
                        })
                    },
                }
            })
            .mount(el);

        Sentry.init({
            app,
            dsn: process.env.SENTRY_LARAVEL_DSN
        });
    },
});
