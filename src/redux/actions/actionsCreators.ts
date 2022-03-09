import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "./actionsTypes";

export const loadVideogamesAction = (videogames: Videogame[]) => ({
  type: actionsTypes.loadVideogames,
  videogames,
});
