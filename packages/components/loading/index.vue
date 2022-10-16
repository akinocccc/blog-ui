<template>
  <component :is="Loading" :type="props?.componentProps?.type" />
</template>

<script setup lang="ts">
import Loading from "./src/loading.vue";
const props = defineProps({
  componentProps: Object,
});
</script>
