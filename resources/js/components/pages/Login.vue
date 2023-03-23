<template>
    <seo :meta="$page.props.meta"/>
    <div class="auth">
        <div class="form-wrapper">
            <div class="form">
                <login-form />
            </div>
        </div>
    </div>
</template>

<script>
import {Head} from '@inertiajs/inertia-vue3';
import Layout from "../layout/Layout.vue";
import Seo from "../utils/Seo.vue";
import {SvgTooth, SvgLogo} from "@/svg";
import LoginForm from "@/js/components/modules/login/LoginForm.vue";

export default {
    name: "Login",
    components: {
        LoginForm,
        Seo,
        Layout,
        Head,
        SvgTooth,
        SvgLogo,
    },
}
</script>
