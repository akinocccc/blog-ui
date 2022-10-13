<template>
  <div class="wandering-cubes">
    <div
      class="wandering-cubes-child wandering-cubes1"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="wandering-cubes-child wandering-cubes2"
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

<style lang="scss">
.wandering-cubes {
  position: relative;
  width: 50px;
  height: 50px;
  .wandering-cubes-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    animation: kf-wandering-cubes 1.8s ease-in-out -1.8s infinite both;
    @keyframes kf-wandering-cubes {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: translateX(30px) rotate(-90deg) scale(0.5);
      }
      50% {
        transform: translateX(30px) translateY(30px) rotate(-179deg);
      }
      50.1% {
        transform: translateX(30px) translateY(30px) rotate(-180deg);
      }
      75% {
        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  .wandering-cubes2 {
    animation-delay: -0.9s;
  }
}
</style>
