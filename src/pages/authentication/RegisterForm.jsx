import Header from "../../components/Admin/header/Header"
import Footer from "../../components/Admin/footer/Footer";
import api from "../../service/api/Api";
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

export const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');

    try {
      await api.post('/v1/user', { name, email, phone, password });
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar usuário!');
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <Header>
        <a href="/login" className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:bg-orange-400 uppercase pointer transition-all">
          Login
        </a>
      </Header>

      <div className="flex max-w-md size-full justify-center mx-auto flex-col">
        <div className="flex flex-col gap-4 shadow-lg px-6 py-8 rounded-lg">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="nome" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" required/>
            <input type="email" name="email" placeholder="email" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" required/>
            <InputMask mask="(99) 99999-9999" type="text" name="phone" placeholder="telefone" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" required/>
            <input type="password" name="password" placeholder="senha" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" required/>

            <button type="submit" className="bg-orange-300 text-black font-black text-lg rounded-md p-1 hover:bg-orange-400 transition-all">Cadastrar</button>
          </form>

          <a href="/login" className="text-center underline text-gray-500 hover:text-gray-700 transition-all">Já possui uma conta? Faça login.</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}