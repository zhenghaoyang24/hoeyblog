<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ThemeChangeButton",
  data() {
    return {
      theme_:''
    }
  },
  created() {
    this.theme = this.getTheme
  },
  computed: {
    ...mapGetters(['getTheme'])
  },
  watch: {
    getTheme(new_) {
      const element = this.$refs.themeChangeButtonImage
      if (new_ === "light") {
        element.classList.remove('theme-change-button-bg-dark')
        element.classList.add('theme-change-button-light')
        element.style.marginLeft = '25px'
      } else {
        element.classList.remove('theme-change-button-light')
        element.classList.add('theme-change-button-bg-dark')
        element.style.marginLeft = '0px'
      }
    }
  },
  methods: {
    ...mapMutations(['changeThemeMutations']),
    changeTheme() {
      this.changeThemeMutations()
    },
  }

}

</script>

<template>
  <div class="theme-change-button-body" @click="changeTheme">
    <div ref="themeChangeButtonImage" class="theme-change-button-bg-dark"></div>
  </div>
</template>

<style scoped lang="less">
.theme-change-button-bg-dark {
  background-image: url("@/assets/images/headerTop/night.png");
}
.theme-change-button-light{
  background-image: url("@/assets/images/headerTop/day.png");
}
.theme-change-button-body {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 5px;
  width: 50px;
  height: 23px;
  border-width: 1px;
  border-style: solid;

  > div {
    width: 22px;
    height: 22px;
    background-size: 90% 90%;
    background-position: center;
  }
}

</style>
