<template>
  <div>
    <aj-index v-if="id[1]=='aj'"></aj-index>
  </div>
</template>

<script>
import ajIndex from '@/components/temp/index/aj/ajIndex.vue'
export default {
  components: { ajIndex },
  data(){
    return{
      id:''
    }
  },
  created(){

    this.id = decodeURI(window.location.search);
    console.log(this.id)
   this.id =this.id.match(/"([^"]*)"/);    // this.id.substring(this.id.indexOf('"')+1,this.id.length-1)
   localStorage.setItem("id",this.id);
   console.log(this.id[1]=='aj');
  }

}
</script>

<style>

</style>
