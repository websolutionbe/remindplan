<template>
    <div class="field" :class="{info: info}">
        <svg-info v-if="info" />
        <slot />
    </div>
</template>

<script>
import {SvgInfo} from "@/svg";

export default {
    name: "Field",
    props: {
        info: {type: Boolean, required : false, default: false}
    },
    components: {SvgInfo},
}
</script>

<style lang="scss">
.field {
    padding: var(--margin-m);
    border-radius: var(--radius-panel);
    border: 1px solid var(--color-border);
    display: flex;

    font-size: 1.4rem;
    line-height: 2.3rem;
    color: var(--color-text-200);
}

.field.info {
    background-color: var(--color-background);
    flex-wrap: wrap;

    svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--color-text-200);
        margin-right: var(--margin-s);
        margin-top: 0.4rem
    }

    div {
        width: calc(100% - 2.85rem);
    }
}
</style>
