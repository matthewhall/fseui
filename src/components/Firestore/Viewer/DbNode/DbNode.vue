<template>
  <div
    class="db-node relative"
    :class="`db-node--${nodeType}`">
    <DbNodeKeyValue
      :node-key="nodeName"
      :node-value="hasChildNodes ? '' : nodeData[key]"
      :is-child-node="isChildNode" />
    <div
      class="db-node__buttons">
      <DbNodeType
        :text="nodeType" />
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

const dBKeyToTypeMapping = {
  arrayValue: 'array',
  integerValue: 'int',
  stringValue: 'string'
};

const hasChildNodeTypes = [
  dBKeyToTypeMapping.arrayValue
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
      return this.hasChildNodes ? this.nodeData[this.key].values : [];
    }
  }
}
</script>

<style lang="scss">
.db-node {
  $base: &;

  &:hover,
  &:focus {
    > #{$base}__buttons {
      display: flex;
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
