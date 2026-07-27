<template>
  <div>
    <van-tabs v-model="active" title-active-color="#FF0000" color="#FFF">
      <van-tab v-for="(item, index) in data" :title="item.name" :key="index">
        <div class="contentBox">
          <div class="twofold-grid">
          <div
            class="cpItem"
            v-for="(item2, index2) in item.list"
            :key="index2"
          >
            <van-image v-if="item2.image.url" :src="item2.image.url"></van-image>
            <div class="describe">{{ item2.describe }}</div>
          </div>
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
          const list = res.data.list.find((item) => item.name == "产品中心");
          const zsList = list ? list.solution_list : [];
          this.data.push({
            name:'全部',
            list:zsList
          })

          const transformedList = zsList.reduce((accumulator, currentValue) => {
            // 查找当前name是否已经在accumulator中
            const existingItem = accumulator.find(
              (item) => item.name === currentValue.name
            );

            // 如果已经存在，将当前元素的text添加到其list中
            if (existingItem) {
              existingItem.list.push(currentValue);
            } else {
              // 如果不存在，则创建一个新对象并添加到accumulator中
              accumulator.push({
                name: currentValue.name,
                list: [
                currentValue
                ],
              });
            }

            // 返回累积的accumulator以便下一次迭代
            return accumulator;
          }, []); // 初始值是一个空数组

          transformedList.forEach(element => {
            this.data.push({
              name:element.name,
              list:element.list
            })
          });

        });
    },
  },
};
</script>

<style lang="scss" scoped>

.cpItem{
  .describe{
    color: #333333;
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
  }
}
</style>
