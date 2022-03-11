import { Videogame } from "../../interfaces/Videogame";
import styled from "styled-components";

export const VideogameCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 35vw;
  align-items: center;

  & .card__image {
    height: 247px;
    cursor: pointer;
    & img {
      width: 130px;
      height: 228px;
      border-radius: 25px;
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
      transform: translateX(84px) translateY(-20px);
      box-shadow: 1px 1px #e5e5e5;

      & svg {
        width: 22px;
        height: 22px;
      }
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
    }

    & .card__platforms {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;

      & p {
        margin: 5px;
        margin-right: 1px;
        margin-bottom: 0;
        width: 30px;
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

const VideogameCard = ({
  videogame: { name, description, genre, image, platforms },
}: VideogameCardProps): JSX.Element => {
  return (
    <>
      <VideogameCardStyle className="card">
        <div className="card__image">
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
              <p>{platform}</p>
            ))}
          </div>
        </section>
      </VideogameCardStyle>
    </>
  );
};

export default VideogameCard;
