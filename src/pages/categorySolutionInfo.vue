<template>
  <div :class="{ 'b-color': isColor, 'p-page': isPage }" style="height: auto;min-height: 100%;">
    <div v-if="solutionImgList.length != 0">
      <!-- <img  :src="item" v-for="(item,index) in solutionImgList" :key="index" style="width: 100%;display: block;" /> -->
      <van-image :src="item" v-for="(item, index) in solutionImgList" :key="index" style="width: 100%;display: block;"
        @click="getImage(item)">
        <template slot="loading">
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div v-else v-html="rich_text"></div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  name: 'categorySolutionInfo',

  data() {
    return {
      solutionImgList: [],
      rich_text: '',
      isColor: false,
      isPage: true
    }
  },
  computed: {
    // 创建一个计算属性来观察$route.query.isPage的变化
    computedIsPage() {
      // 直接返回$route.query.isPage的值
      // 注意：‌这里假设$route已经在您的组件中可用（‌例如，‌在router-view中）‌
      // 如果不是，‌您可能需要通过this.$route来访问它
      return this.$route.query.isPage //=== true || this.$route.query.isPage;
      // 注意：‌这里我假设了'isPage'可能是一个字符串'true'，‌也可能是布尔值true。‌
      // 根据您的实际情况，‌您可能需要调整这个条件。‌
      // 如果'isPage'总是布尔值，‌那么您可以去掉字符串比较。‌
    },
  },
  created() {
    this.getDetail()
    this.isColor = this.$route.query.isColor || false
    this.isPage = this.$route.query.isPage || true
  },
  methods: {
    getDetail(id) {
      // this.isPage=this.$route.query.isPage
      this.$http.categorySolutionTypeDetail({ id: this.$route.query.id }).then((res) => {

        if (res.code == 200) {

          if (res.data.solution_image.length != 0) {
            res.data.solution_image.forEach((res2) => {
              this.solutionImgList.push(res2.url)
            })
          } else {

            this.rich_text = res.data.rich_text.replace(/\<video/gi,
              '<video style="width:100%;height:auto;');
          }
        }

      })
    },
    getImage(img) {
      console.log(img)
      ImagePreview(this.solutionImgList);
    }
  }
}
</script>

<style lang="scss" scoped>
.b-color {
  background-color: #fff;
}
</style>
