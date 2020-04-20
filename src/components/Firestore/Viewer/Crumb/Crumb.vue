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
import IconBase from '../../../Icons/IconBase';
import IconHome from '../../../Icons/IconHome';
import IconNavigateNext from '../../../Icons/IconNavigateNext';

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
