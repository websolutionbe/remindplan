<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('settings.title')">
        <h1>{{ __t('settings.title') }}</h1>

        <ul class="settings">
            <li class="setting" v-for="(setting, i) in settings" :key="`setting_${i}`">
                <div class="content">
                    <Link :href="setting.href">
                        <span>{{ setting.text }}</span>
                    </Link>
                </div>

            </li>
            <li class="setting">
                <div class="content">
                    <span class="logout" @click="logout">{{ __t('app.aside.logout') }}</span>
                    <form ref="logoutForm"
                          style="display: none"
                          method="POST"
                          :action="route('logout.post', {_token: $app.token })"/>
                </div>
            </li>
        </ul>
    </Layout>
</template>

<script>
import {Head} from '@inertiajs/inertia-vue3';
import Layout from "../layout/Layout.vue";
import Seo from "../utils/Seo.vue";
import {Link} from "@inertiajs/inertia-vue3";
import axios from "axios";
import DonutChart from "@/js/components/global/charts/DonutChart.vue";

export default {
    name: "Category",
    components: {
        DonutChart,
        Seo,
        Layout,
        Head,
        Link
    },
    data() {
        return {
            settings: [
                {
                    text: this.__t('settings.categories'),
                    href: this.route('settings.categories')
                }
            ]
        }
    },
    mounted() {

    },
    methods: {
        logout() {
            this.$refs.logoutForm.submit();
        },
    }
}
</script>

<style lang="scss">
.settings {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: var(--margin-l);

    .setting {
        height: 9.8rem;
        border-bottom: 1px solid var(--color-grey-300);
        width: 100%;
        padding: var(--margin-xs);
        display: flex;
        justify-content: left;
        align-items: center;
        transition: var(--effect);

        div.content {
            a {
                text-decoration: none;
            }

            padding-left: var(--margin-xs);
            span {
                font-size: 1.6rem;
                font-weight: 500;
                transition: var(--effect);
                cursor: pointer;
                color: var(--color-text);
            }

            &:hover {
                span {
                    color: var(--color-text-200);
                }
            }
        }
    }
}
</style>
