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
    show: true,
  }, {
    type: 'folding-cube',
    show: true,
  }, {
    type: 'wave',
    show: true,
  }, {
    type: 'wandering-cubes',
    show: true,
  }, {
    type: 'double-bounce',
    show: true,
  }, {
    type: 'pluse-wave',
    show: true,
  }, {
    type: 'three-bounce',
    show: true,
  }, {
    type: 'chasing-dots',
    show: true,
  }, {
    type: 'bounce-ball',
    show: true,
  }
]);
</script>

<display-container :component="LoadingPlus" :componentProps="componentProps" />

## circle

## cube-grid

## fading-circle
