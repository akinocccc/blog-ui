<template>
  <canvas
    id="canvas"
    class="canvas"
    ref="canvas"
    :width="documentWidth"
    :height="documentHeight"
    v-if="show"
  />
</template>

<script setup lang="ts" name="AniCelebrate">
import console from "console";
import { ref, onMounted } from "vue";
import Spirit from "./spirit";

const props = defineProps({
  show: {
    type: Boolean,
    require: true,
    default: false,
  },
});

let show = ref<boolean>(props.show);
const documentWidth = ref<number>(0);
const documentHeight = ref<number>(0);
const canvas = ref<HTMLCanvasElement | any>(null);
const ratio = window.devicePixelRatio;
let ctx: CanvasRenderingContext2D;
const spirits: Spirit[] = [];

// Create spirit object.
const imgUrls: string[] = [];
for (let i = 1; i <= 12; i++) {
  const { href } = new URL(`../static/spirits/${i}.png`, import.meta.url);
  imgUrls.push(href);
}

onMounted(() => {
  getWindowRect();
  window.onresize = () => {
    getWindowRect();
  };
  ctx = canvas.value?.getContext("2d");
  for (let i = 0; i < 100; i++) {
    spirits.push(
      new Spirit(
        ctx,
        {
          width: documentWidth.value,
          ratio,
        },
        imgUrls
      )
    );
  }

  setTimeout(() => {
    render();
  }, 0);
});

function getWindowRect() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  documentWidth.value = width * ratio;
  documentHeight.value = height * ratio;
}

function render() {
  let isEnd = true;
  ctx.clearRect(
    0,
    0,
    documentWidth.value * ratio,
    documentHeight.value * ratio
  );
  for (let i = 0; i < spirits.length; i++) {
    if (spirits[i].y <= documentHeight.value) {
      isEnd = false;
      spirits[i].draw();
      spirits[i].update();
    }
  }
  if (isEnd) {
    show.value = false;
    console.log(show.value);
    return;
  }
  requestAnimationFrame(render);
}
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  pointer-events: none;
}
</style>
