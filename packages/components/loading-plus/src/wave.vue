<template>
  <div class="wave">
    <div
      class="wave-child wave1"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="wave-child wave2"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="wave-child wave3"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="wave-child wave4"
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
.wave {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 50px;
  .wave-child {
    width: 10px;
    height: 25px;
    animation: kf-wave 0.5s ease-in-out infinite alternate;
    @keyframes kf-wave {
      0% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(2);
      }
    }
  }
  .wave2 {
    animation-delay: 0.2s;
  }
  .wave3 {
    animation-delay: 0.3s;
  }
  .wave4 {
    animation-delay: 0.4s;
  }
}
</style>
