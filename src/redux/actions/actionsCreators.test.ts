import { RegisterUser, User } from "../../interfaces/User";
import { Videogame } from "../../interfaces/Videogame";
import {
  addVideogameAction,
  deleteVideogameAction,
  loadVideogamesAction,
  loginUserAction,
  registerUserAction,
} from "./actionsCreators";

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

      const expectedAction = {
        type: "load-videogames",
        videogames,
      };

      const action = loadVideogamesAction(videogames);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteVideogameAction function", () => {
  describe("When it receives a videogameId", () => {
    test("Then it should return an object with the action and videogameId", () => {
      const videogameId: string = "1";

      const expectedAction = {
        type: "delete-videogame",
        videogameId,
      };

      const action = deleteVideogameAction(videogameId);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an addVideogameAction function", () => {
  describe("When it receives a videogame", () => {
    test("Then it should return an object with the action and videogame", () => {
      const videogame: Videogame = {
        name: "Apex Legends",
        image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "Shooter",
        description:
          "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
        year: "2019",
        id: "89991292931",
      };

      const expectedAction = {
        type: "add-videogame",
        videogame,
      };

      const action = addVideogameAction(videogame);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerUserAction function", () => {
  describe("When it receives a user", () => {
    test("Then it should return an object with the action and user", () => {
      const user: RegisterUser = {
        name: "adri",
        username: "adri",
        password: "adri",
      };

      const expectedAction = {
        type: "register-user",
        user,
      };

      const action = registerUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loginUserAction function", () => {
  describe("When it receives a user", () => {
    test("Then it should return an object with the action and user", () => {
      const user: User = {
        username: "adri",
        password: "adri",
      };

      const expectedAction = {
        type: "login-user",
        user,
      };

      const action = loginUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
