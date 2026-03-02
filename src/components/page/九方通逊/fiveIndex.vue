<template>
    <div>
        <div style="height:12px;"></div>
        <div class="contentBox ">
            <div class="orderName">运单号查询</div>
            <van-cell-group style="position: static">
                <van-field class="order" type="textarea" v-model="inputText" placeholder="请输入要查询的单号" rows="1"
                    autosize />
            </van-cell-group>
            <div class="button" @click="tracking">查询</div>
        </div>
        <!--  -->
        <div v-if="isOrder" class="contentBox">
            <company-title :title="'运单号：' + getStr(orderInfo.BILL_CODE)"></company-title>
            <div v-if="isDown && orderInfo.TRACKING.Events != []">
                <van-steps direction="vertical" :active="0" active-color="#C8161D">
                    <van-step v-for="(item, index) in orderInfo.TRACKING.Events" :key="index">
                        <div class="time">{{ item.Time }}</div>
                        <div class="info">{{ item.Location + item.Content }}</div>
                        <!-- <div class="info">{{ item2.current_address }}</div> -->
                    </van-step>
                </van-steps>
            </div>
        </div>
        <van-image v-if="isOrder" width="24px" height="24px" class="downIcon" :src="IMG + 'jrgj/icon/down.png'"
            @click="isDown = !isDown"></van-image>
    </div>
</template>

<script>
import axios from "axios";
import companyTitle from "../../tool/companyTitle.vue";
export default {
    components: { companyTitle },
    data() {
        return {
            inputText: "",
            isOrder: false,
            orderInfo: {
                "status": 1,
                "info": "请求成功的完成",
                "time": 1545882249,
                "data": {
                    "shipment": {
                        "shipment_id": "HQ10017104",
                        "status": "delivered",
                        "carrier_code": "UPS",
                        "tracking_number": "1Z1EW3190301183395",
                        "parcel_number": "",
                        "traces": [
                            {
                                "info": "DELIVERED",
                                "time": 1536198325
                            },
                            {
                                "info": "DESTINATION SCAN",
                                "time": 1536183689
                            },
                            {
                                "info": "ORIGIN SCAN",
                                "time": 1536139700
                            },
                        ]
                    }
                }
            },
            isDown: false,
            shipment_id: '',
            client_reference: '',
            parcel_number: '',
        };
    },
    // beforeRouteEnter(to, from, next) {
    //   console.log('组件内前置守卫');
    //   next();
    // },

    methods: {
        getDate(time) {
            // 创建一个 Date 对象，将时间戳作为参数
            const date = new Date(time * 1000); // 注意：JavaScript 的 Date 对象接受的是毫秒数，所以需要乘以 1000
            // 使用 Date 对象的各种方法来格式化日期和时间
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份是从 0 开始的，所以需要 +1，并使用 padStart 来补全 2 位数
            const day = String(date.getDate()).padStart(2, "0");
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");
            // 组合成日期时间字符串
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },

        getStr(str) {
            return str ? str : "暂无数据";
        },
        tracking() {
            const now = new Date();
            const time = Math.floor(now.getTime() / 1000); // 获取秒时间
            const config = {
                method: "get",
                url: "/JhdTraceMsg/newTracking.do",
                headers: {
                    // "Content-Type": "text/html;charset=UTF-8",
                    // "Connection":'close'
                    // Authorization: "Bearer 6690a4bf48358834de3a4e466690a4bfaaa8c9519",
                },
                params: {
                    digest: 'JHDKWT',
                    code: 'KWTEZ3200000436YQ'
                },
            };

            if (this.inputText) {
                config.params.code = this.inputText
                axios(config).then((res) => {
                    if (res.data.SUCCESS) {
                        this.orderInfo = res.data;
                        this.isOrder = true
                    } else {
                        s
                        this.$toast(res.data.ErrorInfo)
                    }
                });
            } else {
                this.$toast('请输入单号')
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.orderName {
    color: #FE6104;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;

}

.button {
    color: #fff;
    font-size: 14px;
    background-color: #FE6104;
    border-radius: 17px;
    margin: 15px auto 0 auto;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 5px 48px;
    width: fit-content;
}

.order {
    width: 100%;
    background-color: #f6f6f6;
    border-radius: 8px;
    margin-top: 10px;
    height: auto;
}

.downIcon {
    margin: 10px auto;
    display: flex;
}

.status {
    color: #FE6104;
    font-size: 14px;

}

.justify-between {
    justify-content: space-between;
}

.time {
    font-size: 12px;
    color: #000;
}

.info {
    font-size: 12px;
    color: #333;
}

.font-weight {
    font-weight: 400 !important;
}
</style>
