<template>
    <div class="contact">
        <div class="hw-image-box">
            <div v-for="(item, idx) in getHaicangpeiImageUrl" :key="idx">
                <van-image v-if="item && item.image && item.image.url" :src="item.image.url" width="100%" height="100%"
                    style="display: block;margin: 0 auto;">
                    <template #loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </div>
        </div>


        <!-- 解决方案 -->
        <van-image :src="IMG + '/jftx/headerImage/jjfa.png'" width="211px" height="100%"
            style="display: block;margin: 20px auto 0 auto;"></van-image>
        <div class="service-item-fa">
            <van-image :src="item4.image.url" width="170px" height="72px" v-for="(item4, index4) in planList"
                :key="index4" @click="planInfo(item4.id)"></van-image>

        </div>
        <!-- 联系我们 -->
        <div class="contact-box">
            <div v-for="(item, index) in contactList" :key="index" class="contact-item-box">
                <div class="contact-item-header">
                    <div class="contact-item">
                        <van-image :src="IMG + '/jftx/image/' + item.img" width="24px"
                            height="24px" style="display: block;margin: 0 auto;"></van-image>
                        <span class="contact-name">{{ item.name }}</span>

                    </div>
                    <span v-if="index === 0" class="contact-number">400-7755-990</span>
                    <div v-else plain hairline type="danger" class="contact-buttons" @click="handleClick(item.name)">{{
                        item.name === '在线客服' ?
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
                    <van-image :src="IMG + '/jftx/image/' + item.img2" width="121px"
                        height="100%"></van-image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Divider } from 'vant';

export default {
    name: 'Contact',

    props: {
        list: {
            type: Array,
            default: () => []
        },
        list2: {
            type: Array,
            default: () => [],
        },
        planList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            IMG: this.IMG,
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
            }],

        }
    },
    computed: {
        getHaicangpeiImageUrl() {
            console.log(this.list2);
            // 如果没有主图，再尝试用 list2 里的 image
            if (this.list2 && Array.isArray(this.list2)) {
                console.log('list2:', this.list2);
                return this.list2;
            }

            return [];
        }
    },
    methods: {
        getBranch(key) {
            if (!this.list || !Array.isArray(this.list)) return {}
            return this.list.find(item => item.name === key) || {}
        },
        handleClick(name) {
            if (name === '客服热线') {
                window.location.href = "tel:" + 4007755990;
            } else if (name === '在线客服') {
                this.$emit('open-dialog');
            } else if (name === '线下网点') {
                this.$emit('open-dialog-wd');
            }
        },
        planInfo(id) {
            if (!id) return
            this.$router.push({
                path: '/categorySolutionInfo',
                query: {
                    id: id,
                    isColor: true
                },
            })
        },

    }
}
</script>
<style lang="scss" scoped>
.hw-image-box {
    background: #FFFFFF;
    // box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.02);
    // border-radius: 16px 16px 16px 16px;
    margin: 10px 0;
}

.contact-box {
    border-radius: 16px;
    box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.02);
    padding: 16px;
    margin: 12px 2px 2px 2px;

    .contact-item-box {
        border-radius: 8px;
        background-color: #FAFAFA;
        padding: 12px 16px;
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
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

.contact-buttons {
    color: #FF8000;
    width: 65px;
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

.service-item-fa {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
}

@media (max-width: 768px) {
    .contact-buttons {
        width: 60px;
        height: 24px;
        font-size: 10px;
    }
}
</style>
