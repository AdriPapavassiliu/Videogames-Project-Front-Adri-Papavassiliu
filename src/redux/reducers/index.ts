import { combineReducers } from "redux";
import videogamesReducer from "./videogamesReducer";
import usersReducer from "./usersReducer";
import videogameDetailReducer from "./videogameDetailReducer";

const rootReducer = combineReducers({
  videogamesReducer,
  usersReducer,
  videogameDetailReducer,
});

export default rootReducer;
