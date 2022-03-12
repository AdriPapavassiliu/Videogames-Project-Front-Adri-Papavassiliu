import {
  DeleteVideogameActionInterface,
  LoadVideogamesActionInterface,
} from "../../interfaces/Action";
import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "./actionsTypes";

export const loadVideogamesAction = (
  videogames: Videogame[]
): LoadVideogamesActionInterface => ({
  type: actionsTypes.loadVideogames,
  videogames,
});

export const deleteVideogameAction = (
  videogameId: string
): DeleteVideogameActionInterface => ({
  type: actionsTypes.deleteVideogame,
  videogameId,
});
