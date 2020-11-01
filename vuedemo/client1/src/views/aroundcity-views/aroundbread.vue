<template>
	<div class="aroundbread">
		<div class="bread-content" @click="fn('bread1')">
			<img src="https://www.21cake.com/upload/images/30de120e9e011238620bbde77302bcb0.jpg" alt="">
			<p>21cake观光月饼礼盒</p>
			<p style="color: #BB9772;font-size: 12px;">￥198/300g(6枚)</p>
			<button>订购</button>
		</div>
		<div class="bread-content" @click="fn('bread1')">
			<img src="https://www.21cake.com/upload/images/30de120e9e011238620bbde77302bcb0.jpg" alt="">
			<p>21cake观光月饼礼盒</p>
			<p style="color: #BB9772;font-size: 12px;">￥298/410g(6枚)</p>
			<button>订购</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			fn(str){
				this.$router.push(`/${str}`)
			}
		}
	}
</script>

<style>
	.aroundbread{
		width: 1200px;
		margin: 0 auto;
		display: flex;
	}
	img{
		width: 228px;
	}
	.bread-content{
		width: 250px;
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
