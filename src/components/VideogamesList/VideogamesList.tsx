import { Videogame } from "../../interfaces/Videogame";
import VideogameCard from "../VideogameCard/VideogameCard";

interface VideogameListProps {
  videogames: Videogame[];
}

const VideogamesList = ({ videogames }: VideogameListProps): JSX.Element => {
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
