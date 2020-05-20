import * as actionTypes from './action-types.js';

import * as mutationTypes from './mutation-types.js';

import { getCollections } from '../services/firestore-api.js';

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
  [actionTypes.APPLY_SETTINGS]: (context, payload) => {
    const settings = {
      ...context.state.settings,
      ...payload
    };

    context.commit(mutationTypes.SET_SETTINGS, settings);

    return Promise.resolve(settings);
  },
  [actionTypes.PUSH_PATH]: (context, payload) => {
    context.commit(mutationTypes.SET_CURRENT_PATH, payload);

    return Promise.resolve(payload);
  }
};

export default actions;
