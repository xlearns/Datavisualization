<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";
import { $, echarts } from "@/utils/index";
const props = defineProps({
	options: Object as any,
	theme: {
		type: [Object, String] as any,
		default: "",
	},
	open: {
		type: Boolean,
		default: false,
	},
	initOptions: {
		type: Object as any,
		default: {
			renderer: "canvas",
		},
	},
});

let $echarts = echarts();
let charts: any;

watch(
	() => props.options,
	() => {
		charts.setOption(props.options);
	},
	{
		deep: true,
	}
);
const onResize = function () {
	charts?.resize();
};
onMounted(() => {
	let dom = $(".echats");
	if (!props.open) {
		dom.style.height = "150px";
		dom.style.width = "300px";
	}
	charts = $echarts.init(dom, props.theme, props.initOptions);
	charts.setOption(props.options);

	window.addEventListener("resize", onResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", onResize);
});
</script>

<template>
	<div class="echats"></div>
</template>

<style scoped>
.echats {
	width: 100%;
	height: 100%;
}
</style>
