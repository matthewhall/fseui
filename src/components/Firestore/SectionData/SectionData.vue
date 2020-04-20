<template>
  <div>
    <h2
      class="mb-4 text-navy-300">
      Data
    </h2>
    <Card>
      <DataViewer />
    </Card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Card from '../../Card';
import DataViewer from '../Viewer/DataViewer';

export default {
  name: 'SectionData',
  components: {
    Card,
    DataViewer
  },
  computed: {
    ...mapState([
      'firestore'
    ])
  }
}
</script>
