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
          <div>
            <input
              class="border border-grey-300 rounded p-2 mr-3"
              type="text"
              placeholder="localhost" />
            <input
              class="border border-grey-300 rounded p-2 mr-3 w-20"
              type="text"
              placeholder="8080" />
            <Button>
              Go
            </Button>
          </div>
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
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import CardContent from './components/CardContent.vue';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    CardContent
  },
  methods: {
    click(event) {
      console.log('click', event);
    }
  }
}
</script>
