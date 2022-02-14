<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
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
let dom = ref();

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
	let _dom = dom.value;
	if (!props.open) {
		_dom.style.height = "150px";
		_dom.style.width = "300px";
	} else {
		_dom.style.height = "100%";
		_dom.style.width = "100%";
	}
	charts = $echarts.init(_dom, props.theme, props.initOptions);
	charts.setOption(props.options);

	window.addEventListener("resize", onResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", onResize);
});
</script>

<template>
	<div class="echats" ref="dom"></div>
</template>
