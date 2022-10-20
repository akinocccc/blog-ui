---
layout: doc
sidebar: true
editLink: true
---

# Loading Plus

## Display

<docs-display :component="LoadingPlus" :componentProps="componentProps" />

<script setup lang="ts">
import DocsDisplay from '../../components/docs-display/index.tsx';
import { LoadingPlus } from "../../../dist/bundle.mjs";
const componentProps = [
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
];
</script>

<style>
@import '../../../dist/style.css'
</style>

## circle

## cube-grid

## fading-circle
