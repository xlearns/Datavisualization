<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { $, echarts } from "@/utils";
import card from "./card/card.vue";

let $echarts = echarts();
let char: any;

const state = reactive({
	title: "今日交易用户数",
	value: "81,014",
});

onMounted(() => {
	let dom = $("#TodayUsers");
	char = $echarts.init(dom, "", { renderer: "svg" });
	char.setOption({
		tooltip: {
			trigger: "axis",
			backgroundColor: "rgba(255, 255, 255, 0.7)",
		},
		color: ["#3398DB"],
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
		xAxis: {
			type: "category",
			show: false,
			data: [
				"00:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
				"01:00",
			],
			// 坐标轴两边留白策略【默认x轴距两侧的边距】
			// boundaryGap: false,
		},
		yAxis: {
			show: false,
		},
		series: [
			{
				type: "bar",
				data: [
					410, 621, 330, 752, 199, 366, 265, 310, 550, 654, 299, 311, 66, 98,
				],
				barWidth: "60%",
			},
		],
	});
});
window.addEventListener("resize", () => {
	char?.resize();
});
</script>

<template>
	<card :title="state.title" :value="state.value">
		<div id="TodayUsers"></div>
		<template #footer>
			<span>退货率 </span>
			<span>5.14%</span>
		</template>
	</card>
</template>

<style scoped>
#TodayUsers {
	height: 100%;
}
</style>
