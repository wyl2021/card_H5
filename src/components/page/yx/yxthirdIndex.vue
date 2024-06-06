<template>
  <div>
    <img :src="IMG + 'yx/image/logoBg.png'" class="logoBg" />
    <div class="contentBox content">
      <!-- 标头 -->
      <div class="d-flex ">
        <img class="logo"/>
        <div>公司名</div>
      </div>
      <div class="box">
        内容1
      </div>
      <div class="box">
        内容1
      </div>
      <div class="box">
        内容1
      </div>
      <div class="box">
        内容1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: this.IMG,
    };
  },
};
</script>

<style lang="scss" scoped>
.logoBg {
  position: fixed;
  top: 0;
  width: 100vh;
}
.content{
  z-index: 10;
  margin-top: 200px;
  position: relative;
}
.logo{
width: 50px;
height: 50px;
}
.box{
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 12px;
}
</style>
