import VideogameForm from "../../components/VideogameForm/VideogameForm";
import { addVideogameThunk } from "../../redux/thunks/videogamesThunk";

const AddVideogamePage = (): JSX.Element => {
  return <VideogameForm thunk={addVideogameThunk} />;
};

export default AddVideogamePage;
