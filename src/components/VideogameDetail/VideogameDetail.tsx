import { Videogame } from "../../interfaces/Videogame";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteVideogameThunk } from "../../redux/thunks/videogamesThunk";
import { User } from "../../interfaces/User";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export const VideogameDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-items: center;
  padding-top: 90px;
  margin-bottom: 20px;
  @media (min-width: 800px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
  }

  & .card__properties {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      margin-left: 30px;
      align-items: flex-start;
      width: 50vw;
    }

    & button {
      border-radius: 10px;
    }
  }

  & .card__image {
    position: relative;
    & img {
      width: 156px;
      height: 274px;
      border-radius: 25px;
      object-fit: cover;
      cursor: pointer;
      @media (min-width: 800px) {
        width: 225px;
        height: 395px;
      }
    }

    & button :hover {
      color: #eaa92a;
    }

    & button {
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: #000000;
      background-color: #fff;
      border: none;
      padding: 0;
      bottom: 10px;
      box-shadow: 1px 1px #e5e5e5;
      position: absolute;
      left: 110px;
      top: 254px;
      cursor: pointer;
      @media (min-width: 800px) {
        left: 170px;
        top: 377px;
      }

      & svg {
        width: 22px;
        height: 22px;
      }
    }

    & .delete-button {
      width: 30px;
      height: 30px;
      color: #fff;
      background-color: #c70000;
      left: 132px;
      top: -8px;
      box-shadow: none;
      @media (min-width: 800px) {
        left: 204px;
        top: -9px;
      }
    }
  }

  & h3 {
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    height: 36px;
    text-align: center;
    @media (min-width: 800px) {
      width: max-content;
      padding-left: 15px;
    }
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    border-radius: 20px;
    padding: 15px;
    margin-top: 8px;
    margin-bottom: 20px;
    @media (min-width: 800px) {
      font-size: 20px;
      align-items: flex-start;
    }

    & .colon {
      display: none;
      @media (min-width: 800px) {
        display: contents;
      }
    }

    & p {
      margin: 8px 0;
    }

    & h4 {
      margin: 0;
      font-weight: 600;
    }

    & .card__platforms {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      gap: 10px;
      @media (min-width: 800px) {
        gap: 20px;
      }

      & p {
        margin: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        height: min-content;
        @media (min-width: 800px) {
          font-size: 20px;
        }
      }
    }
  }
`;
interface VideogameCardProps {
  videogame: Videogame;
  user: User | {};
}

toast.configure();
const VideogameDetail = ({
  videogame: { name, description, genre, image, platforms, id },
  user,
}: VideogameCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteVideogame = (videogameId: any): void => {
    dispatch(deleteVideogameThunk(videogameId));
    navigate("/home");
  };

  return (
    <>
      <VideogameDetailStyle className="card">
        <div className="card__image">
          {(user as User).username ? (
            <button
              className="delete-button"
              onClick={() => {
                deleteVideogame(id);
                toast.error("Videogame deleted", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  autoClose: 500,
                  theme: "dark",
                  hideProgressBar: true,
                });
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          ) : (
            <></>
          )}

          <img src={image} alt={`${name} card`} onClick={() => {}}></img>
          {(user as User).username ? (
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="card__properties">
          <h3 className="card__name">{name}</h3>
          <section>
            <h4>
              Genre<span className="colon">:</span>
            </h4>
            <p>{genre}</p>
            <h4>
              Platforms<span className="colon">:</span>
            </h4>
            <div className="card__platforms">
              {platforms.map((platform) => (
                <p key={platform}>{platform}</p>
              ))}
            </div>
            <h4>
              Description<span className="colon">:</span>
            </h4>
            <p className="card__description">{description}</p>
          </section>
          <Button
            type="form"
            text="Edit videogame"
            actionOnClick={() => {}}
          ></Button>
        </div>
      </VideogameDetailStyle>
    </>
  );
};

export default VideogameDetail;
