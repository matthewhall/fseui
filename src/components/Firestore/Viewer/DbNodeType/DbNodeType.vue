<template>
  <span
    class="db-node__type inline-block text-grey-600">
    ({{ text }})
  </span>
</template>

<script>
export default {
  name: 'DbNodeType',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
