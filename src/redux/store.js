import { createStore, combineReducers } from "redux";

import movie from "./reducers/movie";
import serie from "./reducers/serie";

const reducer = combineReducers({
  movie,
  serie
});

const store = createStore(reducer);
export default store;
