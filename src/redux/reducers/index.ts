import { combineReducers } from "redux";
import loadVideogamesReducer from "./loadVideogamesReducer";

const rootReducer = combineReducers({
  loadVideogames: loadVideogamesReducer,
});

export default rootReducer;
