<template>
    <div class="contact">
        <van-image :src="IMG + '/jftx/headerImage/lxwm.png?time=' + new Date().getTime()" width="103px"
            height="100%" style="margin-top: 10px;"></van-image>

        <div class="contact-box">
            <div v-for="(item, index) in contactList" :key="index" class="contact-item-box">
                <div class="contact-item-header">
                    <div class="contact-item">
                        <van-image :src="IMG + '/jftx/image/' + item.img + '?time=' + new Date().getTime()" width="24px"
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
                    <van-image :src="IMG + '/jftx/image/' + item.img2 + '?time=' + new Date().getTime()" width="121px"
                        height="100%"></van-image>
                </div>
            </div>
        </div>
        <div class="contact-box">
            <div class="contact-item-box" v-for="(item, index) in getBranch('联系我们').list">
                <span class="lx-name">{{ item.name }}</span>
                <span v-if="item.name!=='投诉与建议收集'" class="lx-number">电话：<span style="font-size: 12px;color: #666;">{{ item.name_en ? item.name_en :
                    "-" }}</span></span>
                <span class="lx-email">邮箱：<div style="display: flex;flex-direction: column;"><span
                            v-for="email in item.describe.split(' ')" :key="email"
                            style="font-size: 12px;color: #666;">{{ email
                            }}</span></div>
                </span>
            </div>

        </div>
        <!-- 国际物流常见问题 -->
        <div>
            <van-image :src="IMG + '/jftx/headerImage/gjwlcjwt.png'" width="308px" height="100%"
                style="display: block;margin: 10px auto  0 auto;"></van-image>
            <van-tabs v-model="active" animated swipeable title-active-color="#FF8000" color="#FF8000">
                <van-tab v-for="(item, index) in getTabList()" :key="index" :title="item.name">
                    <div v-for="(subItem, subIndex) in item.list" :key="subIndex" class="p-box">
                        <div class="p-header">
                            <div class="p-w">问</div>
                            <span class="p-name">{{ subItem.name_en }}</span>
                        </div>
                        <div class="p-box-item">
                            <span class="p-text" v-html="subItem.rich_text"></span>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!-- 合作伙伴 -->
        <div>
            <van-image :src="IMG + '/jftx/headerImage/hzhb.png?time=' + new Date().getTime()" width="88px" height="100%"
                style="display: block;margin: 10px auto  0 auto;"></van-image>
            <!-- <van-swipe :show-indicators="false" height="60px" autoplay="1000" duration="300">
                <van-swipe-item v-for="(item, index) in getBranch('合作伙伴').list" :key="index">
                    <van-image :src="item.image.url" width="80px" height="40px"></van-image>
                </van-swipe-item>
            </van-swipe> -->
            <!-- <van-swipe :show-indicators="false" :height="'80px'" :autoplay="1000" :duration="500"
                class="partners-swipe">
                <van-swipe-item v-for="(group, groupIndex) in groupedPartners" :key="groupIndex"
                    class="swipe-item-group">
                    <div class="images-row">
                        <div v-for="(item, imgIndex) in group" :key="imgIndex" class="image-wrapper">
                            <van-image :src="item.image.url" width="80px" height="40px" fit="contain"
                                class="partner-image" />
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <van-swipe :show-indicators="false" height="60px" autoplay="1000" duration="300">
                <van-swipe-item v-for="(item, index) in getBranch('合作伙伴').list" :key="index">
                    <van-image :src="item.image.url" width="80px" height="40px"></van-image>
                </van-swipe-item>
            </van-swipe> -->
            <!-- 使用 better-scroll 实现横向滚动 -->
            <div class="partners-wrapper" ref="partnersWrapper">
                <div class="partners-scroll" ref="partnersScroll">
                    <!-- 第一组 -->
                    <div class="partner-item" v-for="(item, index) in partnerList" :key="index">
                        <van-image v-if="item.image" :src="item.image.url" fit="contain" class="partner-logo" />
                    </div>
                    <!-- 第二组（复制）实现无缝滚动 -->
                    <div class="partner-item" v-for="(item, index) in partnerList" :key="'copy-' + index">
                        <van-image v-if="item.image" :src="item.image.url" fit="contain" class="partner-logo" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'Contact',

    props: {
        list: {
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
            }
            ],
            active: 0,
            tabList: [],
            scroll: null, // better-scroll 实例
            scrollSpeed: 1, // 滚动速度（像素/帧）
            isPaused: false,
            animationFrameId: null
        }
    },
    // created() {
    //     this.tabList = this.getTabList()
    //     console.log(this.tabList)
    // },
    watch: {
        // 监听合作伙伴数据变化
        partnerList: {
            handler(newVal) {
                if (newVal && newVal.length > 0) {
                    this.$nextTick(() => {
                        this.initScroll()
                    })
                }
            },
            immediate: true
        }
    },
    mounted() {
        // 初始化滚动
        this.$nextTick(() => {
            this.initScroll()
        })

        // 监听窗口变化
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        // 清理
        this.stopAutoScroll()
        if (this.scroll) {
            this.scroll.destroy()
        }
        window.removeEventListener('resize', this.handleResize)
    },
    computed: {
        // 获取合作伙伴列表
        partnerList() {
            return this.getBranch('合作伙伴') ? this.getBranch('合作伙伴').list : []
        }
        // // 将合作伙伴列表按4个一组分组
        // groupedPartners() {
        //     const list = this.getBranch('合作伙伴').list || []
        //     if (!Array.isArray(list)) return []

        //     const groups = []
        //     const itemsPerGroup = 4

        //     for (let i = 0; i < list.length; i += itemsPerGroup) {
        //         groups.push(list.slice(i, i + itemsPerGroup))
        //     }

        //     return groups
        // },
    },
    methods: {
        getBranch(key) {
            // console.log(this.list, key)
            if (!this.list || !Array.isArray(this.list)) return {}
            return this.list.find(item => item.name === key) || {}
        },
        getTabList() {
            const list = this.getBranch("常见问题") ? this.getBranch("常见问题").list : []

            if (!Array.isArray(list)) return []

            // 直接按name字段分组
            const groups = {}

            list.forEach(item => {
                if (!item.name) return

                const category = item.name
                if (!groups[category]) {
                    groups[category] = []
                }
                groups[category].push(item)
            })
            const tabList = Object.keys(groups)
                .reverse() // 关键：分组顺序倒序
                .map(name => ({
                    name: name,
                    list: groups[name]
                }))

            // console.log("测试（倒序）", tabList)
            return tabList
        },
        handleClick(name) {
            console.log(name)
            if (name === '客服热线') {
                window.location.href = "tel:" + 4007755990;
            } else if (name === '在线客服') {
                this.$emit('open-dialog');
            } else if (name === '线下网点') {
                this.$emit('open-dialog-wd');
            }
        },
        // 初始化 better-scroll
        initScroll() {
            if (!this.partnerList || this.partnerList.length === 0) {
                console.log('合作伙伴数据为空，无法初始化滚动')
                return
            }

            // 销毁旧的实例
            if (this.scroll) {
                this.scroll.destroy()
                this.scroll = null
            }

            // 停止之前的动画
            this.stopAutoScroll()

            this.$nextTick(() => {
                const wrapper = this.$refs.partnersWrapper
                const content = this.$refs.partnersScroll

                if (!wrapper || !content) {
                    console.log('滚动容器未找到')
                    return
                }

                console.log('初始化better-scroll，项目数量:', this.partnerList.length)

                // 初始化 better-scroll
                this.scroll = new BScroll(wrapper, {
                    scrollX: true,          // 横向滚动
                    scrollY: false,         // 禁止纵向滚动
                    click: true,            // 允许点击
                    bounce: false,          // 关闭回弹效果
                    momentum: false,        // 关闭动量滚动
                    probeType: 3,           // 实时派发scroll事件
                    eventPassthrough: 'vertical', // 保留垂直滚动
                    useTransition: false,   // 不使用CSS过渡
                    stopPropagation: true   // 阻止事件冒泡
                })

                // 监听滚动事件
                this.scroll.on('scroll', (pos) => {
                    this.handleScroll(pos)
                })

                // 开始自动滚动
                this.startAutoScroll()
            })
        },

        // 处理滚动
        handleScroll(pos) {
            // 实现无缝滚动：滚动到复制内容时，跳回原始位置
            const contentWidth = this.$refs.partnersScroll.offsetWidth
            const halfWidth = contentWidth / 2

            if (pos.x <= -halfWidth) {
                // 滚动到复制的一半时，跳回开始
                this.scroll.scrollTo(0, 0, 0)
            }
        },

        // 开始自动滚动
        startAutoScroll() {
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId)
            }

            const autoScroll = () => {
                if (!this.isPaused && this.scroll) {
                    // 获取当前位置
                    const currentX = this.scroll.x

                    // 向左滚动
                    const newX = currentX - this.scrollSpeed

                    // 滚动
                    this.scroll.scrollTo(newX, 0, 0)
                }

                this.animationFrameId = requestAnimationFrame(autoScroll)
            }

            this.animationFrameId = requestAnimationFrame(autoScroll)
        },

        // 停止自动滚动
        stopAutoScroll() {
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId)
                this.animationFrameId = null
            }
        },

        // 暂停滚动
        pauseScroll() {
            this.isPaused = true
        },

        // 恢复滚动
        resumeScroll() {
            this.isPaused = false
        },

        // 设置滚动速度
        setScrollSpeed(speed) {
            this.scrollSpeed = speed
        },

        // 处理窗口大小变化
        handleResize() {
            if (this.scroll) {
                this.scroll.refresh()
            }
        },

        // 手动测试滚动
        testScroll() {
            if (this.scroll) {
                this.scroll.scrollBy(-100, 0, 300)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
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
    // height: 26px;
    padding: 5px 0;
    font-size: 11px;
    border-radius: 13px;
    border: 1px solid #FF8000;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    // font-weight: bold;

}

.contact-describe {
    margin-left: 25px;
    font-size: 11px;
    color: #999999;
    display: block;
    line-height: 20px;
}

.lx-name {
    font-size: 13px;
    color: #333;
    font-weight: bold;

}

.lx-number {
    font-size: 12px;
    color: #666666;
    margin: 5px 0;
}

.lx-email {
    font-size: 12px;
    color: #666666;
    display: flex;

}

.p-box {
    padding: 16px;

}

.p-header {
    display: flex;
    align-items: center;

    .p-w {
        background-color: #FF8000;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        width: fit-content;
        padding: 2px 4px;
    }

    .p-name {
        font-size: 14px;
        color: #1D2129;
        margin-left: 3px;
        font-weight: bold;
    }


}

.p-box-item {
    border-radius: 8px;
    background-color: #FAFAFA;
    padding: 4px 12px 8px 12px;
    margin-top: 10px;

    .p-text {
        color: #666;
        line-height: 15px;
    }
}

.images-row {
    display: flex;
    align-items: center;

}

/* better-scroll 合作伙伴样式 */
.partners-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 40px;
    /* 固定高度，与图片高度一致 */
    margin: 0 10px;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
}

.partners-scroll {
    display: inline-flex;
    /* 关键：inline-flex 让内容水平排列 */
    white-space: nowrap;
    /* 防止换行 */
    height: 100%;
    align-items: center;
    padding: 0 10px;
    box-sizing: content-box;
}

.partner-item {
    flex: 0 0 auto;
    // margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 移除背景、边框和阴影 */
}

.partner-logo {
    width: 80px;
    height: 40px;
    object-fit: contain;
    display: block;
}

@media (max-width: 768px) {
    .partners-wrapper {
        height: 40px;
        margin: 0 5px;
    }

    .partner-item {
        margin: 0 3px;
    }

    .contact-button {
        width: 60px;
        height: 24px;
        font-size: 10px;
    }
}

@media (max-width: 480px) {
    .partners-wrapper {
        height: 40px;
    }

    .partner-item {
        margin: 0 2px;
    }
}
</style>
