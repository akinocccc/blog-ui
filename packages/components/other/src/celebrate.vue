<template>
  <canvas class="canvas" ref="canvas" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref<HTMLCanvasElement | any>(null);

onMounted(() => {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  let ctx = canvas.value?.getContext("2d");
  ctx.width = width;
  ctx.height = height;
  const colors = ["#feef42", "#d80c34", "#33a42c", "#2694d3"];
  const rectArr = Array.from(new Array(400)).map(() => {
    const index: number = parseInt(`${Math.random() * colors.length}`);
    console.log(index);
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      step: 1,
      color: colors[index],
    };
  });
  render(ctx, width, height, rectArr);
});

const render = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  rectArr: any[]
) => {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  rectArr.forEach((el) => {
    el.y = el.y > height ? -10 : el.y + el.step;
    ctx.rect(el.x, el.y, 2, 2);
    ctx.fillStyle = el.color;
    ctx.fill();
    ctx.closePath();
  });
  // ctx.rotate(360);
  // requestAnimationFrame(() => render(ctx, width, height, rectArr));
};
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>
