<template>
  <div
    class="documents-panel overflow-y-auto">
    <button
      class="block pt-3 pb-3 pr-6 pl-6 hidden"
      @click="handleAddDocumentClick">
      Add document
    </button>
    <ul
      v-if="documents.length">
      <PanelItem
        v-for="doc in documents"
        :key="doc.id"
        :text="doc.id"
        :path="doc.path"
        :selected="selected"
        @click:panel-item="handleItemClick" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PanelItem from '../PanelItem';

import {
  getCollectionOrDocsAtPath,
  getDocIdFromPath
} from '../../../../utils/docs.js';

export default {
  name: 'DocumentsPanel',
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
    documents() {
      const documents =
        getCollectionOrDocsAtPath(this.path, this.firestore.data) || [];

      return documents.map(doc => {
        return {
          id: getDocIdFromPath(doc.name),
          path: doc.name
        };
      });
    }
  },
  methods: {
    /**
     * Emits a custom event when an item is clicked passing it the item's path.
     * @param {string} path Path.
     */
    handleItemClick(path) {
      this.$emit('click:document-item', path);
      this.selected = path;
    },
    handleAddDocumentClick() {}
  },
  beforeDestroy() {
    this.selected = '';
  }
}
</script>
