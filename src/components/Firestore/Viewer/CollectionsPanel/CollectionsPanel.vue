<template>
  <div
    class="collections-panel overflow-y-auto">
    <button
      class="block pt-3 pb-3 pr-6 pl-6 hidden"
      @click="handleStartCollectionClick">
      Start collection
    </button>
    <ul
      v-if="collections.length">
      <li
        v-for="collection in collections"
        :key="collection.id"
        :class="{ 'bg-grey-200': collection.path === selected }"
        class="block relative font-mono">
        <button
          class="block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-200 w-full text-left focus:outline-none"
          @click="() => handleItemClick(collection.path)">
          {{ collection.id }}
          <IconBase
            v-if="collection.path === selected"
            class="collections-panel__icon">
            <IconNavigateNext />
          </IconBase>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import IconBase from '../../../Icons/IconBase';
import IconNavigateNext from '../../../Icons/IconNavigateNext';

import { getCollectionOrDocsAtPath } from '../../../../utils/docs.js';

export default {
  name: 'CollectionsPanel',
  components: {
    IconBase,
    IconNavigateNext
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: ''
    };
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    collections() {
      const collections = getCollectionOrDocsAtPath(this.path, this.firestore.data) || [];

      return collections.map(collection => {
        return {
          id: collection.id,
          path: collection.name
        };
      });
    },
  },
  methods: {
    handleItemClick(path) {
      this.$emit('click:collection-item', path);
      this.selected = path;
    },
    handleStartCollectionClick() {
      this.$emit('click:start-collection');
    }
  },
  beforeDestroy() {
    this.selected = '';
  }
}
</script>

<style lang="scss">
.collections-panel {
  &__icon {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
