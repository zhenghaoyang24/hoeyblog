<script>
export default {
  name: 'MarkdownList',
  props: {
    markdownList: []
  },
  created() {


  },
}

</script>

<template>
  <div class="markdown-list-content">
    <div class="markdown-list-item" v-for="item in markdownList" :key="item.md_id" @click="$router.push(`/articleDetail/${item.md_id}`)">
      <MarkdownTitle :title="item.md_title"></MarkdownTitle>
      <h3>{{ item.md_describe }}</h3>
      <MarkdownInfo :md_user="item.md_user" :md_data="item.md_data" :md_label="item.md_label"></MarkdownInfo>
    </div>
  </div>
</template>

<style scoped lang="less">
.markdown-list-content {
  width: 100%;
}
.markdown-list-item{
  border-radius: 5px;
  transition: box-shadow 0.2s;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 20px;
}
.markdown-list-item>h3{
  margin: 10px 0 20px 0;
  font-size: 1em;
  font-weight: 500;
}


</style>
