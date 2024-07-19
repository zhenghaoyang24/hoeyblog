<script>
import CategorySelect from "@/components/CategorySelect.vue";
import {mapGetters} from "vuex";

export default {
  name: 'ArticlePage',
  components: {CategorySelect},
  created() {
    window.scrollTo(0,0);
    this.getRouterParams()
    // this.articleType = this.$route.params.type;
    // this.articleLabel = this.$route.params.articleLabel;
  },
  data() {
    return {
      articleType: '',
      articleLabel: '',
      // articleList: []
    }
  },
  computed: {
    ...mapGetters('MarkdownStore', ['markdownListByType']),
  },
  methods:{
    getRouterParams() {
      const param_type =   this.$route.params.type;
      // this.articleLabel = this.$route.params.articleLabel;
      if (param_type===undefined){
        this.articleType = 'all'
      }else{
        this.articleType = param_type
      }
    },
  }

}

</script>

<template>
  <div class="article-page-body">
    <CategorySelect :selectCategory.sync="articleType"></CategorySelect>
    <MarkdownList :markdownList="markdownListByType(articleType)"></MarkdownList>
    <BackTopButton></BackTopButton>
  </div>
</template>

<style scoped lang="less">
.article-page-body {
  margin: 0 auto;
  padding: 70px 0;
  width: 60%;
}

@media  screen and (max-width: 800px) {
  .article-page-body{
    width: 90%;
    padding: 50px 0;
  }
}

</style>
