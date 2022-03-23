import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterBar from "./FilterBar";

describe("Given a FilterBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 6 buttons", () => {
      const numberOfButtons = 6;

      render(<FilterBar />);

      const allButtons = screen.getAllByRole("button");

      expect(allButtons).toHaveLength(numberOfButtons);
    });
  });

  describe("When all buttons are clicked", () => {
    test("Then they should dispatch a function for every button", () => {
      const actionOnClick = jest.fn();

      render(<FilterBar />);
      actionOnClick();
      const xboxButton = screen.getByRole("button", { name: /xbox/i });
      userEvent.click(xboxButton);
      const pcButton = screen.getByRole("button", { name: /pc/i });
      userEvent.click(pcButton);
      const ps4Button = screen.getByRole("button", { name: /ps4/i });
      userEvent.click(ps4Button);
      const ps5Button = screen.getByRole("button", { name: /ps5/i });
      userEvent.click(ps5Button);
      const switchButton = screen.getByRole("button", { name: /switch/i });
      userEvent.click(switchButton);
      const allButton = screen.getByRole("button", { name: /all/i });
      userEvent.click(allButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
