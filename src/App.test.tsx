import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render navigation", () => {
      render(<App />);

      const navbar = screen.getByRole("navigation");

      expect(navbar).toBeInTheDocument();
    });
  });
});
