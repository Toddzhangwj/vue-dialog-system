import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {title: '首页'}
    },
    {
        path: '/treatment',
        name: 'Treatment',
        component: () => import('@/views/treatment/treatment.vue'),
        meta: {title: '治疗咨询'}
    },
    {
        path: '/questions',
        name: 'Questions',
        component: () => import('@/views/questions/questions.vue'),
        meta: {title: '问题咨询与回答'}
    },
    {
        path: '/inquiries',
        name: 'Inquiries',
        component: () => import('@/views/Inquiries/Inquiries.vue'),
        meta: {title: '问题与咨询'}
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/article/article.vue'),
        meta: {title: '科普文章智能推荐'}
    },
    {
        path: '/forum',
        name: 'Forum',
        component: () => import('@/views/forum/forum.vue'),
        meta: {title: '论坛管理'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
