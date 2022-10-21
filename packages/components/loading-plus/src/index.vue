<template>
  <component :is="components[type]" v-show="props?.show" />
</template>

<script setup lang="ts" name="AniLoadingPlus">
import RotatePlane from "@components/loading-plus/src/rotate-plane.vue";
import DoubleBounce from "@components/loading-plus/src/double-bounce.vue";
import Wave from "@components/loading-plus/src/wave.vue";
import WanderingCubes from "@components/loading-plus/src/wandering-cubes.vue";
import PluseWave from "@components/loading-plus/src/pulse-wave.vue";
import ChasingDots from "@components/loading-plus/src/chasing-dots.vue";
import ThreeBounce from "@components/loading-plus/src/three-bounce.vue";
import FoldingCube from "@components/loading-plus/src/folding-cube.vue";
import BounceBall from "@components/loading-plus/src/bounce-ball.vue";
import getCamelCase from "@/utils/toCamelCase";

const props = defineProps({
  type: { type: String, default: "rotate-plane" },
  show: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#1d77ff",
  },
  style: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
});
const components: any = {
  RotatePlane,
  DoubleBounce,
  Wave,
  WanderingCubes,
  PluseWave,
  ChasingDots,
  ThreeBounce,
  FoldingCube,
  BounceBall,
};
const type = getCamelCase(props?.type);
</script>
