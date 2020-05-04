export const getDocIdFromPath = (path) => {
  if (!path) {
    return '';
  }

  return path.split('/').pop();
};

export const getDocParentCollectionFromPath = (path, id) => {
  if (!path || !id) {
    return '';
  }

  const parts = path.split('/');
  const index = parts.findIndex(part => part === id);

  return parts[index - 1];
}

/**
 * Takes an array of documents and sorts them into multiple arrays corresponding
 * to their parent collection defined in the name attribute.
 * @param {*[]} documents Array of documents.
 * @return {*[]} Array of collections containing documents.
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
