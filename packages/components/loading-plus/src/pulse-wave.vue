<template>
  <div class="pulse-wrapper">
    <div class="pulse" :style="{ backgroundColor: props.color }"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "#1d77ff",
  },
});
</script>

<style lang="scss" scoped>
.pulse-wrapper {
  width: 50px;
  height: 50px;
  .pulse {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: kf-pulse 1.5s ease-in-out infinite;
    @keyframes kf-pulse {
      0% {
        transform: scale(0);
      }
      100% {
        opacity: 0;
        transform: scale(1);
      }
    }
  }
}
</style>
