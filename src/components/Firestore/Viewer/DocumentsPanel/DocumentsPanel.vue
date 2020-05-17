<template>
  <div
    class="documents-panel overflow-y-auto h-full">
    <button
      class="block pt-3 pb-3 pr-6 pl-6"
      @click="handleAddDocumentClick">
      Add document
    </button>
    <ul
      v-if="documentIds.length">
      <li
        v-for="id in documentIds"
        :key="id"
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

import { getDataAtPath, getDocIdFromPath } from '../../../../utils/docs.js';

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
    documentIds() {
      const documents = getDataAtPath(this.path, this.firestore.data) || [];

      console.log(documents);

      return documents.map(doc => getDocIdFromPath(doc.name));
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
