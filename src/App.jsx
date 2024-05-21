import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/user/sobre/Sobre";
import UserHome from "./pages/user/UserHome";
import UserEvent from "./pages/user/UserEvent";
import { LoginForm } from "./pages/authentication/LoginForm";
import { RegisterForm } from "./pages/authentication/RegisterForm";
import Categoria from "./pages/admin/categoria/Categoria";
import CategoriaEdit from "./pages/admin/categoria/CategoriaEdit";
import Local from "./pages/admin/local/Local";
import LocalEdit from "./pages/admin/local/LocalEdit";
import User from "./pages/admin/user/User";
import UserEdit from "./pages/admin/user/UserEdit";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/events" element={<UserEvent />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/admin/categoria" element={<Categoria />} />
          <Route path="/admin/form-categoria" element={<CategoriaEdit />} />
          <Route path="/admin/form-categoria/:id" element={<CategoriaEdit />} />
          <Route path="/admin/local" element={<Local />} />
          <Route path="/admin/form-local" element={<LocalEdit />} />
          <Route path="/admin/form-local/:id" element={<LocalEdit />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/form-user" element={<UserEdit />} />
          <Route path="/admin/form-user/:id" element={<UserEdit />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
