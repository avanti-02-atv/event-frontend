import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../modal/ConfirmModal";

export default function CardLocal({ id, nome, descricao, data, Categoria, Local, onDelete }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataCalendario, setDataCalendario] = useState("");
  const [hora, setHora] = useState("");

  function formatData(){
    const dateObj = new Date(data);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getUTCDate()).padStart(2, '0');
    setDataCalendario(`${year}/${month}/${day}`);
    const hours = String(dateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getUTCSeconds()).padStart(2, '0');
    setHora(`${hours}:${minutes}:${seconds}`); 
  }

  useEffect(() => {
    formatData();
  }, []);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete(id);
    setIsModalOpen(false);
  };

  return (
    <div className="my-12">
      <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-full h-auto rounded-lg border-4 my-4 sm:m-0">
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">NOME:</span>{" "}
          <span className="break-all">{nome}</span>
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">DESCRIÇÃO:</span>{" "}
          <span className="break-all">{descricao}</span>
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">DATA:</span>{" "}
          <span className="break-all">{dataCalendario}</span>
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">HORA:</span>{" "}
          <span className="break-all">{hora}</span>
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">CATEGORIA:</span>{" "}
          <span className="break-all">{Categoria.nome}</span>
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">LOCAL:</span>{" "}
          <span className="break-all">{Local.CEP} - {Local.cidade} - {Local.rua} - {Local.numero} - {Local.nome}</span>
        </h3>
        <div className="flex my-6 justify-center">
          <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300 mr-16 sm:mr-32" onClick={() => navigate(`/admin/form-evento/${id}`)}>
            Editar
          </button>
          <button className="bg-red-500 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-red-300" onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}