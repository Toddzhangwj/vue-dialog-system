<template>
    <div class="index">
        <div class="header">
            <my-header />
        </div>
        <div class="main">
            <!-- 标题 -->
            <h1>智慧医疗系统</h1>
            <!-- 头部搜索表单 -->
            <div class="form-wrap">
                <div class="top-search">
                    <a-dropdown>
                        <a-menu slot="overlay" @click="handleMenuClick">
                            <a-menu-item key="1">
                                <a-icon type="user" />menu item
                            </a-menu-item> 
                            <a-menu-item key="2">
                                <a-icon type="user" />menu item
                            </a-menu-item>
                            <a-menu-item key="3">
                                <a-icon type="user" />item
                            </a-menu-item>
                        </a-menu>
                        <a-button class="down-btn">
                            ALl <a-icon type="down" />
                        </a-button>
                    </a-dropdown>
                    <a-input-search
                        placeholder="input search text"
                        class="search-input"
                        enter-button
                        @search="onSearch"
                    />
                </div>
            </div>
        <!-- </div> -->
            <!-- 功能表单 -->
            <div class="toos-list">
                <div class="left">
                    <template v-for="(item, index) in cardList.slice(0, 1)">
                       <router-link :key="index" :to="item.link">
                            <div class="card-item" :key="index">
                            <a-card
                                hoverable
                                :title="item.title"
                                :extra="item.subTitle"
                                style="width: 300px"
                            >
                                <img
                                    slot="cover"
                                    class="caver-img"
                                    :alt="item.title"
                                    :src="item.imageUrl"
                                />
                            </a-card>
                        </div>
                       </router-link>
                    </template>
                </div>
                <div class="right">
                    <template v-for="(item, index) in cardList.slice(1, 5)">
                        <router-link :key="index" :to="item.link">
                            <div class="card-item" :key="index">
                                <a-card
                                    hoverable
                                    :title="item.title"
                                    :extra="item.subTitle"
                                    style="width: 300px"
                                >
                                    <img
                                        slot="cover"
                                        class="caver-img"
                                        :alt="item.title"
                                        :src="item.imageUrl"
                                    />
                                </a-card>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const testUrl =
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
export default {
    name: "index",
    data() {
        return {
            cardList: [
                {
                    title: "治疗咨询",
                    subTitle: "Treatment consultation",
                    imageUrl: testUrl,
                    link: '/treatment'
                },
                {
                    title: "疾病咨询",
                    subTitle: "Desease consultation",
                    imageUrl: testUrl,
                    link: '/'
                },
                { 
                    title: "问题咨询与回答", 
                    subTitle: "Q&A", 
                    imageUrl: testUrl,
                    link: '/questions' 
                },
                {
                    title: "药物咨询",
                    subTitle: "Drug consultation",
                    imageUrl: testUrl,
                    link: '/questions'
                },
                {
                    title: "科普文章智能推荐",
                    subTitle: "Recommendation",
                    imageUrl: testUrl,
                    link: '/article'
                },
            ],
        };
    },
    methods: {
        onSearch() {},
        handleMenuClick() {},
    },
};
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-image: url("../../assets/images/uvec1z.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(141, 141, 141, 0.35);
    background-blend-mode: darken;
    background-attachment: fixed;
    .header{
        position: sticky;
        top: 0;
        z-index: 5;
    }
    .main {
        width: 100%;
        height: ~"calc(100vh - 50px)";
        h1 {
            width: 100%;
            padding: 40px 0 60px;
            color: #ffffff;
            font-weight: bold;
            letter-spacing: 0.5em;
            text-align: center;
        }
        .form-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #ffffff;
            padding: 4px;
            width: max-content;
            margin: 0 auto;
            border-radius: 4px;
            .search-input {
                width: 24vw;
            }
            .down-btn {
                border: none;
            }
        }
        .toos-list {
            display: flex;
            justify-content: center;
            padding-top: 60px;
            ::v-deep .ant-card-head {
                padding: 0 4px;
                min-height: 36px;
                .ant-card-extra {
                    padding: 4px;
                    color: #8ba1b3;
                }
                .ant-card-head-title {
                    font-weight: bold;
                    font-size: 20px;
                }
            }
            .caver-img {
                width: 100%;
                height: 150px;
            }
            .left {
                width: 300px;
                margin-right: 20px;
            }
            .right {
                width: 620px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            .card-item {
                margin-bottom: 20px;
            }
        }
    }
}
</style>
