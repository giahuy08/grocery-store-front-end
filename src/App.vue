<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const layoutMeta = computed(() => {
  return route.meta.layout
})
const layout = computed(() => {
  console.log(layoutMeta.value)
  return (layoutMeta.value || 'default') + '-layout'
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>

</style>
