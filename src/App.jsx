import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/user/sobre/Sobre";
import { LoginForm } from "./pages/authentication/LoginForm";
import { RegisterForm } from "./pages/authentication/RegisterForm";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
