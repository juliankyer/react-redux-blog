import genreService from "../services/genreService";

const fetchGenresRequest = () => {
  return {
    type: "FETCH_GENRES_REQUEST",
    message: "Loading...",
  };
};

const fetchGenresError = (error) => {
  return {
    type: "FETCH_GENRES_ERROR",
    message: "There was an error fetching genres.",
    error,
  };
};

const fetchGenresSuccess = (genres) => {
  return {
    type: "FETCH_GENRES_SUCCESS",
    message: "Genres successfully loaded",
    genres,
  };
};

export const fetchGenres = () => {
  return function (dispatch) {
    dispatch(fetchGenresRequest());
    genreService
      .getGenres()
      .then((res) => {
        dispatch(fetchGenresSuccess(res.data));
      })
      .catch((error) => fetchGenresError(error));
  };
};
