<script setup lang="ts">
import { reactive } from "vue";
import card from "./card/card.vue";
const state = reactive({
	title: "累计销售额",
	value: "$ 32,039,165",
});
</script>

<template>
	<card :title="state.title" :value="state.value">
		<div class="charts">
			<div class="charts-item charts-top">
				<span>日同比</span>
				<span class="emphasis">7.33%</span>
				<div class="increase"></div>
			</div>
			<div class="charts-item charts-bottom">
				<span>月同比</span>
				<span class="emphasis">38.79%</span>
				<div class="decrease"></div>
			</div>
		</div>
		<template #footer>
			<span>昨日销售量 </span>
			<span>￥ 30,000,000</span>
		</template>
	</card>
</template>

<style scoped>
.charts {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.charts-item {
	margin-top: 3px;
	color: #666;
	font-size: 12px;
	display: flex;
	align-items: center;
}
</style>
