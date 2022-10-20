---
layout: doc
sidebar: true
editLink: true
---

# Text

## Display

<docs-display :component="Text" :componentProps="componentProps" />

<script setup lang="ts">
import DocsDisplay from '../../components/docs-display/index.tsx';
import { Text } from "../../../dist/bundle.js";
const componentProps = [
  {
    type: 'shadow-bounce',
    text: 'I am bounce text.',
  }
];
</script>
<style>
@import '../../../dist/style.css'
</style>
