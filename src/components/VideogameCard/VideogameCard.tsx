import { Videogame } from "../../interfaces/Videogame";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VideogameCardProps {
  videogame: Videogame;
}

const VideogameCard = ({
  videogame: { name, description, genre, image, platforms },
}: VideogameCardProps): JSX.Element => {
  return (
    <>
      <li className="card">
        <div>
          <img src={image} alt={`${name} card`}></img>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <section>
          <h3 className="card__name">{name}</h3>
          <div className="card__platforms">
            {platforms.map((platform) => (
              <p>{platform}</p>
            ))}
          </div>
        </section>
      </li>
    </>
  );
};

export default VideogameCard;
