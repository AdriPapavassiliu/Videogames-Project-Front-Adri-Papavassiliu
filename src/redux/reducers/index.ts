import { combineReducers } from "redux";
import videogamesReducer from "./videogamesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  videogamesReducer,
  usersReducer,
});

export default rootReducer;
