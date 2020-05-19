<template>
  <div
    :class="isChildNode ? 'pl-16' : 'pl-6'"
    class="db-node__key-value flex pt-2 pb-2 pr-6 hover:bg-grey-200">
    <div
      v-if="nodeKey"
      :class="isChildNode && 'rounded bg-grey-200 pl-2 pr-2 self-start'"
      class="db-node__key inline-block font-mono mr-3 text-grey-600">
      {{ nodeDisplayKey }}
    </div>
    <div
      v-if="nodeValue"
      class="db-node__value inline-block">
      {{ nodeValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DbNodeKeyValue',
  props: {
    nodeKey: {
      type: String,
      default: ''
    },
    nodeValue: {
      type: [Object, Array, String, Number, Boolean],
      default: ''
    },
    isChildNode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nodeDisplayKey() {
      return this.isChildNode ? this.nodeKey : `${this.nodeKey}:`;
    }
  }
}
</script>
