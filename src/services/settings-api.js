import { storageItemKeys } from '../constants.js';

/**
 * Saves the user's Firestore Emulator settings to localStorage so they are
 * saved across sessions.
 * @param {Object} settings Settings object.
 * @return {Promise<Object>} Return value.
 */
export const saveSettings = (settings = {}) => {
  const settingsStr = JSON.stringify(settings);

  return Promise.resolve().then(() => {
    return localStorage.setItem(storageItemKeys.FSE_SETTINGS, settingsStr);
  });
};

/**
 * Gets the user's Firestore Emulator settings from localStorage.
 * @return {Promise<Object|string>} Retrieved settings or error message.
 */
export const getSettings = () => {
  return new Promise((resolve, reject) => {
    const settings = localStorage.getItem(storageItemKeys.FSE_SETTINGS);
    const settingsJson = JSON.parse(settings);

    if (Object.keys(settingsJson).length) {
      return resolve(settingsJson);
    } else {
      return reject('No saved settings.');
    }
  });
};
