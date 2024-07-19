<script>
export default {
  name: "LeftBackButton",
}

</script>

<template>
<div class="left-back-button" @click="$router.back()">

</div>
</template>
<style scoped lang="less">
.left-back-button {
  background-image: url("@/assets/images/button/back-green.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80% 80%;
  border-radius: 4px;
  cursor: pointer;
  position: fixed;
  top: 100px;
  left: 20px;
  width: 40px;
  height: 40px;
}
</style>
