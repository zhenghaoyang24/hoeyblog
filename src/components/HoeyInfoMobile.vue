<script>
export default {
  name: "HoeyInfoMobile",
  props:{

    markdownType: [],
    markdownLabel: []
  },
  data() {
    return{
      selectedType:'type'
    }
  },
  computed: {
    articleTotal() {
      return this.markdownType.reduce((total, item) => total + item.count, 0);
    },
    labelTotal() {
      return this.markdownLabel.length
    },
  },
  methods:{
    toTheTypeArticle(type){
      this.$router.push({path:`/article/${type}`})
    },
    selectTypeLabelButton(select) {
      this.selectedType = select;
    },
  }
}

</script>

<template>
<div class="hoey-info-mobile-body">
  <div class="hoey-info-mobile-left">
    <img src="@/assets/images/hoeyInfo/touxiang.png" alt="头像">
    <div class="hoey-info-mobile-left-name">Hoey</div>
    <div class="mobile-article-label-total-body">
      <div>
        <div>{{ articleTotal }}</div>
        <div>文章</div>
      </div>
      <div>
        <div>{{ labelTotal }}</div>
        <div>标签</div>
      </div>
    </div>
  </div>
  <div class="hoey-info-mobile-right">
    <div class="article-type-select-body">
      <span  :class="selectedType==='type'? 'category-select-item-active':'category-select-item-no-active'" @click="selectTypeLabelButton('type')">类别</span>
      <span  :class="selectedType==='label'? 'category-select-item-active':'category-select-item-no-active'" @click="selectTypeLabelButton('label')">标签</span>
    </div>
    <div class="mobile-article-type-label">
        <span class="mobile-article-label" v-show="selectedType==='label'" v-for="item in markdownLabel" :key="item.label_id"
              :style="{ backgroundColor: item.color }">{{ item.label }}</span>
      <span class="mobile-article-type"  v-show="selectedType==='type'" v-for="item in markdownType" :key="item.type" @click="toTheTypeArticle(item.type)">{{ item.type_msg }} {{item.count}}</span>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.hoey-info-mobile-body{
  //border: 1px red solid;
  display: flex;
  padding: 10px;
}
.hoey-info-mobile-left{
  min-width: 150px;
  flex-grow: 1;
  > img {
    display: block;
    margin: 0 auto;
    border-radius: 30px;
    width: 60px;
    height: 60px;
  }
}
.hoey-info-mobile-left-name{
  text-align: center;
  font-size: 15px;
  margin: 0 auto;
}
.mobile-article-label-total-body{
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  > div {
    font-size: 1.2rem;
    display: grid;
    place-items: center; /* 水平和垂直居中 */

    > div:nth-child(2) {
      font-size: 0.7rem;
    }
  }
}



.hoey-info-mobile-right{
  flex-grow: 4;
}
.article-type-select-body{

  display: flex;
  >span{
    font-size: 15px;
    transition: all 0.2s;
    cursor: pointer;
    display: block;
    padding: 5px;
    border-radius: 3px;
    margin: 0 0 5px 5px;
  }
}
.mobile-article-type-label{

  margin: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.mobile-article-label{
  transition: all 0.3s;
  cursor: pointer;
  margin: 0 7px 7px 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 3px;
  color: white;
}
.mobile-article-type{
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 13px;
  padding: 5px;
}
</style>
