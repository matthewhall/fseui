import axios from 'axios';

import store from '../store';

export const getDocuments = async (path = 'documents/') => {
  const basePath = store.getters.baseApiPath(store.state);

  if (!basePath) {
    return;
  }

  try {
    const response = await axios.get(`${basePath}${path}`);
    const documents = response.data.documents;

    return documents;
  } catch (err) {
    console.error(err);
  }
}

export const deleteDocument = async (path) => {
  const basePath = store.getters.baseApiPath(store.state);

  if (!basePath || !path) {
    return;
  }

  try {
    const response = await axios.delete(`${basePath}documents/${path}`);

    return response;
  } catch (err) {
    console.error(err);
  }
}