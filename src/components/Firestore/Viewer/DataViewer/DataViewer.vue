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
import Crumbs from '../Crumbs';
import Panels from '../Panels';
import CollectionsPanel from '../CollectionsPanel';
import DocumentsPanel from '../DocumentsPanel';
import FieldsPanel from '../FieldsPanel';

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
