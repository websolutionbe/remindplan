<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('app.dashboard.title')">
        <h1>{{ __t('group.title') }}</h1>

        <ul class="users">
            <li class="user" v-for="(user, i) in users" :key="`user_${i}`">
                <div class="icon" :class="user.color">
                    {{ user.first_name.slice(0,1) + user.last_name.slice(0,1) }}
                </div>
                <div class="content">
                    <span>{{ user.first_name }} {{ user.last_name }}</span>
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
            users: this.$page.props.users
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
.users {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: var(--margin-l);

    .user {
        height: 9.8rem;
        border-bottom: 1px solid var(--color-grey-300);
        width: 100%;
        padding: var(--margin-xs);
        display: flex;
        justify-content: left;
        align-items: center;
        transition: var(--effect);

        div.icon {
            width: 7.2rem;
            height: 7.2rem;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 99rem;
            aspect-ratio: 1 / 1;
            transition: var(--effect);

            font-size: 2.4rem;
            font-weight: 900;

            &.green {
                color: var(--color-green);
                background-color: var(--color-green-200);
            }

            &.blue {
                color: var(--color-purple);
                background-color: var(--color-purple-200);
            }

            &.red {
                color: var(--color-red);
                background-color: var(--color-red-200);
            }

            &.yellow {
                color: var(--color-orange);
                background-color: var(--color-orange-200);
            }
        }

        div.content {
            padding-left: var(--margin-m);
            span {
                font-size: 1.6rem;
                font-weight: 500;
                color: var(--color-text);
            }
        }
    }
}
</style>
