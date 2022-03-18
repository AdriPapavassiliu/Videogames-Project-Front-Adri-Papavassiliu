import { RegisterUser, User } from "./User";
import { Videogame } from "./Videogame";

export interface Action {
  type: string;
}

export interface LoadVideogamesActionInterface extends Action {
  videogames: Videogame[];
}

export interface DeleteVideogameActionInterface extends Action {
  videogameId: string;
}

export interface AddVideogameActionInterface extends Action {
  videogame: Videogame;
}

export interface RegisterUserActionInterface extends Action {
  user: RegisterUser;
}

export interface LoginUserActionInterface extends Action {
  user: User;
}
