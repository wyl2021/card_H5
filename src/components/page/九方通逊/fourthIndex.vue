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
                            @click="getTo(false, item2.id,true)"></van-image>
                    </div>
                </template>

                <div v-else class="industry-container-jjfa">
                    <van-image :src="item4.image.url" width="170px" height="72px" v-for="(item4, index4) in getPlan()"
                        :key="index4" @click="getTo(true, item4.id,false)"></van-image>
                </div>
            </van-tab>
        </van-tabs>
        <!-- 行业资讯 -->
        <!-- <div class="zx-container">
            <h3>行业资讯</h3>
            <div class="zx-list">
                <div v-for="value in industryList" :key="value.id" class="zx-item" @click="getProductTo(value.id)">
                    <span class="zx-name">{{ value.name }}</span>
                    <span class="zx-name_en">{{ value.name_en }}</span>
                </div>
            </div>
        </div> -->
     
    </div>
</template>

<script>

export default {
    name: 'ServiceSolution',
    data() {
        return {
            active: 0, // 一级分类激活索引
            serviceList: [],//服务列表
           
        };
    },
    created() {
        this.getSolutionTypeList();
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
         getPlan() {
            const planList = this.serviceList.find(item => item.name === '行业解决方案') ? this.serviceList.find(item => item.name === '行业解决方案').solution_list : []
            // console.log("行业解决方案", planList)
            return planList
        },
     
           getUrl(str) {
            return "'" + str + "'";
        },
        getTo(type, id, isComponent) {
            this.$router.push({
                path: '/categorySolutionInfo',
                query: {
                    id: id,
                    isColor: true,
                    isPage: type ? true : false,
                    isComponent: isComponent
                },
            });
        },
        // getProductTo(id) {
        //     this.$router.push({
        //         path: '/productInfo',
        //         query: {
        //             id: id,
        //             isColor: true,
        //             isPage: true
        //         },
        //     });
        // },
        // 复制客服热线
       
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


</style>