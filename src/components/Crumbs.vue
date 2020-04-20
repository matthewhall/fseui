<template>
  <div
    class="crumbs bg-grey-50 border-b border-navy-20">
    <ul
      class="flex pl-6 pr-6 pt-5 pb-4 overflow-hidden">
      <li
        v-for="(crumb, index) in crumbs"
        :key="crumb"
        :class="{
          'max-w-xs overflow-hidden': crumb !== ''
        }">
        <Crumb
          class="crumbs__crumb"
          :text="crumb"
          :index="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Crumb from './Crumb.vue';

export default {
  name: 'Crumbs',
  components: {
    Crumb
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    crumbs() {
      return this.firestore.currentDocument.split('/')
        // Removes any empty crumbs apart from the first, which is always Home.
        .filter((item, index) => index === 0 || item);
    }
  }
}
</script>
