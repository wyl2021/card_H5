<template>
  <div >
    <van-tabs
      @change="change1"
      v-model="active"
      title-active-color="#02814A"
      color="#02814A"
      :swipe-threshold="2"
    >
      <van-tab  v-for="(item, index) in tabList" :title="item.name" :key="index">
            <div v-if="item.name!=='农业经济'" class="nBox">
              <!-- {{ handleImg(item.name) }} -->
                <img  :src="IMG+handleImg(item.name)+'?time='+time" ></img>
                           <img v-if="item.name==='民宿经济'"  :src="IMG+'dac/image/ms2.png?time='+time" />

              <!-- <img  src="./image/jj.png" /> -->
              <!-- <div v-html="item2.rich_text" v-for="item2 in item.solution_list" :key="item2.name" ></div> -->
            </div>
            <div v-else class="sBox">
                <div @click="$router.push({ path:'/categorySolutionInfo',query: { id: item2.id },})" v-for="item2 in item.solution_list" :key="item2.name">
                  <img :src="item2.image.url" ></img>
                  <span>{{item2.name}}</span>
                </div>
            </div>
      </van-tab>
    </van-tabs>

  <div class='h-100px'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      dayIndex: 0,
      tabIndex: 0,
      dayOption: [],
      active:0,
      time:null
    };
  },
  created() {
    this.time = Date.now();
    this.getTabList();
  },
  watch: {
    // 监听路由变化
    '$route'(to, from) {
      // 检查是否有index参数传入
      if (to.query.index !== undefined) {
        const index = Number(to.query.index)

        // 确保index是有效数字且在合理范围内
        if (!isNaN(index) && index >= 0 && index < this.tabList.length) {
          this.active = index
          // console.log('路由传值:',this.active)
        } else {
          console.warn('Invalid tab index:', index)
        }
      }
    }
  },
  methods: {
    handleUrl(str){
      return "'"+str+"'"
    },
    handleImg(name){
    //   const map = {
    //   '经济培训': require('@/components/page/墩岙村/image/jj.png'),
    //   '民宿经济': require('@/components/page/墩岙村/image/ms1.png'),
    //   '云稻经济': require('@/components/page/墩岙村/image/yd.png')
    // }
    const map = {
    '培训经济': 'dac/image/jj.png',
    '云稻经济': 'dac/image/yd.png',
    '民宿经济': 'dac/image/ms1.png'
    }
    // console.log(map[name],name)
    return map[name] || ''
    },
    change1(val) {
    },

    getTabList() {
      this.$http
        .categorySolutionTypeList({ parent_name: "经济特色" })
        .then((res) => {
          //  console.log("列表信息",res)
          // res.data.list.forEach((item)=>{
          //   this.tabList.push(item.name)
          // })
          this.tabList = res.data.list;
        });
    },

  },
};
</script>

<style lang="scss" scoped>

.h-100px{
  height: 20px;
}
.nBox{
  padding:10px;

}
.nBox img{
  width:100%;
}
.sBox{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
  padding:10px;
}

.sBox>div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px 0px rgba(0,97,55,0.08);
  border-radius: 4px 4px 4px 4px;
  img{
    width:166px;
    height:100px;
  }
  span{
    font-size:13px;
    color:#333;
    margin:5px 0;
  }
}
</style>
