import { Navigate, Route, Routes } from "react-router-dom";
import "@fontsource/work-sans";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AddVideogamePage from "./pages/AddVideogamePage/AddVideogamePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={"placeholder <LoginPage>"} />
        <Route path="/register" element={"placeholder <RegisterPage>"} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/videogame/:id" element={"placeholder <MoviePage />"} />
        <Route
          path="/my-videogames"
          element={"placeholder <MyVideogamesPage />"}
        />
        <Route path="/add-videogame" element={<AddVideogamePage />} />
        <Route path="*" element={"<NotFoundPage />"} />
      </Routes>
    </>
  );
}

export default App;
