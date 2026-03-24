<template>
    <div class="service">
        <h3 style="text-align: center;margin-top: 16px;">相关资讯</h3>
        <!-- 加载中状态 -->
        <div v-if="loading" class="loading-state">
            <div class="loading-spinner"></div>
            <span>加载中...</span>
        </div>
        <!-- 数据加载完成 -->
        <div v-else-if="list.length > 0" class="service-box">
            <div v-for="(t, i) in list" class="service-item" :key="i" @click="handleClick(t.id)">
                <div class="service-title">{{ t.title || "" }}</div>
                <div class="service-desc">{{ t.releaseTime?t.releaseTime.split(' ')[0] : '' }}</div>
            </div>
        </div>
        <div v-else class="empty-content">暂无内容</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'service',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            list: [],
            loading: false
        }
    },
    created() {
        // this.getServiceList()
    },
//       mounted() {
//     // 等待 DOM 更新
//     this.$nextTick(() => {
//       console.log('mounted 后的 data:', this.data)
//     })
//   },
  watch: {
    data: {
      handler(newVal) {
        this.$nextTick(() => {
        //   console.log('data 更新后的值:', newVal)
          this.getServiceList(newVal)
        })
      },
      immediate: true
    }
  },
    methods: {
        handleType(type) {
            let typeMap = ''
            switch (type) {
                case '空运专线':
                    typeMap = 'sea'
                    break;
                case '空运专线':
                    typeMap = 'air'
                    break;
                case '小包专线':
                    typeMap = 'packet'
                    break;
                default:
                    typeMap = 'news'
                    break;
            }
            return typeMap
        },
        async getServiceList(data) {
            if (!data || !data.name) return;
            this.loading = true;
            // /news-api/portal/front/newsCenter/logisticsNews
            // /news-api/portal/front/newsCenter/experience
            // /news-api/portal/front/newsCenter/industryTrends
            // /news-api/portal/front/newsCenter/notice
            // /news-api/portal/front/newsCenter/jiuFangNews
            // /news-api/portal/front/newsCenter/founderColumn
            if(this.handleType(data.name) == 'news'){
                return
            }else{
            try {
                await axios.post('/news-api/portal/front/newsCenter/fetchProductNews?type='+this.handleType(data.name),
                    {
                        pageNum: 1,
                        pageSize: 15,
                    }
                ).then(res => {
                    console.log(res)
                    
                    if (res.data.code == 0) {
                        this.list = res.data.data || []
                        console.log(this.list)
                    }
                })
            } catch (error) {
                console.error('获取服务列表失败:', error);
                this.list = [];
            } finally {
                this.loading = false;
            }
            }
            
        },
        handleClick(id){
            console.log(id)
             this.$router.push({
                path: '/trilateralInfo',
                query: {
                    id: id
                }
            })
        }
    }
}
</script>
<style scoped lang="scss">
.service-box {
    background-color: #fff;
    // margin: 0 auto;
    padding: 16px;
    overflow-y: auto;
    height: 300px;
    .service-item {
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid #f5f5f5;
        padding: 10px 0;
        
    }
}

.service-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /* 多行超出 */
    -webkit-box-orient: vertical;
    width: 220px;
    color: #1d2129;
    font-size: 14px;
    flex: 1
}

.service-desc {
    font-size: 12px;
    color: #86909c;

}

// 加载中状态样式
.loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    color: #666;
    font-size: 14px;
    
    .loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid #f3f3f3;
        border-top: 2px solid #FF8000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.empty-content {
    text-align: center;
    padding: 20px 0;
    color: #999;
}
</style>
