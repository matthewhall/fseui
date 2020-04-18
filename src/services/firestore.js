import axios from 'axios';

import store from '../store';

export const getBaseApiPath = (settings) => {
  const { host, port, projectId } = settings;

  if (!host || !port || !projectId) {
    return;
  }

  return `http://${host}:${port}/v1/projects/${projectId}/databases/(default)/`;
}

export const getDocuments = async (path = 'documents/') => {
  const basePath = getBaseApiPath(store.state.settings);

  if (!basePath) {
    return;
  }

  try {
    const response = await axios.get(`${basePath}${path}`);
    const documents = response.data.documents;

    return documents;
  } catch (err) {
    return new Error(err);
  }
}