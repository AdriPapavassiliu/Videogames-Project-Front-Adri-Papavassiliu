import { useSelector } from "react-redux";
import styled from "styled-components";
import VideogameDetail from "../../components/VideogameDetail/VideogameDetail";
import { Videogame } from "../../interfaces/Videogame";
import { RootState } from "../../redux/store";

export const VideogameDetailPageStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const VideogameDetailPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.usersReducer);
  const videogame = useSelector(
    (state: RootState) => state.videogameDetailReducer
  );
  interface VideogameDetail {
    videogame: Videogame;
  }

  return (
    <>
      <VideogameDetailPageStyle>
        <VideogameDetail
          user={user}
          videogame={(videogame as unknown as VideogameDetail).videogame}
        />
      </VideogameDetailPageStyle>
    </>
  );
};

export default VideogameDetailPage;
