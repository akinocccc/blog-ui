<template>
  <div class="grid">
    <slot name="component"></slot>
    <slot name="name"></slot>
  </div>
</template>

<style lang="scss">
.grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
}
</style>
