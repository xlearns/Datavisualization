<script setup lang="ts">
import { getCurrentInstance, onMounted, reactive } from "vue";
import { $, echarts } from "@/utils";
import card from "./card/card.vue";
let $echarts = echarts();
let char: any;
const state = reactive({
	title: "累计订单量",
	value: "$ 32,039,165",
});
onMounted(() => {
	let dom = $("#TotalOrderCharts");
	char = $echarts.init(dom, "", { renderer: "svg" });
	char.setOption({
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
		xAxis: {
			type: "category",
			show: false,
			data: [],
			// 坐标轴两边留白策略【默认x轴距两侧的边距】
			boundaryGap: false,
		},
		yAxis: {
			show: false,
		},
		series: [
			{
				type: "line",
				data: [612, 987, 321, 565, 440, 520, 398, 499, 199, 299, 298, 632],
				areaStyle: {
					color: "purple",
				},
				lineStyle: {
					// 线条
					width: 0,
				},
				itemStyle: {
					// 点
					opacity: 0,
				},
				//是否平滑曲线显示
				smooth: true,
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
		<div id="TotalOrderCharts"></div>
		<template #footer>
			<span>昨日订单量 </span>
			<span>￥ 30,000,000</span>
		</template>
	</card>
</template>

<style scoped>
#TotalOrderCharts {
	height: 100%;
}
</style>
