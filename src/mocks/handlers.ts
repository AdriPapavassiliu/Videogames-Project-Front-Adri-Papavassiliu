import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_URLAPI}videogames`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "",
          description: "",
          year: 2019,
          id: "1",
        },
        {
          name: "GTA V",
          image: "https://www.xtrafondos.com/descargar.php?id=3228&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "Action",
          description:
            "An action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
          year: 2013,
          id: "2",
        },
      ])
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_URLAPI}videogames/2`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "Videogame deleted" }));
    }
  ),
];
