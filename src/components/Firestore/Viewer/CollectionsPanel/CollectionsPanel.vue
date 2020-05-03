<template>
  <div
    class="collections-panel p-6">
    <ul
      v-if="collectionIds.length">
      <li
        v-for="id in collectionIds"
        :key="id"
        class="font-mono">
        <button
          @click="() => handleItemClick(id)">
          {{ id }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CollectionsPanel',
  props: {
    collectionIds: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    handleItemClick(id) {
      this.$emit('click:collection-item', id);
    }
  }
}
</script>
