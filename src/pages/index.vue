<template>
  <div>
    <aj-index v-if="id == 'aj'"></aj-index>
    <nh-index v-if="id == 'nh'"></nh-index>
  </div>
</template>

<script>
import ajIndex from "@/components/temp/index/aj/ajIndex.vue";
import nhIndex from "@/components/temp/index/nh/nhIndex.vue";
export default {
  components: { ajIndex, nhIndex },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = decodeURI(window.location.search);
    console.log(this.id);
    this.id =this.id.match(/"([^"]*)"/)?this.id.match(/"([^"]*)"/)[1]:"aj"; // this.id.substring(this.id.indexOf('"')+1,this.id.length-1)
    localStorage.setItem("id", this.id);
    console.log(this.id == "aj");
  },
};
</script>

<style>
</style>
