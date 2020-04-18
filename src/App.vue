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
          <form>
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
              class="border border-grey-300 rounded p-2 mr-3 text-lg leading-none"
              type="text"
              placeholder="my-project" />
            <Button>
              Go
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
          <p>Blah.</p>
        </CardContent>
      </Card>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Button from './components/Button.vue';
import Card from './components/Card.vue';
import CardContent from './components/CardContent.vue';

import { getDocuments } from './services/firestore.js';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    CardContent
  },
  computed: {
    ...mapState([
      'settings'
    ])
  },
  methods: {
    async go() {
      const documents = await getDocuments();

      console.log(documents);
    }
  }
}
</script>
