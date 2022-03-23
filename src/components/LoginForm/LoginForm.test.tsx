import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginForm from "./LoginForm";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({
    username: "dsd",
  }),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

  describe("When all the fields are filled", () => {
    test("Then it should enable the submit button", () => {
      const fillName = "aaad";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getByRole("textbox");
      userEvent.type(inputs, fillName);
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(submitButton).not.toBeDisabled();
    });
  });
});
