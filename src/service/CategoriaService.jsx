import api from "./Api";

export const createCategoria = async (data) => {
  try {
    const response = await api.post("/v1/categoria", data, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const getCategorias = async () => {
  try {
    const response = await api.get("/v1/categorias", {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const updateCategoria = async (id, data) => {
  try {
    const response = await api.put(`/v1/categoria/${id}`, data, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const getCategoriaById = async (id) => {
  try {
    const response = await api.get(`/v1/categoria/${id}`, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const deleteCategoria = async (id) => {
  try {
    const response = await api.delete(`/v1/categoria/${id}`, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

