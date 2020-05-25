<template>
  <div
    class="crumbs bg-grey-50 rounded-t-lg border-b border-navy-20 relative">
    <ul
      class="flex pl-6 pr-6 pt-5 pb-4 overflow-hidden"
      @click="toggleEditPath">
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
    <EditPath
      v-if="isEditPathVisible"
      v-model="isEditPathVisible"
      class="absolute inset-0 bg-white rounded-t-lg" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Crumb from '../Crumb';
import EditPath from '../EditPath';

export default {
  name: 'Crumbs',
  components: {
    Crumb,
    EditPath
  },
  data() {
    return {
      isEditPathVisible: false
    };
  },
  computed: {
    ...mapState([
      'firestore'
    ]),
    crumbs() {
      return this.firestore.currentPath.split('/')
        // Removes any empty crumbs apart from the first, which is always Home.
        .filter((item, index) => index === 0 || item);
    }
  },
  methods: {
    /**
     * Toggle the edit path component visibility.
     * @param {MouseEvent} event Event object.
     */
    toggleEditPath(event) {
      // The edit path component binds a click event to the body to hide itself
      // again when a click outside occurs. Stop propagation here prevents the
      // event from bubbling up and hiding the component again.
      event.stopPropagation();
      this.isEditPathVisible = !this.isEditPathVisible;
    }
  }
}
</script>
