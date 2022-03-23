import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterForm from "./RegisterForm";

describe("Given a VideogameForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 2 textboxes", () => {
      const expectedNumOfTexboxes = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const numOfTextboxes = screen.getAllByRole("textbox");

      expect(numOfTextboxes).toHaveLength(expectedNumOfTexboxes);
    });
  });

  describe("When all the fields are filled", () => {
    test("Then it should enable the submit button", () => {
      const fillName = "aaad";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => userEvent.type(input, fillName));
      const passwordInput = screen.getByPlaceholderText("********");
      userEvent.type(passwordInput, fillName);

      const submitButton = screen.getByRole("button");
      userEvent.click(submitButton);

      expect(submitButton).not.toBeDisabled();
    });
  });
});
