<template>
  <div class="contentBox">
    <listBox
          v-for="(item, index) in list"
          :key="index"
          :name="item.name"
          :describe="item.describe"
          :imageUrl="{
            url: item.image.url,
            width: '140px',
            columWidth: '171px',
            height: '90px',
          }"
          :type="1"
          :pageType="1"
          :id="item.id"
          button="更多"
          :class="{'m-t-10':index!=0}"
        ></listBox>
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
    getTo(id){
      this.$router.push({
        path:'/categorySolutionInfo',
        query: { id: id },
      })
    },
    getList() {
      this.$http
        .productList()
        .then((res) => {
          this.list = res.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-t-10{
  margin-top: 10px;
}
/deep/ .listButton {
  background-color: #fff !important;
  border: 1px solid #3598DC !important;
  color: #3598DC !important;
  border-radius: 17px !important;
}
</style>
