import { GET_DOCUMENTS } from './action-types.js';

import { SET_DOCUMENTS } from './mutation-types.js';

import { getDocuments } from '../services/firestore-api.js';

const actions = {
  [GET_DOCUMENTS]: async (context, payload) => {
    try {
      const documents = await getDocuments(payload);

      console.log(documents);
      context.commit(SET_DOCUMENTS, documents);
    } catch (err) {
      console.error(err);
    }
  }
};

export default actions;