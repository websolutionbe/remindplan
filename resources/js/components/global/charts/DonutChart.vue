<template>
    <div class="donut" :class="[color, {zero: percentage === 0}]">
        <circle-progress
            :size="size"
            empty-color="#fff"
            :border-width="6"
            :border-bg-width="6"
            :percent="percentage"
            show-percent
        />
    </div>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
    name: 'DonutChart',
    components: {
        CircleProgress
    },
    props: {
        percentage: {type: Number, required: true},
        size: {type: Number, required : false, default: 80},
        color: {type: String, required: false, default: "green"},
    },
    data() {
        return {}
    },
    beforeMount() {

    }
}
</script>

<style lang="scss">
.donut {

    svg circle:first-of-type {
        stroke: rgba(255, 255, 255, 0.4);
    }

    span.current-counter::after {
        content: "%"
    }

    &.green {
        span.current-counter {
            color: var(--color-green);
        }

        svg circle:last-of-type {
            stroke: var(--color-green);
        }
    }

    &.blue {
        span.current-counter {
            color: var(--color-blue);
        }

        svg circle:last-of-type {
            stroke: var(--color-purple);
        }
    }

    &.red {
        span.current-counter {
            color: var(--color-red);
        }

        svg circle:last-of-type {
            stroke: var(--color-red);
        }
    }

    &.yellow {
        span.current-counter {
            color: var(--color-orange);
        }

        svg circle:last-of-type {
            stroke: var(--color-orange);
        }
    }

    &.zero {
        span.current-counter {
            color: var(--color-text);
            opacity: 0.5;
        }
    }

}

</style>
