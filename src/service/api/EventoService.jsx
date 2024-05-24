import api from "./Api";
import Cookie from 'js-cookie';

var authToken = Cookie.get('authorization');
var authenticate = Cookie.get('authenticate');

export const createEvento = async (data) => {
  try {
    const response = await api.post("/v1/evento", data, {
      headers: {
        'Authorization': `${authToken}`
      }
    });
  } catch (err) {
    console.log(err + "Error create Evento");
  }
}

export const getEventos = async () => {
  try {
    const response = await api.get("/v1/eventos", {
      headers: {
        'Authorization': `${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.log("Error get Eventos");
  }
}

export const updateEvento = async (id, data) => {
  try {
    const response = await api.put(`/v1/evento/${id}`, data, {
      headers: {
        'Authorization': `${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.log("Error update Eventos");
  }
}

export const getEventoById = async (id) => {
  try {
    const response = await api.get(`/v1/evento/${id}`, {
      headers: {
        'Authorization': `${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.log("Error get Evento");
  }
}

export const deleteEvento = async (id) => {
  try {
    const response = await api.delete(`/v1/evento/${id}`, {
      headers: {
        'Authorization': `${authToken}`
      }
    });
    return response.data;
  } catch (err) {
    console.log("Error delete Evento");
  }
}

export const searchEventos = async (evento, categoria, local, data) => {
  try {
    const response = await api.get('/v1/search', {
      params: { evento, categoria, local, data },
      headers: {
        'authenticate': `${authenticate}`
      }
    });

    return response.data;
  } catch (error) {
    console.log('Error search Eventos');
  }
};