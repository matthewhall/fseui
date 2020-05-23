<template>
  <span
    class="db-node__value inline-block"
    :class="nodeType === 'null' && 'italic text-grey-500'">
    {{ value }}
  </span>
</template>

<script>
import { mapState } from 'vuex';

import { genLatLonDisplayValue } from '../../../../utils/geopoint.js';

export default {
  name: 'DbNodeValue',
  props: {
    nodeValue: {
      type: [Object, Array, String, Boolean, Number],
      default: ''
    },
    nodeType: {
      type: String,
      default: 'string'
    }
  },
  computed: {
    ...mapState([
      'settings'
    ]),
    value() {
      const type = this.nodeType;
      const val = this.nodeValue;
      const { database, projectId } = this.settings;
      // @TODO: Move this to a getter.
      const basePath = `projects/${projectId}/databases/${database}/documents`;
      let newVal;

      switch (type) {
        case 'string':
          newVal = `"${val}"`;
          break;
        case 'geopoint':
          newVal = `[${genLatLonDisplayValue(val.latitude, val.longitude)}]`;
          break;
        case 'boolean':
          newVal = val.toString();
          break;
        case 'reference':
          newVal = val.replace(basePath, '');
          break;
        case 'null':
          newVal = 'null';
          break;
        default:
          newVal = val;
      }

      return newVal;
    }
  }
}
</script>
