import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../modal/ConfirmModal";

export default function CardLocal({ id, nome, cidade, CEP, rua, numero, onDelete }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete(id);
    setIsModalOpen(false);
  };

  return(
    <div className="my-12">
      <div className="flex flex-col p-6 justify-start shadow-lg bg-white w-full h-auto rounded-lg border-4 my-4 sm:m-0">
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">NOME:</span> {nome}
        </h3>  
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">CIDADE:</span> {cidade}
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">CEP:</span> {CEP}
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">RUA:</span> {rua}
        </h3>
        <h3 className="text-orange-300 font-black sm:text-lg mb-4">
          <span className="font-black sm:text-lg text-black">NÚMERO:</span> {numero}
        </h3>
        <div className="flex my-6 justify-center">
          <button className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300 mr-16 sm:mr-32" onClick={() => {navigate(`/admin/form-local/${id}`)}}>
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
  )
}