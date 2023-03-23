<template>
    <seo :meta="$page.props.meta"/>
    <Layout :title="__t('app.dashboard.title')">
        <Link :href="route('settings.categories')" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.721 14.765">
                <g transform="translate(109.419) rotate(90)">
                    <g  transform="translate(0 100.698)">
                        <path  d="M14.529,101.427l-.484-.487a.81.81,0,0,0-1.142,0l-5.517,5.517-5.524-5.524a.81.81,0,0,0-1.142,0l-.484.484a.808.808,0,0,0,0,1.142l6.576,6.6a.826.826,0,0,0,.573.259h0a.825.825,0,0,0,.571-.259l6.57-6.582a.816.816,0,0,0,.236-.577A.808.808,0,0,0,14.529,101.427Z" transform="translate(0 -100.698)" fill="rgba(74,79,111,0.29)"/>
                    </g>
                </g>
            </svg>

        </Link>

        <h1>{{ category.title }}</h1>

        <ul class="tasks" v-if="tasks">
            <li
                class="task"
                v-for="(task, i) in tasks"
                :key="`task_${i}`"
            >
                <div class="content">
                    <h2>{{ task.title }}</h2>
                    <div class="actions">
                        <button @click="deleteTask(task.id)" class="action delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.154 21.113">
                                <g id="trash_7_" data-name="trash (7)" transform="translate(-48)">
                                    <path id="Path_8" data-name="Path 8" d="M63.5,2.639H59.876v-.66A1.982,1.982,0,0,0,57.9,0H55.258a1.982,1.982,0,0,0-1.979,1.979v.66H49.649A1.651,1.651,0,0,0,48,4.289V6.6a.66.66,0,0,0,.66.66h.361l.57,11.97a1.977,1.977,0,0,0,1.977,1.885H61.587a1.977,1.977,0,0,0,1.977-1.885l.57-11.97h.361a.66.66,0,0,0,.66-.66V4.289A1.651,1.651,0,0,0,63.5,2.639ZM54.6,1.979a.661.661,0,0,1,.66-.66H57.9a.661.661,0,0,1,.66.66v.66H54.6ZM49.32,4.289a.33.33,0,0,1,.33-.33H63.5a.33.33,0,0,1,.33.33V5.938H49.32ZM62.246,19.165a.659.659,0,0,1-.659.628H51.567a.659.659,0,0,1-.659-.628L50.341,7.258H62.813Z" fill="#fff"/>
                                    <path id="Path_9" data-name="Path 9" d="M240.66,217.9a.66.66,0,0,0,.66-.66V208.66a.66.66,0,1,0-1.32,0v8.577A.66.66,0,0,0,240.66,217.9Z" transform="translate(-184.083 -199.423)" fill="#fff"/>
                                    <path id="Path_10" data-name="Path 10" d="M320.66,217.9a.66.66,0,0,0,.66-.66V208.66a.66.66,0,1,0-1.32,0v8.577A.66.66,0,0,0,320.66,217.9Z" transform="translate(-260.784 -199.423)" fill="#fff"/>
                                    <path id="Path_11" data-name="Path 11" d="M160.66,217.9a.66.66,0,0,0,.66-.66V208.66a.66.66,0,1,0-1.32,0v8.577A.66.66,0,0,0,160.66,217.9Z" transform="translate(-107.382 -199.423)" fill="#fff"/>
                                </g>
                            </svg>

                        </button>
                    </div>
                </div>

            </li>
            <li class="task new-task" v-if="openNewTaskForm">
                <div class="content">
                    <Input :item="{
                            id: 'title',
                            type: 'email',
                            placeholder: this.__t('app.new-task'),
                            validation: ['required'],
                            value: null
                        }"
                           @setter="(val) => setValue(val)"
                    />
                    <div class="actions">
                        <button @click="createTask" class="action save" :class="{disabled: title === null || title === ''  }">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.523 19.523">
                                <path id="Path_7" data-name="Path 7" d="M16.025,0H2.288A2.29,2.29,0,0,0,0,2.288V17.235a2.29,2.29,0,0,0,2.288,2.288H17.235a2.29,2.29,0,0,0,2.288-2.288V3.5ZM5.986,1.525h4.537v2.9h1.525v-2.9h1.525v3.66a.763.763,0,0,1-.763.763H6.749a.763.763,0,0,1-.763-.763ZM15.1,18H4.461V11.287a.763.763,0,0,1,.763-.763h9.113a.763.763,0,0,1,.763.763Zm2.9-.763a.763.763,0,0,1-.763.763h-.61V11.287A2.29,2.29,0,0,0,14.337,9H5.224a2.29,2.29,0,0,0-2.288,2.288V18H2.288a.763.763,0,0,1-.763-.763V2.288a.763.763,0,0,1,.763-.763H4.461v3.66A2.29,2.29,0,0,0,6.749,7.473h6.063A2.29,2.29,0,0,0,15.1,5.186V1.525h.294l2.6,2.6Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </li>
        </ul>

        <div class="add">
            <Button @click="newTask">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.177,9.143H14.857V2.823a2.857,2.857,0,0,0-5.714,0V9.143H2.823a2.857,2.857,0,0,0,0,5.714H9.143v6.319a2.857,2.857,0,0,0,5.714,0V14.857h6.319a2.857,2.857,0,0,0,0-5.714Z" fill="#fff"/>
                </svg>

                {{ __t('app.add') }}
            </Button>
        </div>
    </Layout>
</template>

<script>
import {Head} from '@inertiajs/inertia-vue3';
import Layout from "../layout/Layout.vue";
import Seo from "../utils/Seo.vue";
import {Link} from "@inertiajs/inertia-vue3";
import axios from "axios";
import DonutChart from "@/js/components/global/charts/DonutChart.vue";
import Button from "@/js/components/ui/Button.vue";
import Input from "@/js/components/ui/Input.vue";

export default {
    name: "Category",
    components: {
        Input,
        Button,
        DonutChart,
        Seo,
        Layout,
        Head,
        Link
    },
    data() {
        return {
            category: this.$page.props.category,
            tasks : [],
            openNewTaskForm: false,
            title: null,
        }
    },
    mounted() {
        this.getTasks()
    },
    methods: {
        async getTasks() {
            const id = this.$page.props.category.id;

            await axios.get(this.route('task.index', id)).then((resp) => {
                this.tasks = resp.data.tasks;
                this.category = resp.data.category;
            })
        },
        newTask(){
            this.openNewTaskForm = true;
        },
        setValue(val){
            this.title = val;
        },
        async createTask()
        {
            await axios.post(this.route('task.create'),
                {
                    title: this.title,
                    category: this.category.id
                }).then(() => {
                this.getTasks();
                this.openNewTaskForm = false;
                this.$showToast(this.__t('app.task-created', 'success'));
            })
        },
        async deleteTask(id)
        {
            await axios.post(this.route('task.delete'), {id: id}).then(() => {
                this.getTasks();
                this.openNewTaskForm = false;
                this.$showToast(this.__t('app.task-removed', 'success'));
            })
        }
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

        &.new-task {
            height: auto;
            div.input-field {
                width: 100%;
                margin-bottom: 0;
            }
        }

        div.content {
            padding-left: var(--margin-xs);
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 {
                font-size: 1.6rem;
                font-weight: 500;
                color: var(--color-grey-500);
            }

            div.actions {
                display: flex;
                align-items: center;
                padding-left: var(--margin-s);

                button.action {
                    border: 0;
                    border-radius: 99rem;
                    width: 4.5rem;
                    height: 4.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    svg {
                        width: 2rem;
                        height: 2rem;
                    }

                    &:hover {
                        scale: 1.05;
                    }

                    &:active {
                        scale: 0.95;
                    }

                    &.save {
                        background-color: var(--color-green);
                    }

                    &.edit {
                        background-color: var(--color-orange);
                    }

                    &.delete {
                        background-color: var(--color-red);
                    }

                    &.disabled {
                        background-color: var(--color-grey);
                        pointer-events: none;
                        opacity: 0.7;
                    }
                }
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
        }

    }
}

.add {
    width: 100%;
    max-width: 22rem;
    margin: auto auto var(--margin-l);

    button {
        height: 72rem;
    }

    svg {
        width: 2rem;
        height: 2rem;
        margin-right: var(--margin-xs);
    }
}
</style>
