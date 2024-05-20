import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/user/sobre/Sobre";
import { LoginForm } from "./pages/authentication/LoginForm";
import { RegisterForm } from "./pages/authentication/RegisterForm";
import Categoria from "./pages/admin/categoria/Categoria";
import CategoriaEdit from "./pages/admin/categoria/CategoriaEdit";
import Local from "./pages/admin/local/Local";
import LocalEdit from "./pages/admin/local/LocalEdit";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/admin/categoria" element={<Categoria />} />
          <Route path="/admin/form-categoria" element={<CategoriaEdit />} />
          <Route path="/admin/form-categoria/:id" element={<CategoriaEdit />} />
          <Route path="/admin/local" element={<Local />} />
          <Route path="/admin/form-local" element={<LocalEdit />} />
          <Route path="/admin/form-local/:id" element={<LocalEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
