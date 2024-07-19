<script>
import {MarkdownList} from "@/assets/md/index.js";
// import {getYear} from "@/assets/utils/getTimeUtil.js";

export default {
  name: "TimelinePage",
  data() {
    return {
      allTimeline: [],  //时间线解析结果
      allYear: []
    }
  },
  async created() {
    await this.fetchAllTimeline()
    this.fetchAllYear()
    // console.log(this.allTimeline)
    // console.log(this.allYear)
  },
  methods: {
    fetchAllTimeline() {
      let year = null;
      for (let i = 0; i < MarkdownList.length; i++) {
        year = MarkdownList[i].md_data.split('-')
        // console.log(`year:${year}`)
        this.allTimeline.push({
          tl_id: MarkdownList[i].md_id,
          tl_title: MarkdownList[i].md_title,
          tl_data: year,
        })
      }
    },
    fetchAllYear() {
      for (let i = 0; i < this.allTimeline.length; i++) {
        if (this.allYear.length === 0) {
          this.allYear.push({
            id: this.allYear.length + 1,
            year: this.allTimeline[i].tl_data[0].toString(),
          })
        } else {
          if (this.allYear[this.allYear.length - 1].year !== this.allTimeline[i].tl_data[0]) {
            this.allYear.push({
              id: this.allYear.length + 1,
              year: this.allTimeline[i].tl_data[0]
            })
          }
        }
      }
    },
  }
}

</script>

<template>
  <div class="timeline-page-body">
    <div v-for="item in allYear" :key="item.id" class="timeline-page-body-year">
      <h2>{{ item.year }}</h2>
      <div v-show="item.year===timeline.tl_data[0]" v-for="timeline in allTimeline" :key="timeline.tl_id"
           class="timeline-page-body-item"  @click="$router.push(`/articleDetail/${timeline.tl_id}`)">
        <span></span>
        <span>{{ timeline.tl_data[1] }}-{{ timeline.tl_data[2] }}</span>
        <span> {{ timeline.tl_title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.timeline-page-body-item {
  transition: color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px 0;
  span:nth-child(1) {
    margin-left: -16px;
    display: flex;
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  span:nth-child(2) {
    margin-left: 10px;
  }

  span:nth-child(3) {
    padding-left: 30px;
  }
}
//.timeline-page-body-item:hover{
//  color: #00f699;
//  >span:nth-child(1){
//    background-color: #00f699;
//  }
//}

.timeline-page-body {
  margin: 70px auto;
  width: 60%;
  border-left-style: solid;
  border-left-width: 3px;
  padding-left: 10px;
}

.timeline-page-body-year {
  margin: 20px 0;
  > h2 {
    margin: 0;
    padding: 0;
    //color: #d5d5d5;
  }
}
@media  screen and (max-width: 800px) {
  .timeline-page-body {
    margin: 60px auto;
    width: 80%;
  }
}

</style>
