<template>
  <div
    class="data-viewer flex flex-col">
    <Crumbs
      class="data-viewer__crumbs" />
    <Panels
      class="data-viewer__panels flex-1 overflow-hidden">
      <CollectionsPanel
        class="data-viewer__panel"
        path="/"
        @click:collection-item="handleCollectionItemClick"
        @click:start-collection="handleStartCollectionClick" />
      <template
        v-for="(part, index) in currentPathParts">
        <template
          v-if="index % 2">
          <CollectionsPanel
            :key="part"
            :path="part"
            class="data-viewer__panel" />
        </template>
        <template
          v-else>
          <DocumentsPanel
            class="data-viewer__panel border-l border-navy-20"
            :key="`doc-${part}`"
            :path="part"
            @click:document-item="handleDocumentItemClick" />
          <FieldsPanel
            :key="`doc-fields-${part}`"
            class="data-viewer__panel border-l border-navy-20" />
        </template>
      </template>
    </Panels>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

import Crumbs from '../Crumbs';
import Panels from '../Panels';
import CollectionsPanel from '../CollectionsPanel';
import DocumentsPanel from '../DocumentsPanel';
import FieldsPanel from '../FieldsPanel';

import { GET_COLLECTIONS } from '../../../../store/action-types.js';

import {
  SET_CURRENT_PATH,
  SET_DATA_AT_PATH
} from '../../../../store/mutation-types.js';

export default {
  name: 'DataViewer',
  components: {
    Crumbs,
    Panels,
    CollectionsPanel,
    DocumentsPanel,
    FieldsPanel
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    currentPathParts() {
      return this.firestore.currentPath.split('/')
        .filter(part => part)
        .map((part, index, arr) => arr.slice(0, index).join('/') + '/' + part);
    }
  },
  async mounted() {
    // console.log(this.firestore.currentPath);
    await this.GET_COLLECTIONS(this.firestore.currentPath);
  },
  watch: {
    'firestore.currentPath'(newVal) {
      console.log('current path', newVal);
    },
    currentPathParts(newVal) {
      console.log('Matt', newVal);
    }
  },
  methods: {
    ...mapActions([
      GET_COLLECTIONS
    ]),
    ...mapMutations([
      SET_CURRENT_PATH,
      SET_DATA_AT_PATH
    ]),
    async handleCollectionItemClick(id) {
      this.SET_CURRENT_PATH(id);
    },
    async handleStartCollectionClick() {
      console.log('start collection');
    },
    async handleDocumentItemClick(id) {
      this.SET_CURRENT_PATH(id);
    }
  }
}
</script>

<style lang="scss">
  .data-viewer {
    height: calc(100vh - 280px);
    min-height: 400px;

    &__panel {
      width: 27%;

      &:nth-of-type(n + 3):last-of-type {
        width: 46%;
      }
    }
  }
</style>
