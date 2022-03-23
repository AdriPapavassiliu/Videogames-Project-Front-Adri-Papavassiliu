import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { LogoutPage } from "./LogoutPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LogoutPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button with 'Logout' as accessible name", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogoutPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonAccessibleName = screen.getByRole("button", {
        name: /logout/i,
      });

      expect(buttonAccessibleName).toBeInTheDocument();
    });
  });

  describe("When the logout button is clicked", () => {
    test("Then it invoke a navigate function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogoutPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonAccessibleName = screen.getByRole("button", {
        name: /logout/i,
      });
      userEvent.click(buttonAccessibleName);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
