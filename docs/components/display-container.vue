<template>
  <div class="wrapper">
    <grid v-for="item in props.componentProps" :key="item.type">
      <template v-slot:component>
        <component :is="component" :componentProps="item"></component>
      </template>
      <template v-slot:name>
        <span style="margin-top: 5px">{{ item.type }}</span>
      </template>
    </grid>
  </div>
</template>

<script setup>
import grid from "./grid.vue";
const props = defineProps({
  component: Object,
  componentProps: {
    type: Array,
    default: () => [],
  },
});
console.log(props.component, props.componentProps);
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 10px;
  justify-content: space-around;
  // margin: 50px 0;
}
</style>
