<template>
  <div
    v-if="childNodes.length"
    class="db-node__children">
    <DbNode
      v-for="(node, key) in childNodes"
      :key="key"
      :node-data="node"
      :node-name="key.toString()"
      :is-child-node="true" />
  </div>
</template>

<script>
export default {
  name: 'DbNodeChildren',
  components: {
    DbNode: () => import('../DbNode')
  },
  props: {
    childNodes: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
