import { render, screen } from "@testing-library/react";
import VideogameCard from "./VideogameCard";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should render an image", () => {
      const videogame = {
        name: "Apex Legends",
        image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "",
        description: "",
      };

      render(<VideogameCard videogame={videogame} />);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
