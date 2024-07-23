import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局组建
import MarkdownList from "@/components/MarkdownList.vue";
import MarkdownInfo from "@/components/MarkdownInfo.vue";
import MarkdownTitle from "@/components/MarkdownTitle.vue";
import BackTopButton from "@/components/BackTopButton.vue";
import LeftBackButton from "@/components/LeftBackButton.vue";
import WebFooter from "@/components/WebFooter.vue";
Vue.component('MarkdownList', MarkdownList);
Vue.component('MarkdownInfo', MarkdownInfo);
Vue.component('MarkdownTitle', MarkdownTitle);
Vue.component('BackTopButton', BackTopButton);
Vue.component('LeftBackButton', LeftBackButton);
Vue.component('LeftBackButton', LeftBackButton);
Vue.component('WebFooter', WebFooter);
// markdown样式
import "@/assets/style/markdown-css.css";
// import "@/assets/style/code-light.css"
// 代码高亮
// import "highlight.js/styles/github.css"; //默认样式
//主要css
import "@/assets/style/public.css"
import "@/assets/style/theme.css"


// 映入md文章组件列表
// import {mdArticle} from "/public/md/index.js";
import {mdArticle} from "@/assets/md/index.js";
Vue.use(mdArticle);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
