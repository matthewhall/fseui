<template>
  <div
    class="collections-panel overflow-y-auto">
    <button
      class="block pt-3 pb-3 pr-6 pl-6"
      @click="handleStartCollectionClick">
      Start collection
    </button>
    <ul
      v-if="collections.length">
      <li
        v-for="collection in collections"
        :key="collection.id"
        class="block font-mono">
        <button
          class="block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-300 w-full text-left"
          @click="() => handleItemClick(collection.path)">
          {{ collection.id }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getCollectionOrDocsAtPath } from '../../../../utils/docs.js';

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
    collections() {
      const collections = getCollectionOrDocsAtPath(this.path, this.firestore.data) || [];

      return collections.map(collection => {
        return {
          id: collection.id,
          path: collection.name
        };
      });
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
