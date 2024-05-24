import { jwtDecode } from "jwt-decode";
import Cookie from 'js-cookie';

export const getCurrentUser = () => {
  const token = Cookie.get('authorization');
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  return decodedToken;
};

export const isTokenExpired = () => {
  const token = Cookie.get('authorization');
  if (!token) {
    return true;
  }

  try {
    const { exp } = jwtDecode(token);
    console.log(exp * 1000 + " " + Date.now());
    return exp * 1000 < Date.now();
  } catch (e) {
    console.error('Token decoding failed:', e);
    return true;
  }
};
