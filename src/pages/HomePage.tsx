import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/FilterBar/FilterBar";
import VideogamesList from "../components/VideogamesList/VideogamesList";
import { Videogame } from "../interfaces/Videogame";
import { RootState } from "../redux/store";
import { loadVideogamesThunk } from "../redux/thunks/videogamesThunk";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const videogamesList: Videogame[] = useSelector(
    (state: RootState) => state.videogamesReducer
  );

  useEffect(() => {
    dispatch(loadVideogamesThunk);
  }, [dispatch]);

  return (
    <>
      <FilterBar />
      <VideogamesList videogames={videogamesList} />
    </>
  );
};

export default HomePage;
