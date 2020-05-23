import axios from 'axios';

import store from '../store';

import { generateCollectionsFromDocsList } from '../utils/docs.js';

/**
 * Gets the documents at a given path.
 * @param {string} path Path.
 * @return {Array} Returned array of documents.
 */
export const getDocuments = async (path = '/') => {
  const basePath = store.getters.baseApiUrl(store.state);
  const pathPrefix = 'documents';

  if (!basePath) {
    return;
  }

  try {
    const response = await axios.get(`${basePath}${pathPrefix}${path}`);
    const documents = response.data;

    return documents;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Gets the collections at a particular path by first getting all the documents
 * and then sorting them into their relevant collection objects.
 * @param {string} path Path.
 * @return {Array} Returned collections.
 */
export const getCollections = async (path = '/') => {
  try {
    const documents = await getDocuments(path);
    const collections = generateCollectionsFromDocsList(documents);

    return collections;
  } catch (err) {
    console.error(err);
  }
}
