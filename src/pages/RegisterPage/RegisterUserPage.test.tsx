import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterUserPage from "./RegisterUserPage";

describe("Given a RegisterUserPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with 'Sign up' as name", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterUserPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonAccessibleName = screen.getByRole("button", {
        name: /sign up/i,
      });

      expect(buttonAccessibleName).toBeInTheDocument();
    });
  });
});
