<template>
  <div>
    <van-tabs v-model="active" title-active-color="#333333" color="#0F4931">
      <van-tab v-for="(item, index) in data" :title="item.name" :key="index">
        <div class="contentBox">
        <listBox
          v-for="(item2, index2) in item.list"
          :key="index2"
          :name="item2.name"
          :imageUrl="{
            url: item2.url,
            width: '140px',
            height: '96px',
            columWidth: '169px',
          }"
          :id="item2.id"
          :pageType="3"
          :index="1"
          button="查看详情"
          buttonColor="#0F4931"
          :class="{'m-t-10':index2!=0}"
        ></listBox>
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      active: 0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // getTo(id) {
    //   this.$router.push({
    //     path: "/contentInfo",
    //     query: { id: id },
    //   });
    // },
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          const list = res.data.list.find((item) => item.name == "招生就业");
          const zsList = list ? list.solution_list : [];
          const transformedList = zsList.reduce((accumulator, currentValue) => {
            // 查找当前name是否已经在accumulator中
            const existingItem = accumulator.find(
              (item) => item.name === currentValue.name
            );

            // 如果已经存在，将当前元素的text添加到其list中
            if (existingItem) {
              existingItem.list.push({
                name: currentValue.describe || "",
                url: currentValue.image.url || "",
                id: currentValue.id || "",
              });
            } else {
              // 如果不存在，则创建一个新对象并添加到accumulator中
              accumulator.push({
                name: currentValue.name,
                list: [
                  {
                    name: currentValue.describe || "",
                    url: currentValue.image.url || "",
                    id: currentValue.id || "",
                  },
                ],
              });
            }

            // 返回累积的accumulator以便下一次迭代
            return accumulator;
          }, []); // 初始值是一个空数组
          this.data = transformedList;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.xyBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 10px;
  .xyItem {
    background-color: #fff;
    border-radius: 4px;
    padding-bottom: 5px;
  }
  .name {
    text-align: center;
    font-size: 12px;
    color: #333;
  }
}
.m-t-10{
  margin-top: 10px;
}
</style>
