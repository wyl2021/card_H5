<template>
  <div>
    <van-tabs v-model:active="active" title-active-color="#FE6104" color="#FE6104" @click="getActive">
      <van-tab v-for="(item, index) in list" :title="item.name" :key="index">

        <div class="tabTop">
          <div @click="getList2(item.name, item2, index2)" :class="{ 'selectBox': selectBox == index2 }" class="box"
            v-for="(item2, index2) in item.describe.split('  ')">{{ item2 }}</div>
        </div>
        <div>
          <listBox v-for="(item3, index3) in fwList" :key="index3" :name="item3.name" :imageUrl="{
            url: item3.image.url,
            width: '140px',
            height: '88px',
            columWidth: '180px',
          }" :id="item3.id" :pageType="3" :index="1" button="查看详情" buttonColor="#FE6104"
            :class="{ 'm-t-10': index3 != 0 }" class='contentBox'></listBox>
        </div>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      selectBox: 0,
      fwList: [],
      active: 0,
    }
  },
  created() {
    this.getList()
  },
  watch: {
    $route(to, from) {
      this.getList()
    }
  },
  methods: {
    getActive(e) {
      this.getList2(this.list[e] ? this.list[e].name : '', this.list[e] ? this.list[e].describe.split('  ')[0] : '', 0)
    },
    async getList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "列表内容" })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data = res.data.list.find((item) => item.name == '产品服务')
          this.list = data ? data.solution_list : [];
          this.active = this.$route.query.index ? Number(this.$route.query.index) : 0
          this.selectBox = this.$route.query.index2 ? Number(this.$route.query.index2) : 0
          this.getList2(this.list[this.active].name, this.list[this.active].describe.split('  ')[this.selectBox])
        });
    },
    getList2(name, name2, index) {
      this.fwList = []
      this.$http
        .categorySolutionTypeList({ parent_name: name })
        .then((res) => {
          //  console.log("列表信息",res)
          //  this.list=res.data.list
          const data = res.data.list.find((item) => item.name == name2)
          // console.log('data',data)
          this.selectBox = index != null ? index : this.selectBox
          this.fwList = data ? data.solution_list : [];
          // console.log('fwList',this.fwList)
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.alBox {
  .name {
    color: #333333;
    font-size: 14px;
    margin: 5px 0;
  }
}

.tabTop {
  overflow-y: auto;
  display: flex;
  background: #fff;
  padding: 5px 0;
  scrollbar-width: none;

  /* 隐藏 Firefox 的滚动条 */
  .selectBox {
    background-color: #FE6104 !important;
    color: #fff !important;
  }

  .box {
    background-color: #F6F6F6;
    border-radius: 13px;
    width: fit-content;
    padding: 5px;
    font-size: 13px;
    color: #333333;
    margin-left: 8px;
    white-space: nowrap;
  }
}
</style>
