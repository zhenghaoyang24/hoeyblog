<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return{
      article:[],
    }
  },
  methods:{
    // getArticleById(articles,id){
    //   return articles.filter(item => item.md_id === id)
    // }

  },
  computed:{
  ...mapGetters('MarkdownStore', ['markdownById']),
  },

  async created() {
    //获取文章
    window.scrollTo(0,0);
    this.article =this.markdownById(parseInt(this.$route.params.articleId))[0]
  },
}

</script>

<template>
  <div class="markdown-detail-body">
    <LeftBackButton></LeftBackButton>
    <h2>{{article.md_title}}</h2>
    <MarkdownInfo :md_user="article.md_user" :md_data="article.md_data" :md_label="article.md_label"></MarkdownInfo>
    <div class="markdown-content-text">
      <component :is="article.md_name" class="markdown-body"></component>
    </div>
    <BackTopButton></BackTopButton>
  </div>


</template>

<style scoped lang="less">

.markdown-detail-body{
  user-select: text;
  color: white;
  padding-top: 70px;
  width: 60%;
  margin:  0 auto;
  //border: 1px red solid;
}
/*文件可添加html样式*/
//markdown-text-background-color  文字背景


@media screen  and (max-width: 800px) {
  .markdown-detail-body{
    padding-top: 70px;
    width: 85%;
  }

}

</style>
