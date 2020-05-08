import { combineReducers } from "redux";

const defaultState = {
  message: "",
  data: [],
  loading: false,
};

const genres = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_GENRES_REQUEST":
      return Object.assign({}, state, {
        message: action.message,
        loading: true,
      });
    case "FETCH_GENRES_ERROR":
      return Object.assign({}, state, {
        message: action.message,
        loading: false,
      });
    case "FETCH_GENRES_SUCCESS":
      return Object.assign({}, state, {
        message: action.message,
        data: action.genres,
        loading: false,
      });
    default:
      return state;
  }
};

export default combineReducers({ genres });
