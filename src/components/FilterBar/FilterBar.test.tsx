import { render, screen } from "@testing-library/react";
import FilterBar from "./FilterBar";

describe("Given a FilterBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 5 buttons", () => {
      const numberOfButtons = 5;

      render(<FilterBar />);

      const allButtons = screen.getAllByRole("button");

      expect(allButtons).toHaveLength(numberOfButtons);
    });
  });
});
