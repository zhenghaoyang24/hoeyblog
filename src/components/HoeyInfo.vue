<script>
export default {
  name: 'HoeyInfo',
  props:{
    markdownType: [],
    markdownLabel: []
  },
  methods: {
    toTheTypeArticle(type){
      this.$router.push({path:`/article/${type}`})
    }
  },
  computed: {
    articleTotal() {
      return this.markdownType.reduce((total, item) => total + item.count, 0);
    },
    labelTotal() {
      return this.markdownLabel.length
    },
  }


}
</script>

<template>
  <div class="hoey-info-body">
    <div class="hoey-info-avatar">
      <img src="@/assets/images/hoeyInfo/touxiang.png" alt="头像">
    </div>
    <div class="hoey-info-name">Hoey</div>
    <div class="article-label-total-body">
      <div>
        <div>{{ articleTotal }}</div>
        <div>文章</div>
      </div>
      <div>
        <div>{{ labelTotal }}</div>
        <div>标签</div>
      </div>
    </div>
    <hr class="hoey-info-hr">
    <div class="article-label-detail-body">
      <div class="article-label-detail-title">
        <span class="article-label-detail-title-category"></span>
        <span>类别</span>
      </div>
      <div v-for="(item) in markdownType" :key="item.type_id" class="hoey-info-category-item" @click="toTheTypeArticle(item.type)">
        <span>{{ item.type_msg }}</span>
        <span>{{ item.count }}</span>
      </div>
    </div>
    <div class="article-label-detail-body">
      <div class="article-label-detail-title">
        <span class="article-label-detail-title-label"></span>
        <span>标签</span>
      </div>
      <div class="hoey-info-label-item">
        <span v-for="item in markdownLabel" :key="item.label_id"
              :style="{ backgroundColor: item.color }">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.hoey-info-body {
  width: auto;
  height: auto;
  padding: 20px 10px;
}

.hoey-info-avatar {
  margin: 0 auto;
  border-radius: 40px;
  width: 80px;
  height: 80px;
  border: 1px #4a4a4a solid;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
}

.hoey-info-name {
  font-weight: 500;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
}

.hoey-info-hr {
  width: 80%;
  border: none;
  height: 1px;
}

.article-label-total-body {
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;

  > div {
    font-size: 1.2rem;
    display: grid;
    place-items: center; /* 水平和垂直居中 */

    > div:nth-child(2) {
      font-size: 0.7rem;
    }
  }
}

.article-label-detail-body {
  padding-top: 10px;
  padding-bottom: 20px;
}

.article-label-detail-title {
  display: flex;
  align-items: center;

  > span:nth-child(1) {
    margin-right: 5px;
    display: flex;
    background-size: cover;
    height: 15px;
    width: 15px;
    background-position: center;
  }

  > span:nth-child(2) {
    font-size: 15px;
  }
}

.article-label-detail-title-category {
  background-image: url("@/assets/images/hoeyInfo/category-icon.png");

}

.article-label-detail-title-label {
  background-image: url("@/assets/images/hoeyInfo/label.png");
}

.hoey-info-category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  padding: 9px;
  font-size: 15px;

  > span:nth-child(1) {
    transition: all 0.3s;
  }

  > span:nth-child(2) {
    padding: 3px;
    width: 16px;
    border-radius: 3px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.hoey-info-label-item {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.hoey-info-label-item > span {
  transition: all 0.3s;
  cursor: pointer;
  margin: 0 7px 7px 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 3px;
  color: white;
}
.hoey-info-label-item > span:hover{
  transform: scale(1.05);
}
</style>
