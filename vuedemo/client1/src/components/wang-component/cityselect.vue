<template>
	<div class="select">
		<slot></slot>
		<el-select v-model="value" placeholder="请选择" style="padding-left: 24px;">
			<el-option v-for="item in proData_" :key="item.pk" :label="item.pv" :value="item.pk">
			</el-option>
		</el-select>

		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in proData_" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>

		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in proData_" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				proData_: [{
					pk: 1,
					pv: '北京'
				}, {
					pk: 2,
					pv: '上海'
				}, {
					pk: 3,
					pv: '天津'
				}, {
					pk: 4,
					pv: '重庆'
				}, {
					pk: 5,
					pv: '河北'
				}, {
					pk: 6,
					pv: '山西'
				}, {
					pk: 7,
					pv: '河南'
				}, {
					pk: 8,
					pv: '辽宁'
				}, {
					pk: 9,
					pv: '吉林'
				}, {
					pk: 10,
					pv: '黑龙江'
				}, {
					pk: 11,
					pv: '内蒙古'
				}, {
					pk: 12,
					pv: '江苏'
				}, {
					pk: 13,
					pv: '山东'
				}, {
					pk: 14,
					pv: '安徽'
				}, {
					pk: 15,
					pv: '浙江'
				}, {
					pk: 16,
					pv: '福建'
				}, {
					pk: 17,
					pv: '湖北'
				}, {
					pk: 18,
					pv: '湖南'
				}, {
					pk: 19,
					pv: '广东'
				}, {
					pk: 20,
					pv: '广西'
				}, {
					pk: 21,
					pv: '江西'
				}, {
					pk: 22,
					pv: '四川'
				}, {
					pk: 23,
					pv: '海南'
				}, {
					pk: 24,
					pv: '贵州'
				}, {
					pk: 25,
					pv: '云南'
				}, {
					pk: 26,
					pv: '西藏'
				}, {
					pk: 27,
					pv: '陕西'
				}, {
					pk: 28,
					pv: '甘肃'
				}, {
					pk: 29,
					pv: '青海'
				}, {
					pk: 30,
					pv: '宁夏'
				}, {
					pk: 31,
					pv: '新疆'
				}, {
					pk: 32,
					pv: '台湾'
				}, {
					pk: 42,
					pv: '香港'
				}, {
					pk: 43,
					pv: '澳门'
				}],
				value1: [],
				value2: [],
				value: ''
			}
		}
	}
</script>

<style>
	@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
	.select {
		height: 50px;
	}
</style>
