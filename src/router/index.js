import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage.vue";
// 路由懒加载
const ArticlePage = () => import("@/views/ArticlePage.vue");
const ArticleDetailPage = () => import("@/views/ArticleDetailPage.vue");
const NotFoundPage = () => import("@/views/notFoundPage.vue");
const TimelinePage = () => import("@/views/TimelinePage.vue");

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',   //hash
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomePage},
        {path: '/article/:type?', component: ArticlePage},
        {path: '/articleDetail/:articleId', component: ArticleDetailPage},
        {path: '/timeline', component: TimelinePage},
        {path: '*', component: NotFoundPage},
    ],
    // link自定义高亮类名
    linkActiveClass: 'router-active', // 配置模糊匹配的类名
    linkExactActiveClass: 'router-exact-active', // 配置精确匹配的类名

})

export default router
