import { registerUserThunk } from "./usersThunks";

describe("Given a registerUserThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const user = { name: "name", username: "username", password: "password" };
      const dispatch = jest.fn();

      const thunkCall = await registerUserThunk(user);
      await thunkCall(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
