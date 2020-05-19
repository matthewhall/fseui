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
      <li
        v-for="doc in documents"
        :key="doc.id"
        class="block font-mono">
        <button
          class="block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-200 w-full text-left"
          @click="() => handleItemClick(doc.path)">
          {{ doc.id }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import {
  getCollectionOrDocsAtPath,
  getDocIdFromPath
} from '../../../../utils/docs.js';

export default {
  name: 'DocumentsPanel',
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
    documents() {
      const documents = getCollectionOrDocsAtPath(this.path, this.firestore.data) || [];

      return documents.map(doc => {
        return {
          id: getDocIdFromPath(doc.name),
          path: doc.name
        };
      });
    }
  },
  methods: {
    handleItemClick(id) {
      this.$emit('click:document-item', id);
    },
    handleAddDocumentClick() {},
  }
}
</script>
