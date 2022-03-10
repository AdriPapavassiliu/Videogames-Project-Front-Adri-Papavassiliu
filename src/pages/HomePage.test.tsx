import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'Buzzs'", () => {
      const expectedHeadings = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");

      expect(headings).toHaveLength(expectedHeadings);
    });
  });
});
