import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import VideogameDetailPage from "./VideogameDetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

const state = {
  videogame: {
    name: "Apex Legends",
    image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
    platforms: ["PS4", "XBOX", "PS5", "PC"],
    genre: "Shooter",
    description:
      "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
    year: 2019,
    id: "1",
  },
};
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => state.videogame,
}));

describe("Given a VideogameDetail page", () => {
  describe("When it's rendered", () => {
    test("Then it should not render an image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameDetailPage />
          </Provider>
        </BrowserRouter>
      );

      const findImage = screen.queryByRole("image");

      expect(findImage).not.toBeInTheDocument();
    });
  });
});
