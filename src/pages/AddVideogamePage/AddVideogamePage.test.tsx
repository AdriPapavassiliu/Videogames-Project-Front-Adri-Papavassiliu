import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import AddVideogamePage from "./AddVideogamePage";

describe("Given an AddVideogamePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 4 checkboxes", () => {
      const expectedNumOfCheckboxes = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddVideogamePage />
          </Provider>
        </BrowserRouter>
      );

      const numOfCheckboxes = screen.getAllByRole("checkbox");

      expect(numOfCheckboxes).toHaveLength(expectedNumOfCheckboxes);
    });
  });
});
