<script>
export default {
  props: {
    title: String,
  }


}
</script>

<template>
  <div class="markdown-title-content">
    {{ title }}
  </div>
</template>

<style scoped lang="less">
.markdown-title-content {
  margin: 10px 0 10px 0;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
}

.markdown-title-content::after {
  content: "";
  display: block;
  //left: 0;
  width: 0;
  height: 4px;

  transition: width 0.2s ease;
}

.markdown-title-content:hover::after {
  width: 100%;
}
</style>
