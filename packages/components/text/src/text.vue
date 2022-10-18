<template>
  <div class="text-wrapper">
    <text :class="['text', props.type, props.class]" :style="props.style">{{
      props.text
    }}</text>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "shadow-bounce",
  },
  text: {
    type: String,
    default: "",
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
</script>

<style lang="scss" scoped>
.text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .shadow-bounce {
    animation: kf-shadow-bounce 0.8s ease infinite;
    @keyframes kf-shadow-bounce {
      0%,
      100% {
        text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
      }
      25% {
        text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
      }
      50% {
        text-shadow: 1.5px -1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
      }
      75% {
        text-shadow: -1.5px 1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
      }
    }
  }
}
</style>
