<script setup lang="ts">
import TopView from "@/components/TopView/index.vue";
import BottomView from "@/components/BottomView/index.vue";
import MapView from "@/components/MapView/index.vue";
import SalesView from "@/components/SalesView/index.vue";
</script>

<template>
	<div class="home">
		<TopView />
		<ButtomView />
		<MapView />
		<ScalesView />
	</div>
</template>

<style>
@import "@/css/home.css";
</style>
