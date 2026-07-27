<template>
  <div class="">
    <div class="contentBox"  v-for="(item, index) in list">
    <listBox

          :key="index"
          v-if="item"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width: '130px',
            columWidth: '60%',
            height: '96px',
          }"
          :name="item.name"
          buttonColor="#04509E"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="查看详情"
        >
        </listBox>
      </div>
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
          let data=res.data.list.find((item)=>item.name=='产品服务')
          this.list =data?data.solution_list:[];
        });
    },

  }
}
</script>

<style lang="scss" scoped>
    .m-t-10{
      margin-top: 10px;
    }
    // /deep/ .f-item{
    //   height: 92px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between;
    // }
    // /deep/ .describe{
    //   width: 100%;
    //   text-align: right;
    // }
</style>
