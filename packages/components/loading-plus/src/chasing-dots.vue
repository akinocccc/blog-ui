<template>
  <div class="chasing-dots">
    <div
      class="chasing-dots-child chasing-dot1"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="chasing-dots-child chasing-dot2"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="chasing-dots-child chasing-dot3"
      :style="{ backgroundColor: props.color }"
    ></div>
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
.chasing-dots {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: kf-chasing-dot-rotate 2s ease-in-out infinite;
  @keyframes kf-chasing-dot-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  .chasing-dots-child {
    position: absolute;
    top: 0;
    display: inline-block;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    animation: kf-chasing-dot-scale 2s ease-in-out infinite;
    @keyframes kf-chasing-dot-scale {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }
  .chasing-dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
  }
}
</style>
