<template>
  <div
    class="fields-panel overflow-y-auto">
    <div>
      <DbNode
        v-for="(field, key) in orderedFields"
        :key="field.name"
        :node-data="field"
        :node-name="key" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import DbNode from '../DbNode';

import { getDataAtPath } from '../../../../utils/docs.js';

export default {
  name: 'FieldsPanel',
  components: {
    DbNode
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    orderedFields() {
      const fields = Object.entries(this.data.fields).sort((a, b) => {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return 1;
        }

        return 0;
      });

      return Object.fromEntries(fields);
    }
  },
  created() {
    this.data = getDataAtPath(this.path, this.firestore.data) || {};
  }
}
</script>
