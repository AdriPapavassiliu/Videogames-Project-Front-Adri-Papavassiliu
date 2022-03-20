import { Action, AddVideogameActionInterface } from "../../interfaces/Action";
import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";

const videogameDetailReducer = (
  currentVideogame = {},
  action: Action = {
    type: "",
  }
): Videogame => {
  let videogameDetail: Videogame;
  switch (action.type) {
    case actionsTypes.loadVideogame:
      videogameDetail = (action as AddVideogameActionInterface).videogame;
      break;

    default:
      videogameDetail = currentVideogame as Videogame;
  }
  return videogameDetail;
};

export default videogameDetailReducer;
