<template>
  <div>
    <aj-index v-if="id == 'aj'"></aj-index>
    <nh-index v-if="id == 'nh'"></nh-index>
    <jh-index v-if="id == 'jh'"></jh-index>
    <gj-index v-if="id == 'gj'"></gj-index>
    <tsz-index v-if="id == 'tsz'"></tsz-index>
    <ym-index v-if="id == 'ym'"></ym-index>
  </div>
</template>

<script>
import ajIndex from "@/components/temp/index/aj/ajIndex.vue";
import nhIndex from "@/components/temp/index/nh/nhIndex.vue";
import jhIndex from "@/components/temp/index/jh/jhIndex.vue";
import gjIndex from "@/components/temp/index/gj/gjIndex.vue";
import tszIndex from "@/components/temp/index/tsz/tszIndex.vue";
import YmIndex from "@/components/temp/index/ym/ymIndex.vue";
export default {
  components: { ajIndex, nhIndex, jhIndex, gjIndex, tszIndex, YmIndex },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = decodeURI(window.location.search);
    console.log(this.id);
    this.id = this.id.match(/"([^"]*)"/) ? this.id.match(/"([^"]*)"/)[1] : "aj"; // this.id.substring(this.id.indexOf('"')+1,this.id.length-1)
    localStorage.setItem("id", this.id);
    console.log(this.id == "aj");
  },
};
</script>

<style>
</style>
