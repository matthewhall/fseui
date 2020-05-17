<template>
  <button
    class="button rounded-lg font-medium tracking-wide pt-2 pb-2 pr-4 pl-4 outline-none"
    :class="{
      'bg-blue text-white': buttonType === 'primary',
      'text-grey-600 hover:bg-grey-200': buttonType === 'secondary'
    }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonField',
  props: {
    buttonType: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
