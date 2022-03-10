import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import VideogamesList from "../components/VideogamesList/VideogamesList";
import { Videogame } from "../interfaces/Videogame";
import { RootState } from "../redux/store";
import { loadVideogamesThunk } from "../redux/thunks/videogamesThunk";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const videogamesList: Videogame[] = useSelector(
    (state: RootState) => state.loadVideogames
  );

  useEffect(() => {
    dispatch(loadVideogamesThunk);
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <VideogamesList videogames={videogamesList} />
    </>
  );
};

export default HomePage;
