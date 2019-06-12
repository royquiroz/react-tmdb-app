import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "../searchbar";

class MovieComponent extends Component {
  render() {
    const { movie } = this.props;

    console.log(movie);

    return (
      <div className="container is-fullhd">
        <div className="columns is-mobile">
          <div className="column is-one-fifth is-offset-two-fifths">
            <SearchBar origin="Movie" />
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              {/*<p class="title">One</p>*/}
              <figure className="image is-2by3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.original_title} img`}
                />
              </figure>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">Two</p>
            </div>
          </div>
        </div>
        {/*<figure className="image is-2by3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.original_title} img`}
          />
    </figure>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

export default connect(mapStateToProps)(MovieComponent);
