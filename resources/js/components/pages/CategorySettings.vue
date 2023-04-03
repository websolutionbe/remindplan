<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('settings.title')">
        <Link :href="route('settings')" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.721 14.765">
                <g transform="translate(109.419) rotate(90)">
                    <g  transform="translate(0 100.698)">
                        <path  d="M14.529,101.427l-.484-.487a.81.81,0,0,0-1.142,0l-5.517,5.517-5.524-5.524a.81.81,0,0,0-1.142,0l-.484.484a.808.808,0,0,0,0,1.142l6.576,6.6a.826.826,0,0,0,.573.259h0a.825.825,0,0,0,.571-.259l6.57-6.582a.816.816,0,0,0,.236-.577A.808.808,0,0,0,14.529,101.427Z" transform="translate(0 -100.698)" fill="rgba(74,79,111,0.29)"/>
                    </g>
                </g>
            </svg>

        </Link>

        <h1>{{ __t('settings.title') }}</h1>

        <div class="categories">
            <div
                class="category"
                :class="category.color"
                v-for="(category,i) in categories"
                :key="`cat_${i}`">
                <Link class="squircle" :href="route('settings.category', category.slug)">
                    {{ category.title }}
                </Link>

            </div>
        </div>

    </Layout>
</template>
<script>
import {Head} from '@inertiajs/inertia-vue3';
import Layout from "../layout/Layout.vue";
import Seo from "../utils/Seo.vue";
import {Link} from "@inertiajs/inertia-vue3";
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
            categories: this.$page.props.categories
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
a.back-button {
    position: absolute;
    top: var(--margin-l);
    left: var(--margin-s);
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-input);
    transition: var(--effect);
    cursor: pointer;
    svg {
        width: 2rem;
        height: 2rem;
    }

    &:hover {
        scale: 1.05;
        background-color: var(--color-grey-100);
    }

    &:active {
        scale: 0.95;
    }
}
.categories {
    display: flex;
    padding: var(--margin-xs);
    padding-bottom: var(--margin-l);
    flex-wrap: wrap;

    .category {
        width: 50%;
        padding: var(--margin-xs);

        a {
            margin: 1rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            aspect-ratio: 1/1;
            border-radius: var(--radius-panel);
            background-color: var(--color-primary-200);
            text-decoration: none;
            font-size: 1.4rem;
            font-weight: 800;
            text-align: center;
            color: var(--color-text);
            transition: var(--effect);

            &:hover {
                border-radius: 2rem;
                scale: 1.05;
            }

            &:active {
                border-radius: 2rem;
                scale: 0.95;
            }

            &.green {

            }
        }

        &.blue {
            a {
                background-color: var(--color-purple-200);
            }
        }

        &.red {
            a {
                background-color: var(--color-red-200);
            }
        }

        &.yellow {
            a {
                background-color: var(--color-orange-200);
            }
        }

        span.title {
            margin-top: var(--margin-s);
        }
    }
}
</style>
