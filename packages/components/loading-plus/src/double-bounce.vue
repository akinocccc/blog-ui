<template>
  <div class="double-bounce">
    <div
      class="double-bounce-child double-bounce1"
      :style="{ backgroundColor: colors[0] }"
    ></div>
    <div
      class="double-bounce-child double-bounce2"
      :style="{ backgroundColor: colors[1] }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getLightColor from "../../../utils/getLightColor";

const props = defineProps({
  color: {
    type: String,
    default: "#1d77ff",
  },
});
const colors = ref(getLightColor(props.color, 0.3));
</script>

<style lang="scss">
.double-bounce {
  position: relative;
  width: 50px;
  height: 50px;
  .double-bounce-child {
    position: absolute;
    width: 50px;
    height: 50px;
    opacity: 0.5;
    border-radius: 50%;
    animation: kf-double-bounce 1.5s ease infinite;
    @keyframes kf-double-bounce {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .double-bounce2 {
    animation-delay: 0.8s;
  }
}
</style>
