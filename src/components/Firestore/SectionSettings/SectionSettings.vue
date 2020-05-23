<template>
  <div>
    <h2
      class="mb-4 text-navy-300">
      Emulator settings
    </h2>
    <Card>
      <CardContent>
        <form
          class="flex flex-col md:flex-row"
          @submit="go">
          <InputField
            :model="settings.host"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Host"
            id="setting-input-host"
            name="setting-input-host"
            :placeholder="settings.host"
            @update:model="(val) => applySetting('host', val)" />
          <InputField
            :model="settings.port"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Port"
            id="setting-input-port"
            name="setting-input-port"
            input-type="number"
            :placeholder="settings.port"
            @update:model="(val) => applySetting('port', val)" />
          <InputField
            :model="settings.projectId"
            class="mb-3 md:mb-0 md:mr-5 md:flex-1"
            label="Project ID"
            id="setting-input-project-id"
            name="setting-input-project-id"
            :placeholder="settings.projectId"
            @update:model="(val) => applySetting('projectId', val)" />
          <InputField
            :model="settings.database"
            class="mb-5 md:mb-0 md:mr-5 md:flex-1"
            label="Database"
            id="setting-input-database"
            name="setting-input-database"
            :placeholder="settings.database"
            @update:model="(val) => applySetting('database', val)" />
          <ButtonField
            class="self-end"
            type="submit">
            Apply settings
          </ButtonField>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ButtonField from '../../Fields/ButtonField';
import Card from '../../Card';
import CardContent from '../../CardContent';
import InputField from '../../Fields/InputField';

import {
  APPLY_SETTINGS,
  GET_SETTINGS,
  GET_COLLECTIONS
} from '../../../store/action-types.js';

export default {
  name: 'SectionSettings',
  components: {
    ButtonField,
    Card,
    CardContent,
    InputField
  },
  computed: {
    ...mapState([
      'firestore',
      'settings'
    ])
  },
  methods: {
    ...mapActions([
      APPLY_SETTINGS,
      GET_SETTINGS,
      GET_COLLECTIONS
    ]),
    /**
     * Get the the initial collections.
     */
    async go() {
      if (this.settings.host && this.settings.port && this.settings.projectId) {
        await this.GET_COLLECTIONS(this.firestore.currentPath);
      }
    },
    /**
     * Applies a new setting to the store.
     * @param {string} key Setting key.
     * @param {string} val Setting Value.
     */
    async applySetting(key, val) {
      await this.APPLY_SETTINGS({ [key]: val });
    }
  },
  async created() {
    await this.GET_SETTINGS();
    await this.go();
  }
}
</script>
