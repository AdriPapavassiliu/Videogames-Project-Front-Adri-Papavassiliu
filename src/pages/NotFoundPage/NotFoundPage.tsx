import styled from "styled-components";

const NotFoundPageStyle = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  & img {
    width: 60vw;
    height: 40vh;
  }
`;

export const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NotFoundPageStyle>
        <h1>Page Not Found</h1>
        <img
          src="https://www.shippinghub.com.ar/cdn/img/error404/pacman.gif"
          alt="Not Found"
        ></img>
      </NotFoundPageStyle>
    </>
  );
};
