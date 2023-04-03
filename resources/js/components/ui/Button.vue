<template>
    <ui-button
        class="btn--theme"
        :v-bind="props"
        @click="$emit('click')"
    >
        <svg class="corner-left" width="26" height="57" viewBox="0 0 26 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 0C13.7435 0 7.61522 0 3.80761 3.80761C0 7.61522 0 13.7435 0 26V31C0 43.2565 0 49.3848 3.80761 53.1924C7.61522 57 13.7435 57 26 57L26 0Z"/>
        </svg>

        <slot />

        <svg class="corner-right" width="26" height="57" viewBox="0 0 26 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 0C13.7435 0 7.61522 0 3.80761 3.80761C0 7.61522 0 13.7435 0 26V31C0 43.2565 0 49.3848 3.80761 53.1924C7.61522 57 13.7435 57 26 57L26 0Z"/>
        </svg>
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
    border-radius: 0;
    height: 5rem;
    font-size: 1.6rem;
    width: 100%;
    position: relative;

    &:hover {
        transform: scale(1.02);
        border: 1px solid var(--color-primary-500);
        background-color: var(--color-primary-500);

        svg.corner-right,  svg.corner-left {

            fill: var(--color-primary-500);
        }
    }

    &.disabled {
        opacity: 0;
        background-color: var(--color-grey);
        pointer-events: none;
    }

    svg.corner-left {
        transition: var(--effect);
        color: var(--color-primary);
        height: 5rem;
        width: auto;
        position: absolute;
        top: -1px;
        margin-right: auto;
        left: -2rem;
    }

    svg.corner-right {
        transition: var(--effect);
        color: var(--color-primary);
        height: 5rem;
        width: auto;
        position: absolute;
        top: -1px;
        margin-right: auto;
        right: -2rem;
        transform: rotate(180deg);
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
