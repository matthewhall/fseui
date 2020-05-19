<template>
  <div
    class="db-node__key-value flex pt-2 pb-2 pr-6 pl-6 hover:bg-grey-200">
    <DbNodeKey
      v-if="nodeKey"
      :class="isChildNode && 'rounded bg-grey-300 pl-2 pr-2'">
      {{ nodeKeyText }}
    </DbNodeKey>
    <DbNodeValue
      v-if="typeof nodeValue !== 'undefined'"
      :node-value="nodeValue"
      :node-type="nodeType" />
  </div>
</template>

<script>
import DbNodeKey from '../DbNodeKey';
import DbNodeValue from '../DbNodeValue';

export default {
  name: 'DbNodeKeyValue',
  components: {
    DbNodeKey,
    DbNodeValue
  },
  props: {
    nodeKey: {
      type: String,
      default: ''
    },
    nodeValue: {
      type: [Object, Array, String, Number, Boolean],
      default: ''
    },
    nodeType: {
      type: String,
      default: 'string'
    },
    isChildNode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nodeKeyText() {
      return this.isChildNode ? this.nodeKey : `${this.nodeKey}:`;
    }
  }
}
</script>
