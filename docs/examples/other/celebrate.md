---
layout: doc
sidebar: true
editLink: true
---

# Celebrate

<Celebrate :componentProps="componentProps" />

<script setup lang="ts">
import { reactive } from 'vue';
import Celebrate from "../../../packages/components/other/celebrate.vue";
const componentProps = reactive([
  {
    show: true,
  }
]);
</script>
