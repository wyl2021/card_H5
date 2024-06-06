<template>
  <div class="contentBox">
    <listBox v-for="(item,index) in list"
    :key="index"
          v-if="item"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width:'149px',
            columWidth:'184px'
          }"
          :name="item.name"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"

          :class="{'m-t-10':index!=0}"

    >

    </listBox>
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[]
      }
    },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$http
        .categorySolutionTypeList({ parent_name: "列表信息" })
        .then((res) => {
          console.log("列表信息", res);
          this.list = res.data.list.find((item)=>item.name=='动态').solution_list;
        });
    },

  }
}
</script>

<style lang="scss" scoped>
    .m-t-10{
      margin-top: 10px;
    }
    /deep/ .f-item{
      height: 92px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    /deep/ .describe{
      width: 100%;
      text-align: right;
    }
</style>
