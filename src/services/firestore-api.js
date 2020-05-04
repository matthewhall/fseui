import axiosInstance from './axios.js';

import store from '../store';

import { generateCollectionsFromDocsList } from '../utils/docs.js';

export const getCollectionIds = async (path = 'documents') => {
  const basePath = store.getters.baseApiPath(store.state);

  if (!basePath) {
    return;
  }

  try {
    const response =
      await axiosInstance.post(`${basePath}${path}:listCollectionIds`);
    const collectionIds = response.data.collectionIds;
    const collections = {};

    for (let i = 0; i < collectionIds.length; i++) {
      collections[collectionIds[i]] = {};
    }

    return { collections };
  } catch (err) {
    console.error(err);
  }
}

export const getDocuments = async (path = '/') => {
  const basePath = store.getters.baseApiPath(store.state);
  const pathPrefix = 'documents';

  if (!basePath) {
    return;
  }

  try {
    const response = await axiosInstance.get(`${basePath}${pathPrefix}${path}`);
    const documents = response.data;

    return documents;
  } catch (err) {
    console.error(err);
  }
}

export const getCollections = async (path = '/') => {
  try {
    const documents = await getDocuments(path);
    const collections = generateCollectionsFromDocsList(documents);

    return collections;
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
    const response = await axiosInstance.delete(`${basePath}documents/${path}`);

    return response;
  } catch (err) {
    console.error(err);
  }
}
