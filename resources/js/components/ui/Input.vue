<template>
    <ui-input
        class="input--theme"
    />
</template>

<script>
import {UiInput} from "@websolutionbe/ui-library/dist/index.mjs";

export default {
    name: "Input",
    components: {
        UiInput
    },
}
</script>

<style lang="scss">
div.input-field.input--theme {
    margin: 0 0 var(--margin-m) 0;
    label {
        color: var(--color-text);
        font-size: 1.4rem;
        margin-bottom: var(--margin-xs);
    }

    div.input-container {
        input {
            border-color: var(--color-grey-300);
            background-color: var(--color-grey-100);
            height: 6rem;
            -webkit-appearance: none;
            border-radius: var(--radius-input);


            &::placeholder {
                color: var(--color-text-100);
            }

            &:active, &:hover {
                border: 1px solid var(--color-primary);
            }
        }
    }
}

</style>
