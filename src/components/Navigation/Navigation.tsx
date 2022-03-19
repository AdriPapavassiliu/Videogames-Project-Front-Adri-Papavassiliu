import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "@fontsource/montserrat-alternates";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { User } from "../../interfaces/User";

export const Navbar = styled.nav`
  background-color: #157a6e;
  height: 69px;
  width: 100vw;
  position: fixed;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 99;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 90vw;
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
  const user = useSelector((state: RootState) => state.usersReducer);
  return (
    <>
      <Navbar className="nav-bar">
        <ul>
          <li className="account">
            <Link to={(user as User).username ? "/logout" : "/login"}>
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
            <Link to={(user as User).username ? "/my-videogames" : "/login"}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li>
            <Link to={(user as User).username ? "/add-videogame" : "/login"}>
              <FontAwesomeIcon icon={faSquarePlus} />
            </Link>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Navigation;
