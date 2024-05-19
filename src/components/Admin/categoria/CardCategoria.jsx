import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../modal/ConfirmModal";

export default function CardCategoria({ id, nome, onDelete }) {
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
        <div className="flex my-6 justify-center">
          <button className="px-6 py-2 bg-orange-300 rounded-md mr-16 sm:mr-32" onClick={() => {navigate(`/admin/form-categoria/${id}`)}}>
            Editar
          </button>
          <button className="px-6 py-2 bg-red-500 rounded-md" onClick={handleDelete}>
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