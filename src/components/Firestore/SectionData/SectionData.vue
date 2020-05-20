<template>
  <div>
    <template
      v-if="firestore.data && firestore.data.collections.length">
      <h2
        class="mb-4 text-navy-300">
        Data
      </h2>
      <Card>
        <DataViewer />
      </Card>
    </template>
    <div
      v-else
      class="text-navy-300 mt-20">
      <p
        class="text-center">
        No data. Enter your emulator settings and make sure your emulator is running.
      </p>
    </div>
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
