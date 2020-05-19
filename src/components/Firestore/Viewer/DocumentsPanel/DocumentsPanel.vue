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
        :class="{ 'bg-grey-200': doc.path === selected }"
        class="block relative font-mono">
        <button
          class="block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-200 w-full text-left focus:outline-none"
          @click="() => handleItemClick(doc.path)">
          {{ doc.id }}
          <IconBase
            v-if="doc.path === selected"
            class="documents-panel__icon">
            <IconNavigateNext />
          </IconBase>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import IconBase from '../../../Icons/IconBase';
import IconNavigateNext from '../../../Icons/IconNavigateNext';

import {
  getCollectionOrDocsAtPath,
  getDocIdFromPath
} from '../../../../utils/docs.js';

export default {
  name: 'DocumentsPanel',
  components: {
    IconBase,
    IconNavigateNext
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

<style lang="scss">
.documents-panel {
  &__icon {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
