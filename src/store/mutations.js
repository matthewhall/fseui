import { SET_DOCUMENTS } from './mutation-types.js';

const mutations = {
  [SET_DOCUMENTS]: (state, payload) => {
    state.firestore.documents = payload;
  }
};

export default mutations;