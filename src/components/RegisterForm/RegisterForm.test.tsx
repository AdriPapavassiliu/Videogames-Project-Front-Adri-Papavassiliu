import { render, screen } from "@testing-library/react";
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
});
