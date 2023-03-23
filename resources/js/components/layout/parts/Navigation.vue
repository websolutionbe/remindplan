<template>
    <nav class="navigation">
        <div class="navigation">
            <Link :href="route('dashboard')" :class="{'active' : route().current('dashboard')}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="21.977" viewBox="0 0 24.001 21.977">
                    <path id="list-check"
                          d="M4,6a2.982,2.982,0,0,1-2.122-.879L.334,3.747A1,1,0,0,1,1.666,2.253L3.251,3.667a1,1,0,0,0,1.456.04L8.311.276A1,1,0,0,1,9.689,1.724L6.1,5.138A2.964,2.964,0,0,1,4,6ZM24,4a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,4ZM6.1,13.138,9.689,9.724A1,1,0,1,0,8.311,8.276l-3.6,3.431a1.023,1.023,0,0,1-1.414,0l-1.59-1.585A1,1,0,1,0,.293,11.536l1.585,1.585a3,3,0,0,0,4.226.017ZM24,12a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,12ZM6.1,21.138l3.585-3.414a1,1,0,1,0-1.378-1.448l-3.6,3.431a1,1,0,0,1-1.456-.04L1.666,18.253A1,1,0,1,0,.334,19.747l1.544,1.374a3,3,0,0,0,4.226.017ZM24,20a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,20Z"
                          transform="translate(0.001 -0.023)" fill="#4a4f6f"/>
                </svg>
            </Link>
            <Link :href="route('group')" :class="{'active' : route().current('group')}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="users_1_" data-name="users (1)"
                          d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.5,4.5,0,0,1,7.5,13Zm0-7A2.5,2.5,0,1,0,10,8.5,2.5,2.5,0,0,0,7.5,6ZM15,23v-.5a7.5,7.5,0,0,0-15,0V23a1,1,0,0,0,2,0v-.5a5.5,5.5,0,0,1,11,0V23a1,1,0,0,0,2,0Zm9-5a7,7,0,0,0-11.667-5.217,1,1,0,1,0,1.334,1.49A5,5,0,0,1,22,18a1,1,0,0,0,2,0ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.5,4.5,0,0,1,17.5,9Zm0-7A2.5,2.5,0,1,0,20,4.5,2.5,2.5,0,0,0,17.5,2Z"
                          fill="#4a4f6f"/>
                </svg>
            </Link>
            <Link :href="route('settings')" :class="{'active' : route().current('settings')}">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.594" height="24" viewBox="0 0 21.594 24">
                    <g id="settings_1_" data-name="settings (1)" transform="translate(-1.203)">
                        <path id="Path_1" data-name="Path 1"
                              d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                              fill="#4a4f6f"/>
                        <path id="Path_2" data-name="Path 2"
                              d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,1,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.7,4.9a3,3,0,1,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29L2.7,13.9a3,3,0,0,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,1,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,1,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732L4.791,15a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,1,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732L19.209,9a1,1,0,0,0-.463,1.129Z"
                              fill="#4a4f6f"/>
                    </g>
                </svg>
            </Link>
        </div>
    </nav>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    name: "Navigation",
    components: {Link}
}
</script>

<style lang="scss">
nav {
    position: fixed;
    background-color: var(--color-secondary-200);
    padding: var(--margin-s);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div.navigation {
    width: 100%;
    max-width: 52rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-align: center;
        width: 8rem;
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-panel);
        transition: var(--effect);

        &:hover, &.active {
            background-color: rgba(0, 0, 0, 0.06);
        }

        &:hover {
            scale: 1.05;
        }

        &:active {
            scale: 0.95;
        }
    }

}
</style>
