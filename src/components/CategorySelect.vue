<script>
import {MarkdownType} from "@/assets/md/index.js";
import {MarkdownList} from "@/assets/md/index.js";

export default {
  name: "CategorySelect",
  data() {
    return {
      category: [
        {type_id: 0, type_msg: '全部', type: 'all', count: MarkdownList.length},
      ]
    }
  },
  props: {
    selectCategory: String
  },
  created() {
    this.fetchCategory()
  },
  methods: {
    fetchCategory() {   //解析类别
      for (let i = 0; i < MarkdownType.length; i++) {
        this.category.push(MarkdownType[i])
      }
    },
    changeCategory(type) {
      this.$emit('update:selectCategory', type)
    },
  },
}
</script>

<template>
  <div class="category-select-body">
    <div class="category-select-title">类别</div>
    <div class="category-select-content">
      <div :class="item.type===selectCategory? 'category-select-item-active':'category-select-item-no-active'"
           v-for="item in category" :key="item.type_id" class="category-select-item"
           @click="changeCategory(item.type)">
        {{ item.type_msg }} {{ item.count }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.category-select-body {
  display: inline-block;
}
.category-select-content {
  display: flex;
  padding: 15px 0;
}

.category-select-item {
  font-weight: 500;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  padding: 0 5px 0 5px;
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

</style>
