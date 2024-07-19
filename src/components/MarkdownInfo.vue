<script>
export default {
  props: {
    md_user: String,
    md_data: String,
    md_label: []
  }

}

</script>

<template>
  <div class="markdown-info-body">
    <div><span></span>{{ md_user }}</div>
    <div><span></span>{{ md_data }}</div>
    <div><span></span><label v-for="item in md_label" :key="item.label_id">{{ item }}</label></div>
  </div>

</template>

<style scoped lang="less">
.markdown-info-body {
  display: flex;
  //color: #9f9f9f;
  color: #777777;
  font-size: 0.8em;

  > div {
    > span {
      margin-right: 5px;
      width: 15px;
      height: 15px;
      display: block;
      background-position: center;
      background-size: 95% 95%;
      background-repeat: no-repeat;
    }
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
}
.markdown-info-body > div:nth-child(1) > span {
  background-size: 80% 80%;
  background-image: url("@/assets/images/markdoenInfoIcon/user-dark.png");
}
.markdown-info-body > div:nth-child(2) > span {
  background-size: 90% 90%;
  background-image: url("@/assets/images/markdoenInfoIcon/time-dark.png");
}
.markdown-info-body > div:nth-child(3) > span {
  background-size: 95% 95%;
  background-image: url("@/assets/images/markdoenInfoIcon/label-dark.png");
}

.markdown-info-body > div:nth-child(3) > label {
  transition: color 0.2s;
  margin-right: 7px;
}
.markdown-info-body > div:nth-child(3) > label:hover {
  cursor: pointer;
}
</style>
