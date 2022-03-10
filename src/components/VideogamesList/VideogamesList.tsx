import { Videogame } from "../../interfaces/Videogame";
import VideogameCard from "../VideogameCard/VideogameCard";

const VideogamesList = (videogames: Videogame[]): JSX.Element => {
  return (
    <>
      <ul>
        {videogames.map((videogame: Videogame) => {
          return <VideogameCard videogame={videogame} />;
        })}
      </ul>
    </>
  );
};

export default VideogamesList;
