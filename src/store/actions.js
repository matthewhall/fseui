import * as actionTypes from './action-types.js';

import * as mutationTypes from './mutation-types.js';

import { getCollections, getDocuments } from '../services/firestore-api.js';

const actions = {
  [actionTypes.GET_DOCUMENTS]: async (context, payload) => {
    try {
      const documents = await getDocuments(payload);

      context.commit(mutationTypes.SET_DOCUMENTS, documents);

      return Promise.resolve(documents);
    } catch (err) {
      console.error(err);

      return Promise.reject(err);
    }
  },
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
  [actionTypes.GET_DATA_AT_PATH]: (context, payload) => {
    console.log('---------------------------------------');
    console.log(payload, context);
    console.log(payload.split('/'));

    let data = context.state.firestore.data;



    return Promise.resolve(data);
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
