import styled from "styled-components";

const MyVideogamesPageStyle = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  & img {
    width: 60vw;
    max-height: 322px;
    max-width: 322px;
  }

  & h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;

    @media (min-width: 800px) {
      font-size: 33px;
    }
  }
`;

export const MyVideogamesPage = (): JSX.Element => {
  return (
    <>
      <MyVideogamesPageStyle>
        <h1>Page Under Construction</h1>
        <img
          src="https://media.giphy.com/media/sr207VmwFF6Ug/giphy.gif"
          alt="Pikachu building"
        ></img>
      </MyVideogamesPageStyle>
    </>
  );
};
