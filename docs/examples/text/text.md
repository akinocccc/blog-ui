---
layout: doc
sidebar: true
editLink: true
---

# Text

## Display

<script setup lang="ts">
import { reactive } from 'vue';
import DisplayContainer from '../../components/display-container.vue';
import Text from "../../../packages/components/text/index.vue";
const componentProps = reactive([
  {
    type: 'shadow-bounce',
    text: 'I am bounce text.',
  }
]);
</script>

<display-container :component="Text" :componentProps="componentProps" />
