import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";
import loadVideogamesReducer from "./loadVideogamesReducer";

describe("Given a loadVideogamesReducer function", () => {
  describe("When it is called with a loadVideogames action with 'videogames' and an empty currentVideogames", () => {
    test("Then it should return the new state with the array of videogames", () => {
      const currentVideogames: Videogame[] = [];

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
      const action = {
        type: actionsTypes.loadVideogames,
        videogames: videogames,
      };

      const newState = loadVideogamesReducer(currentVideogames, action);

      expect(newState).toEqual(videogames);
    });
  });
});
