<template>
    <div class="my-header">
        <div class="left">
            <h3 class="title">Smart Medical</h3>
            <a-input-search
                placeholder="input search text"
                class="search-input"
                @search="onSearch"
            />
        </div>
        <div class="right">
            <a-button type="primary" class="login" @click="openLoginModle">Log in</a-button>
            <a-button type="primary" icon="cloud-upload">Submit</a-button>
        </div>
    </div>
</template>

<script>
import bus from '@/common/bus'
export default {
    name: "my-header",
    data() {
        return {};
    },
    methods: {
        onSearch(){

        },
        openLoginModle(){
            bus.$emit('openLoginModel',true)
        }
    }
};
</script>

<style lang="less" scoped>
.my-header {
    width: 100%;
    height: 50px;
    background-color: #333333;
    padding: 0 @page-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        .title {
            color: #ffffff;
            margin: 0;
            padding: 0;
        }
        .search-input {
            width: 200px;
            margin-left: 20px;
            ::v-deep .ant-input{
                background: #575554;
                border: none;
                color: #ffffff;
            }
            ::v-deep .ant-input-suffix{
                i{
                    color: #ffffff;
                }
            }
        }
    }
    .right {
        .login {
            margin-right: 10px;
        }
    }
}
</style>
