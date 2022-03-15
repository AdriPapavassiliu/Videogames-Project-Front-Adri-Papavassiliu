import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Videogame } from "../../interfaces/Videogame";
import {
  addVideogameAction,
  deleteVideogameAction,
  loadVideogamesAction,
} from "../actions/actionsCreators";

export const loadVideogamesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_URLAPI}videogames`);
  const videogamesList = await response.json();
  const allVideogames = videogamesList.videogames;
  dispatch(loadVideogamesAction(allVideogames));
};

export const deleteVideogameThunk =
  (videogameId: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_URLAPI}videogames/${videogameId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteVideogameAction(videogameId));
    }
  };

export const addVideogameThunk =
  (videogame: Videogame) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_URLAPI}videogames/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videogame),
      }
    );
    const responseVideogame = await response.json();

    if (responseVideogame.message === "Videogame created") {
      dispatch(addVideogameAction(responseVideogame.videogame));
    }
  };
