<script setup lang="ts">
import TopView from "@/components/TopView/index.vue";
import BottomView from "@/components/BottomView/index.vue";
import MapView from "@/components/MapView/index.vue";
import ScalesView from "@/components/SalesView/index.vue";
</script>

<template>
	<div class="home">
		<TopView />
		<ScalesView />
		<ButtomView />
		<MapView />
	</div>
</template>

<style>
@import "@/css/home.css";
</style>
