<template>
  <div>
    <canvas
      id="canvas"
      class="canvas"
      ref="canvas"
      :width="documentWidth"
      :height="documentHeight"
    />
  </div>
</template>

<script setup lang="ts" name="AniCelebrate">
import { ref, onMounted } from "vue";
import Spirit from "./spirit";

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
  ctx.clearRect(
    0,
    0,
    documentWidth.value * ratio,
    documentHeight.value * ratio
  );
  for (let i = 0; i < spirits.length; i++) {
    spirits[i].draw();
    spirits[i].update();
  }
  requestAnimationFrame(render);
}
// function destroy() {
//         cancelAnimationFrame(raf);
//         spirits.forEach(item => {
//             item = null;
//             return item;
//         });
//     }
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  // background-color: #000;
}
</style>
