import { loadVideogamesThunk } from "./videogamesThunk";

describe("Given a loadVideogamesThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadVideogamesThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
