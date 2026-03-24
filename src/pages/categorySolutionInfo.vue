<template>
  <div :class="{ 'b-color': isColor, 'p-page': isPage }" style="height: auto;min-height: 100%;">
    <!-- 加载中
    <div v-if="loading" class="loading-container">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
     -->
    <!-- 富文本模式 -->

      <div v-if="solutionImgList.length > 0" class="image-container">
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
      </div>
     <div v-else>
       <div v-if="isCustomize && customizeData">
        <p class="customizeData-title">{{ customizeData.title || '' }}</p>
        <div class="customizeData-release">{{ (customizeData.releaseTime ? customizeData.releaseTime.split(' ')[0] : '') + '  编辑：九方通逊跨境物流网' }}</div>
        <div ref="richTextContainer" v-html="processedCustomizeText" class="rich-text-content"></div>
      </div>
      <div v-else-if="!isCustomize && processedRichText" v-html="processedRichText" class="rich-text-content"></div>
      <div v-else class="empty-content">暂无内容</div>
     </div>
     <component v-if="isComponent" :is="currentComponent" :data="data"></component>
    </div>

</template>

<script >
import { ImagePreview } from 'vant';
import axios from 'axios'
import component from "@/pages/data/componet.js"
import { nextTick } from 'vue/types/umd.js';
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
      processedRichText: '',
      processedCustomizeText: '',
      loading: false,
      data:null,
      isComponent:false,
    }
  },
  
  computed: {
    computedIsPage() {
      return this.$route.query.isPage
    },
    currentComponent(){
      console.log(localStorage.getItem("id"),component)
      return component[localStorage.getItem("id")][0]
    }
    ,
    // currentComponent(){
    //   return this.isComponent[this.$route.query.component] || {}
    // }
  },
  
  created() {
    this.isCustomize = this.$route.query.isCustomize || false //是否三方详情
    this.isColor = this.$route.query.isColor || false ///是否带颜色
    this.isPage = this.$route.query.isPage || true  //带间距
    this.isComponent=this.$route.query.isComponent || false //是否使用组件
    if (this.isCustomize) {
      this.getCustomizeDetail()
    } else {
      this.getDetail()
    }

  },
  
  methods: {
    /**
     * 将标准列表转换为自定义样式列表
     */
    convertListToCustomStyle(html) {
      if (!html) return '';
      
      try {
        // 创建临时 DOM 解析 HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // 处理所有无序列表
        const ulElements = tempDiv.querySelectorAll('ul');
        ulElements.forEach(ul => {
          // 将 ul 替换为自定义容器
          const customContainer = document.createElement('div');
          customContainer.className = 'custom-list-container';
          
          // 处理每个 li
          const liElements = ul.querySelectorAll('li');
          liElements.forEach(li => {
            const customItem = document.createElement('div');
            customItem.className = 'custom-list-item';
            
            // 创建自定义图标
            const icon = document.createElement('div');
            icon.className = 'custom-list-icon';
            const innerIcon = document.createElement('div');
            innerIcon.className = 'custom-list-icon-inner';
            icon.appendChild(innerIcon);
            
            // 创建内容容器
            const content = document.createElement('div');
            content.className = 'custom-list-content';
            
            // 移动 li 的所有子节点到 content
            while (li.firstChild) {
              content.appendChild(li.firstChild);
            }
            
            customItem.appendChild(icon);
            customItem.appendChild(content);
            customContainer.appendChild(customItem);
          });
          
          // 替换原始 ul
          ul.parentNode.replaceChild(customContainer, ul);
        });
        
        // 处理有序列表
        const olElements = tempDiv.querySelectorAll('ol');
        olElements.forEach(ol => {
          const customContainer = document.createElement('div');
          customContainer.className = 'custom-list-container ordered';
          
          const liElements = ol.querySelectorAll('li');
          let counter = 1;
          
          liElements.forEach(li => {
            const customItem = document.createElement('div');
            customItem.className = 'custom-list-item';
            
            // 创建带数字的图标
            const icon = document.createElement('div');
            icon.className = 'custom-list-icon ordered-icon';
            icon.innerText = counter++;
            
            const content = document.createElement('div');
            content.className = 'custom-list-content';
            
            while (li.firstChild) {
              content.appendChild(li.firstChild);
            }
            
            customItem.appendChild(icon);
            customItem.appendChild(content);
            customContainer.appendChild(customItem);
          });
          
          ol.parentNode.replaceChild(customContainer, ol);
        });
        
        return tempDiv.innerHTML;
      } catch (error) {
        console.error('转换列表样式失败:', error);
        return html;
      }
    },
    
    /**
     * 处理富文本内容，优化移动端显示
     */
    processRichText(htmlString) {
      if (!htmlString) return '';
      
      let processed = htmlString;
      
      // 1. 处理图片：添加 referrerpolicy 和样式
      processed = processed.replace(
        /<img /gi,
        '<img referrerpolicy="no-referrer" style="max-width:100%; width:auto; height:auto; display:block; margin:10px auto;" '
      );
      
      // 2. 移除图片上的固定宽高属性
      processed = processed.replace(/width="\d+"/gi, '');
      processed = processed.replace(/height="\d+"/gi, '');
      
      // 3. 处理视频：添加自适应样式
      processed = processed.replace(
        /<video /gi,
        '<video style="max-width:100%; width:100%; height:auto; display:block; margin:10px auto;" controls="controls" '
      );
      
      // 4. 处理表格：添加移动端适配
      processed = processed.replace(
        /<table /gi,
        '<table style="width:100%; border-collapse:collapse; overflow-x:auto; display:block; -webkit-overflow-scrolling:touch;" '
      );
      
      // 5. 处理 iframe 嵌入内容（如视频）
      processed = processed.replace(
        /<iframe /gi,
        '<iframe style="max-width:100%; width:100%; height:auto; min-height:200px;" frameborder="0" '
      );
      
      // 6. 移除可能导致显示异常的内联字体大小（保留相对单位）
      processed = processed.replace(
        /font-size:\s*\d+px/gi,
        (match) => {
          const pxValue = parseInt(match.match(/\d+/)[0]);
          if (pxValue > 20) {
            return `font-size: ${pxValue / 14}rem`;
          }
          return match;
        }
      );
      
      // 7. 转换列表为自定义样式
      processed = this.convertListToCustomStyle(processed);
      
      return processed;
    },
    
    /**
     * 获取详情数据（原有接口）
     */
    getDetail() {
      this.loading = true
      // console.log(this.$route.query.id)
      this.$http.categorySolutionTypeDetail({ id: this.$route.query.id })
        .then((res) => {
          if (res.code == 200) {
            this.data = res.data
           
            if (res.data.solution_image.length > 0) {
            res.data.solution_image.forEach((res2) => {
              this.solutionImgList.push(res2.url)
            })            
          }else{
            console.log(!this.isCustomize && this.processedRichText)
            this.rich_text = res.data.rich_text || '';
            this.processedRichText = this.processRichText(this.rich_text);
            }
          
          }
        })
        .catch(err => {
          console.error('获取详情失败:', err);
        })
        .finally(() => {
          this.loading = false
        });
    },

    /**
     * 获取自定义详情
     */
    getCustomizeDetail() {
      this.loading = true
      axios({
        url: '/news-api/portal/front/newsCenter/detail/' + this.$route.query.id,
        method: 'get',
      })
        .then((res) => {
          if (res.data.code == 0) {
            this.customizeData = res.data.data;
            this.processedCustomizeText = this.processRichText(this.customizeData.text || '');
          }
        })
        .catch(err => {
          console.error('获取自定义详情失败:', err);
        })
        .finally(() => {
          this.loading = false
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
    },
    
    /**
     * 修复视频样式（在 DOM 更新后执行）
     */
    fixVideoStyles() {
      this.$nextTick(() => {
        const container = this.$refs.richTextContainer;
        if (container) {
          const videos = container.querySelectorAll('video');
          videos.forEach(video => {
            video.style.maxWidth = '100%';
            video.style.width = '100%';
            video.style.height = 'auto';
          });
        }
        
        // 处理全局的视频
        const allVideos = document.querySelectorAll('.rich-text-content video');
        allVideos.forEach(video => {
          video.style.maxWidth = '100%';
          video.style.width = '100%';
          video.style.height = 'auto';
        });
      });
    }
  },
  
  updated() {
    this.fixVideoStyles();
  },
  
  mounted() {
    this.fixVideoStyles();
  },
}
</script>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.empty-content {
  text-align: center;
  padding: 50px 0;
  color: #999;
  font-size: 14px;
}

.b-color {
  background-color: #fff;
}

.p-page {
  font-size: 14px;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

// Vue 2 深度选择器 - 确保样式穿透到 v-html 内容
/deep/ .rich-text-content {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  word-wrap: break-word;
  word-break: break-word;
  
  // 防止移动端字体自动放大
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  
  // 所有元素继承字体大小
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
  
  // 标题样式 - 使用相对单位
  h1 {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0.5em 0;
    line-height: 1.3;
  }
  
  h2 {
    font-size: 1.6em;
    font-weight: bold;
    margin: 0.5em 0;
    line-height: 1.3;
  }
  
  h3 {
    font-size: 1.4em;
    font-weight: bold;
    margin: 0.5em 0;
    line-height: 1.3;
  }
  
  h4 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0.5em 0;
    line-height: 1.3;
  }
  
  h5, h6 {
    font-size: 1em;
    font-weight: bold;
    margin: 0.5em 0;
    line-height: 1.3;
  }
  
  // 段落
  p {
    margin: 0.5em 0;
    line-height: 1.6;
  }
  
  // 图片样式
  img {
    max-width: 100% !important;
    width: auto !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
    object-fit: contain;
  }
  
  // 视频样式
  video {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
    background-color: #000;
  }
  
  // 列表样式 - 保留给可能的标准列表
  ul, ol {
    margin: 0.5em 0;
  }
  
  li {
    margin: 0.25em 0;
    line-height: 1.5;
  }
  
  // 表格样式 - 移动端适配
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5em 0;
    font-size: 0.9em;
    overflow-x: auto;
    display: block;
    -webkit-overflow-scrolling: touch;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 0.5em;
    text-align: left;
    vertical-align: top;
    word-break: break-word;
  }
  
  th {
    background: #f5f5f5;
    font-weight: bold;
  }
  
  // 代码块
  pre {
    background: #f5f5f5;
    padding: 0.8em;
    overflow-x: auto;
    font-size: 0.9em;
    border-radius: 4px;
    margin: 0.5em 0;
  }
  
  code {
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    background: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
  
  // 引用
  blockquote {
    border-left: 3px solid #ddd;
    padding-left: 1em;
    margin: 0.5em 0;
    color: #666;
  }
  
  // 链接
  a {
    color: #007aff;
    text-decoration: none;
    word-break: break-all;
    
    &:active {
      opacity: 0.7;
    }
  }
  
  // 分割线
  hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 1em 0;
  }
  
  // iframe 嵌入内容
  iframe {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    min-height: 200px;
  }
}

// 自定义列表容器样式
/deep/ .custom-list-container {
  margin: 0.5em 0;
  
  .custom-list-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    line-height: 1.5;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  // 自定义图标样式（橙色圆形）
  .custom-list-icon {
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    margin-right: 8px;
    margin-top: 4px;
    border-radius: 50%;
    border: 1px solid #ff7d00;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    
    .custom-list-icon-inner {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #ff7d00;
    }
  }
  
  // 有序列表的图标样式
  .ordered-icon {
    width: auto;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ff7d00;
    background-color: transparent;
    font-size: 12px;
    color: #ff7d00;
    font-weight: bold;
    line-height: 18px;
    text-align: center;
    margin-top: 0;
  }
  
  // 内容区域
  .custom-list-content {
    flex: 1;
    color: #333;
    word-break: break-word;
    
    // 保持内部样式
    strong, b {
      font-weight: bold;
    }
    
    span {
      display: inline;
    }
  }
}

// 自定义标题样式
/deep/ .customizeData-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.3;
  word-break: break-word;
}

/deep/ .customizeData-release {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
  text-align: center;
}
</style>

<!-- 全局样式，确保覆盖所有情况 -->
<style lang="scss">
// 全局样式，不添加 scoped
.rich-text-content {
  font-size: 14px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  
  img {
    max-width: 100% !important;
    width: auto !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
  }
  
  video {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
  }
  
  iframe {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
  }
}

// 自定义列表全局样式
.custom-list-container {
  margin: 0.5em 0;
  
  .custom-list-item {
    display: flex !important;
    align-items: flex-start;
    margin-bottom: 8px;
    
    .custom-list-icon {
      flex-shrink: 0;
      width: 11px;
      height: 11px;
      margin-right: 8px;
      margin-top: 4px;
      border-radius: 50%;
      border: 1px solid #ff7d00;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      
      .custom-list-icon-inner {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #ff7d00;
      }
    }
    
    .custom-list-content {
      flex: 1;
      word-break: break-word;
    }
  }
}
</style>