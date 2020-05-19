<template>
  <span
    class="db-node__key inline-block font-mono mr-3">
    {{ text }}:
  </span>
</template>

<script>
export default {
  name: 'DbNodeKey',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
