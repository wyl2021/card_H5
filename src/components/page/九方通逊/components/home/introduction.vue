<template>
    <div class="introduction">
        <van-image :src="IMG + '/jftx/headerImage/qyjj.png'" width="161px" height="100%"></van-image>
        <div class="introduction-box">
            <div class="introduction-video">
                <video :src="IMG + 'jftx/jfmv.mov'" width="100%" height="100%" controls playsinline
                    :poster="IMG + 'jftx/image/video.png'" preload="metadata"></video>
            </div>
            <div class="introduction-content">{{ getContent() }}</div>
            <!-- 九方定位 -->
            <van-image :src="IMG + '/jftx/headerImage/jfdw.png'" width="85px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div class="dw-box">
                <div v-for="dw in dwList" :key="dw.name" class="introduction-dw">
                    <iText :iconImage="'jftx/icon/' + dw.icon" :title="dw.name" fontSize="13px" color="#3D3D3D"
                        :iconImageCss="{ 'width': '20px', 'height': '20px' }" font1Width="auto"
                        style="font-weight: bold;"></iText>
                    <div class="introduction-dw-content">{{ dw.content }}</div>
                </div>
            </div>
            <!-- 组织网点 -->
            <van-image :src="IMG + '/jftx/headerImage/zzwd.png'" width="85px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <van-image v-if="getBranch('组织网点').image" :src="getBranch('组织网点').image.url" width="100%"
                height="100%"></van-image>
            <div>
                <div class="introduction-organization">
                    <div v-for="item in getOrganization()" :key="item.name"
                        class="introduction-organization-item-number">{{
                            item.number }}<span class="introduction-organization-item">+</span></div>
                </div>

                <!-- <div class="gradient-line"> </div> -->
                <div class="introduction-organization">
                    <div v-for="item in getOrganization()" :key="'name-' + item.name"
                        class="introduction-organization-item">{{
                            item.name }}</div>
                </div>

            </div>
            <!-- 数字九方 -->
            <van-image :src="IMG + '/jftx/headerImage/szjf.png'" width="153px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <van-image v-if="getBranch('数字九方').image" :src="getBranch('数字九方').image.url" width="100%"
                height="100%"></van-image>
            <!-- 荣耀资质 -->
            <van-image :src="IMG + '/jftx/headerImage/ryzz.png'" width="73px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div v-html="getBranch('荣耀资质').rich_text" style="line-height:20px;font-size: 11px;"></div>
            <!-- 企业愿景 -->
            <van-image :src="IMG + '/jftx/headerImage/qyyj.png'" width="153px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div v-html="getBranch('企业愿景').rich_text" style="line-height:20px;font-size: 11px;"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Introduction',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            title: "公司简介",
            IMG: this.IMG,
            dwList: [{
                name: '市场定位',
                content: '跨境M2C高性价比物流及仓配服务商',
                icon: 'sc.png'
            },
            {
                name: '服务定位',
                content: '九方时效稳定',
                icon: 'fw.png'
            },
            {
                name: '客户定位',
                content: '工厂卖家及电商平台',
                icon: 'kh.png'
            },
            {
                name: '价值定位',
                content: '时效稳定 + 沟通顺畅+ 成本更优',
                icon: 'jz.png'
            },
            {
                name: '航线定位',
                content: '聚焦北美和西欧大主流市场',
                icon: 'hx.png'
            },
            {
                name: '竞争定位',
                content: '数字平台 + 双自营网络（国内销售 | 海外仓配）+ AI算法应用',
                icon: 'jz2.png'
            },
            ]
        };
    },
    computed: {
    },
    methods: {
        getContent() {
            if (!this.list || !Array.isArray(this.list)) return '-'
            const item = this.list.find(item => item.name === '企业简介文本')
            return item ? item.describe : '-'
        },
        getBranch(key) {
            if (!this.list || !Array.isArray(this.list)) return {}
            return this.list.find(item => item.name === key) || {}
        },
        getOrganization() {
            const str = this.getBranch('组织网点').describe || ''

            if (!str) return []

            // 按空格分割并过滤空项
            const items = str.split(' ').filter(item => item && item.includes('：'))
            // 解析为对象数组
            return items.map(item => {
                // 使用中文冒号分割
                const [name, number] = item.split('：')
                return {
                    name: name.trim(),
                    number: number.trim()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.introduction {
    padding: 15px;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.02);
    margin-bottom: 20px;
    border-radius: 16px;
}

.introduction-box {
    .introduction-video {
        background-image: url('https://card-img1.oss-cn-beijing.aliyuncs.com/jftx/image/videoBg.png');
        padding: 10px;
        background-size: 100% 100%;

        video {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
}

.introduction-content {
    font-size: 12px;
    color: #4E5969;
    line-height: 18px;
    text-align: justify;
    padding: 0 10px;
}

.dw-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

.introduction-dw {
    border-radius: 10px;
    background-color: #FAFAFA;
    padding: 15px;
    justify-items: center;
    align-items: center;


    .introduction-dw-content {
        font-size: 11px;
        color: #272727;
        line-height: 16px;
        text-align: center;
    }
}

.gradient-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right,
            #FFFFFF 0%,
            #FF7D00 50%,
            #FF7D00 50%,
            #FFFFFF 100%);
}

.introduction-organization {
    display: flex;
    justify-content: space-around;

    .introduction-organization-item {
        font-size: 10px;
        color: #272727;

    }

    .introduction-organization-item-number {
        font-size: 20px;
        color: #FF7D00;
        font-weight: bold;
    }
}
</style>