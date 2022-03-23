import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Navigation from "./Navigation";

const state = {
  user: {
    username: "username",
  },
};
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => state.user,
}));

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 4 anchors", () => {
      const numberOfAnchors = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const allLinks = screen.getAllByRole("link");

      expect(allLinks).toHaveLength(numberOfAnchors);
    });
  });
});
