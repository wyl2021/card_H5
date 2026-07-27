<template>
  <div>
    <img :src="IMG + 'dac/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <img class="logo" :src="IMG + 'dac/image/logo.png'" />
      <div class="companyName">浙江省宁波市象山县泗洲头镇墩岙村</div>
      <div class="textStyle"  v-for="item in text.split(' ')" style="color:#333;font-weight:500" :key="item">{{ item }}</div>
      <van-image :src="IMG+'dac/image/gsBg.png'" style="margin-top:10px" />
      <div style="display:flex;margin-bottom:10px">
        <van-image :src="IMG+'dac/image/gsBg2.png'" />
        <van-image :src="IMG+'dac/image/gsBg3.png'" />
      </div>
      <div class="textStyle" v-for="item in text2.split(' ')" style="color:#333;font-weight:500":key="item">{{ item }}</div>
    <div v-for="item in styleData" :key="item.name" style="margin-top:10px">
        <i-text iconImage="dac/image/dian.png" :title="item.name"></i-text>
        <div v-if="item.name!='幸福墩岙'" v-html="processHtmlContent(item.rich_text)"></div>
        <div v-else >
          <dacMusic></dacMusic>
        </div>
  </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      styleData:[],
      text:'墩岙村位于泗洲头镇东南部，原名丁岙，自宋代建村至今已有八百多年历史，由墩岙、墩岙塘两个自然村组成，村域面积5.5平方公里，现有居民345户1168人、觉员64名，2023年村集体经济总收入551万元、人均可支配收入5.5万元。曾先后获得中国美丽休闲乡村、全国乡村治理示范村以及省文明村等100余项各级荣誉，列为中国乡村政策与实践研究院观察点、全国耕耘者振兴计划研学基地。作为象山 “村民说事”制度发源地之一，2019年墩岙村成功承办了全国加强乡村治理体系建设工作会议。',
      text2:'近年来，墩岙村全面深化 “千万工程”，着力提升农村人居环境，以省级末来乡村建设为主线，推进农村“三大革命”实施南湖公园、综合体育场、灵南养老院、乡村治理研学基地等一批乡村建设项目，实现了全域景区化，建成省第二批未来乡村、省3A级景区村。全面践行“两山转化”，着力推动乡村产业发展，建成桃形李、水产养殖等两大干亩农渔业集聚区，年产值约1300万元。发展民宿24栋、近400张床位，民宿主户均年收入超25万元，形成以 “梅陇阁”“望乡”民宿为龙头的省级民宿集聚村，全年接待游客15万人次以上，乡村旅游综合收入超2500万元。全面聚焦“共同富裕”，着力推动乡村改革集成，不断增强乡村治理能力和治理体系现代化，持续迭代“村民说事〞 制度，成功打造灵山妯娌、灵南调解室等治理品牌，探索闲置盘活、村社共富直通车等数智融合 项目，成为省级民主法治示范村、省级党建引领基层治理观察联系点以及市级首批闲置农房盘活特色样板村。2023年6月成为农业农村部全国耕耘者振兴计划研学基地以来，承接全国各级培训班18批次1400余人，间接带动村集体经济收入40万元，为全国乡村治理贡献更多墩岙经验。'
    }
  },

  created() {
    this.handleList();
  },
  methods: {
    handleList(){
             this.$http
        .categorySolutionTypeList({ parent_name: "村庄简介" })
        .then((res) => {
          // console.log(res)
          this.styleData = res.data.list[1].solution_list || [];
        });
    },
    processHtmlContent(html) {
      // console.log('测试',html)
      if (typeof html !== "string") return "";

      let processedHtml = html.replace(
                    /<p(.*?)>/,
                    "<p$1 style='width:100%;height:100%;'>"
                  )
                  .replace(/<br\s*\/?>/gi, "").replace(/text-indent:\s*2em;/g, 'text-indent: 0.5em;line-height:0.4em;')

        console.log(processedHtml)
      return processedHtml;
    },

  },
};
</script>

<style lang="scss" scoped>
.m-x-12 {
  margin: 0 12px;
}
.h-10 {
  height: 10px;
}
.m-x {
  margin: 12px 16px;
}
.logoBg {
  // position: fixed;
  top: 0;
  width: 100%;
  height: 206px;
}
.content {
  z-index: 1;
  margin: -40px 0 0 0 !important;
  padding: 0 28px 10px 28px;
  position: relative;
  border-start-start-radius: 20px;
}
.logo {
  width: 50px;
  height: 50px;
  margin: -50px 0 0 10px;
}
.box {
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
.name {
  font-size: 12px;
  color: #02814A;
  margin: 8px 0;
}
.companyName {
  font-size: 13px;
  margin: 6px 0 8px 10px;
  color: #02814A;
  font-weight: 500;
}
</style>
