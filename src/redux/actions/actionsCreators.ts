import {
  AddVideogameActionInterface,
  DeleteVideogameActionInterface,
  LoadVideogamesActionInterface,
  LoginUserActionInterface,
  RegisterUserActionInterface,
} from "../../interfaces/Action";
import { RegisterUser, User } from "../../interfaces/User";
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

export const addVideogameAction = (
  videogame: Videogame
): AddVideogameActionInterface => ({
  type: actionsTypes.addVideogame,
  videogame,
});

export const registerUserAction = (
  user: RegisterUser
): RegisterUserActionInterface => ({
  type: actionsTypes.registerUser,
  user,
});

export const loginUserAction = (user: User): LoginUserActionInterface => ({
  type: actionsTypes.loginUser,
  user,
});

export const updateVideogameAction = (
  videogame: Videogame
): AddVideogameActionInterface => ({
  type: actionsTypes.updateVideogame,
  videogame,
});

export const loadVideogameAction = (
  videogame: Videogame
): AddVideogameActionInterface => ({
  type: actionsTypes.loadVideogame,
  videogame,
});

export const logoutAction = () => ({
  type: actionsTypes.logout,
});
