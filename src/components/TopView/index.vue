<template>
	<div>
		<el-row :gutter="12">
			<el-col :md="6">
				<el-card shadow="hover"> <TotalSales /> </el-card>
			</el-col>
			<el-col :md="6">
				<el-card shadow="hover"> <TotalOrders /> </el-card>
			</el-col>
			<el-col :md="6">
				<el-card shadow="hover"> <TodayUsers /> </el-card>
			</el-col>
			<el-col :md="6">
				<el-card shadow="hover"> <TotalUsers /> </el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import TotalSales from "./component/TotalSales.vue";
import TodayUsers from "./component/TodayUsers.vue";
import TotalOrders from "./component/TotalOrders.vue";
import TotalUsers from "./component/TotalUsers.vue";
</script>
