<template>
  <div class="contentBox">
    <div
          class="rzBox"

          v-for="(item, index) in rzList"
          :key="index"
        >
          <div class="name">{{ item.name }}</div>
          <div class="rzItem">
            <van-image

              width="155px"
              height="208px"
              v-for="(item2, index2) in item.list"
              :key="index2"
              :src="item2"
            ></van-image>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      rzList: [],
      list:[]
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          this.list = res.data.list;
          this.getRz();
        });
    },
    getContent(name) {
      let data = this.list.find((item) => item.name == name);
      return data ? data.solution_list : [];
    },
    getRz() {
      const originalList = this.getContent("荣誉认证");
      const transformedList = originalList.reduce(
        (accumulator, currentValue) => {
          // 查找当前name是否已经在accumulator中
          const existingItem = accumulator.find(
            (item) => item.name === currentValue.name
          );

          // 如果已经存在，将当前元素的text添加到其list中
          if (existingItem) {
            existingItem.list.push(currentValue.image.url);
          } else {
            // 如果不存在，则创建一个新对象并添加到accumulator中
            accumulator.push({
              name: currentValue.name,
              list: [currentValue.image.url],
            });
          }

          // 返回累积的accumulator以便下一次迭代
          return accumulator;
        },
        []
      ); // 初始值是一个空数组

      this.rzList = transformedList;
    },
  }

}
</script>

<style lang="scss" scoped>
.rzBox {
  margin-top: 5px;
  .name {
    font-size: 14px;
    color: #333;
  }
  .rzItem {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 10px;
  }
}
</style>
