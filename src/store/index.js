import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers/movie.js";

const reducers = combineReducers({
  movieReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
