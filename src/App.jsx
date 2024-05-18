import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/user/sobre/Sobre";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
