<template>
	<div  class="p-page">
		<img :src="item" v-for="(item,index) in solutionImgList" style="width: 100%;display: block;" />

  </div>
</template>

<script>
	export default {
		data() {
			return {
				solutionImgList:[],

			}
		},

	created() {

			this.getDetail()
		},
		methods: {
			getDetail(id){
        console.log("1231231",this.$route.query.id)
				this.$http.categorySolutionTypeDetail({id:this.$route.query.id}).then((res) => {
						console.log(res)
						if (res.code == 200) {
							if (res.data.solution_image != []) {
								res.data.solution_image.forEach((res2) => {
									this.solutionImgList.push(res2.url)
								})
							}
						}
						console.log(this.solutionImgList)
					})
				},
		}
	}
</script>

<style>

</style>
