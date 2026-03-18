<template>
    <div class="new-page">
        <van-tabs v-model="active" title-active-color="#FF8000" color="#FF8000">
            <van-tab v-for="(item, index) in tabList" :title="item.name" :key="index">
                <div class="new-box" v-for="(item2, index2) in item.solution_list" :key="index2"
                    @click="getTo(item2.id)">
                    <van-image v-if="item2.image" :src="item2.image.url" width="120px" height="80px"></van-image>
                    <div class="new-text-item">
                        <div class="new-text-item-name">{{ item2.name }}</div>
                        <div class="new-text-item-describe">{{ item2.describe }}</div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            tabList: [
                {
                    name:'物流咨询'
                },
                 {
                    name:'外贸经验'
                },
                 {
                    name:'电商相关'
                },
                 {
                    name:'通知公告'
                },
                 {
                    name:'九方新闻'
                },
                 {
                    name:'创始人专栏'
                },
            ],
            productList: [],
            active: 0
        };
    },
    created() {
        this.getTabList();
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
    methods: {
        getTo(id) {
            this.$router.push({
                path: '/categorySolutionInfo',
                query: { id: id, isColor: true, },
            });
        },
        getTabList() {
            axios({
                method: 'post',
                url: '/news-api/portal/front/newsCenter/logisticsNews',
                data: {
                    pageNo: 1,
                    pageSize: 20,
                    query:""
                }
            }).then((res) => {
                console.log(res);
                // this.tabList = res.data.list;
            })
            // this.$http
            //     .categorySolutionTypeList({ parent_name: "新闻" })
            //     .then((res) => {
            //         console.log(res.data.list);
            //         this.tabList = res.data.list;
            //     });

        },
    },
};
</script>

<style lang="scss" scoped>
.new-page {
    background-color: #fff;
    height: 100vh;
}

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
            font-size: 16px;
            color: #1D2129;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        .new-text-item-describe {
            font-size: 12px;
            color: #86909C;
            text-align: left;
        }
    }
}
</style>
