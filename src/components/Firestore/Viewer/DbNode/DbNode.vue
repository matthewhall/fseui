<template>
  <div
    class="db-node relative"
    :class="`db-node--${nodeType}`">
    <div
      class="db-node__click-area cursor-default">
      <DbNodeKeyValue
        :node-key="nodeName"
        :node-value="hasChildNodes ? '' : nodeData[key]"
        :node-type="nodeType"
        :is-child-node="isChildNode" />
      <div
        class="db-node__buttons">
        <DbNodeType
          :text="nodeType" />
      </div>
    </div>
    <DbNodeChildren
      v-if="hasChildNodes"
      :child-nodes="childNodes" />
  </div>
</template>

<script>
import DbNodeChildren from '../DbNodeChildren';
import DbNodeKeyValue from '../DbNodeKeyValue';
import DbNodeType from '../DbNodeType';

// Maps the field key name from the API request to a display type.
const dBKeyToTypeMapping = {
  arrayValue: 'array',
  booleanValue: 'boolean',
  geoPointValue: 'geopoint',
  integerValue: 'int',
  mapValue: 'map',
  nullValue: 'null',
  referenceValue: 'reference',
  stringValue: 'string',
  timestampValue: 'timestamp'
};

// Defines which field types can have children.
const hasChildNodeTypes = [
  dBKeyToTypeMapping.arrayValue,
  dBKeyToTypeMapping.mapValue
];

export default {
  name: 'DbNode',
  components: {
    DbNodeChildren,
    DbNodeKeyValue,
    DbNodeType
  },
  props: {
    nodeData: {
      type: Object,
      required: true
    },
    nodeName: {
      type: String,
      required: true
    },
    isChildNode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    key() {
      return Object.keys(this.nodeData)[0];
    },
    nodeType() {
      return dBKeyToTypeMapping[this.key];
    },
    hasChildNodes() {
      return hasChildNodeTypes.includes(this.nodeType);
    },
    childNodes() {
      return this.hasChildNodes ? (this.nodeData[this.key].values ||
        this.nodeData[this.key].fields) : [];
    }
  }
}
</script>

<style lang="scss">
.db-node {
  $base: &;

  // Click area will be converted to a button when field updating is done.
  &__click-area {
    &:hover,
    &:focus {
      > #{$base}__buttons {
        display: flex;
      }
    }
  }

  &__buttons {
    align-items: center;
    background-image: linear-gradient(to right, transparent 0, #eee 12px);
    box-sizing: border-box;
    display: none;
    padding: 7px 4px 0 16px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
