<template>
  <div
    class="app">
    <main>
      <Settings
        class="mb-10" />
      <Data />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Data from './components/Data.vue';
import Settings from './components/Settings.vue';

export default {
  name: 'App',
  components: {
    Data,
    Settings
  },
  computed: {
    ...mapState([
      'firestore'
    ])
  }
}
</script>
