import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 4 anchors", () => {
      const numberOfAnchors = 4;

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const allLinks = screen.getAllByRole("link");

      expect(allLinks).toHaveLength(numberOfAnchors);
    });
  });
});
