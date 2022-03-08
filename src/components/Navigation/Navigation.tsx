import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "@fontsource/montserrat-alternates";

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

    & li {
      font-size: 22px;
      font-family: Montserrat Alternates;
      font-weight: bold;

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
            <a href="/register">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="/home">
              <span>Video</span>games
            </a>
          </li>
          <li>
            <a href="/liked">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </li>
          <li className="logo">
            <a href="/create-videogame">
              <FontAwesomeIcon icon={faSquarePlus} />
            </a>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Navigation;
