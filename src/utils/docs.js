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
