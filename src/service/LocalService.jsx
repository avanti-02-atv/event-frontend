import api from "./Api";

export const createLocal = async (data) => {
  try {
    const response = await api.post("/v1/local", data, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log(err + "Error create Local");
  }
}

export const getLocais = async () => {
  try {
    const response = await api.get("/v1/locais", {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Locais");
  }
}

export const updateLocais = async (id, data) => {
  try {
    const response = await api.put(`/v1/local/${id}`, data, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error update Locais");
  }
}

export const getLocalById = async (id) => {
  try {
    const response = await api.get(`/v1/local/${id}`, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Locais");
  }
}

export const deleteLocal = async (id) => {
  try {
    const response = await api.delete(`/v1/local/${id}`, {headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Local");
  }
}

