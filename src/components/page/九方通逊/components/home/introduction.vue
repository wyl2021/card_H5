<template>
    <div>
        <div v-for="item,index in list" :key="index">
            <van-image v-if="item.image" :src="item.image.url" alt="" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
</style>











<!-- <template>
    <div class="introduction">
        <div class="introduction-box">
            <van-image :src="IMG + '/jftx/headerImage/jf/qyjj.png'" width="161px" height="100%"
                style="margin: 10px 0;display: block;"></van-image>
            <div class="introduction-content">{{ getContent() }}</div>
           
            <div class="zxhw-box" style="justify-content: space-between;">
                <div v-for="zxhw in zxhwList" :key="zxhw.title" class="introduction-zxhw">
                    <div class="zxhw-title">{{ zxhw.title }}</div>
                    <div :class="['zxhw-content1-box', zxhw.content1.length > 2 ? 'zxhw-content1-multi' : 'zxhw-content1-single']">
                        <div v-for="item in zxhw.content1" :key="item" class="zxhw-content1">
                            <div class="zxhw-icon"></div>
                            {{ item }}
                        </div>
                    </div>
                    <hr style="width: 21px;background-color: #FF7D00; height: 2px;display: flex;margin: 0 auto;border:1px;">
                    <div v-for="item2 in zxhw.content2" :key="item2" class="zxhw-content2" v-html="formatContent2(item2)">
                    </div>
                </div>
            </div>
       
            <van-image :src="IMG + '/jftx/headerImage/jf/qqwd.png'" width="85px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div class="introduction-organization">
                <div v-for="item in getOrganization()" :key="item.name" class="introduction-organization-item-number">
                    <span class="introduction-organization-value">{{ item.value }}</span>
                    <span v-if="item.hasPlus" class="introduction-organization-plus">+</span>
                    <span class="introduction-organization-unit">{{ item.unit }}</span>
                </div>
            </div>
            <div class="introduction-organization">
                <div v-for="item in getOrganization()" :key="'name-' + item.name"
                    class="introduction-organization-item">
                    {{ item.name }}
                </div>
            </div>
            <hr class="gradient-hr">
           
     
            <div class="zyd-box" >
                <iText :iconImage="IMG+'jftx/icon/address2.png'" title="国内自营网点" fontSize="12px" color="#3D3D3D"
                        :iconImageCss="{ 'width': '15px', 'height': '15px' }" font1Width="auto"
                        style="font-weight: 700;border-radius: 13px;padding: 6px 8px; background-color: #fff6ef;width: fit-content;margin-top: 10px;"></iText>
                
                    <div v-html="getBranch('国内自营网点').rich_text" style="line-height:20px;padding-left: 10px;"></div>
                
                <van-image v-if="getBranch('国内自营网点').image" :src="getBranch('国内自营网点').image.url" width="100%" height="100%" style="margin: 10px auto;display: block;"></van-image>
            </div>
            
             <div class="zyd-box" >
                <iText :iconImage="IMG+'jftx/icon/address2.png'" title="海外自营仓网" fontSize="12px" color="#3D3D3D"
                        :iconImageCss="{ 'width': '15px', 'height': '15px' }" font1Width="auto"
                        style="font-weight: 700;border-radius: 13px;padding: 6px 8px; background-color: #fff6ef;width: fit-content;"></iText>
               
                    <div v-html="getBranch('海外自营仓网').rich_text" style="line-height:20px;padding-left: 10px;"></div>
                
                <van-image v-if="getBranch('海外自营仓网').image" :src="getBranch('海外自营仓网').image.url" width="100%" height="100%" style="margin: 10px auto;display: block;"></van-image>
            </div>
            
            <van-image :src="IMG + '/jftx/headerImage/jf/jfdw.png'" width="85px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div :class="['dw-box', dwList.length > 2 ? 'dw-box-multi' : 'dw-box-single']">
                <div v-for="dw in dwList" :key="dw.name" class="introduction-dw">
                    <iText :iconImage="'jftx/icon/' + dw.icon" :title="dw.name" fontSize="13px" color="#3D3D3D"
                        :iconImageCss="{ 'width': '20px', 'height': '20px' }" font1Width="auto"
                        style="font-weight: bold;"></iText>
                    <div class="introduction-dw-content" v-html="formatDwContent(dw.content)"></div>
                </div>
            </div>
            
            <van-image :src="IMG + '/jftx/headerImage/jf/hzpt.png'" width="206px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div class="introduction-rich-text" v-html="getBranch('荣耀资质').rich_text"></div>
           
            <van-image :src="IMG + '/jftx/headerImage/jf/qyyj.png'" width="153px" height="100%"
                style="margin: 10px auto;display: block;"></van-image>
            <div class="introduction-rich-text" v-html="getBranch('企业愿景').rich_text"></div>
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
            zxhwList: [
                {
                    title: '专线物流',
                    content1: ['空运专线', '海运专线', '小包专线', '卡航卡铁', '末端清提拆派'],
                    content2: ['海运月均2000+柜', '空运月均2000+吨', '小包日均处理50000+单'],
                },
                {
                    title: '海外仓配',
                    content1: ['一件代发', '中大件尾程自配送'],
                    content2: ['自营海外仓覆盖6国', '海外仓总面积55W+㎡', '海外仓日均处理40000+单']

                },
            ],
            dwList: [{
                name: '市场定位',
                content: '跨境M2C物流及仓配服务商',
                icon: 'sc.png'
            },
            {
                name: '服务定位',
                content: '时效稳定',
                icon: 'fw.png'
            },
            {
                name: '客户定位',
                content: '卖家、工厂、跨境电商平台',
                icon: 'kh.png'
            },
            {
                name: '价值主张',
                content: '时效稳定 + 沟通顺畅+ 成本更优',
                icon: 'jz.png'
            },
            {
                name: '航线定位',
                content: '聚焦北美和西欧两大主流市场',
                icon: 'hx.png'
            },
            {
                name: '竞争策略',
                content: '数字平台 + 双自营网络（国内销售 | 海外仓配）+ AI智能应用',
                icon: 'jz2.png'
            },]
        };
    },
    computed: {

    },
    created() {
       
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
            const str = this.getBranch('全球网点').describe || ''

            if (!str) return []

            const items = str.split('  ').filter(item => item && item.includes('：'))

            return items.map(item => {
                const [name, number] = item.split('：')
                const numStr = number.trim()
                const match = numStr.match(/^(\d+[Ww]?)\s*\+?\s*(.*)$/)
                let value = numStr
                let unit = ''
                let hasPlus = false

                if (match) {
                    value = match[1]
                    unit = match[2] || ''
                    hasPlus = numStr.includes('+')
                }

                return {
                    name: name.trim(),
                    value: value,
                    unit: unit,
                    hasPlus: hasPlus
                }
            })

        },
        formatContent2(text) {
     
            return text.replace(/(\d+[Ww]?)|(\+)/g, (match, num, plus) => {
              
                if (num) {
                    return `<span class="zxhw-item2-num">${num}</span>`
                }
                if (plus) {
                    return `<span class="zxhw-item2-plus">${plus}</span>`
                }
                return match
            })
        },
        formatDwContent(text) {
            return text.replace(/(北美|西欧)/g, '<span class="dw-highlight">$1</span>')
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


.zxhw-box {
    display: flex;
    display: -webkit-box;
    justify-content: space-between;
    -webkit-box-pack: justify;
    align-items: stretch;
    -webkit-box-align: stretch;
    
    .introduction-zxhw{
        display: flex;
        display: -webkit-box;
        flex-direction: column;
        -webkit-box-orient: vertical;
        border:1px solid #fff6ff;
        border-radius: 10px;
        padding: 10px;
        flex: 1;
        margin: 0 5px;
        align-items: center;
        -webkit-box-align: center;
        background: linear-gradient(180deg, #FFFFFF 0%, #FDF9F5 100%);
    }
}
.zxhw-title{
    font-size: 11px;
    color:#FFF;
    font-weight: 800;
    background-color: #FF8000;
    padding: 2px 20px;
    text-align: center;
    width: fit-content;
    border-radius: 5px;
    margin-bottom: 10px;
}
.zxhw-content1-box {
    display: flex;
    display: -webkit-box;
    align-items: center;
    -webkit-box-align: center;
    justify-content: center;
    -webkit-box-pack: center;
    height: 70px;
    font-weight: 700;
}

.zxhw-content1-single {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3px;
    gap: 10px;
}

.zxhw-content1-multi {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    
}
.zxhw-content1-multi > .zxhw-content1:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
    width: 70%; /* 让内容只占一半宽度，视觉上居中 */
}
.zxhw-content1{
    .zxhw-icon {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #FF7D00;
        display: inline-block;
        margin-right: 2px;
    }

    font-size: 10px;
    line-height: 15px;
    color:#3d3d3d;
    font-weight: 700;
}

.zxhw-content2 {
    font-size: 10px;
    line-height: 20px;
    color: #3d3d3d;
    font-weight: 400;

}

.zxhw-content2 /deep/ .zxhw-item2-num {
    font-size: 10px;
    line-height: 20px;
    color: #FF8000;
    font-weight: 700;
}

.zxhw-content2 /deep/ .zxhw-item2-plus {
    font-size: 10px;
    line-height: 20px;
    color: #FF8000;
    font-weight: 700;

}


.introduction-content {
    font-size: 10px;
    color: #4E5969;
    line-height: 18px;
    text-align: justify;
    font-weight: 400;
    padding: 0 10px;
}

.dw-box {
    grid-gap: 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.dw-box-single {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dw-box-multi {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    justify-items: center;
    align-items: stretch;
}

.introduction-dw {
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF6EF 100%);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    min-height: 90px;

    .introduction-dw-content {
        font-size: 11px;
        color: #272727;
        line-height: 16px;
        text-align: center;
    }
    
    .introduction-dw-content /deep/ .dw-highlight {
        color: #FF8000;
    }
}



.introduction-rich-text {
    line-height: 20px;
    font-size: 10px;
    text-align: center;
    width: 100%;

    /deep/ * {
        text-align: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
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
        text-align: center;
    }

    .introduction-organization-item-number {
        display: inline-flex;
        align-items: baseline;
        font-size: 20px;
        color: #FF7D00;
        font-weight: bold;

        .introduction-organization-value {
            font-size: 20px;
            color: #FF7D00;
            font-weight: bold;
        }

        .introduction-organization-plus {
            font-size: 14px;
            color: #FF7D00;
            font-weight: bold;
            margin-left: 2px;
        }

        .introduction-organization-unit {
            font-size: 14px;
            color: #FF7D00;
            font-weight: normal;
            margin-left: 2px;
        }
    }
}

.gradient-hr {
    border: none;
    height: 1px;
    background: linear-gradient(to right, #FFFFFF 0%, #FF7D00 50%, #FFFFFF 100%);
    margin: 20px 0;
}
</style> -->