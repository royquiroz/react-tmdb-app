import axios from "axios";
import { config } from "../../utils/config";
import { createParams } from "../../utils/params";

export const SearchMovie = async name => {
  let movie = {
    api_key: config.api_key,
    query: name,
    language: "es-MX",
    page: 1,
    include_adult: false
  };

  let stringParams = createParams(movie);

  const res = await axios.get(`${config.url}/search/movie?${stringParams}`);
  return res;
};
