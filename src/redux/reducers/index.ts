import { combineReducers } from "redux";
import videogamesReducer from "./videogamesReducer";

const rootReducer = combineReducers({
  videogamesReducer,
});

export default rootReducer;
