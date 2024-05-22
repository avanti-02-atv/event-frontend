import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createLocal, getLocalById, updateLocais } from "../../../service/api/LocalService";
import InputMask from 'react-input-mask';

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [CEP, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function setForm() {
      try {
        if (id) {
          const local = await getLocalById(id);
          setNome(local.nome);
          setCidade(local.cidade);
          setCEP(local.CEP);
          setRua(local.rua);
          setNumero(local.numero);
        }
      } catch (error) {
        console.log("Error");
      }
    }
    setForm();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { nome, cidade, CEP, rua, numero };
    if (id) {
      await updateLocais(id, data);
    } else {
      await createLocal(data);
    }
    navigate("/admin/local");
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
              Nome do Local
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
              Nome da Cidade
            </label>
            <input
              type="text"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CEP
            </label>
            <InputMask 
              type="text"
              mask="99999-999"
              value={CEP}
              onChange={(event) => setCEP(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nome da Rua
            </label>
            <input
              type="text"
              value={rua}
              onChange={(event) => setRua(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Número
            </label>
            <input
              type="number"
              value={numero}
              onChange={(event) => setNumero(parseInt(event.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="escreva aqui..."
              required
            />
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
              onClick={() => navigate("/admin/local")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}