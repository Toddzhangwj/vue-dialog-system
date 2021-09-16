<template>
    <div class="questions">
        <header class="myheader">
            <my-header />
        </header>
        <div class="questions-wrap">
            <div class="quesion-form">
                <!-- 问题 -->
                <div class="form-ques">
                    <div class="ques-text">
                        <div class="ques-head">
                            <a-avatar :src="quesionDetail.avatarSrc" />
                            <h3 class="username">
                                {{ quesionDetail.username }}
                            </h3>
                        </div>
                        <div class="ques-body">{{ quesionDetail.issue }}</div>
                    </div>
                    <div class="ques-action">
                        <!-- <a-button class="action-btn">关注问题</a-button>
                        <a-button class="action-btn">回答问题</a-button> -->
                        <a-button class="action-btn">查看解答</a-button>
                        <a-button class="action-btn"> <router-link to="/inquiries">更多问题回答</router-link></a-button>
                    </div>
                </div>
                <!-- 提问 -->
                <div class="form-ask-ques">
                    <h3 class="mb-10 mt-10 cline-hint">在此输入您的回答</h3>
                    <a-textarea
                        class="mb-10"
                        placeholder="在此输入您的回答"
                        :rows="4"
                    />
                    <a-button class="mb-10 mr-10" type="primary">提交</a-button>
                    <a-button class="mb-10" type="primary" @click="$router.back()">返回</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "questions",
    data() {
        return {
            quesionDetail: {
                avatarSrc: require("@/assets/images/uvec1z.jpg"),
                username: "长xxx",
                issue: `
                    我儿子孙亦辰, 2018年12月9日出生
                    ,现在2岁8个月,体重155公斤,身高98体重厘米。
                    他昨天下午开始发热,胃口不佳,无其他症状,
                    昨晚最高温度38.9,有些嗜睡,睡前手脚冰凉,
                    我给他捂热了,总体来说睡的还比较安稳,
                    所以我没有给他吃美林。不过我感觉他呼吸比较急,我数了一下,
                    一分钟呼吸在50次左右。我担心他是肺炎,今天上午带他去医院就诊。
                    他昨晚有点慧,估计是高的原因。
                    今早精神状态就还好,温37.8上下.未上38,
                    只是胃口依旧不佳。医生听了肺以后,说心肺正常,咽部有红肿。
                    做了化验后说,他是细菌、病毒双感染。诊断为急性咽炎。
                    给他开了阿莫西林是治疗细菌感染,
                    还想开一种中成药说是提高抵抗力,
                    针对病毒感染,中成药我没要。我现在想问,他现在可以断定是细菌感染吗?之前他呼吸道感染,基本都是病毒感染,除了高热退烧外,没用用过药。他现在的病程是两天,能通过验血确认细菌感染吗?是必须服用抗生素吗?我担心过度抗生素治疗。如果服用抗生素,药程多久呢?看诊的医生说是三天,一天两次.一次一包。
                `,
            },
        };
    },
};
</script>

<style lang="less" scoped>
.mb-10 {
    margin-bottom: 10px;
}
.mt-10 {
    margin-top: 10px;
}
.mr-10{
    margin-right: 10px;
}
.questions {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    .myheader {
        position: sticky;
        top: 0;
        z-index: 5;
    }
    .questions-wrap {
        width: 100%;
        min-height: ~"calc(100vh - 50px)";
        padding: 30px @page-padding;
        .quesion-form {
            width: 100%;
            .sort-select {
                margin-bottom: 15px;
            }
            .form-ques {
                width: 100%;
                min-height: 500px;
                border: 1px solid #70b1eb;
                padding: 15px 15px 40px;
                position: relative;
                .ques-head {
                    display: flex;
                    align-items: center;
                    padding-bottom: 15px;
                    .username {
                        margin: 0;
                        padding-left: 15px;
                        font-weight: bold;
                    }
                }
                .ques-body {
                    font-size: 18px;
                    font-weight: bold;
                }
                .ques-action {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    right: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    .action-btn {
                        margin-right: 10px;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
            .form-ask-ques {
                .cline-hint {
                    font-weight: bold;
                }
            }
        }
    }
}
</style>