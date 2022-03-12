import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadVideogamesAction } from "../actions/actionsCreators";

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
      dispatch(deleteVideogameThunk(videogameId));
    }
  };
