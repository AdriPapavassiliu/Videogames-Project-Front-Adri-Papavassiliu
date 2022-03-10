import { Videogame } from "../../interfaces/Videogame";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadVideogamesThunk } from "../../redux/thunks/videogamesThunk";
import VideogameCard from "../VideogameCard/VideogameCard";
import { RootState } from "../../redux/store";

const VideogamesList = (videogames: Videogame[]): JSX.Element => {
  const dispatch = useDispatch();
  const videogamesList = useSelector(
    (state: RootState) => state.loadVideogames
  );

  useEffect(() => {
    dispatch(loadVideogamesThunk);
  }, [dispatch]);
  return (
    <>
      <ul>
        {videogamesList.map((videogame: Videogame) => {
          return <VideogameCard videogame={videogame} />;
        })}
      </ul>
    </>
  );
};

export default VideogamesList;
