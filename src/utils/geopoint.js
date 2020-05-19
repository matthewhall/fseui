export const genLatLonDisplayValue = (lat, lon) => {
  const latDir = lat < 0 ? 'N' : 'S';
  const lonDir = lon < 0 ? 'W' : 'E';

  return `${Math.abs(lat)}° ${latDir}, ${Math.abs(lon)}° ${lonDir}`;
};
