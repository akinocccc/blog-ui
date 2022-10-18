<template>
  <div class="bounce-ball">
    <div
      class="bounce-ball-child bounce-ball1"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="bounce-ball-child bounce-ball2"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="bounce-ball-child bounce-ball3"
      :style="{ backgroundColor: props.color }"
    ></div>
    <div
      class="bounce-ball-child bounce-ball4"
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
.bounce-ball {
  position: relative;
  width: 90px;
  min-height: 50px;
  height: 100%;
  .bounce-ball-child {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    animation: kf-bounce-ball 2s linear infinite;
    @keyframes kf-bounce-ball {
      0% {
        bottom: 22px;
        left: 0;
      }
      20% {
        bottom: 36px;
        left: 15px;
      }
      40% {
        bottom: 22px;
        left: 30px;
      }
      60% {
        bottom: 36px;
        left: 45px;
      }
      80% {
        bottom: 22px;
        left: 60px;
      }
      100% {
        bottom: 36px;
        left: 75px;
        opacity: 0;
      }
    }
  }
}
</style>
