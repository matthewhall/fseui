<template>
  <div
    class="fields-panel p-6 overflow-y-auto">
    <div>
      {{ data.fields }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getDataAtPath } from '../../../../utils/docs.js';

export default {
  name: 'FieldsPanel',
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
    ])
  },
  async created() {
    this.data = getDataAtPath(this.path, this.firestore.data) || {};
  },
  watch: {
    'path'(newVal) {
      console.log('fields watch', newVal);
    }
  }
}
</script>
