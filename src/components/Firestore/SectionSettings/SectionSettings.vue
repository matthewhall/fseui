<template>
  <div>
    <h2
      class="mb-4 text-navy-300">
      Firestore settings
    </h2>
    <Card>
      <CardContent>
        <form
          class="flex flex-col md:flex-row">
          <Input
            :model="settings.host"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Host"
            id="setting-input-host"
            name="setting-input-host"
            :placeholder="settings.host"
            @update:model="(val) => applySetting('host', val)" />
          <Input
            :model="settings.port"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Port"
            id="setting-input-port"
            name="setting-input-port"
            input-type="number"
            :placeholder="settings.port"
            @update:model="(val) => applySetting('port', val)" />
          <Input
            :model="settings.projectId"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Project ID"
            id="setting-input-project-id"
            name="setting-input-project-id"
            :placeholder="settings.projectId"
            @update:model="(val) => applySetting('projectId', val)" />
          <Input
            :model="settings.database"
            class="mb-5 md:mb-0 md:mr-5 md:flex-1"
            label="Database"
            id="setting-input-database"
            name="setting-input-database"
            :placeholder="settings.database"
            @update:model="(val) => applySetting('database', val)" />
          <Button
            class="self-end"
            @click.prevent.native="go">
            Apply settings
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Button from '../../Button';
import Card from '../../Card';
import CardContent from '../../CardContent';
import Input from '../../Fields/Input';

import { APPLY_SETTINGS, GET_DOCUMENTS } from '../../../store/action-types.js';

export default {
  name: 'SectionSettings',
  components: {
    Button,
    Card,
    CardContent,
    Input
  },
  computed: {
    ...mapState([
      'settings'
    ])
  },
  methods: {
    ...mapActions([
      APPLY_SETTINGS,
      GET_DOCUMENTS,
    ]),
    async go() {
      await this.GET_DOCUMENTS();
    },
    async applySetting(key, val) {
      await this.APPLY_SETTINGS({ [key]: val });
    }
  },
  created() {
    if (this.settings.host && this.settings.port && this.settings.projectId) {
      this.go();
    }
  }
}
</script>
