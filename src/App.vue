<template>
  <div
    class="app max-w-screen-xl m-auto">
    <main>
      <h1
        class="font-secondary font-medium text-4xl text-navy-600 mb-8">
        Firestore emulator data
      </h1>
      <SectionSettings
        class="mb-10" />
      <SectionData />
      <div
        class="bg-white mt-8">
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

import SectionData from './components/Firestore/SectionData';
import SectionSettings from './components/Firestore/SectionSettings';

export default {
  name: 'App',
  components: {
    SectionData,
    SectionSettings
  },
  computed: {
    ...mapState([
      'firestore'
    ])
  }
}
</script>
