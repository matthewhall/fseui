<template>
  <div
    id="edit-path"
    class="edit-path flex items-stretch shadow-md">
    <div
      class="flex-1">
      <TextField
        v-model="internalCurrentPath"
        class="h-full"
        label="Update current path"
        id="update-current-path"
        input-classes="edit-path__input h-full w-full text-md rounded-tl-lg outline-none"
        :hide-label="true"
        @keydown="handleTextKeyDown" />
    </div>
    <button
      ref="close"
      class="edit-path__close p-4 text-grey-600 hover:text-black focus:text-black focus:outline-none"
      aria-controls="edit-path"
      aria-label="Close"
      @click.stop="handleCloseClick">
      <IconBase
        class="edit-path__close-icon">
        <IconClose />
      </IconBase>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import IconBase from '../../../Icons/IconBase';
import IconClose from '../../../Icons/IconClose';
import TextField from '../../../Fields/TextField';

import { PUSH_PATH } from '../../../../store/action-types.js';

import { Keys } from '../../../../constants.js';

export default {
  name: 'EditPath',
  components: {
    IconBase,
    IconClose,
    TextField
  },
  model: {
    prop: 'isVisible',
    event: 'update:is-visible'
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      internalCurrentPath: ''
    };
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    ...mapGetters([
      'basePath'
    ])
  },
  methods: {
    ...mapActions([
      PUSH_PATH
    ]),
    /**
     * Closes the edit path component and resets any changes made to the current
     * path.
     * @param {MouseEvent|KeyboardEvent} event Event object.
     */
    handleCloseClick(event) {
      if (event.type === 'keydown' && event.key !== Keys.ESC) {
        return;
      }

      if (event.type === 'click' && this.$el.contains(event.target) &&
          // Don't return if the click is from the Close button.
          !this.$refs.close.contains(event.target)) {
        return;
      }

      this.$emit('update:is-visible', false);
      this.internalCurrentPath = this.firestore.currentPath;
    },
    /**
     * Handle input field keydown events.
     * @param {KeyboardEvent} event Keyboard event.
     */
    handleTextKeyDown(event) {
      if (event.key !== Keys.ENTER) {
        return;
      }

      const path = this.internalCurrentPath;

      this.PUSH_PATH(path);
      this.$emit('update:is-visible', false);
    }
  },
  mounted() {
    this.internalCurrentPath = this.firestore.currentPath;

    document.addEventListener('keydown', this.handleCloseClick);
    document.addEventListener('click', this.handleCloseClick);

    const el = this.$el.querySelector('input[type="text"');

    if (el) {
      el.select();
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleCloseClick);
    document.removeEventListener('click', this.handleCloseClick);
  }
}
</script>

<style lang="scss">
.edit-path {
  &__input {
    box-shadow: none;
    padding-left: 1rem;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>
