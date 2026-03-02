<template>
    <div>
        <img :src="IMG + 'jftx/image/logoBg.png'" class="logoBg" />
        <div class="contentBox content">
            <!-- 标头 -->
            <img class="logo" :src="IMG + 'jftx/image/logo.png'" />
            <div class="companyName">深圳市九方通逊电商物流有限公司</div>
            <video poster="https://card-img1.oss-cn-beijing.aliyuncs.com/jftx/image/video.png"
                src="https://card-img1.oss-cn-beijing.aliyuncs.com/jftx/jfmv.mov" width="100% " height="180px"></video>
            <div v-html="text"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            IMG: this.IMG,
            list: [],
            text: "",
        };
    },
    created() {
        this.getList();
    },

    methods: {
        getContent(name) {
            const data = this.list.find((item) => item.name == name);
            return data ? data.solution_list : [];
        },
        getList() {
            this.$http
                .categorySolutionTypeList({ parent_name: "列表内容" })
                .then((item) => {
                    this.list = item.data.list;
                    this.text =
                        this.getContent("简介内容") != []
                            ? this.getContent("简介内容")[0]
                                .rich_text.replace(
                                    /<p(.*?)>/,
                                    "<p$1 style='width:100%;height:100%'>"
                                )
                                .replace(
                                    /<video(.*?)>/,
                                    "<video$1 style='width:100%;height:100%;border-radius:8px'>"
                                )
                                .replace(/<br\s*\/?>/gi, "")
                                .replace(
                                    /(style=['"][^'"]*?)line-height:[^;'"]*?([^'"]*['"])/g,
                                    (match, p1, p2) => {
                                        return p1 + "line-height:0.6;" + p2; // 替换为新的line-height值
                                    }
                                )
                            : "";
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.logoBg {
    // position: fixed;
    top: 0;
    width: 100%;
    height: 206px;
}

.content {
    z-index: 1;
    margin: -40px 0 0 0 !important;
    padding: 0 28px 10px 28px;
    position: relative;
    border-start-start-radius: 20px;
}

.logo {
    width: 50px;
    height: 50px;
    margin: -50px 0 0 10px;
}


.companyName {
    font-size: 13px;
    margin: 6px 0 8px 10px;
    color: #193980;
    font-weight: 500;
}
</style>
