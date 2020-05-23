/**
 * Gets the document ID from its full path. Example:
 * /projects/your-project/databases/(default)/documents/your-collection/0IZudJrCwcUVFtI6Pg7Y
 * @param {string} path Path.
 * @return {string} Document ID.
 */
export const getDocIdFromPath = (path) => {
  if (!path) {
    return '';
  }

  return path.split('/').slice(-1)[0];
};

/**
 * Takes an array of documents and sorts them into multiple arrays corresponding
 * to their parent collection defined in the name attribute.
 *
 * For example an array of document objects with name values like this:
 *  - /projects/project/databases/(default)/documents/collection-1/1
 *  - /projects/project/databases/(default)/documents/collection-1/2
 *  - /projects/project/databases/(default)/documents/collection-1/3
 *  - /projects/project/databases/(default)/documents/collection-2/1
 *
 * Will be returned as:
 * [
 *   {
 *     id: 'collection-1',
 *     documents: [{ 1 }, { 2 }, { 3 }],
 *     name: '/projects/project/databases/(default)/documents/collection-1'
 *   },
 *   {
 *     id: 'collection-2',
 *     documents: [{ 1 }],
 *     name: '/projects/project/databases/(default)/documents/collection-2'
 *   }
 * ]
 * @param {Array} documents Array of documents.
 * @return {Array} Array of collections containing documents.
 */
export const generateCollectionsFromDocsList = (documents = []) => {
  if (Array.isArray(documents.documents)) {
    documents = documents.documents;
  }

  const collections = documents.reduce((acc, curr) => {
    const pathParts = curr.name.split('/').slice(0, -1);
    const collectionName = pathParts[pathParts.length - 1];
    const path = pathParts.join('/');
    const existingCollectionIndex =
      acc.findIndex(item => item.id === collectionName);

    if (existingCollectionIndex > -1) {
      acc[existingCollectionIndex].documents.push(curr);

      return acc;
    } else {
      return [...acc, {
        id: collectionName,
        documents: [ curr ],
        name: path
      }];
    }
  }, []);

  return collections;
}

/**
 * Checks an object for a collections of documents property and returns it if
 * available.
 * @param {Object} data Data object.
 * @return {Object} Return data.
 */
export const getCollectionOrDocs = (data) => {
  if (Object.prototype.hasOwnProperty.call(data, 'collections')) {
    return data.collections;
  } else {
    return data.documents;
  }
};

/**
 * Takes a path like /<COLLECTION_IDS>/<DOCUMENT_ID> and traverses our data
 * object, returning any data at that location.
 * @param {string} path Path to locate data at.
 * @param {Object} data Data object to traverse.
 * @return {Array|Object|undefined} Located data.
 */
export const getCollectionOrDocsAtPath = (path = '', data) => {
  if (!data || !path) {
    return;
  }

  if (path === '/') {
    return getCollectionOrDocs(data);
  }

  const pathParts = path.split('/').filter(part => part);
  let target = data;

  for (let i = 0, len = pathParts.length; i < len; i++) {
    const part = pathParts[i];

    target = getCollectionOrDocs(target);

    if (!target) {
      return;
    }

    target = target.find(item => getDocIdFromPath(item.name) === part);
    target = getCollectionOrDocs(target);
  }

  return target;
}

/**
 * Gets the doc data from a specified path.
 * @param {string} path Path.
 * @param {Object} data Data object to traverse.
 * @return {Object} Return data.
 */
export const getDataAtPath = (path = '', data) => {
  if (!data || !path) {
    return;
  }

  const id = path.split('/').filter(part => part).pop();
  const newPath = path.split('/').filter(part => part).slice(0, -1).join('/');
  const items = getCollectionOrDocsAtPath(newPath, data);
  const doc = items.find(item => getDocIdFromPath(item.name) === id);

  return doc;
};
