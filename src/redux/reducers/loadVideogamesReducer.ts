import { Videogame } from "../../interfaces/Videogame";
import { AnyAction } from "redux";
import actionsTypes from "../actions/actionsTypes";

const loadVideogamesReducer = (
  currentVideogames: Videogame[] = [],
  action: AnyAction
) => {
  let newVideogames: Videogame[];

  switch (action.type) {
    case actionsTypes.loadVideogames:
      newVideogames = [...action.videogames];
      break;

    default:
      newVideogames = currentVideogames;
      break;
  }
};

export default loadVideogamesReducer;
