import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Admin/footer/Footer";
import Header from "./components/Admin/header/Header";
import Home from "./pages/admin/home/Home";
import Sobre from "./pages/admin/sobre/Sobre";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
