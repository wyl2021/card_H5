<template>
    <div class="service">
        <div class="service-box">
            <div class="service-item">
                <van-image :src="IMG + '/jftx/headerImage/fwjj.png'" width="195px" height="100%"
                    style="margin-left: 15px;" :loading="true" :error="true"></van-image>
                <van-tabs v-model="active" title-active-color="#FF8000" color="#FF8000" line-width="16px">
                    <van-tab v-for="(item, index) in list" :key="index" :title="item.name">
                        <div v-show="active === index">
                            <van-image :src="item.img" height="100%"
                                :style="{ margin: active === 0 ? '0px 4px 0 17px' : '10px 4px 0 17px' }" :loading="true"
                                :error="true"></van-image>
                            <div v-if="item.name === '跨境专线物流'">
                                <div v-for="value in item.list" :key="value.id" class="solution-item">
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
                            <div v-else>
                                <div v-for="value in item.list" :key="value.id" class="solution-item">
                                    <div class="solution-name">{{ value.name }}</div>
                                    <div class="solution-describe">{{ value.describe }}</div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <van-image :src="IMG + '/jftx/headerImage/jjfa.png'" width="211px" height="100%"
                style="display: block;margin: 20px auto 0 auto;"></van-image>
            <div class="service-item-fa">
                <van-image :src="item4.image.url" width="170px" height="72px" v-for="(item4, index4) in planList"
                    :key="index4" @click="planInfo(item4.id)"></van-image>
                <!-- <div v-for="item in 12" style="width: 165px;height: 72px; background-color: #999;border-radius: 12px;">
                </div> -->
            </div>
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
            active: 0
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
            return this.list.find(item => item.title === key) || {}
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
        }
    }
}
</script>
<style lang="scss" scoped>
.service-box {
    padding-top: 10px;
}

.service-item {
    box-shadow:
        12px 0 8px rgba(0, 0, 0, 0),
        /* 右 */
        0 2px 8px rgba(0, 0, 0, 0.02),
        /* 下 */
        -12px 0 8px rgba(0, 0, 0, 0);
    /* 左 */
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
</style>