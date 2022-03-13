import styled from "styled-components";
import { Videogame } from "../../interfaces/Videogame";
import VideogameCard from "../VideogameCard/VideogameCard";

export const MainStyles = styled.main`
  padding-top: 16px;
`;
export const VideogameListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 25px;
  margin-left: 40px;
  padding: 0;
`;

export const HeadingStyles = styled.h3`
  margin: 0;
  display: flex;
  transform: translateX(50px);
  padding-bottom: 10px;
  width: fit-content;
`;

interface VideogameListProps {
  videogames: Videogame[];
}

const VideogamesList = ({ videogames }: VideogameListProps): JSX.Element => {
  return (
    <>
      <MainStyles>
        <HeadingStyles>{videogames.length} items</HeadingStyles>
        <VideogameListStyles>
          {videogames.map((videogame: Videogame) => {
            return <VideogameCard videogame={videogame} key={videogame.id} />;
          })}
        </VideogameListStyles>
      </MainStyles>
    </>
  );
};

export default VideogamesList;
