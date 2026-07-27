<template>
	<div :class="{ 'b-color': isColor, 'p-page': isPage }" style="height: 100%;">
		<div v-if="productImgList.length != 0">

			<van-image :src="item" v-for="(item, index) in productImgList" :key="index"
				style="width: 100%;display: block;" @click="getImage(item)">
				<template slot="loading">
					<van-loading type="spinner" size="20" />
				</template>
			</van-image>
		</div>
		<div v-else v-html="rich_text"></div>
	</div>
</template>

<script>
export default {
	name: 'productInfo',
	data() {
		return {
			productImgList: [],
			rich_text: '',
			isColor: false,
			isPage: true,

		}
	},

	created() {
		this.$route.meta.title = this.$route.query.title || '详情'
		this.getDetail()
		console.log(this.$route.query)
		this.isColor = this.$route.query.isColor || false
		this.isPage = this.$route.query.isPage || true
	},
	methods: {
		getDetail(id) {
			this.$http.productDetail({ id: this.$route.query.id }).then((res) => {
				if (res.code == 200) {
					if (res.data.solution_image != []) {
						res.data.product_image.forEach((res2) => {
							this.productImgList.push(res2.url)
						})
					}
				}
			})
		},
		getImage(img) {
			console.log(img)
			ImagePreview(this.productImgList);
		}
	}
}
</script>
<style lang="scss" scoped>
.b-color {
	background-color: #fff;
}
</style>