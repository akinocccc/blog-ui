<template>
  <div class="rotate-plane" :style="{ backgroundColor: props.color }"></div>
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
.rotate-plane {
  width: 50px;
  height: 50px;
  animation: kf-rotate-plane 1.5s ease infinite;
  @keyframes kf-rotate-plane {
    0% {
      transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
    }
  }
}
</style>
