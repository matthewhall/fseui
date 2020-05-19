<template>
  <div
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
      type: [Array, Object],
      default: () => ([])
    }
  }
}
</script>

<style lang="scss">
.db-node__children {
  .db-node__key-value {
    padding-left: 3rem;
  }

  & & .db-node__key-value {
    padding-left: 5rem;
  }

  & & & .db-node__key-value {
    padding-left: 7rem;
  }
}
</style>
