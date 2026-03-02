<template>
    <div class="new-page">
        <van-tabs v-model="active" title-active-color="#FF8000" color="#FF8000" @click="onClick">
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
export default {
    data() {
        return {
            tabList: [],
            productList: [],
            active: 0
        };
    },
    created() {
        this.getTabList();
    },
    methods: {
        getTo(id) {
            this.$router.push({
                path: '/categorySolutionInfo',
                query: { id: id, isColor: true, },
            });
        },
        getTabList() {
            this.$http
                .categorySolutionTypeList({ parent_name: "新闻" })
                .then((res) => {
                    console.log(res.data.list);
                    this.tabList = res.data.list;
                });

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
