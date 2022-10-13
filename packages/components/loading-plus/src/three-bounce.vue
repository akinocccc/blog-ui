<template>
  <div class="three-bounce">
    <div
      class="three-bounce-child three-bounce1"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="three-bounce-child three-bounce2"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="three-bounce-child three-bounce3"
      :style="{ backgroundColor: props.color }"
    ></div>
  </div>
</template>

<script setup lang="ts" name="ThreeBounce">
const props = defineProps({
  color: {
    type: String,
    default: "#1d77ff",
  },
});
</script>

<style lang="scss">
.three-bounce {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 50px;
  .three-bounce-child {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    animation: kf-three-bounce-scale 0.6s ease-in-out infinite alternate;
    @keyframes kf-three-bounce-scale {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }
  .three-bounce1 {
    animation-delay: -0.4s;
  }
  .three-bounce2 {
    animation-delay: -0.2s;
  }
}
</style>
