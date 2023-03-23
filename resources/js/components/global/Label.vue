<template>
    <div class="label" :class="`status-${status}`">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "Label",
    props: {
        status: {type: String, required: false, default: "default"}
    }
}
</script>

<style lang="scss">
.label {
    width: max-content;
    padding: 0 var(--margin-s);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 90rem;
    height: 3rem;
    font-size: 1.4rem;
    background-color: var(--color-grey);
    color: var(--color-text-200);

    &.status-default{
        background-color: var(--color-grey);
        color: var(--color-text-200);
    }

    &.status-in_progress {
        background-color: var(--color-orange-200);
        color: var(--color-orange);
    }

    &.status-confirmed {
        background-color: var(--color-green-200);
        color: var(--color-green);
    }

    &.status-canceled, .status-removed {
        background-color: var(--color-red-200);
        color: var(--color-red);
    }

}
</style>
