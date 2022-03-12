import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a navbar with 4 links", () => {
      const expectedLinks = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(expectedLinks);
    });
  });
});
