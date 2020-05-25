const getters = {
  /**
   * Constructs the base API URL from settings in the store.
   * @param {Object} state State object.
   * @return {string} Returned API URL.
   */
  baseApiUrl: (state) => {
    const { host, port, projectId, database } = state.settings;

    if (!host || !port || !projectId) {
      return '';
    }

    return `http://${host}:${port}/v1/projects/${projectId}/databases/${database}/`;
  },
  /**
   * Constructs the base path from settings in the store.
   * @param {Object} state State object.
   * @return {string} Returned base path.
   */
  basePath: (state) => {
    const { database, projectId } = state.settings;

    if (!database || !projectId) {
      return '';
    }

    return `projects/${projectId}/databases/${database}/documents`;
  }
};

export default getters;
