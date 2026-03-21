<template>
    <div class="new-page">
        <van-tabs v-model="active" title-active-color="#FF8000" color="#FF8000">
            <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
                <div>
                    <!-- 空状态 -->
                    <div v-if="item.data.length === 0 && !item.loading" class="empty-state">
                        <van-icon name="info-o" size="48px" color="#c9c9c9" />
                        <p class="empty-text">暂无数据</p>
                    </div>
                    
                    <!-- 列表内容 -->
                    <div v-else>
                        <!-- 列表项 - 只有在非首次加载或加载完成后才显示 -->
                        <div v-if="!item.loading || item.pageNo > 1">
                            <div class="new-box" v-for="(item2, index2) in item.data" :key="item2.id || index2"
                                @click="getTo(item2.id)">
                                <img referrerpolicy="no-referrer" :src="item2.sysImage" 
                                     style="width:120px; height:80px; object-fit:cover;">
                                <div class="new-text-item">
                                    <div>
                                        <div class="new-text-item-name">{{ item2.title || "-" }}</div>
                                        <div class="new-text-item-releaseTime">{{ item2.releaseTime || '-' }}</div>
                                    </div>
                                    <div class="new-text-item-description">{{ item2.description || '-' }}</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 加载中动画 - 首次加载时显示 -->
                        <div v-if="item.loading && item.pageNo === 1" class="loading-state">
                            <div class="loading-spinner"></div>
                            <span>加载中...</span>
                        </div>
                        
                        <!-- 加载更多 - 自定义上拉加载 -->
                        <div v-if="!(item.loading && item.pageNo === 1)"> 
                        <div 
                            v-if="item.hasMore" 
                            class="load-more"
                            :class="{ 'loading': item.loadingMore }"
                            @click="loadMore(item)"
                        >
                            <div v-if="item.loadingMore" class="loading-spinner"></div>
                            <span>{{ item.loadingMore ? '加载中...' : '点击加载更多' }}</span>
                        </div>
                        <div v-else class="no-more">
                            没有更多数据了
                        </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'NewsPage',
    data() {
        return {
            // 当前激活的tab索引
            active: 0,
            // tab列表配置
            tabList: [
                {
                    name: '物流资讯',
                    apiPath: '/news-api/portal/front/newsCenter/logisticsNews',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,      // 控制首次加载和下拉刷新的loading
                    loadingMore: false    // 【新增】专门控制上拉加载更多的loading
                },
                {
                    name: '外贸经验',
                    apiPath: '/news-api/portal/front/newsCenter/experience',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,
                    loadingMore: false
                },
                {
                    name: '电商相关',
                    apiPath: '/news-api/portal/front/newsCenter/industryTrends',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,
                    loadingMore: false
                },
                {
                    name: '通知公告',
                    apiPath: '/news-api/portal/front/newsCenter/notice',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,
                    loadingMore: false
                },
                {
                    name: '九方新闻',
                    apiPath: '/news-api/portal/front/newsCenter/jiuFangNews',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,
                    loadingMore: false
                },
                {
                    name: '创始人专栏',
                    apiPath: '/news-api/portal/front/newsCenter/founderColumn',
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    hasMore: true,
                    loading: false,
                    loadingMore: false
                }
            ]
        }
    },
    
    created() {
        // 页面创建时加载第一个tab的数据
        this.getTabList()
    },
    mounted() {
        // 添加滚动事件监听，实现上拉加载
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        // 移除滚动事件监听
        window.removeEventListener('scroll', this.handleScroll)
    },
    
    watch: {
        // 监听路由变化，当从其他页面返回时重置active
        // '$route': {
        //     handler() {
        //         this.active = 0
        //     },
        //     immediate: true
        // },
        
        // 监听tab切换
        active: {
            handler(newIndex) {
                const currentTab = this.tabList[newIndex]
                // 如果当前tab还没有数据，加载数据
                if (currentTab.data.length === 0) {
                    currentTab.pageNo = 1
                    currentTab.hasMore = true
                    this.getTabList()
                }
            }
        }
    },
    
    methods: {
        /**
         * 跳转到详情页
         * @param {string|number} id - 文章ID
         */
        getTo(id) {
            this.$router.push({
                path: '/categorySolutionInfo',
                query: { 
                    id: id, 
                    isColor: true,
                    isCustomize:true,

                }
            })
        },
        
        /**
         * 获取列表数据（支持首次加载和加载更多）
         * @param {boolean} isLoadMore - 是否是加载更多
         */
     async getTabList(isLoadMore = false) {
    const currentTab = this.tabList[this.active]
    // 防止重复请求
    if (!isLoadMore && (currentTab.loading || currentTab.loadingMore)) return
    // 如果没有更多数据且是加载更多，直接返回
    if (isLoadMore && !currentTab.hasMore) {
        // 确保关闭loadingMore状态
        currentTab.loadingMore = false
        return
    }
    
    // 设置加载状态
    if (isLoadMore) {
        // 不设置loadingMore，因为van-list已经设置了
    } else {
        currentTab.loading = true
    }
    try {
        console.log(`请求数据: pageNo=${currentTab.pageNo}, isLoadMore=${isLoadMore}`)
        // 发起请求
        const res = await axios({
            method: 'post',
            url: currentTab.apiPath,
            data: {
                pageNo: currentTab.pageNo,
                pageSize: currentTab.pageSize,
                query: ""
            }
        })
        
        console.log('API response:', res.data)
        
        // 处理返回数据
        if (res.data && res.data.data && res.data.data.list) {
            const newList = res.data.data.list
            
            if (currentTab.pageNo === 1) {
                // 首次加载或刷新：直接替换数据
                currentTab.data = newList
            } else {
                // 加载更多：追加数据
                currentTab.data = [...currentTab.data, ...newList]
            }
            
            // 判断是否还有更多数据
            if (newList.length < currentTab.pageSize) {
                currentTab.hasMore = false
            } else {
                currentTab.pageNo++
            }
            
            console.log(`加载完成: 数据条数=${currentTab.data.length}, hasMore=${currentTab.hasMore}, nextPageNo=${currentTab.pageNo}`)
            
        } else {
            // 返回数据格式不正确，认为没有更多了
            console.log('返回数据格式不正确')
            currentTab.hasMore = false
        }
        
    } catch (error) {
        console.error('API error:', error)
        // 请求失败，认为没有更多了
        currentTab.hasMore = false
    } finally {
        // 清除所有加载状态
        currentTab.loading = false
        currentTab.loadingMore = false
        this.refreshing = false
    }
},
        
        /**
         * 加载更多（由van-list触发）
         * @param {Object} tab - 当前tab对象
         */
      loadMore(tab) {
    console.log('loadMore triggered for:', tab.name, 'pageNo=', tab.pageNo, 'hasMore=', tab.hasMore)
    
    // 确保是当前激活的tab，防止切换tab后旧的加载请求还在执行
    if (tab.name !== this.tabList[this.active].name) {
        console.log('不是当前激活的tab，忽略')
        return
    }
    
    // 如果没有更多数据，直接返回并确保loadingMore为false
    if (!tab.hasMore) {
        console.log('没有更多数据了')
        tab.loadingMore = false
        return
    }
    // 直接处理加载更多逻辑，不调用getTabList
    tab.loadingMore = true
    axios({
        method: 'post',
        url: tab.apiPath,
        data: {
            pageNo: tab.pageNo,
            pageSize: tab.pageSize,
            query: ""
        }
    }).then((res) => {
        console.log('API response:', res.data)
        if (res.data && res.data.data && res.data.data.list) {
            const newList = res.data.data.list
            // 追加数据
            tab.data = [...tab.data, ...newList]
            // 判断是否还有更多数据
            if (newList.length < tab.pageSize) {
                tab.hasMore = false
            } else {
                tab.pageNo++
            }
            console.log(`加载完成: 数据条数=${tab.data.length}, hasMore=${tab.hasMore}, nextPageNo=${tab.pageNo}`)
        } else {
            // 返回数据格式不正确，认为没有更多了
            console.log('返回数据格式不正确')
            tab.hasMore = false
        }
    }).catch((error) => {
        console.error('API error:', error)
        // 请求失败，认为没有更多了
        tab.hasMore = false
    }).finally(() => {
        // 清除加载状态
        tab.loadingMore = false
    })
},

/**
 * 处理滚动事件，实现上拉加载
 */
handleScroll() {
    // 获取当前激活的tab
    const currentTab = this.tabList[this.active]
    
    // 如果正在加载或没有更多数据，直接返回
    if (currentTab.loadingMore || !currentTab.hasMore) return
    
    // 获取滚动相关信息
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight
    
    // 当滚动到距离底部100px时，触发加载更多
    if (scrollHeight - scrollTop - clientHeight < 100) {
        this.loadMore(currentTab)
    }
},
        


    }
}
</script>

<style lang="scss" scoped>
.new-page {
    background-color: #fff;
    height: auto;
    min-height: 100vh;
}

// 列表项样式
.new-box {
    display: flex;
    align-items: center;
    margin: 10px 15px;
    justify-content: space-between;
    height: 80px;

    .new-text-item {
        width: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;

        .new-text-item-name {
            font-size: 14px;
            color: #1D2129;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        .new-text-item-releaseTime {
            font-size: 11px;
            color: #86909C;
            text-align: left;
        }
        
        .new-text-item-description {
            font-size: 11px;
            color: #86909C;
            text-align: left;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
    }
}

// 空状态样式
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;

    .empty-text {
        margin-top: 16px;
        font-size: 14px;
        color: #999;
    }
}

// 加载中样式
.loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    color: #FF8000;
    font-size: 14px;
}

// 加载更多样式
.load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #FF8000;
    }

    &.loading {
        cursor: not-allowed;
    }
}

// 没有更多数据样式
.no-more {
    text-align: center;
    padding: 20px 0;
    font-size: 14px;
    color: #999;
}

// 加载动画
.loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #FF8000;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>