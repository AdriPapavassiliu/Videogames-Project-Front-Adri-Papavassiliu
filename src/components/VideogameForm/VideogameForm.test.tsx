import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import VideogameForm from "./VideogameForm";

describe("Given a VideogameForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading", () => {
      const expectedNumOfHeadings = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameForm thunk={() => {}} />
          </Provider>
        </BrowserRouter>
      );

      const numOfHeadings = screen.getAllByRole("heading");

      expect(numOfHeadings).toHaveLength(expectedNumOfHeadings);
    });
  });
});
