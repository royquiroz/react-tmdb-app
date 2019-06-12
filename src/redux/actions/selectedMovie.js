export const type = "selectedMovie";

const selectedMovie = obj => {
  return {
    type,
    payload: obj
  };
};

export default selectedMovie;
