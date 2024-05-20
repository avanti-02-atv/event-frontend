import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import Pesquisa from "../../../components/Admin/pesquisa/Pesquisa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteLocal, getLocais } from "../../../service/LocalService";
import CardLocal from "../../../components/Admin/locais/CardLocal";

export default function Local() {
  const [locais, setLocais] = useState([]);
  const [locaisRender, setLocaisRender] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function getAllLocais() {
    try {
      const data = await getLocais();
      setLocais(data);
      setLocaisRender(data);
    } catch {
      console.error("Error getLocais");
    }
  }

  function filter() {
    if (locais) {
      const filtered = locais.filter((local) =>
        Object.values(local).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
      setLocaisRender(filtered);
    }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      getLocais();
      setLocaisRender(locais);
    }
  }

  useEffect(() => {
    getAllLocais();
  }, []);

  useEffect(() => {
    filter();
  }, [search]);

  const onDelete = async (id) => {
    try {
      await deleteLocal(id);
      getAllLocais();
    } catch {
      console.error("Error deleteLocais");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden">
      <Header>
        <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
          Sair
        </button>
      </Header>

      <div className="w-full flex justify-center mt-2">
        <Pesquisa search={search} handleSearch={handleSearch} />
      </div>

      <div className="flex flex-col items-center flex-1 overflow-y-auto w-full mt-4">
        <div className="w-11/12 sm:w-9/12 mx-auto mt-2">
          {locaisRender && locaisRender.length > 0 ? (
            locaisRender.map((local) => (
              <CardLocal
                key={local.id}
                id={local.id}
                nome={local.nome}
                cidade={local.cidade}
                CEP={local.CEP}
                rua={local.rua}
                numero={local.numero}
                onDelete={onDelete}
                filter={filter}
              />
            ))
          ) : (
            <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-auto h-auto rounded-lg border-4 my-4 sm:m-0">
              <h1 className="text-center text-4xl font-bold text-orange-300">
                Nenhum Local Encontrado!
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-2 mb-2">
        <button
          className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300"
          onClick={() => {
            navigate("/admin/form-local");
          }}
        >
          Adicionar Local
        </button>
      </div>
      <Footer />
    </div>
  );
}
