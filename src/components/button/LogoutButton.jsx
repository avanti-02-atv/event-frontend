import React from 'react';
import Cookie from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  function logout(navigate) {
    Cookie.remove('authorization');
    navigate("/login");
  }

  return (
    <button onClick={() => logout(navigate)} className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:ring-2 ring-orange-300">
      Sair
    </button>
  );
}