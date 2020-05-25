<template>
  <li
    :class="{ 'bg-grey-200': path === selected }"
    class="panel-item block relative font-mono">
    <button
      class="panel-item__btn block pt-2 pb-2 pr-6 pl-6 hover:bg-grey-200 w-full text-left focus:outline-none"
      @click="$emit('click:panel-item', path)">
      {{ text }}
      <IconBase
        v-if="path === selected"
        class="panel-item__icon">
        <IconNavigateNext />
      </IconBase>
    </button>
  </li>
</template>

<script>
import IconBase from '../../../Icons/IconBase';
import IconNavigateNext from '../../../Icons/IconNavigateNext';

export default {
  name: 'PanelItem',
  components: {
    IconBase,
    IconNavigateNext
  },
  props: {
    text: {
      required: true,
      type: String
    },
    path: {
      type: String,
      default: ''
    },
    selected: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.panel-item {
  &__icon {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
