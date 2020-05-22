import * as actionTypes from './action-types.js';
import * as mutationTypes from './mutation-types.js';

import { getCollections } from '../services/firestore-api.js';
import { getSettings, saveSettings } from '../services/settings-api.js';

const actions = {
  [actionTypes.GET_COLLECTIONS]: async (context, payload) => {
    try {
      const collections = await getCollections(payload);

      context.commit(mutationTypes.SET_DATA_AT_PATH, {
        path: payload,
        data: {
          collections
        }
      });

      return Promise.resolve(collections);
    } catch (err) {
      console.error(err);

      return Promise.reject(err);
    }
  },
  /**
   * Applies the Firestore Emulator settings to the store and saves them to
   * localStorage.
   * @param {Object} context Context object.
   * @param {Object} payload Settings payload.
   * @return {Promise<Object>} Saved settings return value.
   */
  [actionTypes.APPLY_SETTINGS]: async (context, payload) => {
    const settings = {
      ...context.state.settings,
      ...payload
    };

    context.commit(mutationTypes.SET_SETTINGS, settings);

    return await saveSettings(settings);
  },
  /**
   * Gets the Firestore Emulator settings and commits them to the store.
   * @param {Object} context Context.
   * @return {Promise<Object>} Settings object.
   */
  [actionTypes.GET_SETTINGS]: async (context) => {
    try {
      const settings = await getSettings();

      context.commit(mutationTypes.SET_SETTINGS, settings);

      return Promise.resolve(settings);
    // eslint-disable-next-line no-empty
    } catch (err) {}
  },
  [actionTypes.PUSH_PATH]: (context, payload) => {
    context.commit(mutationTypes.SET_CURRENT_PATH, payload);

    return Promise.resolve(payload);
  }
};

export default actions;
