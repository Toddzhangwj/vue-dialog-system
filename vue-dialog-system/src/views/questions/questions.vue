<template>
    <div class="questions">
        <header class="myheader">
            <my-header />
        </header>
        <div class="questions-wrap">
            <a-row type="flex" justify="space-between">
                <a-col :span="8">
                    <h1>问题与咨询</h1>
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template slot="name" slot-scope="text">
                            <a>{{ text }}</a>
                        </template>
                    </a-table>
                </a-col>
                <a-col :span="14">
                    <div class="quesion-form">
                        <!-- 条件筛选 -->
                        <div class="form-condition">
                            <a-row>
                                <a-col :span="18">
                                    <a-row :gutter="[8,16]">
                                        <template v-for="(item,index) in officeList">
                                            <a-col :span="6" :key="index">
                                                <a-button size="large">{{item}}</a-button>
                                            </a-col>
                                        </template>
                                    </a-row>
                                </a-col>
                                <a-col :span="6">
                                    <a-select class="sort-select" default-value="all" style="width: 140px" @change="handleChange">
                                        <template v-for="(item,index) in sortListOne">
                                            <a-select-option :value="item.value" :key="index">{{item.label}}</a-select-option>
                                        </template>
                                    </a-select>
                                     <a-select class="sort-select" default-value="time" style="width: 140px" @change="handleChange">
                                        <template v-for="(item,index) in sortListOne">
                                            <a-select-option :value="item.value" :key="index">{{item.label}}</a-select-option>
                                        </template>
                                    </a-select>
                                     <a-select class="sort-select" default-value="answer" style="width: 140px" @change="handleChange">
                                        <template v-for="(item,index) in sortListOne">
                                            <a-select-option :value="item.value" :key="index">{{item.label}}</a-select-option>
                                        </template>
                                    </a-select>
                                </a-col>
                            </a-row>
                        </div>
                        <!-- 问题 -->
                        <div class="form-ques">
                            <div class="ques-text">
                                <div class="ques-head">
                                    <a-avatar :src="quesionDetail.avatarSrc" />
                                    <h3 class="username">{{quesionDetail.username}}</h3>
                                </div>
                                <div class="ques-body">{{quesionDetail.issue}}</div>
                            </div>
                            <div class="ques-action">
                                <a-button class="action-btn">关注问题</a-button>
                                <a-button class="action-btn">回答问题</a-button>
                                <a-button class="action-btn">查看解答</a-button>
                            </div>
                        </div>
                        <!-- 提问 -->
                        <div class="form-ask-ques">
                            <h3 class="mb-10 mt-10 cline-hint">在此输入您的问题</h3>
                            <a-textarea class="mb-10" placeholder="在此输入您的问题" :rows="4" />
                            <a-button class="mb-10" type="primary">提交</a-button>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'questions',
    data(){
        return {
            columns: [
                { title: '问题广场',dataIndex: 'author'},
                { title: '',dataIndex: 'quesions',}
            ],
            data: [
                {
                    key: 1,
                    author: 'John Brown',
                    quesions: '关于糖尿病的治疗'
                },
                {
                    key: 2,
                    author: 'John Brown',
                    quesions: '关于糖尿病的治疗'
                },
            ],
            officeList: ['呼吸内科','感染科室','普通科室','皮肤科室','消化内科','全部科室'],
            sortListOne: [
                {label: '综合排序',value: 'all'},
                {label: '按时间',value: 'time'},
                {label: '按回答量',value: 'answer'},
            ],
            quesionDetail: {
                avatarSrc: require('@/assets/images/uvec1z.jpg'),
                username: '长xxx',
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
                `
            }
        }
    }
};
</script>

<style lang="less" scoped>
.mb-10{
    margin-bottom: 10px;
}
.mt-10{
    margin-top: 10px;
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
        .quesion-form{
            width: 100%;
            .sort-select{
                margin-bottom: 15px;
            }
            .form-ques{
                width: 100%;
                min-height: 500px;
                border: 1px solid #70B1EB;
                padding: 15px 15px 40px;
                position: relative;
                .ques-head{
                    display: flex;
                    align-items: center;
                    padding-bottom: 15px;
                    .username{
                        margin: 0;
                        padding-left: 15px;
                        font-weight: bold;
                    }
                }
                .ques-body{
                    font-size: 18px;
                    font-weight: bold;
                }
                .ques-action{
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    right: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    .action-btn{
                        margin-right: 10px;
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .form-ask-ques{
                .cline-hint{
                    font-weight: bold;
                }
            }
        }
    }
}
</style>