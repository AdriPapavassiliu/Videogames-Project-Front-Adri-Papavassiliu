import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginUserPage from "./LoginUserPage";

describe("Given a RegisterUserPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with 'Sign up' as name", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginUserPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonAccessibleName = screen.getByRole("button", {
        name: /log in/i,
      });

      expect(buttonAccessibleName).toBeInTheDocument();
    });
  });
});
