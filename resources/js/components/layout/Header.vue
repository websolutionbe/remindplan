<template>
    <header>
        <h1 v-if="title">{{ title }}</h1>

        <div class="actions">

        </div>
    </header>
</template>

<script>

export default {
    name: "Header",
    props: {
        title : {type: String, required: false, default : null }
    },
    data() {
        return {

        }
    },
    computed: {
        clientOnly() {
            return typeof window !== 'undefined';
        },
    },
    mounted() {
        //this.$animateFade('header', 'header');
    },
    components: {

    },
    methods: {

    }
}
</script>
