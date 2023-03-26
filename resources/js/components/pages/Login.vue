<template>
    <seo :meta="$page.props.meta"/>
    <div class="auth">
        <div class="form-wrapper">
            <div class="form">
                <login-form />

                <Button v-if="deferredPrompt" @click="install">Download app</Button>
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
import Button from "@/js/components/ui/Button.vue";

export default {
    name: "Login",
    data() {
      return {
          deferredPrompt: null
      }
    },
    components: {
        Button,
        LoginForm,
        Seo,
        Layout,
        Head,
        SvgTooth,
        SvgLogo,
    },
    created() {
        window.addEventListener("beforeinstallprompt", e => {
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e;
        });

        window.addEventListener("appinstalled", () => {
            this.deferredPrompt = null;
        });
    },
    methods: {
        async dismiss() {
            this.deferredPrompt = null;
        },
        async install() {
            this.deferredPrompt.prompt();
        }
    }
}
</script>
