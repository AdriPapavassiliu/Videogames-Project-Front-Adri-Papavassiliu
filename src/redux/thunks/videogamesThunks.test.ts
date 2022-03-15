import {
  addVideogameThunk,
  deleteVideogameThunk,
  loadVideogamesThunk,
} from "./videogamesThunk";

describe("Given a loadVideogamesThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadVideogamesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteVideogameThunk function", () => {
  describe("When it is called with '2' as id", () => {
    test("Then it should dispatch a function", async () => {
      const videogameId = "2";
      const dispatch = jest.fn();

      const innerThunk = await deleteVideogameThunk(videogameId);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with '45' as id", () => {
    test("Then it should not dispatch a function", async () => {
      const videogameId = "45";
      const dispatch = jest.fn();

      const innerThunk = await deleteVideogameThunk(videogameId);
      await innerThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given an addVideogameThunk function", () => {
  describe("When it is called with a videogame", () => {
    test("Then it should dispatch a function", async () => {
      const videogame = {
        name: "Apex Legends",
        image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
        platforms: ["PS4", "XBOX", "PS5", "PC"],
        genre: "Shooter",
        description:
          "A free-to-play strategic battle royale game featuring 60-player matches and team-based play",
        year: 2019,
      };
      const dispatch = jest.fn();

      const innerThunk = await addVideogameThunk(videogame);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
