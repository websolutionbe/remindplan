<template>
    <component :is="icon"/>
</template>

<script>
export default {
    name: "Icon",
    props: {
        path: { type: String, required: true }
    },
    data(){
        return {
            icon : () => import(this.path)
        }
    }
}
</script>
