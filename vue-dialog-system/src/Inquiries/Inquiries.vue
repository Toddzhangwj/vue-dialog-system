<template>
    <div class="questions">
        <header class="myheader">
            <my-header />
        </header>
        <div class="questions-wrap">
            <h1>问题与咨询</h1>
            <!-- 条件筛选 -->
            <div class="form-condition">
                <a-row>
                    <a-col :span="10">
                        <a-row :gutter="[8, 8]">
                            <template v-for="(item, index) in officeList">
                                <a-col :span="4" :key="index">
                                    <a-button>{{ item }}</a-button>
                                </a-col>
                            </template>
                        </a-row>
                    </a-col>
                    <a-col :span="10">
                        <a-select
                            class="sort-select"
                            default-value="all"
                            style="width: 140px; margin-right: 10px"
                            @change="handleChange"
                        >
                            <template v-for="(item, index) in sortListOne">
                                <a-select-option
                                    :value="item.value"
                                    :key="index"
                                    >{{ item.label }}</a-select-option
                                >
                            </template>
                        </a-select>
                        <a-select
                            class="sort-select"
                            default-value="time"
                            style="width: 140px; margin-right: 10px"
                            @change="handleChange"
                        >
                            <template v-for="(item, index) in sortListOne">
                                <a-select-option
                                    :value="item.value"
                                    :key="index"
                                    >{{ item.label }}</a-select-option
                                >
                            </template>
                        </a-select>
                        <a-select
                            class="sort-select"
                            default-value="answer"
                            style="width: 140px; margin-right: 10px"
                            @change="handleChange"
                        >
                            <template v-for="(item, index) in sortListOne">
                                <a-select-option
                                    :value="item.value"
                                    :key="index"
                                    >{{ item.label }}</a-select-option
                                >
                            </template>
                        </a-select>
                    </a-col>
                </a-row>
            </div>
            <a-table :columns="columns" :data-source="data" bordered>
                <template slot="name" slot-scope="text">
                    <a>{{ text }}</a>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "questions",
    data() {
        return {
            columns: [
                { title: "问题广场", dataIndex: "author" },
                {
                    title: "",
                    dataIndex: "quesions",
                    customRender: (text, row, index) => {
                       return <router-link to="/questions">{text}</router-link>
                    },
                },
            ],
            data: [
                {
                    key: 1,
                    author: "John Brown",
                    quesions: "关于糖尿病的治疗",
                },
                {
                    key: 2,
                    author: "John Brown",
                    quesions: "关于糖尿病的治疗",
                },
            ],
            officeList: [
                "呼吸内科",
                "感染科室",
                "普通科室",
                "皮肤科室",
                "消化内科",
                "全部科室",
            ],
            sortListOne: [
                { label: "综合排序", value: "all" },
                { label: "按时间", value: "time" },
                { label: "按回答量", value: "answer" },
            ],
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
        .form-condition {
            padding: 20px 0;
        }
    }
}
</style>