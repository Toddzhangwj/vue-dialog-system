<template>
    <div class="forum">
        <header class="myheader">
            <my-header />
        </header>
        <div class="forum-wrap">
            <a-row type="flex" justify="space-between">
                <a-col :span="24">
                    <a-form @submit="handleSubmit">
                        <a-form-item label="姓名">
                            <a-input v-model="formData.name"
                                v-decorator="[
                                    'username',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'username is required!',
                                            },
                                        ],
                                    },
                                ]"
                            />
                        </a-form-item>
                        <a-form-item label="性别">
                            <a-input v-model="formData.gender"
                                v-decorator="[
                                    'gender',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'gender is required!',
                                            },
                                        ],
                                    },
                                ]"
                            />
                        </a-form-item>
                        <a-form-item label="年龄">
                            <a-input v-model="formData.age"
                                v-decorator="[
                                    'age',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'age is required!',
                                            },
                                        ],
                                    },
                                ]"
                            />
                        </a-form-item>
                        <!-- <a-form-item label="症状描述">
                            <a-input
                                v-decorator="[
                                    'desc',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'age is required!',
                                            },
                                        ],
                                    },
                                ]"
                            />
                        </a-form-item> -->
                        <a-form-item label="症状描述">
                            <a-textarea v-model="formData.description"
                                v-decorator="['more']"
                                placeholder="Basic usage"
                                :rows="4"
                            />
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" html-type="submit">
                                Submit
                            </a-button>
                        </a-form-item>
                    </a-form>
                </a-col>
            </a-row>
            <!-- <a-row class="comment-wrap">
                <a-list
                    class="comment-list"
                    item-layout="horizontal"
                    :data-source="commontData"
                >
                <h3 slot="header">Article {{commontData.length}} the comments</h3>
                    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                        <a-comment :author="item.author" :avatar="item.avatar">
                            <template slot="actions">
                                <span
                                    v-for="(action, idx) in item.actions"
                                    :key="idx"
                                    >{{ action }}</span
                                >
                            </template>
                            <p slot="content">
                                {{ item.content }}
                            </p>
                            <a-tooltip slot="datetime" :title="item.datetime">
                                <span>{{ item.datetime }}</span>
                            </a-tooltip>
                        </a-comment>
                    </a-list-item>
                </a-list>
                评论 -->
                <!-- <a-comment>
                    <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                    <div slot="content">
                        <a-form-item>
                            <a-textarea
                                :rows="4"
                                v-model="comment"
                            />
                        </a-form-item>
                        <a-form-item >
                            <a-button
                                html-type="submit"
                                :loading="submitting"
                                type="primary"
                                @click="addCommont"
                            >
                                Add Comment
                            </a-button>
                        </a-form-item>
                    </div>
                </a-comment> -->
            <!-- </a-row>  -->
        </div>
    </div>
</template>

<script>
export default {
    name: "forum",
    data() {
        return {
            forumList: [],
            formData: {
                name: '',
                gender: '',
                age: '',
                description: ''
            },
            // optionList: [
            //     { name: "消化系统及代谢药", icon: "tag", color: "#E64463" },
            //     { name: "心血和造学系统药物", icon: "tag" },
            //     { name: "心血管系统药物", icon: "tag" },

            //     { name: "皮肤病用药", icon: "tag", color: "#E64463" },
            //     { name: "生殖泌尿系统或性激素药物", icon: "tag" },
            //     { name: "全全身激素药物", icon: "tag" },
            //     { name: "全身抗感染药物", icon: "tag", color: "#E64463" },
            //     { name: "抗肿瘤药物", icon: "tag" },
            //     { name: "抗肿瘤肌肉骨骼药物", icon: "tag" },
            // ],
            // commontData: [
            //     {
            //         actions: ["Reply to"],
            //         author: "Han Solo",
            //         avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //         content:
            //             "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
            //         datetime: "2021-08-24",
            //     },
            //     {
            //         actions: ["Reply to"],
            //         author: "Han Solo",
            //         avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //         content:
            //             "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
            //         datetime: "2021-08-24",
            //     },
            // ],
            // comment: '',
            submitting: false
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            console.log(this.formData)
            this.$axios({
                url: 'http://175.27.189.130:5000/forum/question',
                method: 'get'
            })
        },
        addCommont(){

        }
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
.forum {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    .myheader {
        position: sticky;
        top: 0;
        z-index: 5;
    }
    .forum-wrap {
        width: 100%;
        min-height: ~"calc(100vh - 50px)";
        padding: 30px @page-padding;
        ::v-deep .ant-form-item {
            margin-bottom: 0;
        }
        .right-content {
            padding-left: 24px;
            .lable-options {
                width: 100%;
                .option {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    padding: 8px 0;
                    &:hover {
                        background-color: #e6e4e4;
                    }
                    .name {
                        padding-left: 10px;
                    }
                }
            }
        }
        .comment-wrap{
            padding-top: 20px;
        }
    }
}
</style>