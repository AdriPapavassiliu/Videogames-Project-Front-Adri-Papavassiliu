import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";
import videogameDetailReducer from "./videogameDetailReducer";

describe("Given an videogameDetailReducer function", () => {
  describe("When it is called with a loadVideogameAction with a videogame", () => {
    test("Then it should return the videogame as the new state", () => {
      const currentState = {};
      const videogame: Videogame = {
        name: "GTA V",
        image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "Adventures",
        description:
          "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
        year: "2013",
        id: "1",
      };
      const action = {
        type: actionsTypes.loadVideogame,
        videogame,
      };

      const newState = videogameDetailReducer(currentState, action);

      expect(newState).toEqual(videogame);
    });
  });

  describe("When it is called with a non existing action with a videogame", () => {
    test("Then it should return a new state and has to be the same as the current state", () => {
      const currentState = {};
      const videogame: Videogame = {
        name: "GTA V",
        image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "Adventures",
        description:
          "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
        year: "2013",
        id: "1",
      };

      const action = {
        type: "",
        videogame,
      };

      const newState = videogameDetailReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
