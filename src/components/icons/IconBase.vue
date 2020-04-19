<template>
  <svg :width="width"
      :height="height"
      :viewBox="viewBox"
      :aria-label="label"
      :role="role"
      xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    height: {
      type: [Number, String],
      default: 24
    },
    label: {
      type: String,
      default: undefined
    },
    role: {
      type: String,
      default: 'presentation'
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    },
    width: {
      type: [Number, String],
      default: 24
    }
  }
};
</script>