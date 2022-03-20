import { Navigate, Route, Routes } from "react-router-dom";
import "@fontsource/work-sans";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AddVideogamePage from "./pages/AddVideogamePage/AddVideogamePage";
import RegisterUserPage from "./pages/RegisterUserPage/RegisterUserPage";
import LoginUserPage from "./pages/LoginUserPage/LoginUserPage";
import VideogameDetailPage from "./pages/VideogameDetailPage/VideogameDetailPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginUserPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/videogames/:id" element={<VideogameDetailPage />} />
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
