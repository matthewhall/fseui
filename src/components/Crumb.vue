<template>
  <div
    class="crumb text-grey-600 overflow-hidden whitespace-no-wrap text-ellipsis max-w-full">
    <IconBase
      v-if="text === ''">
      <IconHome />
    </IconBase>
    <span
      v-else>
      <IconBase
        v-if="index > 0"
        :width="18"
        :height="18"
        class="ml-2 mr-1">
        <IconNavigateNext />
      </IconBase>
      {{ text }}
    </span>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue';
import IconHome from './icons/IconHome.vue';
import IconNavigateNext from './icons/IconNavigateNext.vue';

export default {
  name: 'Crumb',
  components: {
    IconBase,
    IconHome,
    IconNavigateNext
  },
  props: {
    text: {
      required: true,
      type: String
    },
    index: {
      default: 0,
      type: Number
    }
  }
}
</script>
