import { jwtDecode } from "jwt-decode";
import Cookie from 'js-cookie';

export const getCurrentUser = () => {
  const token = Cookie.get('authorization');
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  return decodedToken;
};

export default getCurrentUser;
