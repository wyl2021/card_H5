<template>
    <div class="service">
        <div>
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
        <div v-else class="empty-content">暂无内容</div></div>
           <!-- 联系我们 -->
        <div class="lxwm-container">
             <h3 style="text-align: center;margin-top: 16px;">联系我们</h3>
            <div class="contact-box">
                <div v-for="(item, index) in contactList" :key="index" class="contact-item-box">
                    <div class="contact-item-header">
                        <div class="contact-item">
                            <van-image :src="IMG + '/jftx/image/' + item.img + '?time=' + new Date().getTime()"
                                width="24px" height="24px" style="display: block;margin: 0 auto;"></van-image>
                            <span class="contact-name">{{ item.name }}</span>

                        </div>
                        <span v-if="index === 0" class="contact-number" @click="copyPhone()">400-7755-990</span>
                        <div v-else plain hairline type="danger" class="contact-button"
                            @click="item.name === '在线客服' ? kfShow = true : wdShow = true">{{ item.name === '在线客服' ?
                                '立即联系' : '查看详情'
                            }}</div>
                    </div>
                    <div class="contact-item-describe">
                        <div>
                            <span v-if="index !== 2" class="contact-describe"><span
                                    style="color:#FF7D00;">24小时</span>自助语音客服</br><span>人工客服时间
                                    <span style="color:#FF7D00;">08:00-22:00</span></span></span>
                            <span v-else class="contact-describe">国内网点 <span style="color:#FF7D00;">32
                                </span>个</br><span>国外网点 <span style="color:#FF7D00;">8
                                    </span>个</span></span>
                        </div>
                        <van-image :src="IMG + '/jftx/image/' + item.img2 + '?time=' + new Date().getTime()"
                            width="121px" height="100%"></van-image>
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="kfShow" round :style="{ height: '200px', width: '250px' }" :closeable="true">
            <div style="text-align: center;margin:45px  auto 0 auto; display: flex;flex-direction: column;">
                <van-image :src="IMG + '/jftx/image/kf.png' + '?time=' + new Date().getTime()" width="100px"
                    height="100px" style="display: block;margin: 0 auto;">
                </van-image>
                <span style="font-size: 14px;color: #333333;margin-top: 10px;">扫码添加客服，在线咨询</span>
            </div>
        </van-popup>
        <van-popup v-model="wdShow" round :style="{ width: '90%', 'max-height': '604px' }" :closeable="true">
            <div style="padding: 30px 10px 30px 10px ;">
                <!-- <van-search v-model="addressInput" shape="round" placeholder="请输入地址或点击下方地址~" class="search" /> -->
                <div style="margin: 0 10px;">
                    <div class="addressLine">
                        <div class="line"></div>
                        <span class="addressText">九方总部 · 中国深圳</span>
                    </div>
                    <div style="margin-top: 10px;display: flex;flex-direction: column;">
                        <span class="addressName">热线电话：</span>
                        <span class="addressDescribe">400-7755-990</span>
                    </div>
                    <div v-if="index < 3" class="" v-for="(item, index) in addressList" :key="index"
                        style="margin-top: 10px;display: flex;flex-direction: column;"
                        @click="navigateToMap(item.describe, item.name)">
                        <span class="addressName">{{ item.name }}</span>
                        <span class="addressDescribe">{{ item.describe }}</span>
                    </div>
                    <div class="addressLine">
                        <div class="line"></div>
                        <span class="addressText">九方分公司地址</span>
                    </div>
                    <div v-if="index > 3" class="" v-for="(item, index) in addressList" :key="index"
                        style="margin-top: 10px;display: flex;flex-direction: column;"
                        @click="navigateToMap(item.describe, item.name)">
                        <span class="addressName">{{ item.name }}</span>
                        <span class="addressDescribe">{{ item.describe }}</span>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'vant';
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
            loading: false,
             industryList: [],//行业列表
            contactList: [{
                name: "客服热线",
                img: "kfrxLogo.png",
                img2: "kfrxBg.png"
            },
            {
                name: "在线客服",
                img: "zxkfLogo.png",
                img2: "zxkfBg.png"
            },
            {
                name: "线下网点",
                img: "xxwdLogo.png",
                img2: "xxwdBg.png"
            }
            ],//联系我们
            // planList:[]
            kfShow: false,
            wdShow: false,
            addressList: [],
            addressInput: ''
        }
    },
    created() {
        // this.getServiceList()
        this.getSolutionTypeList2()
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
            
            try {
                if(this.handleType(data.name) == 'news'){
                    // 新闻类型，同时调用所有接口
                    const apiPaths = [
                        '/news-api/portal/front/newsCenter/logisticsNews',
                        '/news-api/portal/front/newsCenter/experience',
                        '/news-api/portal/front/newsCenter/industryTrends',
                        '/news-api/portal/front/newsCenter/notice',
                        '/news-api/portal/front/newsCenter/jiuFangNews',
                        '/news-api/portal/front/newsCenter/founderColumn'
                    ];
                    
                    // 使用Promise.all同时调用所有接口
                    const requests = apiPaths.map(apiPath => 
                        axios.post(apiPath, {
                            params: {
                                pageNo: 1,
                                pageSize: 10
                            }
                        })
                    );
                    
                    const responses = await Promise.all(requests);
                    // console.log('所有新闻接口返回:', responses);
                    
                    // 合并所有接口返回的数据
                    let allData = [];
                    responses.forEach(response => {
                        if (response.data.code == 0 && response.data.data) {
                            allData = allData.concat(response.data.data.list || []);
                        }
                    });
                    
                    // 按时间排序（假设有releaseTime字段）
                    allData.sort((a, b) => {
                        const timeA = new Date(a.releaseTime || 0);
                        const timeB = new Date(b.releaseTime || 0);
                        return timeB - timeA; // 降序排列，最新的在前
                    });
                     console.log('合并后的新闻列表:',allData);
                    // 取前10条数据
                    this.list = allData//allData.slice(0, 10);
                    // console.log('合并后的新闻列表:', this.list);
                } else {
                    // 原有逻辑
                    await axios.post('/news-api/portal/front/newsCenter/fetchProductNews?type='+this.handleType(data.name),
                        {
                            pageNo: 1,
                            pageSize: 15,
                        }
                    ).then(res => {
                        console.log(res)
                        
                        if (res.data.code == 0) {
                            this.list = res.data.data || []
                            console.log(this.list)
                        }
                    })
                }
            } catch (error) {
                console.error('获取服务列表失败:', error);
                this.list = [];
            } finally {
                this.loading = false;
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
        },
         callPhone() {
            window.location.href = 'tel:4007755990';
        },
       
      
        async getSolutionTypeList2() {
            try {
                const res = await this.$http.categorySolutionTypeList({
                    parent_name: "首页"
                });
                if (res.data && res.data.list) {
                    this.addressList = res.data.list.find(item => item.name === '线下网点').solution_list;

                } else {
                    this.addressList = [];
                    console.warn('首页分类数据为空');
                }
            } catch (error) {
                console.error('首页分类失败:', error);
                this.addressList = [];
            }
        },
    
        // 行业列表
        // async getIndustryList() {
        //     try {
        //         const res = await this.$http.productList();
        //         if (res.data && res.data.list) {
        //             this.industryList = res.data.list;
        //             // console.log("行业分类", this.industryList)
        //         } else {
        //             this.industryList = [];
        //             console.warn('行业分类数据为空');
        //         }
        //     } catch (error) {
        //         console.error('获取行业分类失败:', error);
        //         this.industryList = [];
        //     }
        // },
        // 打开地图
        navigateToMap(address, name) {
            Toast.loading({
                message: "加载中...",
                forbidClick: true,
            });
            this.$router.push({
                path: "/map",
                query: { address: address, name: name, isTap: true },
            });
            Toast.clear;
        },
    }
}
</script>
<style scoped lang="scss">
.service-box {
    background-color: #fff;
    // margin: 0 auto;
    padding: 16px;
    overflow-y: auto;
    height: 295px;
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

.lxwm-container {
    margin: 0 15px;
    padding: 20px 0;

    h3 {
        font-size: 18px;
        color: #333;
    }

    .contact-box {
        border-radius: 16px;
        box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.02);
        padding: 16px 0;

        .contact-item-box {
            border-radius: 8px;
            // background-color: #FAFAFA;
            padding: 12px 16px;
            margin-bottom: 12px;
            display: flex;
            flex-direction: column;


        }
    }
}

.contact-item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    .contact-item {
        display: flex;
        align-items: center;


    }

    .contact-name {
        font-size: 13px;
        color: #333;
        margin-left: 5px;
        font-weight: bold;
    }

    .contact-number {
        font-size: 16px;
        color: #FF7D00;
        font-weight: bold;
    }
}

.contact-item-describe {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.contact-button {
    color: #FF8000;
    width: 65px;
    // height: 26px;
    padding: 5px 0;
    font-size: 11px;
    border-radius: 13px;
    border: 1px solid #FF8000;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-describe {
    margin-left: 25px;
    font-size: 11px;
    color: #999999;
    display: block;
    line-height: 20px;
}

.addressLine {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .addressText {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
    }

    .line {
        width: 3px;
        height: 14px;
        background-color: #FF8000;
        margin-right: 10px;
    }
}

.addressName {
    color: #FF8000;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;

}

.addressDescribe {
    color: #666;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.search {
    padding: unset !important;
    margin-top: 15px;
}
</style>
