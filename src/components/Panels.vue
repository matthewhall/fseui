<template>
  <div
    class="flex panels">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Panels'
}
</script>

<style lang="scss">
  .panels {
    height: calc(100vh - 340px);
  }
</style>
