<template>
  <div>
    <h2
      class="mb-4 text-navy-300">
      Data
    </h2>
    <Card>
      <DataTable />
      <CardContent>
        <ul
          v-if="firestore.documents.length">
          <li
            v-for="doc in firestore.documents"
            :key="doc.name">
            {{ doc }}
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Card from './Card.vue';
import CardContent from './CardContent.vue';
import DataTable from './DataTable.vue';

export default {
  name: 'Data',
  components: {
    Card,
    CardContent,
    DataTable
  },
  computed: {
    ...mapState([
      'firestore'
    ])
  }
}
</script>