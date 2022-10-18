---
layout: doc
sidebar: true
editLink: true
---

# Loading Plus

## Display

<script setup lang="ts">
import { reactive } from 'vue';
import DisplayContainer from '../../components/display-container.vue';
import LoadingPlus from "../../../packages/components/loading-plus/index.vue";
const componentProps = reactive([
  {
    type: 'rotate-plane',
  }, {
    type: 'folding-cube',
  }, {
    type: 'wave',
  }, {
    type: 'wandering-cubes',
  }, {
    type: 'double-bounce',
  }, {
    type: 'pluse-wave',
  }, {
    type: 'three-bounce',
  }, {
    type: 'chasing-dots',
  }, {
    type: 'bounce-ball',
  }
]);
</script>

<display-container :component="LoadingPlus" :componentProps="componentProps" />

## circle

## cube-grid

## fading-circle
