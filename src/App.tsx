import { Navigate, Route, Routes } from "react-router-dom";
import "@fontsource/work-sans";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={"placeholder <LoginPage>"} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={"<NotFoundPage />"} />
    </Routes>
  );
}

export default App;
