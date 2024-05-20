import api from "./Api";
import Cookie from 'js-cookie';

var authToken = Cookie.get('authorization');

export const createLocal = async (data) => {
  try {
    const response = await api.post("/v1/local", data, {headers: {
      'Authorization': `${authToken}`
    } });
  } catch(err) {
    console.log(err + "Error create Local");
  }
}

export const getLocais = async () => {
  try {
    const response = await api.get("/v1/locais", {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log(authToken);
    console.log("Error get Locais");
  }
}

export const updateLocais = async (id, data) => {
  try {
    const response = await api.put(`/v1/local/${id}`, data, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error update Locais");
  }
}

export const getLocalById = async (id) => {
  try {
    const response = await api.get(`/v1/local/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Locais");
  }
}

export const deleteLocal = async (id) => {
  try {
    const response = await api.delete(`/v1/local/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get Local");
  }
}

