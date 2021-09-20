<template>
    <div class="treatment">
        <header class="myheader">
            <my-header />
        </header>
        <iframe src="https://cn.bing.com/" class="iframe"></iframe>
    </div>
</template>

<script>
export default {
    name: "treatment",
    data() {
        return {
        };
    }
};
</script>

<style lang="less" scoped>
.treatment {
    width: 100%;
    height: 100vh;
    overflow:hidden;
    .myheader {
        position: sticky;
        top: 0;
        z-index: 5;
    }
}
.iframe {
    height:100%;
    width:100%;
}
</style>
