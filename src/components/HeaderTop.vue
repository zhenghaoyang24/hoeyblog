<script>
import ThemeChangeButton from "@/components/ThemeChangeButton.vue";

export default {
  name: 'HeaderTop',
  methods: {},
  components: {
    ThemeChangeButton
  }
}
</script>


<template>
  <div class="header-top">
    <div class="header-top-logo">
      <router-link to="/home">Hoey</router-link>
    </div>
    <div class="header-top-right">
      <router-link to="/home">主页</router-link>
      <router-link to="/article">文章</router-link>
      <router-link to="/timeline">时间线</router-link>
      <span></span>
      <ThemeChangeButton></ThemeChangeButton>
    </div>


  </div>

</template>

<style scoped lang="less">
@font-face {
  font-family: 'LogoFont'; /* 自定义字体的名称 */
  src: url('@/assets/font/segoesc.ttf') format('truetype'); /* TTF字体文件的路径 */
  src: url('@/assets/font/segoesc.woff') format('woff'); /* TTF字体文件的路径 */
}

.header-top {
  user-select: none;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  > div {
    padding: 0 20px 0 20px;
    height: 100%;
  }
}


.header-top-logo {
  transition: color 0.5s;
  align-content: center;
  font-size: 2em;
  font-family: 'LogoFont', serif;
  font-weight: 700;

}

.header-top-logo > a {
  text-decoration: none;
  transition: color 0.5s;
}

.header-top-logo > a:hover {
  transition: color 0.5s;

}

.header-top-right {
  display: flex;
  align-items: center;
  font-weight: 600;

  >span {
    width: 1px;
    height: 25px;
    margin: 0 10px;
  }

  //align-content: center;
}

.header-top-right > a {
  margin:0 0 0 10px;
  transition: color 0.2s;
  text-decoration: none;
}

</style>
