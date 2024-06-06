<template>
  <div class="p-page">
    <headerContent
      headerImg="dpkx/headerImage/jmlc.png"
      height="50px"
      width="103px"
    >
      <template #content>
        <div class="flowBox">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="flowItem"
            :class="
              index % 4 === 0 || index == 3 + 4 * (index % 3) ? 'green' : 'blue'
            "
          >
            <div
              class="index"
              :style="{
                'background-color':
                  index % 4 === 0 || index == 3 + 4 * (index % 3)
                    ? '#6EBB54'
                    : '#15449A',
              }"
            >
              {{ (index<9?'0':'')+(index+1) }}
            </div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </template>
    </headerContent>
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[]
      }
    },
    mounted(){

      this.getList()
    },
    methods:{
      getList(){
        this.$http.categorySolutionTypeList({ parent_name: "列表信息",name:'加盟流程'}).then((res)=>{
          this.list=res.data.list[0].solution_list
          console.log(this.list)
        })
      }
    },

}
</script>

<style lang="scss" scoped>
  .flowBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 10px;
  row-gap: 10px;
  .green {
    border: 1px solid #6ebb54;
  }
  .blue {
    border: 1px solid #15449a;
  }
  .flowItem {
    padding: 15px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    .index {
      width: 24px;
      height: 24px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border-radius: 12px;
      margin-right: 10px;
      padding-top: 5px;
    }
    .name {
      width: 72px;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
