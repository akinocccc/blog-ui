<template>
  <component :is="components[type]" />
</template>

<script setup lang="ts">
import RotatePlane from "./src/rotate-plane.vue";
import DoubleBounce from "./src/double-bounce.vue";
import Wave from "./src/wave.vue";
import WanderingCubes from "./src/wandering-cubes.vue";
import PluseWave from "./src/pulse-wave.vue";
import ChasingDots from "./src/chasing-dots.vue";
import ThreeBounce from "./src/three-bounce.vue";
import FoldingCube from "./src/folding-cube.vue";
import getCamelCase from "../../utils/getCamelCase";
const props = defineProps({
  componentProps: Object,
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
};
const type = getCamelCase(props?.componentProps?.type);
</script>
