import React from "react";
import { Switch } from "react-router-dom";
import MovieRoute from "./movies";

const Router = () => (
  <Switch>
    <MovieRoute />
  </Switch>
);

export default Router;
