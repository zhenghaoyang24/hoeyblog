<script>

export default {
  methods: {},
  props:{
    // blurValue: {
    //   type: Number,
    //   default: 0, // 默认没有模糊效果
    // },
  },
  computed:{
    // styleObj() {
    //   // 根据传递的 prop 动态计算样式
    //   return {
    //     filter: `blur(${this.blurValue}px)`,
    //   };
    // },
  }
}

</script>

<template>
<div class="home-jumbotron">
  <div><p class="home-jumbotron-h">h</p></div>
  <div><p class="home-jumbotron-o">o</p></div>
  <div><p class="home-jumbotron-e">e</p></div>
  <div ><p class="home-jumbotron-y">y</p></div>
</div>
</template>

<style scoped lang="less">
@font-face {
  font-family: 'LogoFont'; /* 自定义字体的名称 */
  src: url('@/assets/font/segoesc.ttf') format('truetype'); /* TTF字体文件的路径 */
  src: url('@/assets/font/segoesc.woff') format('woff'); /* TTF字体文件的路径 */
}
.home-jumbotron{
  user-select: none;
  //filter: blur(--blurValue);
  z-index: -2;
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100vh - 60px);
  >div{
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    >p{
      padding: 0;
      margin: 0;
      font-size: 24vw; /* 字体大小为视口宽度的5% */
      font-family: 'LogoFont', serif;
    }
  }

}
.home-jumbotron-h{
  color: #00f699;
  //transition: transform 0.5s ease;
  animation: frames-jumbotron-h 15s linear infinite; /* 定义动画 */
}
.home-jumbotron-o{
  color: #1a72e7;
  //transition: transform 0.5s ease;
  animation: frames-jumbotron-o 40s linear infinite; /* 定义动画 */
}
.home-jumbotron-e{
  color: #fbd563;
  //transition: transform 0.5s ease;
  animation: frames-jumbotron-e 20s linear infinite; /* 定义动画 */
}
.home-jumbotron-y{
  color: #ec675c;
  //transition: transform 0.5s ease;
  animation: frames-jumbotron-y 10s linear infinite; /* 定义动画 */
}

@keyframes frames-jumbotron-h {
  0% { transform: translate(-10vw, -20vw); } /* 起始位置 */
  //25% { transform: translate(-80px, -60); } /* 水平平移 */
  50% { transform: translate(-7px, -10vw); } /* 垂直平移 */
  //75% { transform: translate(0, 100px); } /* 反向水平平移 */
  100%  { transform: translate(-10vw, -20vw); }/* 返回起始位置 */
}

@keyframes frames-jumbotron-o {
  0% { transform: translate(5vw, 15vw) rotate(0deg);} /* 起始位置 */
  50% { transform: translate(0px, 20vh)  rotate(-60deg)} /* 垂直平移 */
  100%{ transform: translate(5vw, 15vw) rotate(0deg);} /* 返回起始位置 */
}
@keyframes frames-jumbotron-e {
  0% { transform: translate(0vw, -40vh) rotate(0deg);} /* 起始位置 */
  50% { transform: translate(3vw, -30vh)  rotate(50deg)} /* 垂直平移 */
  100%{ transform: translate(0vw, -40vh) rotate(0deg);} /* 返回起始位置 */
}
@keyframes frames-jumbotron-y {
  0% { transform: translate(5vw, 10vw) rotate(0deg);} /* 起始位置 */
  50% { transform: translate(3vw, 6vw)  rotate(20deg)} /* 垂直平移 */
  100%{ transform: translate(5vw, 10vw) rotate(0deg);} /* 返回起始位置 */
}

</style>
