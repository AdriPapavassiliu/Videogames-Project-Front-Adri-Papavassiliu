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
  action: Action = { type: "" }
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
    case actionsTypes.updateVideogame:
      newVideogames = currentVideogames.map((videogame) =>
        videogame.id === (action as AddVideogameActionInterface).videogame.id
          ? (action as AddVideogameActionInterface).videogame
          : videogame
      );
      break;
    default:
      newVideogames = currentVideogames;
      break;
  }
  return newVideogames;
};

export default videogamesReducer;
