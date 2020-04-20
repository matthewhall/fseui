<template>
  <div
    class="data-table">
    <Crumbs
      class="data-table__crumbs" />
    <Panels
      class="data-table__panels">
      <CollectionsPanel
        class="panels__collections" />
      <DocumentsPanel
        class="panels__documents" />
      <FieldsPanel
        class="panels__fields" />
    </Panels>
  </div>
</template>

<script>
import Crumbs from './Crumbs.vue';
import Panels from './Panels.vue';
import CollectionsPanel from './CollectionsPanel.vue';
import DocumentsPanel from './DocumentsPanel.vue';
import FieldsPanel from './FieldsPanel.vue';

export default {
  name: 'DataViewer',
  components: {
    Crumbs,
    Panels,
    CollectionsPanel,
    DocumentsPanel,
    FieldsPanel
  }
}
</script>