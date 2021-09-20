import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import axios from 'axios'
import VueAxios from "vue-axios";
 
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
import MyHeader from '@/components/myHeader/myHeader.vue'
import MyFooter from '@/components/myFooter/myFooter.vue'
import myLoginForm from '@/components/myLoginForm/myLoginForm.vue'

Vue.config.productionTip = false
Vue.use(Antd)


/**
 * 全局组件
 */
Vue.component('my-header',MyHeader);
Vue.component('my-footer',MyFooter);
Vue.component('my-login-form',myLoginForm);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
