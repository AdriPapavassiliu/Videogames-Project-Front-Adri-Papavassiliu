import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import VideogameDetail from "./VideogameDetail";

const videogame = {
  name: "Apex Legends",
  image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
  platforms: ["PS4", "XBOX", "PS5", "PC"],
  genre: "",
  description: "",
};

const user = {
  username: "jdnfsjd",
};

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a VideogameDetail component", () => {
  describe("When it receives a user and videogame", () => {
    test("Then it should render 3 buttons", () => {
      const numOfButtons = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameDetail user={user} videogame={videogame} />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(numOfButtons);
    });
  });

  describe("When it receives a user and videogame and the delete button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameDetail user={user} videogame={videogame} />
          </Provider>
        </BrowserRouter>
      );

      const deleteButton = screen.getByTestId("delete-button");
      userEvent.click(deleteButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it receives a user and videogame and the update videogame button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameDetail user={user} videogame={videogame} />
          </Provider>
        </BrowserRouter>
      );

      const updateButton = screen.getByRole("button", {
        name: /edit videogame/i,
      });
      userEvent.click(updateButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it receives a videogame but not a user", () => {
    test("Then it should not render any button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <VideogameDetail user={{}} videogame={videogame} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button");

      expect(button).not.toBeInTheDocument();
    });
  });
});
