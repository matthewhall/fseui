<template>
  <div
    class="app max-w-screen-xl m-auto">
    <main>
      <Settings
        class="mb-10" />
      <Data />
      <div class="bg-white mt-8">
        <ul
          v-if="firestore.documents.length">
          <li
            v-for="doc in firestore.documents"
            :key="doc.name">
            {{ doc }}
          </li>
        </ul>
      </div>
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
