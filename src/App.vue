<template>
  <div
    class="app">
    <main>
      <h2
        class="mb-4 text-navy-300">
        Firestore settings
      </h2>
      <Card
        class="mb-10">
        <CardContent>
          <form
            class="flex">
            <input
              v-model="settings.host"
              class="border border-grey-300 rounded p-2 mr-3 text-lg leading-none"
              type="text"
              :placeholder="settings.host" />
            <input
              v-model="settings.port"
              class="border border-grey-300 rounded p-2 mr-3 w-20 text-lg leading-none"
              type="number"
              :placeholder="settings.port" />
            <input
              v-model="settings.projectId"
              class="flex-1 border border-grey-300 rounded p-2 mr-3 text-lg leading-none"
              type="text"
              placeholder="my-awesome-project-id" />
            <Button>
              <span
                @click.prevent="go">
                Go
              </span>
            </Button>
          </form>
        </CardContent>
      </Card>
      <h2
        class="mb-4 text-navy-300">
        Data
      </h2>
      <Card>
        <CardContent>
          <ul
            v-if="firestore.documents.length">
            <li
              v-for="doc in firestore.documents"
              :key="doc.name">
              {{ doc }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Button from './components/Button.vue';
import Card from './components/Card.vue';
import CardContent from './components/CardContent.vue';

import { GET_DOCUMENTS } from './store/action-types.js';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    CardContent
  },
  computed: {
    ...mapState([
      'settings',
      'firestore'
    ])
  },
  methods: {
    ...mapActions([
      GET_DOCUMENTS
    ]),
    async go() {
      await this.GET_DOCUMENTS();
    }
  },
  created() {
    if (this.settings.host && this.settings.port && this.settings.projectId) {
      this.go();
    }
  }
}
</script>
