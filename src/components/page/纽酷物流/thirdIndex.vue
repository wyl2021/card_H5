<template>
  <div class="contentBox">
    <listBox v-for="(item,index) in list"
    :key="index"
          v-if="item"
          :type="1"
          :imageUrl="{
            url: item.image.url,
            width:'149px',
            columWidth:'55%',
            height:'93px'
          }"
          :name="item.name"
          buttonColor="#E14805"
          :describe="item.describe"
          :pageType="3"
          :id="item.id"
          button="查 看"
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

          this.list = res.data.list.find((item)=>item.name=='产品服务').solution_list;
        });
    },

  }
}
</script>

<style lang="scss" scoped>
    .m-t-10{
      margin-top: 10px;
    }
</style>
