import api from "./Api";
import Cookie from 'js-cookie';

var authToken = Cookie.get('authorization');

export const createUser = async (data) => {
  try {
    const response = await api.post("/v1/user", data);
  } catch(err) {
    console.log("Error create User");
  }
}

export const getUsers = async () => {
  try {
    const response = await api.get("/v1/users", {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get User");
  }
}

export const updateUser = async (id, data) => {
  try {
    const response = await api.put(`/v1/user/${id}`, data, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log(err);
    console.log("Error update Users");
  }
}

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/v1/user/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error get User");
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/v1/user/${id}`, {headers: {
      'Authorization': `${authToken}`
    } });
    return response.data;
  } catch(err) {
    console.log("Error delete User");
  }
}

