<template>
    <div class="service">
        <div class="service-box">
            <div class="service-item">
                            <van-image :src="getBranch('跨境专线物流').img" height="100%"
                                style="margin: 0 10px;" :loading="true"
                                :error="true"></van-image>
                             <van-image :src="IMG+'/jftx/image/mxqd.png'" height="100%"
                                style="margin:0 10px" :loading="true"
                                :error="true"></van-image>
                            <div>
                                <div v-for="value in getBranch('跨境专线物流').list" :key="value.id" class="solution-item">
                                    <div class="solution-name">{{ value.name }}<span class="solution-ename">{{
                                        value.name_en }}</span></div>
                                    <div class="solution-description" v-if="value.describe">
                                        <div v-for="(descItem, descIndex) in formatDescription(value.describe)"
                                            :key="descIndex" class="desc-item">
                                            <span class="desc-key">{{ descItem.key }}</span>
                                            <span class="desc-value">{{ descItem.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>



            <van-image :src="IMG + '/jftx/headerImage/jjfa.png'" width="211px" height="100%"
                style="display: block;margin: 20px auto 0 auto;"></van-image>
            <div class="service-item-fa">
                <van-image :src="item4.image.url" width="170px" height="72px" v-for="(item4, index4) in planList"
                    :key="index4" @click="planInfo(item4.id)"></van-image>
                <!-- <div v-for="item in 12" style="width: 165px;height: 72px; background-color: #999;border-radius: 12px;">
                </div> -->
            </div>
                    <!-- 联系我们 -->
        <div class="lxwm-container">
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
    </div>
</template>
<script>
export default {
    name: 'Service',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        planList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            IMG: this.IMG,
            active: 0,
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
    methods: {

        planInfo(id) {
            // console.log(id)
            if (!id) return
            this.$router.push({
                path: '/categorySolutionInfo',
                query: {
                    id: id,
                    isColor: true
                },
            })
        },
        changeTab(index) {
            this.active = index;
        },
        getBranch(key) {
            if (!this.list || !Array.isArray(this.list)) return {}
            return this.list.find(item => item.name === key) || {}
        },
        formatDescription(describe) {
            if (!describe) return []

            return describe.split(' ')
                .filter(item => item.includes('：'))
                .map(item => {
                    const [key, value] = item.split('：')
                    return {
                        key: key || '',
                        value: value || ''
                    }
                })
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
}
</script>
<style lang="scss" scoped>
.service-box {
    padding-top: 10px;
}

.service-item {
    box-shadow: 0px 6px 24px 0px rgba(0,0,0,0.02);
}


.solution-item {
    background-color: #FAFAFA;
    padding: 15px;
    margin: 0 17px 10px 12px;
    border-radius: 12px;



    .solution-name {
        font-size: 13px;
        color: #141414;
        font-weight: bold;

        .solution-ename {
            font-size: 11px;
            color: #666666;
            margin-left: 10px;
        }
    }

    .solution-describe {
        font-size: 11px;
        color: #666666;
        line-height: 18px;
        text-align: justify;
    }

    .solution-description {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

        .desc-item {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            text-align: center;
        }

        .desc-key {
            font-size: 12px;
            color: #999;


        }

        .desc-value {
            margin-top: 5px;
            font-size: 14px;
            color: #FF7D00;
        }
    }
}

.service-item-fa {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
}

/deep/ .van-tabs__nav--line {
    width: 70% !important;
}
.lxwm-container {
    margin: 0 15px;
    padding: 10px 0;

    h3 {
        font-size: 18px;
        color: #333;
    }

    .contact-box {
        border-radius: 16px;
        box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.02);
        padding-bottom: 5PX;

        .contact-item-box {
            background: #FAFAFA;
            border-radius: 8px 8px 8px 8px;
            padding: 16px 16px 0 16px;
            margin: 12px;
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