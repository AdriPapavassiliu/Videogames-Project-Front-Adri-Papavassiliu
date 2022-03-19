import { useSelector } from "react-redux";
import styled from "styled-components";
import { Videogame } from "../../interfaces/Videogame";
import { RootState } from "../../redux/store";
import VideogameCard from "../VideogameCard/VideogameCard";

export const MainStyles = styled.main`
  padding-top: 16px;
  margin-bottom: 25px;
`;
export const VideogameListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0;
  margin: 10px 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  grid-auto-rows: 350px;
  grid-gap: 30px;
  justify-content: center;
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
  const user = useSelector((state: RootState) => state.usersReducer);
  return (
    <>
      <MainStyles>
        <HeadingStyles>{videogames.length} items</HeadingStyles>
        <VideogameListStyles>
          {videogames.map((videogame: Videogame) => {
            return (
              <VideogameCard
                user={user}
                videogame={videogame}
                key={videogame.id}
              />
            );
          })}
        </VideogameListStyles>
      </MainStyles>
    </>
  );
};

export default VideogamesList;
