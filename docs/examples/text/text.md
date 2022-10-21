---
layout: doc
sidebar: true
editLink: true
---

# Text

## Display

<docs-display :component="AniText" :componentProps="componentProps">123</docs-display>

<script setup lang="ts">
import DocsDisplay from '../../components/docs-display/index.tsx';
import { AniText } from "../../../dist";
const componentProps = [
  {
    type: 'shadow-bounce'
  }
];
</script>
<style>
@import '../../../dist/style.css'
</style>
