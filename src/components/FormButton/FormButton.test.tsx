import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormButton from "./FormButton";

describe("Given a FormButton component", () => {
  describe("When it receives an action and the button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<FormButton actionOnClick={action} text="text" />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
