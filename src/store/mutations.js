import {
  SET_DATA_AT_PATH,
  SET_CURRENT_PATH,
  SET_SETTINGS
} from './mutation-types.js';

const mutations = {
  [SET_CURRENT_PATH]: (state, payload = '/') => {
    state.firestore.currentPath = payload;
  },
  [SET_DATA_AT_PATH]: (state, payload) => {
    const data = payload.data;
    const path = payload.path;
    const pathParts = path.split('/').filter(part => part);
    const len = pathParts.length;
    let target = state.firestore.data;

    for (let i = 0; i < len - 1; i++) {
      let elem = pathParts[i];

      if (!target[elem]) {
        target[elem] = {};
      }

      target = target[elem];
    }

    if (len) {
      target[pathParts[len - 1]] = data;
    } else {
      target = data;
    }

    state.firestore.data = target;
  },
  [SET_SETTINGS]: (state, payload) => {
    state.settings = payload;
  }
};

export default mutations;
