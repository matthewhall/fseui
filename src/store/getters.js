const getters = {
  baseApiPath: (state) => {
    const { host, port, projectId } = state.settings;

    if (!host || !port || !projectId) {
      return '';
    }

    return `http://${host}:${port}/v1/projects/${projectId}/databases/(default)/`;
  }
};

export default getters;