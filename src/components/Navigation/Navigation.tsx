import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "@fontsource/montserrat-alternates";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background-color: #157a6e;
  height: 69px;
  width: 100vw;
  position: fixed;
  align-items: center;
  display: flex;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;
    top: 0;

    & li {
      font-size: 22px;
      font-family: Montserrat Alternates;
      font-weight: bold;
      display: flex;
      align-items: center;

      & h1 {
        margin: 0;
        font-size: 27px;
      }

      & a {
        color: #ffffff;
        text-decoration: none;
      }
      & span {
        color: #eaa92a;
      }
    }
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <>
      <Navbar className="nav-bar">
        <ul>
          <li className="account">
            <Link to={"/login"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="logo">
            <Link to={"/home"}>
              <h1>
                <span>Video</span>games
              </h1>
            </Link>
          </li>
          <li>
            <Link to={"/my-videogames"}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li>
            <Link to={"/add-videogame"}>
              <FontAwesomeIcon icon={faSquarePlus} />
            </Link>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Navigation;
