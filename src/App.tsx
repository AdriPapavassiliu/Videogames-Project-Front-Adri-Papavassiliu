import { Navigate, Route, Routes } from "react-router-dom";
import "@fontsource/work-sans";
import "@fontsource/montserrat-alternates";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AddVideogamePage from "./pages/AddVideogamePage/AddVideogamePage";
import RegisterUserPage from "./pages/RegisterUserPage/RegisterUserPage";
import LoginUserPage from "./pages/LoginUserPage/LoginUserPage";
import VideogameDetailPage from "./pages/VideogameDetailPage/VideogameDetailPage";
import UpdateVideogamePage from "./pages/UpdateVideogamePage/UpdateVideogamePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "./redux/actions/actionsCreators";
import { LogoutPage } from "./pages/LogoutPage/LogoutPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(loginUserAction({ username: "user", password: "" }));
    }
  });
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginUserPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/videogames/:id" element={<VideogameDetailPage />} />
        <Route
          path="/my-videogames"
          element={"placeholder <MyVideogamesPage />"}
        />
        <Route path="/add-videogame" element={<AddVideogamePage />} />
        <Route path="/update-videogame/:id" element={<UpdateVideogamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
