<template>
	<div class="masg">
		<div class="masg-left">
			<p style="font-size: 18px;">21cake赏光月饼礼盒</p>
			<p style="font-size: 12px;color: red;">见到月亮，也见到了人；2020中秋，情赏光</p>
			<p style="margin-top: 30px; font-size: 12px;">/最早发货时间为9月21日/</p>
			<p style="font-size: 12px;">/截止下单时间为10月3日/</p>
			<p style="font-size: 12px;">/发货日期截止为10月5日，发货前两天不予退订修改/</p>
		</div>
		<div class="mas-right">
			<p style="font-size: 24px;color: #C69C6D; margin-bottom: 20px;">￥{{price}}/{{weight}}({{num}}枚)</p>
			<span style="margin-right: 10px;font-size: 14px;">适合{{num}}人分享</span><span style="font-size: 14px;">最早明天09:30配送</span><br>
			<div style="margin-top: 20px;">
				<span style="margin-right:15px ;font-size: 14px;">商品规格</span><button style="margin-right: 20px;" @click="fn1">6枚</button><button
				 @click="fn2">8枚</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				price: 198.00,
				num: 6,
				weight: "300g"
			}
		},
		methods: {
			fn1() {
				this.price = 198.00;
				this.num = 6;
				this.weight = "300g";
			},
			fn2() {
				this.price = 298.00;
				this.num = 8;
				this.weight = "410g";
			}
		}
	}
</script>

<style scoped="scoped">
	.masg {
		width: 1000px;
		margin: 0 auto;
		position: relative;
	}

	.masg-left {
		position: absolute;
		left: 0;
		text-align: left;
	}

	.mas-right {
		position: absolute;
		right: 200px;
	}

	span {
		color: #684029;
	}

	p {
		color: #684029;
	}

	button {
		border-color: #684029;
		height: 28px;
		width: 48px;
		border: 1px solid #e7e0dd;
		padding: 0 5px;
		cursor: pointer;
	}
</style>
