import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import VideogamesList from "./VideogamesList";

describe("Given a VideogameList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render two images", () => {
      const expectedNumOfImages = 2;

      const videogames = [
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "",
          description: "",
          year: "2019",
        },
        {
          name: "GTA V",
          image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Action",
          description:
            "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
          year: "2013",
        },
      ];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogamesList videogames={videogames} />
          </Provider>
        </BrowserRouter>
      );

      const numOfImages = screen.getAllByRole("img");

      expect(numOfImages).toHaveLength(expectedNumOfImages);
    });
  });
});
