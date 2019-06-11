export const createParams = obj => {
  let queryString = Object.entries(obj)
    .filter(([key, value]) => value !== "")
    .join("&");
  queryString = queryString.replace(/,/g, "=");

  return queryString;
};
