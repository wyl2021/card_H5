<template>
  <div>
    <div class="contentBox">
      <div class="orderName">运单号查询</div>
      <van-cell-group>
        <van-field class="order" v-model="shipment_id" label="系统运单号" placeholder="请输入系统运单号" />
        <van-field class="order" v-model="client_reference" label="客户订单号" placeholder="请输入客户订单号" />
        <van-field class="order" v-model="parcel_number" label="系统箱号" placeholder="请输入系统箱号" />
        <!-- <van-field
          class="order"
          type="textarea"
          v-model="inputText"
          placeholder="请输入单号"
          rows="1"
          autosize
        /> -->
      </van-cell-group>
      <div class="button" @click="tracking">查询</div>
    </div>
    <!--  -->
    <div v-if="isOrder"  class="contentBox">
      <div class="d-flex justify-between">
        <company-title
          :title="'运单号：' + getStr(orderInfo.data.shipment.shipment_id)"
        ></company-title>
        <div class="status">{{ getStatus() }}</div>
      </div>
      <company-title
        :title="'承运商：' + getStr(orderInfo.data.shipment.carrier_code)"
        color="#666666"
        class="font-weight"
      ></company-title>
      <company-title
        :title="'跟踪号：' + getStr(orderInfo.data.shipment.tracking_number)"
        color="#666666"
        class="font-weight"
      ></company-title>
      <company-title
        :title="'系统箱号：' + getStr(orderInfo.data.shipment.parcel_number)"
        color="#666666"
        class="font-weight"
      ></company-title>

      <div v-if="isDown">
        <div v-if="orderInfo.data.shipment.traces != []">
          <van-steps direction="vertical" :active="0" active-color="#C8161D">
            <van-step v-for="(item, index) in orderInfo.data.shipment.traces" :key="index">
              <div class="time">{{ getDate(item.time) }}</div>
              <div class="info">{{ item.info }}</div>

            </van-step>
          </van-steps>
        </div>
      </div>
      <van-image
        width="24px"
        height="24px"
        class="downIcon"
        :src="IMG + 'jrgj/icon/down.png'"
        @click="isDown = !isDown"
      ></van-image>
    </div>
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
                }
            ]
        }
    }
      },
      isDown: false,
      shipment_id:'',
      client_reference:'',
      parcel_number:''
    };
  },
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
    getStatus() {
      switch (this.getStr(this.orderInfo.data.shipment.status)) {
        case "ready":
          return "已下单";
        case "picked":
          return "已收货";
        case "in_transit":
          return "转运中";
        case "delivered":
          return "已签收";
        case "returned":
          return "退件";
        default:
          return "已取消";
      }
    },
    getStr(str) {
      return str ? str : "暂无数据";
    },
    tracking() {
       const config = {
        method: "post",
        url: "/mpapi/v5/shipment/tracking",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer 6690a4bf48358834de3a4e466690a4bfaaa8c9519",
        },
        data: {
          shipment: {
            shipment_id: this.shipment_id,
            client_reference:this.client_reference,
            parcel_number: this.parcel_number,
            language: "zh",
          },
        },
      };
      // http://ywjrgj.nextsls.com
      if(config.data.shipment.shipment_id || config.data.shipment.client_reference ){
        axios(config).then((res) => {

        if(res.status==200){
          if(res.data.data!={}){
            this.orderInfo = res.data;
          this.isOrder=true
          }else{
            this.$toast(res.data.info)
          }

        }else{
          this.$toast(res.statusText)
        }

      });
      }else{
        this.$toast('请输入单号')
      }
      // const config = {
      //   method: "post",
      //   url: "/mpapi/v5/shipment/tracking",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: "Bearer 6690a4bf48358834de3a4e466690a4bfaaa8c9519",
      //   },
      //   data: {
      //     shipment: {
      //       shipment_id: this.shipment_id,
      //       client_reference:this.client_reference,
      //       parcel_number: this.parcel_number,
      //       language: "zh",
      //     },
      //   },
      // };
      // // http://ywjrgj.nextsls.com
      // if(config.data.shipment.shipment_id || config.data.shipment.client_reference ){
      //   axios(config).then((res) => {
      //   console.log(res);
      //   if(res.status==200){
      //     if(res.data.data!={}){
      //       this.orderInfo = res.data;
      //     this.isOrder=true
      //     }else{
      //       this.$toast(res.data.info)
      //     }

      //   }else{
      //     this.$toast(res.statusText)
      //   }

      // });
      // }else{
      //   this.$toast('请输入单号')
      // }

    },
  },
};
</script>

<style lang="scss" scoped>
.orderName {
  color: #024190;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.button {
  color: #fff;
  font-size: 14px;
  background-color: #024190;
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
  height: 40px;
  border-radius: 8px;
  margin-top: 10px;
}
.downIcon {
  margin: 10px auto;
  display: flex;
}
.status{
  color: #024190;
  font-size: 14px;

}
.justify-between{
  justify-content: space-between;
}
.time{
  font-size: 12px;
  color: #000;
}
.info{
  font-size: 12px;
  color: #333;
}
.font-weight{
  font-weight: 400 !important;
}
</style>
