<template>
  <div class="solutionBox">
    <!-- <van-loading type="spinner" size="20" /> -->
    <div v-if="isRichText" v-html="processedRichText"></div>
    <div v-else>
      <van-image :src="item" v-for="(item, index) in solutionImgList" :key="index" style="width: 100%;display: block;">
        <template slot="loading">
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>


    <!-- <img :lazy="img"  ></img> -->
  </div>
</template>

<script>
export default {
  name: 'solutionInfo',
  data() {
    return {
      solutionImgList: [],
      isRichText: false,
      richText: ''
    }
  },

  created() {
    this.$route.meta.title = this.$route.query.title || '详情'

    this.getDetail()
  },
  computed: {
    processedRichText() {
      // 1. 若富文本为空，直接返回
      if (!this.richText) return '';

      // 2. 创建临时DOM容器，解析富文本结构
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = this.richText;

      // 3. 查找第一个符合 <p><br></p> 结构的元素
      // 先找所有p标签
      const pTags = tempDiv.querySelectorAll('p');

      // 遍历p标签，找到内容仅为<br>的第一个p标签
      for (const pTag of pTags) {
        // 检查p标签是否只包含一个<br>标签且没有其他内容
        if (pTag.children.length === 1 &&
          pTag.firstElementChild.tagName.toLowerCase() === 'br' &&
          pTag.textContent.trim() === '') {

          // 移除这个p标签
          pTag.parentNode.removeChild(pTag);
          break; // 只移除第一个符合条件的
        }
      }

      // 4. 返回处理后的HTML字符串
      return tempDiv.innerHTML;
    }
  },
  methods: {
    getDetail(id) {

      this.$http.solutionDetail({ id: this.$route.query.id }).then((res) => {

        if (res.code == 200) {
          if (res.data.solution_image.length != 0) {
            this.isRichText = false
            res.data.solution_image.forEach((res2) => {
              this.solutionImgList.push(res2.url)
            })
          } else if (res.data.rich_text != '') {
            this.isRichText = true
            this.richText = res.data.rich_text
          }
        }
        console.log(this.isRichText, this.richText, this.solutionImgList)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.solutionBox {
  background: #fff;
  margin: 14px
}

/deep/ video {
  width: 100% !important;
  // height: auto !important;
}
</style>
