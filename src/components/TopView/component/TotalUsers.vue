<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { $, echarts } from "@/utils";
import card from "./card/card.vue";

let $echarts = echarts();
let char: any;

const state = reactive({
	title: "累计用户数",
	value: "1,087,503",
});

onMounted(() => {
	let dom = $("#TotalUser");
	char = $echarts.init(dom, "", { renderer: "svg" });
	char.setOption({
		grid: {
			left: 0,
			bottom: 0,
			right: 0,
			top: 0,
		},
		xAxis: {
			type: "value",
			show: false,
		},
		yAxis: {
			type: "category",
			show: false,
		},
		series: [
			{
				name: "1",
				type: "bar",
				data: [200],
				barWidth: 10,
				// stack: key 合并相同数据为一个图标
				stack: "总量",
				itemStyle: {
					color: "#45c946",
				},
			},
			{
				type: "custom", //自定义数据
				data: [0],
				stack: "总量",
				renderItem: (params, api) => {
					var categoryIndex = api.value(0);
					// 开始坐标
					var start = api.coord([api.value(1), categoryIndex]);
					// 结束坐标
					var end = api.coord([api.value(2), categoryIndex]);

					return {
						type: "path",
						position: end,
						shape: {
							d: "M966.845427 93.37191L483.364392 930.62808999 0 93.37191Z",
							x: -5,
							y: -20,
							width: 10,
							height: 10,
						},
						style: {
							fill: "#45c946",
						},
					};
				},
			},
			{
				type: "custom", //自定义数据
				data: [0],
				stack: "总量",
				renderItem: (params, api) => {
					var categoryIndex = api.value(0);
					// 开始坐标
					var start = api.coord([api.value(1), categoryIndex]);
					// 结束坐标
					var end = api.coord([api.value(2), categoryIndex]);

					return {
						type: "path",
						position: end,
						shape: {
							d: "M51.181 917.124l467.885-810.25 467.774 810.25z",
							x: -5,
							y: 10,
							width: 10,
							height: 10,
						},
						style: {
							fill: "#45c946",
						},
					};
				},
			},
			{
				name: "2",
				type: "bar",
				data: [50],
				barWidth: 10,
				// stack: key 合并相同数据为一个图标
				stack: "总量",
				itemStyle: {
					color: "#eee",
				},
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
		<div id="TotalUser"></div>
		<template #footer>
			<div class="footer">
				<span>日同比 </span>
				<span>8.73%</span>
				<div class="increase"></div>
				<span style="margin-left: 10px">月同比 </span>
				<span>35.91%</span>
				<div class="decrease"></div>
			</div>
		</template>
	</card>
</template>

<style scoped>
#TotalUser {
	height: 100%;
}
.footer {
	display: flex;
	align-items: center;
}
</style>
