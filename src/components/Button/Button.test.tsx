import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives an action, a text and a type 'filter' and the button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<Button actionOnClick={action} text="text" type="filter" />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action, a text and a type 'form' and the button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<Button actionOnClick={action} text="text" type="form" />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
