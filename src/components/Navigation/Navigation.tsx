import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/register">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="/home">Videogames</a>
          </li>
          <li>
            <a href="/liked">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </li>
          <li>
            <a href="/create-videogame">
              <FontAwesomeIcon icon={faSquarePlus} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
