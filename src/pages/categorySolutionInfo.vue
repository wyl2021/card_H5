<template>
  <div :class="{ 'b-color': isColor, 'p-page': isPage }" style="height: auto;min-height: 100%;">
    <!-- 图片列表模式 -->
    <!-- <div v-if="solutionImgList.length != 0">
      <van-image 
        :src="item" 
        v-for="(item, index) in solutionImgList" 
        :key="index" 
        style="width: 100%;display: block;"
        @click="getImage(item)"
      >
        <template slot="loading">
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div> -->
    
    <!-- 富文本模式 -->
     <!-- v-else -->
    <div >
      <div v-if="isCustomize">
        <p class="customizeData-title">{{customizeData.title || ''}}</p>
        <div class="customizeData-release">{{ (customizeData.releaseTime ? customizeData.releaseTime.split(' ')[0] : '') + '  编辑：九方通逊跨境物流网' }}</div>
        <div ref="richTextContainer" v-html="processedCustomizeText" class="rich-text-content"></div>
      </div>
      <div v-else   v-html="processedRichText"></div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import axios from 'axios'

export default {
  name: 'categorySolutionInfo',

  data() {
    return {
      solutionImgList: [],
      rich_text: '',
      customizeData: null,
      isColor: false,
      isPage: true,
      isCustomize: false,
      processedRichText: '', // 处理后的普通富文本
      processedCustomizeText: '' // 处理后的自定义富文本
    }
  },
  
  computed: {
    computedIsPage() {
      return this.$route.query.isPage
    },
  },
  
  created() {
    this.isCustomize = this.$route.query.isCustomize || false
    this.isCustomize ? this.getCustomizeDetail() : this.getDetail()
    this.isColor = this.$route.query.isColor || false
    this.isPage = this.$route.query.isPage || true
  },
  
  methods: {
    /**
     * 处理富文本中的图片，添加referrerpolicy和width样式
     */
    processRichTextImages(htmlString) {
      if (!htmlString) return '';
      
      // 为所有img标签添加referrerpolicy属性和内联样式
      let processed = htmlString.replace(
        /<img /gi, 
        '<img referrerpolicy="no-referrer" style="width:100%; height:auto; display:block; margin:10px auto;" '
      );
      
      return processed;
    },
    
    /**
     * 获取详情数据（原有接口）
     */
    getDetail() {
      this.$http.categorySolutionTypeDetail({ id: this.$route.query.id }).then((res) => {
        if (res.code == 200) {
                  this.rich_text = res.data.rich_text || '';
            this.processedRichText = this.processRichTextImages(this.rich_text);
          // if (res.data.solution_image && res.data.solution_image.length != 0) {
          //   // 图片模式
          //   res.data.solution_image.forEach((res2) => {
          //     this.solutionImgList.push(res2.url)
          //   })
          // } else {
          //   // 富文本模式 - 处理图片后使用
          //   this.rich_text = res.data.rich_text || '';
          //   this.processedRichText = this.processRichTextImages(this.rich_text);
          // }
        }
      }).catch(err => {
        console.error('获取详情失败:', err);
      });
    },

    /**
     * 获取自定义详情
     */
    getCustomizeDetail() {
      axios({
        url: '/news-api/portal/front/newsCenter/detail/' + this.$route.query.id,
        method: 'get',
      }).then((res) => {
        if (res.data.code == 0) {
          this.customizeData = res.data.data;
          // 处理富文本中的图片
          this.processedCustomizeText = this.processRichTextImages(this.customizeData.text || '');
        }
      }).catch(err => {
        console.error('获取自定义详情失败:', err);
      });
    },

    /**
     * 图片预览
     */
    getImage(img) {
      if (this.solutionImgList && this.solutionImgList.length > 0) {
        ImagePreview({
          images: this.solutionImgList,
          startPosition: this.solutionImgList.indexOf(img),
          closeable: true,
          showIndex: true,
          loop: true
        });
      }
    },

    /**
     * 重置数据
     */
    resetData() {
      this.solutionImgList = [];
      this.customizeData = null;
      this.processedRichText = '';
      this.processedCustomizeText = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.b-color {
  background-color: #fff;
}

.rich-text-content {
  font-size: 14px;
  
  // 使用 ::v-deep 处理图片样式（Vue 2 写法）
  ::v-deep img {
    width: 100% !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
  }
}

.customizeData-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.customizeData-release {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
  text-align: center;
}
</style>