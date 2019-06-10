import React, { Component } from "react";
import SearchBar from "../searchbar";

class MovieComponent extends Component {
  render() {
    return (
      <div>
        <h1>MOVIE COMPONENT</h1>
        <SearchBar origin="Movie" />
      </div>
    );
  }
}

export default MovieComponent;
