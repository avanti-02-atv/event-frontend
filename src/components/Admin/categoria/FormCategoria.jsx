import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCategoria, getCategoriaById, updateCategoria } from "../../../service/CategoriaService";

export default function FormCategoria(){
  const [nome, setNome] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function setForm() {
      try {
        if(id) {
          const categoria = await getCategoriaById(id);
          setNome(categoria.nome);
        }
      }catch (error) {
        console.log("Error");
      }
    }

    setForm();
}, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {nome};
    if(id){
        await updateCategoria(id, data);
    } else {
        await createCategoria(data);
    }        
    navigate("/admin/categoria");
  };

  return(
    <div className="w-screen flex flex-col items-center justify-center">
      {id ? 
      <h1 className="font-black text-xl text-orange-300">
        Formulário de Edição
      </h1> : 
      <h1 className="font-black text-2xl text-orange-300">
        Formulário de Criação
      </h1>
      }
      <div className="p-12 shadow-lg w-screen sm:w-6/12 h-4/6">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome da categoria</label>
            <input type="text" value={nome} onChange={(event) => {setNome(event.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="escreva aqui..." required />
          </div>
          <button type="submit" className="sm:mr-4 mr-1 text-white bg-orange-300 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm w-5/12 sm:w-auto sm:px-5 px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">{id ? 'Atualizar' : 'Adicionar'}</button>
          <button type="button" className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-5/12 sm:w-auto sm:px-5 px-2 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => {navigate("/admin/categoria")}}>Cancelar</button>      
        </form>
      </div>
    </div>
    
  )
}