<template>
	<div class="module-box">
		<div class="big-img">
			<img :src="el.url" alt="" v-for="(el,id) in arr" :key="id" v-if="id==currentSort">
		</div>
		<div class="small-img">
			<img :src="el.url" alt="" v-for="(el,id) in arr" :key="id" :class="{'boder':currentSort === id}" @mouseenter="show($event,id)">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				currentSort: 0,
				arr: [{
						url: "https://static.21cake.com//upload/images/0d3e13abee8529b98cfc2bb9b453f2d8.jpg",
						id: "1"
					},
					{
						url: "https://static.21cake.com//upload/images/7189ba6db41e975d55815cb068ecbf95.jpg",
						id: "2"
					},
					{
						url: "https://static.21cake.com//upload/images/125ca283af35924f40252c030690fe2c.jpg",
						id: "3"
					},
					{
						url: "https://static.21cake.com//upload/images/606be8c0b49e655b2eb00e72a29741e5.jpg",
						id: "4"
					},
				]
			}
		},
		methods: {
			show(e, id) {
				this.currentSort = id
				this.flag = !this.flag
			}
		}
	}
</script>

<style scoped="scoped">
	.module-box {
		width: 1000px;
		margin: 0 auto;
		margin-top: 84px;
		position: relative;
	}

	.big-img img {
		width: 924px;
	}

	.small-img img {
		width: 90px;
		margin-top: 20px;
	}

	.big-img {
		display: flex;
		width: 900px;
		overflow: hidden;
	}

	.small-img {
		display: flex;
		width: 90px;
		flex-wrap: wrap;
		position: absolute;
		right: 0;
		top: 180px;
	}

	.boder {
		border: 1px solid #765b52;
	}
</style>
