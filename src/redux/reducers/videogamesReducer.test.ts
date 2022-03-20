import { Videogame } from "../../interfaces/Videogame";
import actionsTypes from "../actions/actionsTypes";
import videogamesReducer from "./videogamesReducer";

describe("Given a videogamesReducer function", () => {
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
      const action = {
        type: actionsTypes.loadVideogames,
        videogames: videogames,
      };

      const newState = videogamesReducer(currentVideogames, action);

      expect(newState).toEqual(videogames);
    });
  });

  describe("When it's called with an nonexistent action", () => {
    test("Then it should return a new state and has to be the same as the initial state)", () => {
      const currentVideogames: Videogame[] = [
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Shooter",
          description:
            "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
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

      const action = {
        type: "none",
        videogames: currentVideogames,
      };

      const newState = videogamesReducer(currentVideogames, action);

      expect(newState).toEqual(currentVideogames);
    });
  });

  describe("When it's called without state nor action", () => {
    test("Then it should return an empty array as new state", () => {
      const newState = videogamesReducer();

      expect(newState).toHaveLength(0);
    });
  });

  describe("When it is called with a deleteVideogame action with 'videogameId' and videogames", () => {
    test("Then it should return the new state with the array of expectedVideogames", () => {
      const videogameId: string = "3";
      const videogames: Videogame[] = [
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Shooter",
          description:
            "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
          year: "2019",
          id: "1",
        },
        {
          name: "Delete me",
          image: "",
          platforms: [],
          genre: "Delete",
          description: "",
          year: "2013",
          id: videogameId,
        },
      ];
      const expectedVideogames: Videogame[] = [
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Shooter",
          description:
            "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
          year: "2019",
          id: "1",
        },
      ];
      const action = {
        type: actionsTypes.deleteVideogame,
        videogameId,
      };

      const newState = videogamesReducer(videogames, action);

      expect(newState).toEqual(expectedVideogames);
    });
  });

  describe("When it is called with an addVideogame action with 'videogame' and an empty currentVideogames", () => {
    test("Then it should return the new state with the array of allVideogames", () => {
      const currentVideogames: Videogame[] = [
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
      const videogame: Videogame = {
        name: "Apex Legends",
        image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "Shooter",
        description:
          "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
        year: "2019",
      };
      const allVideogames: Videogame[] = [
        {
          name: "GTA V",
          image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Action",
          description:
            "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
          year: "2013",
        },
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Shooter",
          description:
            "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
          year: "2019",
        },
      ];

      const action = {
        type: actionsTypes.addVideogame,
        videogame: videogame,
      };

      const newState = videogamesReducer(currentVideogames, action);

      expect(newState).toEqual(allVideogames);
    });
  });

  describe("When it is called with an updateVideogame action with 'currentVideogames' and the updated videogame", () => {
    test("Then it should the new videogame", () => {
      const currentVideogames: Videogame[] = [
        {
          name: "GTA V",
          image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Action",
          description:
            "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
          year: "2013",
          id: "1",
        },
      ];
      const updatedVideogame: Videogame = {
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
        type: "update-videogame",
        videogame: updatedVideogame,
      };

      const newPlayers = videogamesReducer(currentVideogames, action);

      expect(newPlayers).toContain(updatedVideogame);
    });
  });
});
