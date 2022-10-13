<template>
  <div class="folding-cube">
    <div class="cube cube1" :style="{ '--bgColor': props.color }"></div>
    <div class="cube cube2" :style="{ '--bgColor': props.color }"></div>
    <div class="cube cube4" :style="{ '--bgColor': props.color }"></div>
    <div class="cube cube3" :style="{ '--bgColor': props.color }"></div>
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
.folding-cube {
  width: 50px;
  height: 50px;
  transform: rotateZ(45deg);
  .cube {
    position: relative;
    float: left;
    width: 50%;
    height: 50%;
    transform: scale(1.1);
  }
  .cube::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bgColor);
    transform-origin: 100% 100%;
    animation: kf-folding-cube-rotate 2.4s ease infinite both;
    @keyframes kf-folding-cube-rotate {
      0%,
      10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
      }
      25%,
      75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      }
      90%,
      100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
      }
    }
  }
  .cube2 {
    transform: scale(1.1) rotateZ(90deg);
  }
  .cube3 {
    transform: scale(1.1) rotateZ(180deg);
  }
  .cube4 {
    transform: scale(1.1) rotateZ(270deg);
  }
  .cube2::before {
    animation-delay: 0.3s;
  }
  .cube3::before {
    animation-delay: 0.6s;
  }
  .cube4::before {
    animation-delay: 0.9s;
  }
}
</style>
