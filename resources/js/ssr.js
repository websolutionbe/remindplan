import {createSSRApp, h} from "vue";
import {renderToString} from "@vue/server-renderer";
import {createInertiaApp, Link, Head, usePage} from "@inertiajs/inertia-vue3";
import createServer from "@inertiajs/server";

import {ZiggyVue} from "./ziggyVue";
import {Ziggy} from "./ziggy";

import "@websolutionbe/ui-library/dist/style.css";
import axios from "axios";

import route from 'ziggy';
import * as Sentry from "@sentry/vue";


createServer.default((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: async (name) => {
            const pages = import.meta.glob('./components/pages/*.vue');

            return (await pages[`./components/pages/${name}.vue`]()).default;
        },
        setup({app, props, plugin}) {
            const ssrApp = createSSRApp({
                render: () => h(app, props),
            })
                .use(plugin)
                .use(ZiggyVue, Ziggy)
                .component("Link", Link)
                .component("Head", Head)
                .mixin({
                    methods: {
                        __t: function(key) {
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
                        createTranslation: async function(key) {
                            await axios.post('async/translation', {key}).then(({data}) => {
                                return data.key;
                            })
                        },
                        imagePath: function(path) {
                            return `/images/${path}`
                        },
                        $animateText(element, trigger, delay, duration){
                        },

                        $animateFade(element, trigger, delay){

                        },
                        route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
                    }
                })

            Sentry.init({
                app: ssrApp,
                dsn: process.env.SENTRY_LARAVEL_DSN
            });

            return ssrApp;
        },
    })
,  Number(process.env.INERTIAJS_SSR_PORT));
