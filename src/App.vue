<template>
  <div id="app" class="app-container">
    <HeaderTop></HeaderTop>
    <div class="layout-body">
      <keep-alive :include="keepAliveArr">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import {onMounted} from "vue"
import HeaderTop from "@/components/HeaderTop.vue"
import "@/assets/style/code-light.css"


export default {
  name: 'App',
  created() {
    window.document.documentElement.setAttribute('theme', 'dark');
  },
  data() {
    return{
      keepAliveArr:['HomePage','TimelinePage']  //页面缓存组件
    }
  },
  methods: {},
  // setup() {
  //   onMounted(() => {
  //     //创建link标签默认引入主题样式文件
  //     let link = document.createElement("link");
  //     link.type = "text/css";
  //     link.id = "theme";
  //     link.rel = "stylesheet";
  //     link.href = './css/dark-theme.css';
  //     document.getElementsByTagName("head")[0].appendChild(link);
  //   });
  //
  //   return {};
  // },
  components: {
    HeaderTop,
  },


};
</script>

<style lang="less">
.layout-body {
  flex-grow: 1;
  height: calc(100vh - 60px);
  //border: 1px red solid;
  //background-color: #737373;
}


</style>
