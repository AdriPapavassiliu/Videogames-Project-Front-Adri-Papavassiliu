import Navigation from "./components/Navigation/Navigation";
import VideogameCard from "./components/VideogameCard/VideogameCard";
import "@fontsource/work-sans";

function App() {
  return (
    <div>
      <Navigation />
      <VideogameCard
        videogame={{
          name: "Apex Legends",
          image: "https://www.xtrafondos.com/descargar.php?id=3030&vertical=1",
          platforms: ["PS4", "XBOX", "PS5", "PC"],
          genre: "",
          description: "",
        }}
      />
    </div>
  );
}

export default App;
