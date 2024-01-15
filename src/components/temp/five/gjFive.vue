<template>
  <div class=" bg-fff br-8 mb-12">
    <van-image
            :src="require('@/assets/tempfile/gj/headerImage/xhdt.png')"
          ></van-image>
    <div v-for="(item, index) in dataList" :key="index">
      <list-box-1 :dataListId="item.id">
        <template #listBoxContent>
          <div class="dataList">
              <van-image class="mr-12" width="130" height="80" :src="item.imageUrl" />
              <div style="width:240px;">
                <div class="content">{{ item.content }}</div>
               <div class="text">{{ item.text+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+item.title }}</div>
              </div>
          </div>
        </template>
      </list-box-1>
    </div>
  </div>
</template>

<script>
import iconContent from "@/components/temp/iconContent.vue";
import ListBox1 from "../listBox/listBox1.vue";
export default {
  components: {
    iconContent,
    ListBox1,
  },
  data() {
    return {
      dataList: [
        {
          id: require("@/assets/tempfile/gj/content/f1.png"),
          content: "宁波市国际联运协会与宁波银行成功签署战略合作协议",
          title: "阅读 41",
          text: "09/18",
          imageUrl: require("@/assets/tempfile/gj/image/xhdt1.png"),
        },
        {
          id: require("@/assets/tempfile/gj/content/f2.png"),
          content: "宁波市国际联运协会一行走访会员单位倾听协会会员需求",
          title: "阅读 41",
          text: "07/31",
          imageUrl: require("@/assets/tempfile/gj/image/xhdt2.png"),
        },
        {
          id: require("@/assets/tempfile/gj/content/f3.png"),
          content: "浙江万里学院到访宁波市国际联运协会",
          title: "阅读 41",
          text: "07/27",
          imageUrl: require("@/assets/tempfile/gj/image/xhdt3.png"),
        },
        {
          id: require("@/assets/tempfile/gj/content/f4.png"),
          content: "宁波市国际联运协会组团参加首届海博会",
          title: "阅读 41",
          text: "07/25",
          imageUrl: require("@/assets/tempfile/gj/image/xhdt4.png"),
        },
        {
          id: require("@/assets/tempfile/gj/content/f5.png"),
          content: "宁波市国际联运协会、鄞州银行银协恳谈会召开",
          title: "阅读 41",
          text: "07/19",
          imageUrl: require("@/assets/tempfile/gj/image/xhdt5.png"),
        },
        {
          id: require("@/assets/tempfile/gj/content/f6.png"),
          content: "宁波市国际联运协会上海口岸联络处成立",
          title: "阅读 41",
          text: "07/10",
          imageUrl: require("@/assets/tempfile/gj/image/hz1.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .headerImage{
  display: flex;
  margin: auto;
}
.dataList{
  display: flex;
  align-items: center;
  margin-top: 10px;
  // justify-content: space-between;
  .content{

    font-size: 12px;
    color:#484848;

  }
  .text{
    margin-top: 28px;
    font-size:10px;
    color:#9E9E9E;
  }
}
</style>
