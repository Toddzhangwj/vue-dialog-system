import axios from 'axios'

<template>
  <a-form :form="form" class="login-form" @submit="handleSubmit">
    <!-- <v-alert outline type="success" >{{ res.code == 0 ? "success" : "failed" }}</v-alert> -->
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
        placeholder="input your phone"
        autocomplete="off"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
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
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <template v-if="isLogin">
        <!-- <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox> -->
        <a class="login-form-forgot" href=""> Forgot password </a>
      </template>
      <a-button type="primary" html-type="submit" class="login-form-button">
        {{ isLogin ? "Log in" : "Register in" }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "myLoginForm",
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
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
          if (this.isLogin) {
            let _this = this
            this.$http({
              url: "http://175.27.189.130:5000/user/login",
              method: "GET",
              params: values,
            }).then(function(res) {
              console.log(res);
              if (res.data.code == 0) {
                console.log("ok");
                _this.$message.success('登录成功')
                _this.$router.push({path:'/inquiries'})
                bus.$emit('openLoginModel',false)
              }else{
                console.log("fail");
                _this.$message.error('登录失败')
            }
            });
          }
          else if(!this.isLogin){
            this.$http({
            url: "http://175.27.189.130:5000/user/register",
            method: "GET",
            params: values,
          }).then(function(res){
            console.log(res);
            if (res.data.code == 0) {
              console.log("ok");
              this.$message.success('注册成功')
              _this.$router.push({path:'/inquiries'})
              bus.$emit('openLoginModel',false)
            }else{
                this.$message.error('注册失败')
            }
          });
          }
          
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