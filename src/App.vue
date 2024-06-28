<template>
  <TopNav />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
</script>

<style scoped></style>
