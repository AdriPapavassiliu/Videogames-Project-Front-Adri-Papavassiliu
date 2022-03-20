import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import VideogameCard from "./VideogameCard";

describe("Given a VideogameCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should render an image", () => {
      const videogame = {
        name: "Apex Legends",
        image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "",
        description: "",
      };

      const user = {
        username: "jdnfsjd",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameCard videogame={videogame} user={user} />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
