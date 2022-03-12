import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";
import {
  Action,
  LoadVideogamesActionInterface,
  DeleteVideogameActionInterface,
} from "../../interfaces/Action";

const loadVideogamesReducer = (
  currentVideogames: Videogame[] = [],
  action:
    | Action
    | LoadVideogamesActionInterface
    | DeleteVideogameActionInterface = { type: "", videogames: [] }
) => {
  let newVideogames: Videogame[];

  switch (action.type) {
    case actionsTypes.loadVideogames:
      newVideogames = [...(action as LoadVideogamesActionInterface).videogames];
      break;
    case actionsTypes.deleteVideogame:
      newVideogames = currentVideogames.filter(
        (videogame: Videogame) =>
          videogame.id !==
          (action as DeleteVideogameActionInterface).videogameId
      );
      break;
    default:
      newVideogames = currentVideogames;
      break;
  }
  return newVideogames;
};

export default loadVideogamesReducer;
