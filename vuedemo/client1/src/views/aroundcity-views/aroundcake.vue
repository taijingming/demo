<template>
	<div class="aroundcake">
		<div class="cake-content" @click="fn('cake1')">
			<img src="https://www.21cake.com/upload/images/744e25191c8e2f22a87ad974585a6224.jpg" alt="">
			<p>百香果酸乳酪慕斯蛋糕（增区配送）</p>
			<p style="color: #BB9772;font-size: 12px;">￥198/454g(1.0磅)</p>
			<button>订购</button>
		</div>
		<div class="cake-content">
			<img src="https://www.21cake.com/upload/images/ddcc8ede50263527752974fb9652e809.jpg" alt="">
			<p>新杰瑞（增区配送）</p>
			<p style="color: #BB9772;font-size: 12px;">¥198/454g(1.0磅)</p>
			<button>订购</button>
		</div>
		<div class="cake-content">
			<img src="https://www.21cake.com/upload/images/b91a559fb060f801b0dd256ff40ac8d1.jpg" alt="">
			<p>百香果酸乳酪慕斯蛋糕木糖醇款（...</p>
			<p style="color: #BB9772;font-size: 12px;">¥198/454g(1.0磅)</p>
			<button>订购</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			fn(str){
				// this.$route.push("/cake1")
			}
		}
	}
</script>

<style scoped="scoped">
	.aroundcake{
		width: 1200px;
		margin: 0 auto;
		display: flex;
	}
	img{
		width: 228px;
	}
	.cake-content{
		width: 250px;
		padding: 10px;
	}
	p{
		text-align: center;
		font-size: 14px;
		color: #684029;
	}
	button{
		margin-left: 60px;
		margin-top: 10px;
		width: 136px;
		height: 30px;
		background-color: #684029;
		color: #FFFFFF;
		outline: none;
		border: none;
	}
</style>
