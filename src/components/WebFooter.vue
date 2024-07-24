<script>

export default {
  methods:{
    toGithub() {
      window.location.href = 'https://github.com/zhenghaoyang24';
    },
  }
}
</script>

<template>
  <div class="web-footer-body">
    <div class="footer-web-info-div">
      Designed and developed by &nbsp;<span @click="toGithub">@Hoey</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.web-footer-body {
  flex-grow: 1;
  padding: 20px 50px;
}

.footer-web-info-div {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin: auto 0;
  font-size: 12px;
  >span{
    transition: color 0.2s;
    cursor: pointer;
  }
}


</style>
