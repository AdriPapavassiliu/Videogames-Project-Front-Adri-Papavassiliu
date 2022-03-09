import { Videogame } from "../../interfaces/Videogame";
import { loadVideogamesAction } from "./actionsCreators";

describe("Given a loadVideogamesAction function", () => {
  describe("When it receives videogames", () => {
    test("Then it should return an object with the action and videogames", () => {
      const videogames: Videogame[] = [
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Shooter",
          description:
            "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
          year: 2019,
        },
        {
          name: "GTA V",
          image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Action",
          description:
            "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
          year: 2013,
        },
      ];

      const expectedAction = {
        type: "load-videogames",
        videogames,
      };

      const action = loadVideogamesAction(videogames);

      expect(action).toEqual(expectedAction);
    });
  });
});
