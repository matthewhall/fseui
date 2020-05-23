/**
 * Constructs a lat/lon display value, such as: 21° W, 10° N.
 * @param {number} lat Latitude.
 * @param {number} lon Longitude.
 * @return {string} Returned lat/lon value.
 */
export const genLatLonDisplayValue = (lat, lon) => {
  const latDir = lat < 0 ? 'N' : 'S';
  const lonDir = lon < 0 ? 'W' : 'E';

  return `${Math.abs(lat)}° ${latDir}, ${Math.abs(lon)}° ${lonDir}`;
};
