import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with 'Log in' as accessible name", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button", { name: /log in/i });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
