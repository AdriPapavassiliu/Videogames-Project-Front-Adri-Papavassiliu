import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
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

      render(
        <Provider store={store}>
          <VideogameCard videogame={videogame} />
        </Provider>
      );

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
