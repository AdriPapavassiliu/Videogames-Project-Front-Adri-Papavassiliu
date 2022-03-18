import { Videogame } from "../../interfaces/Videogame";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteVideogameThunk } from "../../redux/thunks/videogamesThunk";

export const VideogameCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 135px;
  align-items: center;
  position: relative;

  & .card__image {
    height: 247px;
    & img {
      width: 130px;
      height: 228px;
      border-radius: 25px;
      object-fit: cover;
      cursor: pointer;
    }

    & button :hover {
      color: #eaa92a;
    }

    & button {
      border-radius: 50%;
      width: 31px;
      height: 31px;
      color: #000000;
      background-color: #fff;
      border: none;
      padding: 0;
      bottom: 10px;
      box-shadow: 1px 1px #e5e5e5;
      position: absolute;
      left: 90px;
      top: 210px;
      cursor: pointer;

      & svg {
        width: 22px;
        height: 22px;
      }
    }

    & .delete-button {
      width: 25px;
      height: 25px;
      color: #fff;
      background-color: #c70000;
      left: 110px;
      top: -5px;
      box-shadow: none;
    }
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 15px;
      height: 36px;
      text-align: center;
    }

    & .card__platforms {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;

      & p {
        margin: 5px;
        margin-right: 1px;
        margin-bottom: 0;
        width: 35px;
        background-color: #e5e5e5;
        padding: 6px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
      }
    }
  }
`;
interface VideogameCardProps {
  videogame: Videogame;
}

toast.configure();
const VideogameCard = ({
  videogame: { name, description, genre, image, platforms, id },
}: VideogameCardProps): JSX.Element => {
  const dispatch = useDispatch();
  const deleteVideogame = (videogameId: any): void => {
    dispatch(deleteVideogameThunk(videogameId));
  };

  return (
    <>
      <VideogameCardStyle className="card">
        <div className="card__image">
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
          <img src={image} alt={`${name} card`}></img>
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
        </div>
        <section>
          <h3 className="card__name">{name}</h3>
          <div className="card__platforms">
            {platforms.map((platform) => (
              <p key={platform}>{platform}</p>
            ))}
          </div>
        </section>
      </VideogameCardStyle>
    </>
  );
};

export default VideogameCard;
