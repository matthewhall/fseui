<template>
  <div
    class="collections-panel overflow-y-auto">
    <button
      class="block pt-3 pb-3 pr-6 pl-6 hidden"
      @click="handleStartCollectionClick">
      Start collection
    </button>
    <ul
      v-if="collections.length">
      <PanelItem
        v-for="collection in collections"
        :key="collection.id"
        :text="collection.id"
        :path="collection.path"
        :selected="selected"
        @click:panel-item="handleItemClick" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PanelItem from '../PanelItem';

import { getCollectionOrDocsAtPath } from '../../../../utils/docs.js';

export default {
  name: 'CollectionsPanel',
  components: {
    PanelItem
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: ''
    };
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    collections() {
      const collections = getCollectionOrDocsAtPath(this.path,
        this.firestore.data) || [];

      return collections.map(collection => {
        return {
          id: collection.id,
          path: collection.name
        };
      });
    },
  },
  methods: {
    /**
     * Emits a custom event when an item is clicked passing it the item's path.
     * @param {string} path Path.
     */
    handleItemClick(path) {
      this.$emit('click:collection-item', path);
      this.selected = path;
    },
    /**
     * Emits an event when the start collection button is clicked to notify
     * parent components.
     */
    handleStartCollectionClick() {
      this.$emit('click:start-collection');
    }
  },
  beforeDestroy() {
    this.selected = '';
  }
}
</script>
