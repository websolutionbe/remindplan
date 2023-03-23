<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('app.dashboard.title')">
        <h1>{{ __t('dashboard.title') }}</h1>

        <div class="categories" v-if="categories">
            <div
                class="category"
                :class="category.color"
                v-for="(category, i) in categories"
                :key="`cat_${i}`"
            >
                <Link :href="route('category', category.slug)">
                    <donut-chart :color="category.color" :percentage="category.progress.percentage" />
                    <span class="title">{{ category.title }}</span>
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
    name: "Dashboard",
    components: {
        Seo,
        DonutChart,
        Layout,
        Head,
        Link
    },
    data() {
        return {
            categories: []
        }
    },
    beforeMount() {
        this.categories = this.$page.props.categories;
        console.log(this.categories);
    },
}
</script>

<style lang="scss">
.categories {
    display: flex;
    padding: var(--margin-xs);
    padding-bottom: var(--margin-l);
    flex-wrap: wrap;

    .category {
        width: 50%;
        padding: var(--margin-xs);

        a {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            aspect-ratio: 1/1;
            border-radius: var(--radius-panel);
            background-color: var(--color-green-200);
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
                background-color: var(--color-green-200);
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
