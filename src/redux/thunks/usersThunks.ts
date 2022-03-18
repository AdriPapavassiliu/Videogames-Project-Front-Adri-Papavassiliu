import { ThunkDispatch } from "redux-thunk";
import {
  LoginUserActionInterface,
  RegisterUserActionInterface,
} from "../../interfaces/Action";
import { RegisterUser, User } from "../../interfaces/User";
import {
  loginUserAction,
  registerUserAction,
} from "../actions/actionsCreators";
import { RootState } from "../store";

export const registerUserThunk =
  (user: RegisterUser) =>
  async (
    dispatch: ThunkDispatch<RootState, void, RegisterUserActionInterface>
  ) => {
    const response = await fetch(
      `${process.env.REACT_APP_URLAPI}user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const newUser = await response.json();
    dispatch(registerUserAction(newUser));
  };

export const loginUserThunk =
  (user: User) =>
  async (
    dispatch: ThunkDispatch<RootState, void, LoginUserActionInterface>
  ) => {
    const response = await fetch(`${process.env.REACT_APP_URLAPI}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const tokenResponse = await response.json();
    localStorage.setItem("userToken", tokenResponse.token);

    dispatch(loginUserAction(user));
  };
