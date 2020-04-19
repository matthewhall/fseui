import state from './state.js';
import actions from './actions.js';
import mutations from './mutations.js';

export default {
  state,
  actions,
  mutations,
  getters: {},
  strict: process.env.NODE_ENV !== 'production'
}