<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
	<RouterView />
</template>
<style>
@import "@/assets/base.css";
</style>
