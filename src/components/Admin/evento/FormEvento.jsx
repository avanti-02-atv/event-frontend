import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEvento, getEventoById, updateEvento } from "../../../service/api/EventoService";
import { getCategorias } from "../../../service/api/CategoriaService";
import { getLocais } from "../../../service/api/LocalService";

export default function FormEvento() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [localId, setLocalId] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [locais, setLocais] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
        const locaisData = await getLocais();
        setLocais(locaisData);

        if (id) {
          const evento = await getEventoById(id);
          setNome(evento.nome);
          setDescricao(evento.descricao);

          // Convertendo a data para o formato "YYYY-MM-DDTHH:MM"
          const date = new Date(evento.data);
          const formattedDate = date.toISOString().slice(0, 16);
          setData(formattedDate);

          setCategoriaId(evento.categoriaId);
          setLocalId(evento.localId);
        }
      } catch (error) {
        console.log("Error fetching data");
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventoData = { nome, descricao, data, categoriaId, localId };
    if (id) {
      await updateEvento(id, eventoData);
    } else {
      await createEvento(eventoData);
    }
    navigate("/admin/evento");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg h-full sm:overflow-y-auto">
        <h1 className="font-black text-center text-xl text-orange-300 mb-6">
          {id ? "Formulário de Edição" : "Formulário de Criação"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nome do Evento
            </label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Descrição
            </label>
            <input
              type="text"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Data
            </label>
            <input
              type="datetime-local"
              value={data}
              onChange={(event) => setData(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Categoria
            </label>
            <select
              value={categoriaId}
              onChange={(event) => setCategoriaId(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Local
            </label>
            <select
              value={localId}
              onChange={(event) => setLocalId(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Selecione um local</option>
              {locais.map((local) => (
                <option key={local.id} value={local.id} title={`${local.CEP} - ${local.cidade} - ${local.nome}`}>
                  {`${local.CEP} - ${local.cidade} - ${local.nome}`}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="sm:mr-4 mr-1 text-white bg-orange-300 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm w-5/12 sm:w-auto sm:px-5 px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              {id ? "Atualizar" : "Adicionar"}
            </button>
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-5/12 sm:w-auto sm:px-5 px-2 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => navigate("/admin/evento")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
