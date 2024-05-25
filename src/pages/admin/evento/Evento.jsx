import Footer from "../../../components/Admin/footer/Footer";
import Header from "../../../components/Admin/header/Header";
import Pesquisa from "../../../components/Admin/pesquisa/Pesquisa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteEvento, getEventos } from "../../../service/api/EventoService";
import CardEvento from "../../../components/Admin/evento/CardEvento";
import LougoutButton from "../../../components/button/LogoutButton";

export default function Evento() {
  const [eventos, setEventos] = useState([]);
  const [eventosRender, setEventosRender] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function getAllEventos() {
    try {
      const data = await getEventos();
      if(data){
        setEventos(data);
        setEventosRender(data);
      }
    } catch {
      console.error("Error getEventos");
    }
  }

  function filter() {
    if (eventos) {
      const filtered = eventos.filter((evento) =>
        Object.values(evento).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
      setEventosRender(filtered);
    }
  }

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      getEventos();
      setEventosRender(eventos);
    }
  }

  useEffect(() => {
    getAllEventos();
  }, []);

  useEffect(() => {
    filter();
  }, [search]);

  const onDelete = async (id) => {
    try {
      await deleteEvento(id);
      getAllEventos();
    } catch {
      console.error("Error deleteEventos");
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
          {eventosRender && eventosRender.length > 0 ? (
            eventosRender.map((evento) => (
              <CardEvento
                key={evento.id}
                id={evento.id}
                nome={evento.nome}
                descricao={evento.descricao}
                data={evento.data}
                Categoria={evento.Categoria}
                Local={evento.Local}
                onDelete={onDelete}
                filter={filter}
              />
            ))
          ) : (
            <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-auto h-auto rounded-lg border-4 my-4 sm:m-0">
              <h1 className="text-center text-4xl font-bold text-orange-300">
                Nenhum Evento Encontrado!
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-2 mb-2">
        <button
          className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300"
          onClick={() => {
            navigate("/admin/form-evento");
          }}
        >
          Adicionar Evento
        </button>
      </div>
      <Footer />
    </div>
  );
}
