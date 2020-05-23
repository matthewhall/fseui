<template>
  <div
    class="edit-path flex items-stretch">
    <div
      class="flex-1">
      <InputField
        class="h-full"
        label="Update current path"
        id="update-current-path"
        input-classes="edit-path__input h-full w-full text-md rounded-tl-lg outline-none"
        :model="currentPath"
        :hide-label="true" />
    </div>
    <button
      class="edit-path__close p-4"
      aria-label="Close"
      @click="handleCloseClick">
      <IconBase
        class="edit-path__close-icon">
        <IconClose />
      </IconBase>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import IconBase from '../../../Icons/IconBase';
import IconClose from '../../../Icons/IconClose';
import InputField from '../../../Fields/InputField';

export default {
  name: 'EditPath',
  components: {
    IconBase,
    IconClose,
    InputField
  },
  model: {
    prop: 'isVisible',
    event: 'update:is-visible'
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    currentPath: {
      get() {
        return this.firestore.currentPath;
      },
      set(val) {
        console.log(val);
      }
    }
  },
  methods: {
    /**
     * Closes hides the edit path component and resets any changes made to the
     * current path.
     */
    handleCloseClick() {
      this.$emit('update:is-visible', false);
      this.currentPath = this.firestore.currentPath;
    }
  }
}
</script>

<style lang="scss">
.edit-path {
  &__input {
    box-shadow: none;
    padding-left: 1rem;
  }
}
</style>
