import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import Pesquisa from "../../../components/Admin/pesquisa/Pesquisa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteCategoria, getCategorias } from "../../../service/api/CategoriaService";
import CardCategoria from "../../../components/Admin/categoria/CardCategoria";
import LougoutButton from "../../../components/button/LogoutButton";

export default function Categoria() {
  const [categorias, setCategorias] = useState([]);
  const [categoriasRender, setCategoriasRender] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function getAllCategorias() {
    try {
      const data = await getCategorias();
      setCategorias(data);
      setCategoriasRender(data);
    } catch {
      console.error("Error getCategorias");
    }
  }

  function filter() {
    if (categorias) {
      const filtered = categorias.filter((categoria) =>
        Object.values(categoria).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
      setCategoriasRender(filtered);
    }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      getCategorias();
      setCategoriasRender(categorias);
    }
  }

  useEffect(() => {
    getAllCategorias();
  }, []);

  useEffect(() => {
    filter();
  }, [search]);

  const onDelete = async (id) => {
    try {
      await deleteCategoria(id);
      getAllCategorias();
    } catch {
      console.error("Error deleteCategorias");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden">
      <Header showBackButton>
        <LougoutButton />
      </Header>

      <div className="w-full flex justify-center mt-2">
          <Pesquisa search={search} handleSearch={handleSearch} />
      </div>

      <div className="flex flex-col items-center flex-1 overflow-y-auto w-full mt-4">
        
        <div className="w-11/12 sm:w-9/12 mx-auto mt-2">
          {categoriasRender && categoriasRender.length > 0 ? (
            categoriasRender.map(categoria => (
              <CardCategoria key={categoria.id} id={categoria.id} nome={categoria.nome} onDelete={onDelete} filter={filter} />
            ))
          ) : (
            <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-auto h-auto rounded-lg border-4 my-4 sm:m-0">
              <h1 className="text-center text-4xl font-bold text-orange-300">
                Nenhuma Categoria Encontrada!
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-2 mb-2">
        <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300" onClick={() => navigate("/admin/form-categoria")}>
          Adicionar Categoria
        </button>
      </div>
      <Footer />
    </div>
  );
}
