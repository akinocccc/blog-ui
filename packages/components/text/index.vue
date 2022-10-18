<template>
  <component
    :is="Text"
    :type="props?.componentProps?.type"
    :text="props?.componentProps?.text"
    :class="props?.componentProps?.class"
    :style="props?.componentProps?.style"
  />
</template>

<script setup lang="ts">
import Text from "./src/text.vue";
const props = defineProps({
  componentProps: Object,
});
</script>
