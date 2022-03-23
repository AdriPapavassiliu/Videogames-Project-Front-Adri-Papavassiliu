import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { MyVideogamesPage } from "./MyVideogamesPage";

describe("Given a LogoutPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Page Not Found", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyVideogamesPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /page under construction/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
