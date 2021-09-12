<template>
    <a-form
        :form="form"
        class="login-form"
        @submit="handleSubmit"
    >
        <a-form-item>
            <a-input
                v-decorator="[
                    'id',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ],
                    },
                ]"
                placeholder="phone"
                autocomplete="off"
            >
                <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                v-decorator="[
                    'pwd',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ],
                    },
                ]"
                type="password"
                placeholder="Password"
            >
                <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <template v-if="isLogin">
                <a-checkbox
                    v-decorator="[
                        'remember',
                        {
                            valuePropName: 'checked',
                            initialValue: true,
                        },
                    ]"
                >
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href=""> Forgot password </a>
            </template>
            <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
            >
                {{ isLogin ? 'Log in' : 'Register in'}}
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
export default {
    name: 'myLoginForm',
    props: {
        isLogin: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {

        }
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "normal_login" });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
        },
    },
};
</script>
<style lang="css" scoped>
.login-form {
    max-width: 100%;
}
.login-form-forgot {
    float: right;
}
.login-form-button {
    width: 100%;
}
</style>