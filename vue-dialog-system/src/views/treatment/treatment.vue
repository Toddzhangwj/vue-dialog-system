<template>
    <div class="treatment">
        <header class="myheader">
            <my-header />
        </header>
        <!-- 聊天室 -->
        <div class="treat-chat">
            <div class="chat">
                <div class="left-msg-wrap">
                    <div class="message-list" ref="messageRef">
                        <ul class="message">
                            <template v-for="(item, index) in messageList">
                                <li
                                    :class="[
                                        'msg-content',
                                        item['type'] == 'own' ? 'own' : '',
                                    ]"
                                    :key="index"
                                >
                                    <div class="msg">{{ item.msg }}</div>
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="msg-tools">
                        <div class="help-top">
                            <a-icon type="camera" style="font-size: 24px" />
                        </div>
                        <div class="message">
                            <a-input
                                v-model="msg"
                                type="textarea"
                                placeholder="send your message"
                                @keyup.enter.native="sendMsg"
                            />
                            <a-button
                                size="small"
                                class="send"
                                type="primary"
                                @click="sendMsg"
                                >发送</a-button
                            >
                        </div>
                    </div>
                </div>
                <div class="right-doctor">
                    <a-avatar
                        :src="avatarUrl"
                        size="large"
                        shape="square"
                        class="avatar"
                    />
                    <p class="doc-name text">{{ doctorInfo.name }}</p>
                    <p class="doc-office text">{{ doctorInfo.office }}</p>
                    <p class="doc-introuduce text">
                        {{ doctorInfo.introuduce }}
                    </p>
                </div>
            </div>
        </div>
        <!-- 相似病例,推荐药物,联系医生 -->
        <div class="recommend">
            <a-row type="flex" justify="space-around" :gutter="12">
                <template v-for="(item, index) in recommandList">
                    <a-col :span="6" :key="index">
                        <div class="recom-item" @click="activeIndex = index">
                            <div class="left-icon">
                                <a-icon
                                    style="font-size: 30px; color: #9b9b9b"
                                    :type="item.icon"
                                />
                            </div>
                            <div class="right-info">
                                <h2 class="title">{{ item["title"] }}</h2>
                                <p class="info">{{ item["info"] }}</p>
                            </div>
                        </div>
                    </a-col>
                </template>
            </a-row>
        </div>
        <!-- 相似病例 -->
        <div class="similar-cases like-recom" v-if="activeIndex == 0">
            <template v-for="(item, index) in similarCasesData">
                <div class="drug" :key="index">
                    <h2 class="title">{{ item.title }}{{ index + 1 }}</h2>
                    <p class="time-info">
                        时间： <span>{{ item.time }}</span
                        >地点： <span>{{ item.address }}</span>
                    </p>
                    <p class="keyword">症状关键词：{{ item.keywords }}</p>
                    <div class="thumn-img">
                        <img :src="item.thumnImgSrc" alt="" />
                    </div>
                    <div class="learn-more">
                        <a-button type="primary" size="small"
                            >Learn more</a-button
                        >
                    </div>
                </div>
            </template>
        </div>
        <!-- 推荐药物-->
        <div class="recommend-drug like-recom" v-else-if="activeIndex == 1">
            <template v-for="(item, index) in recommendedDrugsData">
                <div class="drug" :key="index">
                    <h2 class="title">{{ item.title }}{{ index + 1 }}</h2>
                    <p class="time-info">适应症状：{{ item.symptoms }}</p>
                    <p class="keyword">禁忌反应：{{ item.tabooReaction }}</p>
                    <div class="thumn-img">
                        <img :src="item.thumnImgSrc" alt="" />
                    </div>
                    <div class="learn-more">
                        <a-button type="primary" size="small"
                            >Learn more</a-button
                        >
                    </div>
                </div>
            </template>
        </div>
        <!-- 联系医生 -->
        <div class="contact-doctor" v-else-if="activeIndex == 2">
            <a-row type="flex" justify="space-around" :gutter="4">
                <template v-for="(item, index) in recommendDoctorData">
                    <a-col :span="6" :key="index">
                        <div class="doctor">
                            <a-avatar
                                :src="item.avatar"
                                size="large"
                                shape="square"
                                class="avatar"
                            />
                            <p class="doc-name text">{{ item.name }}</p>
                            <p class="doc-office text">{{ item.office }}</p>
                            <p class="doc-introuduce text">{{ item.desc }}</p>
                        </div>
                    </a-col>
                </template>
            </a-row>
        </div>
    </div>
</template>

<script>
import { similarCases, recommendedDrugs, recommendDoctor } from "@/data/custom";
import axios from "../../common/request";
export default {
    name: "treatment",
    data() {
        return {
            avatarUrl:
                "https://img2.baidu.com/it/u=3750381100,1161037097&fm=26&fmt=auto&gp=0.jpg",
            messageList: [
                /*{ type: "own", msg: "谢谢!" },
                { type: "own", msg: "辛苦了!" },
                { type: "other", msg: "谢谢!" },
                { type: "own", msg: "辛苦了!" },
                { type: "other", msg: "谢谢!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },
                { type: "own", msg: "辛苦了!" },*/
            ],
            doctorInfo: {
                name: "张医生",
                office: "****医院***科室",
                introuduce: `
                    儿科学博士。副主任医师， 上海交通天学硕士研究生导
                    师，临床工作15年，擅长儿 内科各项疾病，有丰富的临
                    床线处理经验。
                `,
            },
            recommandList: [
                {
                    title: "相似病例",
                    info: "If you have any question contact us using our contact form",
                    icon: "question-circle",
                },
                {
                    title: "推荐药物",
                    info: "Use ourMedia Kitif you want to write about",
                    icon: "scissor",
                },
                {
                    title: "联系医生",
                    info: "Use ourMedia Kitif you want to write about",
                    icon: "phone",
                },
            ],
            activeIndex: 0,
            msg: "",
        };
    },
    computed: {
        similarCasesData: () => similarCases, // 相似病例
        recommendedDrugsData: () => recommendedDrugs, // 推荐药物
        recommendDoctorData: () => recommendDoctor, // 推荐医生
    },
    methods: {
        sendMsg() {
            if (this.msg.trim()) {
                this.messageList.push({ type: "own", msg: this.msg });
                var data = {question:this.msg};
                this.msg = "";
                axios({
                    method: 'get',
                    url: '/aiqa/qa',
                    params: data
                }).then((res)=>{
                    console.log(res)
                    this.messageList.push({
                        type: "other",
                        msg: res.data.ans,
                    });
                    this.$nextTick(() => {
                        this.$refs["messageRef"].scrollTop =
                            this.$refs["messageRef"].scrollHeight;
                    });
                })
            }
        },
    },
    mounted(){
         this.$nextTick(() => {
            this.$refs["messageRef"].scrollTop =
                this.$refs["messageRef"].scrollHeight;
        });
    }
};
</script>

<style lang="less" scoped>
.treatment {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    .myheader {
        position: sticky;
        top: 0;
        z-index: 5;
    }
    .treat-chat {
        width: 100%;
        min-height: ~"calc(100vh - 50px)";
        display: flex;
        align-items: center;
        justify-content: center;
        .chat {
            width: 65vw;
            height: 500px;
            border: 1px solid #65bdf9;
            display: flex;
            .right-doctor {
                width: 200px;
                background-color: #f8f8f8;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 30px;
                color: black;
                .avatar {
                    width: 130px;
                    height: 130px;
                }
                .text {
                    padding: 8px 0;
                    line-height: 20px;
                    margin: 0;
                    &.doc-name {
                        padding-top: 18px;
                        font-weight: bold;
                        font-size: 20px;
                    }
                }
            }
            .left-msg-wrap {
                flex: 1;
                height: 100%;
                background-color: #88e9fc;
                padding: 15px;
                display: flex;
                flex-direction: column;
                .message-list {
                    width: 100%;
                    flex: 1;
                    background-color: #ffffff;
                    overflow: auto;
                    padding: 10px;
                    transition: all 1s;
                    &::-webkit-scrollbar {
                        display: none;
                        width: 0;
                        height: 0;
                    }
                    .msg {
                        width: max-content;
                        background-color: #c5c5c5;
                        padding: 10px;
                        border-radius: 8px;
                        margin-bottom: 10px;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    .msg-content {
                        &.own {
                            display: flex;
                            justify-content: flex-end;
                        }
                        &.other {
                            text-align: left;
                        }
                    }
                }
                .msg-tools {
                    min-height: 100px;
                    width: 100%;
                    background-color: #fff;
                    .help-top {
                        padding: 4px;
                        border-bottom: 1px solid #c0c0c0;
                    }
                    .message {
                        position: relative;
                        width: 100%;
                        height: ~"calc(100% - 38px)";
                        ::v-deep .ant-input {
                            min-height: 80px;
                            line-height: 20px;
                            resize: none;
                            border: none;
                            outline: none;
                            &:focus {
                                box-shadow: none;
                            }
                        }
                        .send {
                            position: absolute;
                            bottom: 4px;
                            right: 4px;
                        }
                    }
                }
            }
        }
    }
    .recommend {
        width: 100%;
        padding: 0 @page-padding;
        .recom-item {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            cursor: pointer;
            &:hover {
                box-shadow: 1px 1px 10px #94cdfa;
            }
            .left-icon {
                padding-right: 16px;
            }
            .right-info {
                .title {
                    font-weight: bold;
                }
            }
        }
    }
    .like-recom {
        width: 100%;
        padding: 0 calc(~"@{page-padding} + 30px");
        & > div {
            width: 100%;
            padding: 20px;
            box-shadow: 1px 1px 10px #dbd9d9;
            margin-bottom: 20px;
        }
        .title {
            font-weight: bold;
        }
        .thumn-img {
            text-align: center;
            padding: 10px 0;
        }
        .learn-more {
            text-align: right;
            padding: 10px 0;
        }
    }
    .contact-doctor {
        width: 100%;
        padding: 20px @page-padding;
        ::v-deep .a-row {
            width: 100%;
            box-sizing: border-box;
        }
        .doctor {
            width: 100%;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: black;
            min-height: 500px;
            padding: 20px 30px;
            cursor: pointer;
            &:hover {
                box-shadow: 1px 1px 10px #94cdfa;
            }
            .avatar {
                width: 200px;
                height: 200px;
            }
            .text {
                padding: 8px 0;
                line-height: 20px;
                margin: 0;
                &.doc-name {
                    padding-top: 18px;
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
