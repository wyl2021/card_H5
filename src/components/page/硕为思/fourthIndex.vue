<template>
  <div class="p-page">
    <header-content :isHeader="false">
      <template #content>
        <iText
          iconImage="sws/image/companyIcon.png"
          :iconImageCss="{ width: '16px', height: '16px' }"
          title="北京硕为思公关顾问有限公司"
          fontSize="16px"
        ></iText>
        <div class="d-flex justify-between" @click="getPhone">
          <iText titles="电话：" title="132 2191 0213" fontSize="16px"></iText>
          <van-image
            :src="IMG + 'sws/image/phone1.png'"
            width="16px"
            height="16px"
          ></van-image>
        </div>
        <div class="d-flex justify-between" @click="getCopy">
          <iText titles="邮箱：" title="39220922@qq.com" fontSize="16px"></iText>
          <van-image
            :src="IMG + 'sws/image/copy.png'"
            width="16px"
            height="16px"
            fontSize="16px"
          ></van-image>
        </div>
        <!-- justify-between -->
        <div class="d-flex justify-between1" @click="getAddress" >
          <iText
            titles="地址："
            title="海淀区岭南路36号广东大厦8层"
            fontSize="16px"
          ></iText>
          <van-image
            :src="IMG + 'sws/image/address1.png'"
            width="16px"
            height="16px"
          ></van-image>
        </div>
        <TXMap
          mapWidth="100%"
          mapHeight="130px"
          address="海淀区岭南路36号广东大厦8层"
          name="硕为思"
        ></TXMap>
        <div class="h-10"></div>
        <div class="d-flex justify-between" @click="getWeb">
          <iText titles="官网：" title="www.sws010.com" fontSize="16px"></iText>
          <van-image
            :src="IMG + 'sws/image/web.png'"
            width="16px"
            height="16px"
          ></van-image>
        </div>
      </template>
    </header-content>
    <sws-content :list="list" name="全部联系我们"></sws-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getPhone() {
      window.location.href = "tel:" + 13221910213;
    },
    getCopy() {
      // var val = document.getElementById('39220922@qq.com');
      //   window.getSelection().selectAllChildren(val);
      //   document.execCommand ("Copy");

      navigator.clipboard
        .writeText('39220922@qq.com')
        .then(() => {
          this.$toast('复制成功')
        })
        .catch((err) => {
          // 复制失败
          console.error("复制失败");
        });

    },
    getAddress() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$router.push({
        path: "/map",
        query: {
          address: "海淀区岭南路36号广东大厦8层",
          name: "北京硕为思",
          isTap: true,
        },
      });
      Toast.clear;
    },
    getWeb() {
      // window.location.href = "https://www.sws010.com";
    },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          // const data = res.data.list.find((item) => item.name == "联系我们");
          // console.log(data);
          this.list = res.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .justify-between{
    justify-content: space-between;
    // align-items: center;
    align-items: baseline;
  }
  .h-10{
    height: 10px;
  }
  .justify-between1{
    justify-content: space-between;
    align-items: baseline;
  }
</style>
