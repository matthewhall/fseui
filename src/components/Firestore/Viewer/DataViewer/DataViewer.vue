<template>
  <div
    class="data-viewer flex flex-col">
    <Crumbs
      class="data-viewer__crumbs" />
    <Panels
      class="data-viewer__panels flex-1">
      <CollectionsPanel
        class="data-viewer__panel"
        :collection-ids="collectionIds"
        @click:collection-item="handleCollectionItemClick" />
      <DocumentsPanel
        class="data-viewer__panel border-l border-navy-20" />
      <FieldsPanel
        class="data-viewer__panel border-l border-navy-20" />
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
    collectionIds() {
      if (!this.firestore.data || !this.firestore.data.collections) {
        return [];
      }

      return this.firestore.data.collections.map(item => item.id);
    }
  },
  async mounted() {
    await this.GET_COLLECTIONS(this.firestore.currentPath);
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

      const path = this.firestore.currentPath;
      const documents = await getDocuments(path);

      console.log(documents);
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
