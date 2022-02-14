<script setup lang="ts">
import vEcharts from "@/components/vueEcharts/index.vue";
import { onMounted, reactive } from "vue";
const initOptions = {
	renderer: "svg",
};
let state = reactive({
	options: {
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
});
</script>

<template>
	<div class="box">
		<vEcharts :options="state.options" :initOptions="initOptions" open />
	</div>
</template>

<style scoped>
.box {
	width: 400px;
	height: 400px;
}
</style>
