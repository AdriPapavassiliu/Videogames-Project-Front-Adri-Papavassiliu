import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";
import {
  Action,
  LoadVideogamesActionInterface,
  DeleteVideogameActionInterface,
  AddVideogameActionInterface,
} from "../../interfaces/Action";

const videogamesReducer = (
  currentVideogames: Videogame[] = [],
  action:
    | Action
    | LoadVideogamesActionInterface
    | AddVideogameActionInterface
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
    case actionsTypes.addVideogame:
      newVideogames = [
        ...currentVideogames,
        (action as AddVideogameActionInterface).videogame,
      ];
      break;
    default:
      newVideogames = currentVideogames;
      break;
  }
  return newVideogames;
};

export default videogamesReducer;
