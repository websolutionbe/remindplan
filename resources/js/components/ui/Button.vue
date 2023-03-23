<template>
    <ui-button
        class="btn--theme"
        :v-bind="props"
        @click="$emit('click')"
    >
        <slot />
    </ui-button>
</template>

<script>
import {UiButton} from "@websolutionbe/ui-library/dist/index.mjs";

export default {
    name: "Button",
    components: {
        UiButton
    },
    emits: ["click"],
    props: {
        disabled: { type : Boolean , required : false, default: null },
        el: { type : String , required : false, default: "button" },
        outlined: { type : Boolean, required : false, default: false },
        color: { type : String, required : false, default: "primary" },
        fullWidth: { type : Boolean, required : false, default: true },
        href: { type : String, required : false, default: null },
        targetBlank: { type : Boolean, required : false, default: null },
        submit: { type : Boolean, required : false, default: null },
        loading: {type : Boolean, required : false, default: null },
        icon: { type : String, required : false, default: null },
        iconPosition: { type : String, required : false, default: "left" },
        reset: { type : Boolean, required : false, default: null },
        size: { type: String, required : false, default: 'medium'},
        pill : { type: Boolean, required : false, default : false }
    }
}
</script>

<style lang="scss">
.btn--theme.btn.btn--color-primary {
    border-radius: var(--radius-button);
    height: 5rem;
    font-size: 1.6rem;
    width: 100%;

    &:hover {
        transform: scale(1.02);
        border: 1px solid var(--color-primary-500);
        background-color: var(--color-primary-500);
    }

    &.disabled {
        opacity: 0;
        background-color: var(--color-grey);
        pointer-events: none;
    }
}

.btn--theme.btn.btn--color-primary.logout {
    background-color: var(--color-secondary-200);
    border-color: var(--color-secondary-200);
    color: var(--color-text-100);

    &:hover {
        border-color: #fff;
        color: #fff;
    }
}

.btn--theme.btn--color-primary.outlined {
    background-color: transparent;
    border-color: var(--color-text-200);
    color: var(--color-text-200);
}
</style>
