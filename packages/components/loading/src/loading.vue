<template>
  <div class="loading-wrapper">
    <div
      :class="['loading', props.type]"
      :style="`border-color: ${props.color}`"
    >
      <div class="mask"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "circle",
  },
  color: {
    type: String,
    default: "#1d77ff",
  },
});
</script>

<style lang="scss">
.loading-wrapper {
  width: 50px;
  height: 50px;
  .loading {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-width: 3px;
    border-style: solid;
  }
  .circle {
    border-right-color: transparent !important;
    animation: kf-loading-rotate 1s linear infinite;
  }
  .incomplete-circle {
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    animation: kf-loading-rotate 1s linear infinite;
  }
  @keyframes kf-loading-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
