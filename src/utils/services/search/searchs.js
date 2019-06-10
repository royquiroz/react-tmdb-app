import axios from "axios";
import { config } from "../../config";

export const SearchMovie = async name => {
  const res = await axios.get(
    `${
      config.url
    }/search/movie?api_key=dd30a6cfb123c4a2e1cfa1e907d97fff&language=es-MX&query=${name}&page=1&include_adult=false`
  );
  return res;
};
