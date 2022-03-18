import { ThunkDispatch } from "redux-thunk";
import { RegisterUserActionInterface } from "../../interfaces/Action";
import { RegisterUser } from "../../interfaces/User";
import { registerUserAction } from "../actions/actionsCreators";
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
