<template>
  <div>
    <aj-index v-if="id == 'aj'"></aj-index>
    <nh-index v-if="id == 'nh'"></nh-index>
    <jh-index v-if="id == 'jh'"></jh-index>
    <gj-index v-if="id == 'gj'"></gj-index>
    <tsz-index v-if="id == 'tsz'"></tsz-index>
    <ym-index v-if="id == 'ym'"></ym-index>
    <index v-if="!isPage"></index>
  </div>
</template>

<script>
import ajIndex from "@/components/temp/index/aj/ajIndex.vue";
import nhIndex from "@/components/temp/index/nh/nhIndex.vue";
import jhIndex from "@/components/temp/index/jh/jhIndex.vue";
import gjIndex from "@/components/temp/index/gj/gjIndex.vue";
import tszIndex from "@/components/temp/index/tsz/tszIndex.vue";
import YmIndex from "@/components/temp/index/ym/ymIndex.vue";
import index from "@/components/temp/index/aModel/index.vue";
import userType from "@/api/index.js";
export default {
  components: { ajIndex, nhIndex, jhIndex, gjIndex, tszIndex, YmIndex, index },
  data() {
    return {
      id: "",
      isPage:true,
    };
  },
  created() {
    this.getTest();
    this.id = decodeURI(window.location.search);
    console.log(this.id);
    this.id = this.id.match(/"([^"]*)"/) ? this.id.match(/"([^"]*)"/)[1] : ""; // this.id.substring(this.id.indexOf('"')+1,this.id.length-1)
    this.isPage=this.id=='aj' || this.id=='nh' || this.id=='jh' || this.id=='gj' || this.id=='tsz' || this.id=='ym'
    localStorage.setItem("id", this.id);

    console.log(this.isPage);
  },
  methods: {
    getTest() {
      this.$http.userType();
    },
  },
};
</script>

<style>
</style>
