import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideogameForm from "../../components/VideogameForm/VideogameForm";
import { RootState } from "../../redux/store";
import {
  loadVideogameThunk,
  updateVideogameThunk,
} from "../../redux/thunks/videogamesThunk";
import { VideogameDetailInterface } from "../VideogameDetailPage/VideogameDetailPage";

const UpdateVideogamePage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogameToUpdate = useSelector(
    (state: RootState) => state.videogameDetailReducer
  );

  useEffect(() => {
    dispatch(loadVideogameThunk(id as string));
  }, [dispatch, id]);
  console.log(videogameToUpdate);
  return (
    <>
      {(videogameToUpdate as unknown as VideogameDetailInterface).videogame !==
      undefined ? (
        <VideogameForm
          thunk={updateVideogameThunk}
          videogame={videogameToUpdate as unknown as VideogameDetailInterface}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UpdateVideogamePage;
