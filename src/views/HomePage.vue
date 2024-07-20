<script>
import HomeJumbotron from "@/components/HomeJumbotron.vue";
import HoeyInfo from "@/components/HoeyInfo.vue"
import HoeyInfoMobile from "@/components/HoeyInfoMobile.vue"
import {mapGetters} from "vuex";
import {MarkdownType} from '@/assets/md/index.js'
import {MarkdownLabel} from '@/assets/md/index.js'

export default {
  name: 'HomePage',
  created() {

    this.markdownType = MarkdownType
    this.markdownLabel = MarkdownLabel
  },
  methods: {
    homePageScroll() {
      const elementText = this.$refs.homeJumbotronText
      this.scrollPageValue = document.documentElement.scrollTop || document.body.scrollTop
      elementText.style.marginTop = `${this.scrollPageValue - 50}px`
      // const _blurValue = (this.scrollPageValue / (window.innerHeight / 3).toFixed(3)).toFixed(2) * 10
      // if (_blurValue > 10) {
      //   this.blurValue = 10
      // } else {
      //   this.blurValue = this.blurValue + 0.4;
      // }
    },
  },
  data() {
    return {
      scrollPageValue: 0,
      blurValue: 0,
      markdownType: [],
      markdownLabel: []
    }
  },
  computed: {
    ...mapGetters('MarkdownStore', ['markdownListByType']),
  },
  mounted() {
    window.addEventListener('scroll', this.homePageScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.homePageScroll);
  },
  components: {
    HomeJumbotron,
    HoeyInfo,
    HoeyInfoMobile
  },
}

</script>

<template>
  <div class="home-page">
    <HomeJumbotron></HomeJumbotron>
    <!--    <HomeJumbotron :blurValue="blurValue"></HomeJumbotron>-->
    <div class="home-jumbotron-text" ref="homeJumbotronDiv">
      <span ref="homeJumbotronText">老师，我太想进步了.</span>
    </div>
    <div class="homepage-content-layout">
      <div class="homepage-content-layout-container">
        <div class="user-information-body">
          <HoeyInfo :markdownType="markdownType" :markdownLabel="markdownLabel"></HoeyInfo>
        </div>
        <div class="user-information-mobile-body">
          <HoeyInfoMobile :markdownType="markdownType" :markdownLabel="markdownLabel"></HoeyInfoMobile>
        </div>
        <div class="total-article-body">
          <MarkdownList :markdownList="markdownListByType('all')"></MarkdownList>
        </div>
      </div>
    </div>
    <BackTopButton></BackTopButton>
    <WebFooter></WebFooter>
  </div>
</template>

<style scoped lang="less">



.total-article-body {
  padding-left: 15px;
  flex-grow: 1;
}

.user-information-body {
  border-radius: 5px;
  transition: box-shadow 0.2s;
  position: sticky;
  top: 75px;
  min-width: 250px;
  width: 300px;
  height: fit-content;
}


.home-jumbotron-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > span {
    z-index: -1;
    font-size: 2rem;
    font-weight: bold;
    transition: margin-top 0.3s ease-out;
  }
}

.homepage-content-layout {
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  //height: 800px;
}

.homepage-content-layout-container {
  display: flex;
  width: 70%;
  padding-top: 20px;
  //border: 1px red solid;
}
.user-information-mobile-body{
  border-radius: 5px;
  display: none;
  flex-grow: 1;
  margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
  .homepage-content-layout-container{
    display: block;
    width: 90%;
  }
  .user-information-body{
    display: none;
  }
  .total-article-body {
    padding-left: 0;
  }
  .user-information-mobile-body{
   display: block;
  }
}



</style>
