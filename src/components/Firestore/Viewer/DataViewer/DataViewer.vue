<template>
  <div
    class="data-viewer flex flex-col">
    <Crumbs
      class="data-viewer__crumbs" />
    <Panels
      class="data-viewer__panels flex-1 overflow-hidden">
      <CollectionsPanel
        class="data-viewer__panel border-r border-navy-20"
        path="/"
        @click:collection-item="handleCollectionItemClick"
        @click:start-collection="handleStartCollectionClick" />
      <template
        v-for="(part, index) in currentPathParts">
        <template
          v-if="index % 2">
          <FieldsPanel
            :key="`doc-fields-${part}`"
            :path="part"
            class="data-viewer__panel" />
        </template>
        <template
          v-else>
          <DocumentsPanel
            class="data-viewer__panel border-r border-navy-20"
            :key="`doc-${part}`"
            :path="part"
            @click:document-item="handleDocumentItemClick" />
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

import { GET_COLLECTIONS, PUSH_PATH } from '../../../../store/action-types.js';

import { SET_DATA_AT_PATH } from '../../../../store/mutation-types.js';

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
      // Builds the paths for each panel. E.g.:
      // ['/collection', 'collection/docs', '/collection/docs/sub-collection']
      return this.firestore.currentPath.split('/')
        .filter(part => part)
        .map((part, index, arr) => arr.slice(0, index).join('/') + '/' + part);
    }
  },
  async mounted() {
    await this.GET_COLLECTIONS(this.firestore.currentPath);
  },
  methods: {
    ...mapActions([
      GET_COLLECTIONS,
      PUSH_PATH
    ]),
    ...mapMutations([
      SET_DATA_AT_PATH
    ]),
    async handleCollectionItemClick(id) {
      this.PUSH_PATH(id);
    },
    async handleStartCollectionClick() {
      console.log('start collection');
    },
    async handleDocumentItemClick(id) {
      this.PUSH_PATH(id);
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
