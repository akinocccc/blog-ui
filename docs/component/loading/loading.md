---
layout: doc
sidebar: true
editLink: true
---

# Loading

## Display

<script setup lang="ts">
import { reactive } from 'vue';
import DisplayContainer from '../../components/display-container.vue';
import Loading from "../../../packages/components/loading/index.vue";
const componentProps = reactive([
  {
    type: 'circle',
  }, {
    type: 'incomplete-circle',
  }
]);
</script>

<display-container :component="Loading" :componentProps="componentProps" />
