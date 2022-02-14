<script setup lang="ts">
const props = defineProps({
	title: String,
	value: String,
});
</script>

<template>
	<div class="common-card">
		<div class="title">{{ title }}</div>
		<div class="value">{{ value }}</div>
		<div class="chart">
			<slot></slot>
		</div>
		<div class="line"></div>
		<div class="total">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<style scoped>
@import "./card.css";
</style>

<style>
/* 全局样式 */
.emphasis {
	margin-left: 5px;
	color: #333;
	font-weight: 700;
}

.increase {
	/* 画三角 */
	width: 0;
	height: 0;
	border-width: 3px;
	/* border-color:top  right  bottom  left*/
	border-color: transparent transparent red transparent;
	border-style: solid;
	margin: 0 0 3px 5px;
}
.decrease {
	width: 0;
	height: 0;
	border-width: 3px;
	border-color: green transparent transparent transparent;
	border-style: solid;
	margin: 3px 0 0 5px;
}
</style>
