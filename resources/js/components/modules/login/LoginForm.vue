<template>
    <form @submit.prevent>
        <form-control :inputs="items" ref="formControl">
            <div class="input-group">
                <Input
                    :item="items[0]"
                    @setter="(val) => setValue('email', val)"
                    @remove-error="(id) => removeError(id)"
                />
            </div>

            <div class="input-group">
                <Input
                    :item="items[1]"
                    @setter="(val) => setValue('password', val)"
                    @remove-error="(id) => removeError(id)"
                />
            </div>

            <div class="input-group button-group">
                <Button
                    :class="{disabled: disabled}"
                    :loading="submitting"
                    @click="submitLogin"
                >
                    {{ __t('app.login') }}
                </Button>
            </div>
        </form-control>

        <toast v-if="showError" :title="__t('app.errors.wrong-credentials')" status="error" />

    </form>
</template>

<script>
import {FormControl} from "@websolutionbe/ui-library/dist/index.mjs";
import {Input, Toast, Button} from "@/js/components/ui";
import axios from "axios";
import {usePage} from "@inertiajs/inertia-vue3";

export default {
    name: "LoginForm",
    data() {
        return {
                disabled: true,
                submitting: false,
                showError: false,
                credentials: {
                    email: null,
                    password: null,
                },
                items: [
                    {
                        id: 'email',
                        type: 'email',
                        label: this.__t('app.login.fields.email'),
                        validation: ['required', 'email'],
                        value: null
                    },
                    {
                        id: 'password',
                        type: 'password',
                        label: this.__t('app.login.fields.password'),
                        validation: ['required'],
                        value: null
                    }
                ],
        }
    },
    components: {
        Input,
        FormControl,
        Toast,
        Button
    },
    methods: {
        submitLogin(){
            if(this.$refs.formControl.validate()){
                this.submitting = true;
                this.login();
            }
        },
        setValue(id, value){
            this.items.find(item => item.id === id).value = value;
            this.checkValues();
        },
        removeError(id){
            this.items.find(item => item.id === id).errors = null;
        },
        getValue(id){
            return this.items.find(item => item.id === id).value
        },
        checkValues(){
            this.disabled =
                (this.getValue("email") === null || this.getValue("email") === '')
                || (this.getValue("password") === null || this.getValue("password") === '');
        },
        async login(){
            this.credentials = {
                email : this.items.find(item => item.id === 'email').value,
                password : this.items.find(item => item.id === 'password').value,
                _token: usePage().props.value.token
            }
            await axios.post(this.route('login.post'), this.credentials).then(({data}) => {
                if(data.success){
                    window.location = this.route('dashboard');
                }
            }).catch(error => {
                this.showError = true;

                setTimeout(() => {
                    this.submitting = false;
                },2000);

                setTimeout(() => {

                    this.showError = false;
                }, 6000);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.button-group {
    margin-top: var(--margin-s);
}
</style>
