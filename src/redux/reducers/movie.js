const defaultState = {
  vote_count: 3557,
  id: 80274,
  video: false,
  vote_average: 6.6,
  title: "El juego de Ender",
  popularity: 15.884,
  poster_path: "/hO5fs25ceyMFnKbPsWNGi3kKUtI.jpg",
  original_language: "en",
  original_title: "Ender's Game",
  genre_ids: [878, 28, 12],
  backdrop_path: "/ulmVm23hsiopEsgVksgdYJSVlWR.jpg",
  adult: false,
  overview:
    "Un joven talentoso exhibe un talento inusual que provoca sea elegido para un entrenamiento militar avanzado para encabezar a las fuerzas de la Tierra en una guerra intensa contra los Formics, unos invasores extraterrestres.",
  release_date: "2013-10-23"
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default reducer;
