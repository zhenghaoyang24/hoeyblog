<script>
export default {
  name: "BackTopButton",
  data() {
    return {
      scrollTopValue: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const element = this.$refs.backTopButton
     this.scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTopValue>=150){
        element.style.bottom = '100px'
        element.style.opacity = '1'
      }else{
        // element.style.transition = 'none'
        element.style.bottom = '0'
        element.style.opacity = '0'
      }
    },
    // 返回顶部
    scrollTop() {
      //  设置一个定时器
      const upRoll = setInterval(() => {
        const top = this.scrollTopValue // 每次获取页面被卷去的部分
        const speed = Math.ceil(top / 10) // 每次滚动多少 （步长值）
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop -= speed // 不在顶部 每次滚动到的位置
        } else {
          clearInterval(upRoll) // 回到顶部清除定时器
        }
      }, 10)
    }

  }


}

</script>

<template>
  <div class="back-top-button" ref="backTopButton" @click="scrollTop">
  </div>
</template>

<style scoped lang="less">
.back-top-button {
  transition: all 0.2s;
  border-radius: 4px;
  background-image: url("@/assets/images/button/rocket-green.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80% 80%;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  opacity: 0;
  right: 20px;
  width: 45px;
  height: 45px;
}


</style>
