<template>
	<div class="aroundcity-content">
		<div class="back"></div>
		<div class="aroundcity-nav">
			<router-link to="/aroundbread">月饼</router-link>
			<router-link to="/aroundcake">蛋糕</router-link>
			<router-link to="/aroundcoffee">咖啡</router-link>
			<router-link to="/aroundnut">坚果/果干</router-link>
		</div>
		<router-view></router-view>
		<div class="masage">已选择的商品(0)</div><br>
		<div class="masage">订单信息</div>
		<div class="aroundcity-shop">
			<div class="shop-left">
				<span style="margin-right: 24px;">收货人：</span><input type="text" placeholder="收货人姓名"><br>
				<span style="margin-right: 12px;">联系方式：</span><input type="text" placeholder="收货人联系方式"><br>
				<cityselect><span>城市:</span></cityselect>
				<span>详细地址:</span><textarea name="" id="" placeholder="请输入详细地址" cols="30" rows="10" style="resize:none;vertical-align: middle;"></textarea>
			</div>
			<div class="shop-right">
				<p>商品金额：<span style="color: #000000;">￥0.00</span></p>
				<p>配送费：<span style="color: #000000;">￥0.00</span></p>
				<div style="width: 100%;height: 1px;border: 1px solid #e2e2e2;background-color: #e2e2e2;margin-top: 10px;"></div>
				<p>合计：<span style="color: red;">￥0.00</span></p>
				<p style="color: #d5bfa7;">发货及到货时间参考产品详情页说明</p>
			</div>
			<button>在线付款</button>
		</div>
	</div>
</template>

<script>
	import cityselect from "@/components/wang-component/cityselect.vue"
	import aroundbread from "@/views/aroundcity-views/aroundbread.vue"
	import aroundcake from "@/views/aroundcity-views/aroundcake.vue"
	import aroundcoffee from "@/views/aroundcity-views/aroundcoffee.vue"
	import aroundnut from "@/views/aroundcity-views/aroundnut.vue"
	export default {
		data() {
			return {}
		},
		components: {
			cityselect,
			aroundbread,
			aroundcake,
			aroundcoffee,
			aroundnut,
		}
	}
</script>

<style scoped="scoped">
	.back {
		background: url(../assets/back.jpg) no-repeat center;
		height: 350px;
		width: 100%;
	}

	.aroundcity-content {
		width: 100%;
		border-bottom: 1px solid #e9e9e9;
		margin-top: 84px;
	}

	.aroundcity-nav {
		text-align: center;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #E9E9E9;
	}

	a {
		text-decoration: none;
		color: #584133;
		font-size: 16px;
		padding: 0 15px;
	}

	.aroundcity-shop {
		width: 1200px;
		margin: 0 auto;
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: #fafafa;
		border: 1px solid #E9E9E9;
		position: relative;
	}

	.masage {
		padding: 15px 50px;
		width: 1200px;
		background-color: #FAFAFA;
		margin: 10px auto;
		/* margin-top: 10px; */
		border: 1px solid #E9E9E9;
		font-size: 12px;
	}

	.aroundcity-shop span {
		margin: 20px;
		font-size: 12px;
		color: #b3b3b3;
	}

	.aroundcity-shop input {
		margin-bottom: 20px;
		padding: 5px 0;
		outline: none;
		border: 1px solid #efefef;
	}

	textarea {
		width: 300px;
		height: 100px;
		outline: none;
		border: 1px solid #efefef;
	}

	.shop-right {
		position: absolute;
		right: 60px;
		top: 50px;
	}

	.shop-right p {
		text-align: right;
		padding-top: 10px;
		font-size: 13px;
	}

	button {
		position: absolute;
		right: 55px;
		bottom: 50px;
		width: 232px;
		height: 34px;
		border: none;
		background-color: #bfbfbf;
		color: white;
		outline: none;
	}
</style>
