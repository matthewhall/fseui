const getters = {
  /**
   * Constructs the base API URL from settings in the store.
   * @param {Object} state State object.
   * @return {string} Returned API URL.
   */
  baseApiUrl: (state) => {
    const { host, port, projectId } = state.settings;

    if (!host || !port || !projectId) {
      return '';
    }

    return `http://${host}:${port}/v1/projects/${projectId}/databases/(default)/`;
  }
};

export default getters;
