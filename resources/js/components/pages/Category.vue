<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('app.dashboard.title')">
        <div class="d-flex">
            <Link :href="route('dashboard')" class="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.721 14.765">
                    <g transform="translate(109.419) rotate(90)">
                        <g  transform="translate(0 100.698)">
                            <path  d="M14.529,101.427l-.484-.487a.81.81,0,0,0-1.142,0l-5.517,5.517-5.524-5.524a.81.81,0,0,0-1.142,0l-.484.484a.808.808,0,0,0,0,1.142l6.576,6.6a.826.826,0,0,0,.573.259h0a.825.825,0,0,0,.571-.259l6.57-6.582a.816.816,0,0,0,.236-.577A.808.808,0,0,0,14.529,101.427Z" transform="translate(0 -100.698)" fill="rgba(74,79,111,0.29)"/>
                        </g>
                    </g>
                </svg>

            </Link>
            <div class="progress">
                <donut-chart :color="category.color" :size="100" :percentage="category.progress.percentage" />
                <h1>{{ category.title }}</h1>
            </div>
        </div>



        <ul class="tasks" v-if="tasks">
            <li
                class="task"
                :class="{active : task.done}"
                v-for="(task, i) in tasks"
                :key="`task_${i}`"
                @click="toggleTask(task.id)"
            >
                <button class="check squircle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.908 24">
                        <path d="M11.835,23.944a1.577,1.577,0,0,1-2.231,0L.694,15.032a2.366,2.366,0,0,1,0-3.347l1.116-1.116a2.366,2.366,0,0,1,3.347,0l5.563,5.563L25.752,1.1a2.366,2.366,0,0,1,3.347,0l1.116,1.116a2.366,2.366,0,0,1,0,3.347Zm0,0" transform="translate(0 -0.406)" />
                    </svg>
                </button>

                <div class="content">
                    <h2>{{ task.title }}</h2>
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
            category: this.$page.props.category,
            tasks : []
        }
    },
    mounted() {
        this.getTasks()
    },
    methods: {
        async toggleTask(id) {
            axios.post(this.route('task.update'), {
                'task_id': id
            }).then((resp) => {
                this.getTasks();
                this.$showToast(this.__t('app.task-updated'), 'success');
            })
        },
        async getTasks() {
            const id = this.$page.props.category.id;

            axios.get(this.route('task.index', id)).then((resp) => {
                this.tasks = resp.data.tasks;
                this.category = resp.data.category;
            })
        }
    }
}
</script>

<style lang="scss">
a.back-button {
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
div.progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--margin-l) var(--margin-m);

    h1 {
        margin-top: var(--margin-m);
        padding: 0;
    }
}
.tasks {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: var(--margin-l);

    .task {
        height: 9.8rem;
        border-bottom: 1px solid var(--color-grey-300);
        width: 100%;
        padding: var(--margin-xs);
        display: flex;
        justify-content: left;
        align-items: center;
        transition: var(--effect);

        button.check {
            width: 7.2rem;
            height: 7.2rem;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-input);
            aspect-ratio: 1 / 1;
            background-color: var(--color-grey-100);
            cursor: pointer;
            transition: var(--effect);

            svg {
                fill: #D0D1D9;
                width: 3rem;
                height: 3rem;
            }

            &:hover {
                scale: 1.05;
            }
        }

        div.content {
            padding-left: var(--margin-m);

            h2 {
                font-size: 1.6rem;
                font-weight: 500;
                color: var(--color-grey-500);
            }
        }

        &.active {
            div.content h2 {
                color: var(--color-text);
            }

            button.check {
                background-color: var(--color-green-200);
                svg {
                    fill: var(--color-green);
                }
            }
        }

        &:hover {
            background-color: rgba(62, 178, 115, 0.01);
            cursor: pointer;

            button.check {
                scale: 1.05;
            }
        }

        &:active {
            button.check {
                scale: 0.95;
            }
        }

    }
}
</style>
