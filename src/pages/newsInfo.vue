<template>
  <div class="news-info-page">
    <!-- 返回按钮 -->
    <div class="back-bar">
      <van-icon name="arrow-left" class="back-icon" @click="goBack" />
    </div>

    <!-- 加载中 -->
    <div v-if="loading" class="loading-container">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>

    <!-- 内容区域 -->
    <div v-else-if="customizeData" class="news-content">
      <p class="customizeData-title">{{ customizeData.title || '' }}</p>
      <div class="customizeData-release">
        {{ (customizeData.releaseTime ? customizeData.releaseTime.split(' ')[0] : '') + '  编辑：九方通逊跨境物流网' }}
      </div>
      <div ref="richTextContainer" v-html="processedCustomizeText" class="rich-text-content"></div>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-content">暂无内容</div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import axios from 'axios'

export default {
  name: 'newsInfo',

  data() {
    return {
      customizeData: null,
      processedCustomizeText: '',
      loading: false,
    }
  },

  created() {
    this.getDetail()
    // 通知 uni-app 页面当前处于子页面状态
    this.notifyUniApp({ action: 'enterSubPage', page: 'newsInfo' })
  },

  methods: {
    /**
     * 返回上一页
     */
    goBack() {
      // 先通知 uni-app 页面准备返回
      this.notifyUniApp({ action: 'willGoBack' })

      // 如果是 webview 环境，尝试使用 uniapp/微信 JS-SDK 导航
      if (this.isInWebview()) {
        // 尝试使用微信 miniProgram API
        if (typeof wx !== 'undefined' && wx.miniProgram) {
          wx.miniProgram.navigateBack({
            fail: () => {
              this.doRouterBack()
            }
          })
          return
        }
        // 尝试使用 uni-app JS-SDK
        if (typeof uni !== 'undefined' && uni.navigateBack) {
          uni.navigateBack({
            fail: () => {
              this.doRouterBack()
            }
          })
          return
        }
      }
      this.doRouterBack()
    },

    /**
     * 执行路由返回
     */
    doRouterBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },

    /**
     * 检测是否在 uni-app/小程序 webview 环境中
     */
    isInWebview() {
      // 微信小程序环境
      if (typeof wx !== 'undefined' && wx.miniProgram) {
        return true
      }
      // uni-app 环境
      if (typeof uni !== 'undefined') {
        return true
      }
      // 通过 URL 参数或 UA 检测
      const ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('miniprogram') !== -1 || ua.indexOf('weixin') !== -1) {
        return true
      }
      return false
    },

    /**
     * 向 uni-app 页面发送消息
     */
    notifyUniApp(data) {
      try {
        // 微信小程序 webview 使用 wx.miniProgram.postMessage
        if (typeof wx !== 'undefined' && wx.miniProgram && wx.miniProgram.postMessage) {
          wx.miniProgram.postMessage({ data })
        }
        // 通用 postMessage
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(data, '*')
        }
      } catch (e) {
        console.log('postMessage failed:', e)
      }
    },

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
          const customContainer = document.createElement('div');
          customContainer.className = 'custom-list-container';

          const liElements = ul.querySelectorAll('li');
          liElements.forEach(li => {
            const customItem = document.createElement('div');
            customItem.className = 'custom-list-item';

            const icon = document.createElement('div');
            icon.className = 'custom-list-icon';
            const innerIcon = document.createElement('div');
            innerIcon.className = 'custom-list-icon-inner';
            icon.appendChild(innerIcon);

            const content = document.createElement('div');
            content.className = 'custom-list-content';

            while (li.firstChild) {
              content.appendChild(li.firstChild);
            }

            customItem.appendChild(icon);
            customItem.appendChild(content);
            customContainer.appendChild(customItem);
          });

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
     * 获取新闻详情数据
     */
    getDetail() {
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
          console.error('获取详情失败:', err);
        })
        .finally(() => {
          this.loading = false
        });
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
.news-info-page {
  background-color: #fff;
  min-height: 100%;
  font-size: 14px;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

.back-bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 0 12px;
  z-index: 100;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
}

.back-icon {
  font-size: 20px;
  color: #333;
  cursor: pointer;
}

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

.news-content {
  padding: 0 15px 20px;
}

/deep/ .rich-text-content {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  word-wrap: break-word;
  word-break: break-word;

  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;

  * {
    max-width: 100%;
    box-sizing: border-box;
  }

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

  p {
    margin: 0.5em 0;
    line-height: 1.6;
  }

  img {
    max-width: 100% !important;
    width: auto !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
    object-fit: contain;
  }

  video {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    display: block;
    margin: 10px auto;
    background-color: #000;
  }

  ul, ol {
    margin: 0.5em 0;
  }

  li {
    margin: 0.25em 0;
    line-height: 1.5;
  }

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

  blockquote {
    border-left: 3px solid #ddd;
    padding-left: 1em;
    margin: 0.5em 0;
    color: #666;
  }

  a {
    color: #007aff;
    text-decoration: none;
    word-break: break-all;

    &:active {
      opacity: 0.7;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 1em 0;
  }

  iframe {
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    min-height: 200px;
  }
}

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

  .custom-list-content {
    flex: 1;
    color: #333;
    word-break: break-word;

    strong, b {
      font-weight: bold;
    }

    span {
      display: inline;
    }
  }
}

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
