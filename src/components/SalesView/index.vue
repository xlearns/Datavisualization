<script setup lang="ts">
import { reactive, toRefs } from "vue";
import echarts from "@/components/vueEcharts/index.vue";
const shortcuts = [
	{
		text: "Last week",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			return [start, end];
		},
	},
	{
		text: "Last month",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			return [start, end];
		},
	},
	{
		text: "Last 3 months",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			return [start, end];
		},
	},
];
let state = reactive({
	activeIndex: "1",
	radioSelect: "今日",
	dateSelect: null,
	shortcuts: shortcuts,
}) as any;
const getOptions = function () {
	return {};
};
const onMenuSelect = function (index: Number) {
	state.activeIndex = index;
};

const { activeIndex, radioSelect, dateSelect } = toRefs(state);
</script>

<template>
	<div class="mt-20px">
		<el-card shadow="hover">
			<template #header>
				<div class="flex items-center relative">
					<el-menu
						mode="horizontal"
						:default-active="activeIndex"
						@select="onMenuSelect"
						class="w-full pl-20px"
					>
						<el-menu-item index="1">销售额</el-menu-item>
						<el-menu-item index="2">访问量</el-menu-item>
					</el-menu>
					<div
						class="absolute flex right-20px top-0 h-50px justify-end items-center"
					>
						<el-radio-group v-model="radioSelect" size="'small">
							<el-radio-button label="今日"></el-radio-button>
							<el-radio-button label="本周"></el-radio-button>
							<el-radio-button label="本月"></el-radio-button>
							<el-radio-button label="今年"></el-radio-button>
						</el-radio-group>

						<el-date-picker
							class="ml-20px"
							type="daterange"
							v-model="dateSelect"
							range-separator="To"
							start-placeholder="Start date"
							end-placeholder="End date"
							:shortcuts="shortcuts"
							size="small"
						/>
					</div>
					<div></div>
				</div>
			</template>
			<div>
				<div>
					<echarts :options="getOptions()" initOptions='{renderer:"svg"}' />
				</div>
				<div>
					<div v-for="item in 6" :key="item">{{ item }}</div>
				</div>
			</div>
		</el-card>
	</div>
</template>

<style scoped>
/* 

>>>
/deep/
:deep()

*/
:deep(.el-card__header) {
	border-bottom: none !important;
	padding: 0 !important;
}
</style>
