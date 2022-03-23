import { RegisterUser, User } from "../../interfaces/User";
import actionsTypes from "../actions/actionsTypes";
import usersReducer from "./usersReducer";

describe("Given a usersReducer function", () => {
  describe("When it is called with a registerUser action with 'user' and an empty currentState", () => {
    test("Then it should return the new state with the new user", () => {
      const currentState = {};

      const user: RegisterUser = {
        name: "adri",
        username: "adri",
        password: "adri",
      };
      const action = {
        type: actionsTypes.registerUser,
        user: user,
      };

      const newState = usersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it's called with an nonexistent action", () => {
    test("Then it should return a new state and has to be the same as the initial state)", () => {
      const currentState = {};

      const action = {
        type: "none",
        user: currentState,
      };

      const newState = usersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it's called without state nor action", () => {
    test("Then it should return an empty array as new state", () => {
      const newState = usersReducer();

      expect(newState).toEqual({});
    });
  });

  describe("When it is called with a loginUser action with 'user' and an empty currentState", () => {
    test("Then it should return the new state with the logged user", () => {
      const currentState = {};

      const user: User = {
        username: "adri",
        password: "adri",
      };
      const action = {
        type: actionsTypes.loginUser,
        user: user,
      };

      const newState = usersReducer(currentState, action);

      expect(newState).toEqual(user);
    });
  });

  describe("When it is called with a logout action", () => {
    test("Then it should return an empty new state", () => {
      const currentState = { user: "sadcsa", password: "dscsd" };

      const action = {
        type: actionsTypes.logout,
      };

      const newState = usersReducer(currentState, action);

      expect(newState).toStrictEqual({});
    });
  });
});
