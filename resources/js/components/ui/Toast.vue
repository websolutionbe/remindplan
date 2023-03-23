<template>
    <ui-toast v-bind="$attrs" :timeout="1500" />
</template>

<script>
import {Toast as UiToast} from "@websolutionbe/ui-library/dist/index.mjs";

export default {
    name: "Toast",
    components: {
        UiToast
    }
}
</script>

<style lang="scss">
.toast {
    margin: 0;
    max-width: 100%;
    border-radius: 0;
    height: 4rem;
    z-index: 99999;
    top: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    background-color: var(--color-green);
    pointer-events: none;

    div.content {
        width: 100%;
        h2 {
            color: #fff;
        }
    }
}
</style>
