<script setup lang="ts">
import vEcharts from "@/components/vueEcharts/index.vue";
import { onMounted, reactive } from "vue";
const initOptions = {
	renderer: "svg",
};
let state = reactive({
	options1: {
		title: {
			text: "第一个 ECharts 实例",
		},
		tooltip: {},
		legend: {
			data: ["销量"],
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
		},
		yAxis: {},
		series: [
			{
				name: "销量",
				type: "bar",
				data: [5, 20, 36, 10, 10, 20],
			},
		],
	},
	options2: {
		title: {
			text: "第一个 ECharts 实例",
		},
		tooltip: {},
		legend: {
			data: ["销量"],
		},
		xAxis: {
			data: ["衬衫1", "羊毛衫2", "雪纺衫3", "裤子4", "高跟鞋5", "袜子1"],
		},
		yAxis: {},
		series: [
			{
				name: "销量",
				type: "bar",
				data: [500, 2000, 3600, 1000, 1000, 2000],
			},
		],
	},
});

const getOption1 = function () {
	return state.options1;
};

const getOption2 = function () {
	return state.options2;
};
</script>

<template>
	<div class="content">
		<div class="box">
			<vEcharts :options="getOption1()" :initOptions="initOptions" open />
		</div>
		<div class="box">
			<vEcharts :options="getOption2()" open />
		</div>
		<div class="box">
			<vEcharts :options="getOption1()" :initOptions="initOptions" open />
		</div>
		<div class="box">
			<vEcharts :options="getOption2()" open />
		</div>
	</div>
</template>

<style scoped>
.content {
	display: flex;
}
.box {
	width: 400px;
	height: 400px;
}
</style>
