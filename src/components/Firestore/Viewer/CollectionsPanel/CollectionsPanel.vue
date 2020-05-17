<template>
  <div
    class="collections-panel overflow-y-auto h-full">
    <button
      class="block pt-3 pb-3 pr-6 pl-6"
      @click="handleStartCollectionClick">
      Start collection
    </button>
    <ul
      v-if="collectionIds.length">
      <li
        v-for="(id, index) in collectionIds"
        :key="index"
        class="block font-mono">
        <button
          class="block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-300 w-full text-left"
          @click="() => handleItemClick(id)">
          {{ id }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getDataAtPath } from '../../../../utils/docs.js';

export default {
  name: 'CollectionsPanel',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    collectionIds() {
      const collections = getDataAtPath(this.path, this.firestore.data) || [];

      return collections.map(collection => collection.id);
    }
  },
  methods: {
    handleItemClick(id) {
      this.$emit('click:collection-item', id);
    },
    handleStartCollectionClick() {
      this.$emit('click:start-collection');
    }
  }
}
</script>
