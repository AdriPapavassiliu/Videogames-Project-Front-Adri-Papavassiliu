import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 4 anchors", () => {
      const numberOfAnchors = 4;

      render(<Navigation />);

      const allLinks = screen.getAllByRole("link");

      expect(allLinks).toHaveLength(numberOfAnchors);
    });
  });
});
