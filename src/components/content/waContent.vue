<template>
  <div class="contentBox m-x-0">
    <div class="title">{{ title }}</div>
    <van-image :src="IMG + 'wa/image/xian.png'" class="xian"></van-image>
    <div v-if="name == '简介'">
      <div
        class="textStyle"
        v-if="getContent('简介')[0].name"
        v-for="(item, index) in getContent('简介')[0].name.split(' ')"
        :key="index"
      >
        {{ item }}
      </div>
      <div class="imageBox">
        <van-image
          v-for="(item, index2) in 3"
          :src="IMG + 'wa/image/jj' + (index2 + 1) + '.png'"
          :key="index2"
        />
      </div>
      <div
        class="textStyle"
        v-if="getContent('简介')[1].name"
        v-for="(item, index3) in getContent('简介')[1].name.split(' ')"
        :key="index3"
      >
        {{ item }}
      </div>
      <van-image :src="IMG + 'wa/image/jj4.png'" />
      <van-image :src="IMG + 'wa/image/jj5.png'" />

    </div>
    <div v-else-if="name == '简介概况'">
      <div
        class="textStyle"
        v-if="getContent('简介')[0].name"
        v-for="(item, index) in getContent('简介')[0].name.split(' ')"
        :key="index"
      >
        {{ item }}
      </div>
      <div class="imageBox">
        <van-image
          v-for="(item, index) in 3"
          :src="IMG + 'wa/image/jj' + (index + 1) + '.png'"
          :key="index"
        />
      </div>
      <div
        class="textStyle"
        v-if="getContent('简介')[1].name"
        v-for="(item, index) in getContent('简介')[1].name.split(' ')"
      >
        {{ item }}
      </div>
      <van-image :src="IMG + 'wa/image/jj4.png'" />
      <van-image :src="IMG + 'wa/image/jj5.png'" />
      <div
        class="textStyle"
        v-if="getContent('简介')[2].name"
        v-for="(item, index) in getContent('简介')[2].name.split(' ')"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div v-else-if="name == '院士工作站'" class="workBox">
      <div
        v-if="index < 4"
        v-for="(item, index) in getContent('院士工作站')"
        :key="index"
        @click="getTo(item.id)"
      >
        <van-image
          v-if="item.image"
          :src="item.image.url"
          height="144px"
        ></van-image>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div v-else-if="name == '名师风采'" class="">
      <div
        v-for="(item, index) in getContent('名师风采')"
        :key="index"
        :class="{ 'm-b-10': index != getContent('名师风采').length - 1 }"
        @click="getTo(item.id)"
      >
        <list-box
        :pageType="2"
          :type="3"
          :imageUrl="{
            url: item.image.url,
            width: '102px',
            height: '102px',
          }"
          :name="item.name"
          :describe="item.describe"
          button="风采详情"
          :id="item.id"
          fWidth="69%"
        ></list-box>
      </div>
    </div>
    <div v-else-if="name == '专业建设'">
      <div
        v-for="(item, index) in getContent('专业建设')"
        :key="index"
        class="majorBox"
        :class="{'m-b-10':index != getContent('专业建设').length - 1}"
        @click="getTo(item.id)"
      >
        <div class="name">{{ item.name }}</div>
        <div class="d-flex">
          <div class="describe">{{ item.describe }}</div>
          <van-icon name="arrow"  class="icon" size="20px"></van-icon>
        </div>
      </div>
    </div>
    <div v-else-if="name == '网安学院招生'" class="">
      <iText
        iconImage="wa/icon/xymc.png"
        title="学院名称：网络空间安全学院（计算机学院）"
      ></iText>
      <iText
        iconImage="wa/icon/xygw.png"
        title="学院官网链接：http://cse.nbut.edu.cn"
      ></iText>
      <iText
        iconImage="wa/icon/zsrx.png"
        title="学院招生热线：0574-87610690"
      ></iText>
      <div class="hotTitle">热门专业</div>
      <div class="hotClass">
        <div  v-for="(item, index) in getContent('热门专业')" :key="index" class="className"  @click="getTo(item.id)">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div v-else-if="name == '网安学院就业实习'" class="">
      <div v-for="(item, index) in getContent('就业实习')" :key="index" class="jobClass" :class="{'m-b-10':index != getContent('就业实习').length - 1}">
        <list-box
        :pageType="2"
          :type="3"
          :imageUrl="{
            url: item.image.url,
            width: '132px',
            height: '114px',
          }"
          :name="item.name"
          :describe="item.describe"
          button="查看更多"
          :id="item.id"
        ></list-box>
      </div>
    </div>
    <div v-else-if="name == '宁波工程学院'">
      <div class="">
        <van-image
          :src="IMG + 'wa/image/nbgc.png'"
        />
      </div>
      <div
        class="textStyle"
        v-if="getContent('简介')[0].name"
        v-for="(item, index) in getContent('宁波工程学院')[0].name.split(' ')"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: "",
    list: [],
  },
  data() {
    return {
      IMG: this.IMG,
      // list: [],
    };
  },
  created() {},
  methods: {
    getUrl(str) {
      return "'" + str + "'";
    },

    getContent(name) {
      return this.list.find((item) => item.name == name)
        ? this.list.find((item) => item.name == name).solution_list
        : [];
    },
    getTo(id) {
      this.$router.push({
        path:"/categorySolutionInfo",
        query: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.xian {
  margin: 10px 0;
}
/deep/ .button {
  background-color: #d0333a !important;
}
.title {
  font-size: 14px;
  color: #333;
}
.m-x-0 {
  margin: 10px 0 !important;
}
.workBox {
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 5px;

  .name {
    font-size: 14px;
    color: #666;
    margin-top: 2px;
    text-align: center;
  }
}
.imageBox {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  column-gap: 5px;
  margin: 5px 0;
}

/deep/ .button {
  margin-left: 0 !important;
}
/deep/ .f-colum-end {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 30px;
}
.m-b-10 {
  margin-bottom: 10px;
}
.majorBox {
  background-color: #f9f9f9;
  padding: 13px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .name {
    font-size: 14px;
    color: #333;
  }
  .describe {
    color: #999999;
    font-size: 12px;
    margin-right: 6px;
  }
  .icon{

    color:#666666;
  }
}
.hotTitle{
  font-size:14px ;
  color: #333;
  font-weight: 600;
margin-bottom: 10px;
}
.hotClass{
  display: grid;
  grid-template-columns: 49% 49%;
  column-gap: 8px;
  row-gap: 8px;
  .className{
    border: 1px solid #D0333A;
    background-color:rgba($color: #D0333A, $alpha: 0.1);
    padding:6px 0;
    font-size: 14px;
    color: #D0333A;
    text-align: center;
    border-radius: 4px;
  }

}
.jobClass{
/deep/ .f-colum-end{
      margin-top:25px !important;
    }
}
</style>
