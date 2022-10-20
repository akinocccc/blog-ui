---
layout: doc
sidebar: true
editLink: true
---

# Celebrate

<!-- <Celebrate :componentProps="componentProps" /> -->

<display-container :component="Loading" :componentProps="componentProps" />

<script setup lang="ts">
import { reactive } from 'vue';
import Celebrate from "../../../packages/components/other/celebrate.vue";
import { Loading } from "../../../dist/bundle.mjs";

const componentProps = reactive([
  {
    type: 'circle',
    show: true,
  }, {
    type: 'incomplete-circle',
    show: true,
  }
]);
</script>

<style>
@import '../../../dist/style.css'
</style>
