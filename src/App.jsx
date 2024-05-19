import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/user/sobre/Sobre";
import Categoria from "./pages/admin/categoria/Categoria";
import CategoriaEdit from "./pages/admin/categoria/CategoriaEdit";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/admin/categoria" element={<Categoria />} />
          <Route path="/admin/form-categoria" element={<CategoriaEdit />} />
          <Route path="/admin/form-categoria/:id" element={<CategoriaEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
