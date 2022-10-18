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
  max-height: 120px;
  margin: 10px 0;
  padding: 20px 0;
  border: 2px solid #c2c2c2;
  border-radius: 4px;
}
</style>
