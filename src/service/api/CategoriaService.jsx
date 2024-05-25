import api from "./Api";
import Cookie from 'js-cookie';

var authToken;

export const createCategoria = async (data) => {
  authToken = Cookie.get('authorization');
  try {
    const response = await api.post("/v1/categoria", data, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const getCategorias = async () => {
  authToken = Cookie.get('authorization');
  try {
    const response = await api.get("/v1/categorias", {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const updateCategoria = async (id, data) => {
  authToken = Cookie.get('authorization');
  try {
    const response = await api.put(`/v1/categoria/${id}`, data, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const getCategoriaById = async (id) => {
  authToken = Cookie.get('authorization');
  try {
    const response = await api.get(`/v1/categoria/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

export const deleteCategoria = async (id) => {
  authToken = Cookie.get('authorization');
  try {
    const response = await api.delete(`/v1/categoria/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Categorias");
  }
}

