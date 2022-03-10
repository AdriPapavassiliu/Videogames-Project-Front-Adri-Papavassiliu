import { Videogame } from "../../interfaces/Videogame";
import VideogameCard from "../VideogameCard/VideogameCard";

interface VideogameListProps {
  videogames: Videogame[];
}

const VideogamesList = ({ videogames }: VideogameListProps): JSX.Element => {
  return (
    <>
      <h3>{videogames.length} items</h3>
      <ul>
        {videogames.map((videogame: Videogame) => {
          return <VideogameCard videogame={videogame} />;
        })}
      </ul>
    </>
  );
};

export default VideogamesList;
