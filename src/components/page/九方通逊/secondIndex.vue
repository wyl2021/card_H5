<template>
    <div class="service-container">
        <van-tabs v-model="active" title-active-color="#FF7D00" color="#FF7D00" :swipeable="true">
            <van-tab v-for="(item, index) in serviceList" :title="item.name" :key="index">
                <template v-if="item.name !== '行业解决方案'">

                    <div class="industry-container" v-for="(item2, index2) in item.solution_list" :key="index2">
                        <div :style="{
                            backgroundImage: `url(${getUrl(item2.image.url)})`
                        }" class="bg-image">

                            <div class="title">{{ item2.name }}</div>
                            <div class="describe">{{ item2.name_en }}</div>
                        </div>
                        <div v-for="(item3, index3) in getServiceList(item2.describe)" :key="index3"
                            class="industry-item">
                            <div class="name">{{ item3.title }}</div>
                            <div class="describe">{{ item3.describe }}</div>
                        </div>
                        <van-image :src="IMG + '/jftx/image/ljxq.png'" width="72px" height="18px"
                            style="margin: 10px auto  0 auto;display: block; "
                            @click="getTo(false, item2.id)"></van-image>
                    </div>
                </template>

                <div v-else class="industry-container-jjfa">
                    <van-image :src="item4.image.url" width="170px" height="72px" v-for="(item4, index4) in getPlan()"
                        :key="index4" @click="getTo(true, item4.id)"></van-image>
                </div>
            </van-tab>
        </van-tabs>
        <!-- 行业资讯 -->
        <div class="zx-container">
            <h3>行业资讯</h3>
            <div class="zx-list">
                <div v-for="value in industryList" :key="value.id" class="zx-item" @click="getProductTo(value.id)">
                    <span class="zx-name">{{ value.name }}</span>
                    <span class="zx-name_en">{{ value.name_en }}</span>
                </div>
            </div>
        </div>
        <!-- 联系我们 -->
        <div class="lxwm-container">
            <h3>联系我们</h3>
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
                            <span v-else class="contact-describe">国内网点 <span style="color:#FF7D00;">26
                                </span>个</br><span>国外网点 <span style="color:#FF7D00;">7
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
import { Toast } from 'vant';
export default {
    name: 'ServiceSolution',
    data() {
        return {
            active: 0, // 一级分类激活索引
            serviceList: [],//服务列表
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
        };
    },
    created() {
        this.getSolutionTypeList();
        this.getIndustryList();
        this.getSolutionTypeList2();
    },
    watch: {
        '$route': {
            handler(to, from) {
                // 当路由变化时（切换到其他页面再返回），重置active为0
                this.active = 0;
            },
            immediate: true
        }
    },
    computed: {

    },

    methods: {
        getTo(type, id) {
            this.$router.push({
                path: '/categorySolutionInfo',
                query: {
                    id: id,
                    isColor: true,
                    isPage: type ? true : false
                },
            });
        },
        getProductTo(id) {
            this.$router.push({
                path: '/productInfo',
                query: {
                    id: id,
                    isColor: true,
                    isPage: true
                },
            });
        },
        // 复制客服热线
        callPhone() {
            window.location.href = 'tel:4007755990';
        },
        getPlan() {
            const planList = this.serviceList.find(item => item.name === '行业解决方案') ? this.serviceList.find(item => item.name === '行业解决方案').solution_list : []
            // console.log("行业解决方案", planList)
            return planList
        },
        getUrl(str) {
            return "'" + str + "'";
        },
        // 服务列表
        async getSolutionTypeList() {
            try {
                const res = await this.$http.categorySolutionTypeList({
                    parent_name: "服务"
                });
                if (res.data && res.data.list) {
                    this.serviceList = res.data.list;
                    // console.log("服务分类", this.serviceList)
                } else {
                    this.serviceList = [];
                    console.warn('服务分类数据为空');
                }
            } catch (error) {
                console.error('获取服务分类失败:', error);
                this.serviceList = [];
            }
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
        getServiceList(str) {
            // 参数验证
            if (!str || typeof str !== 'string') return []

            const list = str
                .split('  ') // 按空格分割
                .map(item => item.trim()) // 去除前后空格
                .filter(item => item) // 过滤空字符串
                .map(item => {
                    // 支持中英文冒号
                    const separator = item.includes('：') ? '：' : ':'
                    const [title, ...rest] = item.split(separator)
                    const describe = rest.join(separator) // 处理包含多个冒号的情况
                    return {
                        title: title.trim() || '',
                        describe: describe.trim() || '',
                        raw: item // 保留原始字符串，便于调试
                    }
                })
                .filter(item => item.title) // 过滤没有标题的项
            return list
        },
        // 行业列表
        async getIndustryList() {
            try {
                const res = await this.$http.productList();
                if (res.data && res.data.list) {
                    this.industryList = res.data.list;
                    // console.log("行业分类", this.industryList)
                } else {
                    this.industryList = [];
                    console.warn('行业分类数据为空');
                }
            } catch (error) {
                console.error('获取行业分类失败:', error);
                this.industryList = [];
            }
        },
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
};
</script>

<style lang="scss" scoped>
.service-container {
    background-color: #fff;

}

.industry-container {
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.02);
    padding: 10px;

    .bg-image {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        padding: 130px 10px 10px 10px;
        border-radius: 10px;

        .title {
            font-size: 16px;
            color: #000000;
        }

        .describe {
            font-size: 14px;
            color: #666666;
            line-height: 22px;
        }
    }

    .industry-item {
        background-color: #FAFAFA;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;

        .name {
            font-size: 14px;
            color: #1D2129;
        }

        .describe {
            font-size: 12px;
            color: #666666;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}

.industry-container-jjfa {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin: 10px 15px;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
}

.zx-container {
    margin: 0 15px;

    h3 {
        font-size: 18px;
        color: #333;
    }

    .zx-list {
        margin: 10px 15px 0 15px;
    }

    .zx-item {
        border-bottom: 1px solid #999999;
        display: flex;
        align-items: center;
        padding: 10px 0;
        justify-content: space-between;
    }

    .zx-name {
        font-size: 14px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 226px;
    }

    .zx-name_en {
        font-size: 12px;
        color: #999;
    }
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
        padding: 16px;

        .contact-item-box {
            border-radius: 8px;
            background-color: #FAFAFA;
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