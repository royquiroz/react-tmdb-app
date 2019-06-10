import React from "react";
import { Route } from "react-router-dom";
import MovieComponent from "../../components/routes/movie/movie";

const MovieRoute = () => (
  <Route exact path="/movie" component={MovieComponent} />
);

export default MovieRoute;
