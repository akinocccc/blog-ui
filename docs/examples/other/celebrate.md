---
layout: doc
sidebar: true
editLink: true
---

# Celebrate

<!-- <Celebrate :componentProps="componentProps" /> -->

<display-container :component="AniLoading" :componentProps="componentProps" />

<script setup lang="ts">
import { reactive } from 'vue';
import Celebrate from "../../../packages/components/other/celebrate.vue";
import { AniLoading } from "../../../dist";

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
