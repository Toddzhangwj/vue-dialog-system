<template>
    <div class="article">
        <header class="myheader">
            <my-header />
        </header>
        <div class="article-wrap">
            <div class="head">
                <h1>科普文章智能推荐</h1>
                <span class="most">Most Pecent <a-icon type="right" /></span>
            </div>
            <div class="article-body">
                <a-row :gutter="20" type="flex" justify="space-between">
                    <a-col :span="6">
                        <ul class="left-nav">
                            <template v-for="(item, index) in navList">
                                <li
                                    @click="navActiveIndex = index"
                                    :class="[
                                        'nav-item',
                                        index == navActiveIndex ? 'ative' : '',
                                    ]"
                                    :key="index"
                                >
                                    <div class="left-title">
                                        <a-icon :type="item.icon" />{{
                                            item.title
                                        }}
                                    </div>
                                    <div class="right-count">
                                        {{ item.count }}
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </a-col>
                    <a-col :span="17">
                        <div class="right-content">
                            <template v-for="(item, index) in articleList">
                                <article class="art-item" :key="index">
                                    <img
                                        class="thumb"
                                        :src="item.thumbImg"
                                        :alt="item.title"
                                    />
                                    <h3 class="title">{{ item.title }}</h3>
                                    <div class="author">
                                        <a-avatar :src="item.avatar" />
                                        <span class="name">{{ item["author"] }}</span>
                                    </div>
                                </article>
                            </template>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "article",
    data() {
        return {
            navActiveIndex: 0,
            navList: [
                {
                    ariId: 15616516,
                    title: "所有文章",
                    icon: "book",
                    count: 300,
                },
                {
                    ariId: 15615155,
                    title: "我的关注",
                    icon: "book",
                    count: 220,
                },
                {
                    ariId: 95959456,
                    title: "智能推荐文章",
                    icon: "book",
                    count: 132,
                },
            ],
            articleList: [
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
                {
                    thumbImg:
                        "https://lemonpro.cdn.bcebos.com/image/16306522916995432425bf642976-072c-4f24-8f5f-bee7dc796711.jpg@!width600_wp",
                    title: "减肥的巧招！",
                    author: "yomi 欧尼",
                    avatar: "https://lemon.bj.bcebos.com/user-config/3b0f2d839425ce9ddd83ef3a3.jpg",
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.article {
    width: 100%;
    .myheader {
        position: sticky;
        top: 0;
        z-index: 5;
    }
    .article-wrap {
        width: 100%;
        min-height: clac(~"calc(100vh - 50px)");
        padding: 20px @page-padding;
        .head {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            .most {
                font-weight: bold;
                ::v-deep .anticon-right {
                    vertical-align: middle;
                }
            }
        }
        .article-body {
            width: 100%;
            .left-nav {
                width: 100%;
                position: sticky;
                top: 70px;
                z-index: 5;
                transition: all 1s;
                .nav-item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 18px;
                    cursor: pointer;
                    font-weight: bold;
                    padding-bottom: 16px;
                    &.ative {
                        color: #e64463;
                    }
                    &:hover {
                        color: #e64463;
                    }
                }
            }
            .right-content {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                .art-item {
                    width: 32%;
                    margin-right: 1%;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                    .thumb {
                        width: 100%;
                        height: 200px;
                    }
                    .title{
                        padding: 10px 0;
                        font-weight: bold;
                        cursor: pointer;
                        &:hover{
                            color: #e64463;
                        }
                    }
                    .author{
                        .name{
                            padding-left: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>