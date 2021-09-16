<template>
    <div id="app">
        <router-view />
        <a-modal v-model="loginVisible" title="" :footer="null" width="400px">
            <a-tabs v-model="tabActive" default-active-key="1" @change="tabsCallback">
                <a-tab-pane key="1" tab="登录">
                    <my-login-form v-if="tabActive == '1'"/>
                </a-tab-pane>
                <a-tab-pane key="2" tab="注册">
                    <my-login-form :isLogin="false" v-if="tabActive == '2'"/>
                </a-tab-pane>
            </a-tabs>
        </a-modal>
    </div>
</template>

<script>
import bus from '@/common/bus'
export default {
    data(){
        return {
            loginVisible: false,
            tabActive: '1',
        }
    },
    methods: {
        tabsCallback(event){
            this.tabActive = event;
        }
    },
    mounted(){
        bus.$on('openLoginModel',(data) => {
            this.loginVisible = data
        })
    }
}
</script>

<style lang="less">
</style>
