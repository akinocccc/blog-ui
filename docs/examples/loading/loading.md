---
layout: doc
sidebar: true
editLink: true
---

# Loading

## Display

<docs-display :component="Loading" :componentProps="componentProps" />

<script setup lang="ts">
import DocsDisplay from '../../components/docs-display/index.tsx';
import { Loading } from "../../../dist/bundle.js";
const componentProps = [
  {
    type: 'circle',
    show: true,
  }, {
    type: 'incomplete-circle',
    show: true,
  }
];
</script>

<style>
@import '../../../dist/style.css'
</style>
