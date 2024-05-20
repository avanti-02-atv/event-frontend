import Footer from "../../components/Admin/footer/Footer";
import Header from "../../components/Admin/header/Header"
import api from "../../service/Api";
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await api.post('/v1/login', { email, password });

      Cookie.set('authorization', `Bearer ${response.data.token}`, { expires: 1 });

      alert('Usuário logado com sucesso!');
      navigate('/home');
    } catch (error) {
      alert('Erro ao logar usuário!');
    }
  }

	return (
		<div className="flex h-screen flex-col">
			<Header>
				<a href="/register" className="bg-orange-300 text-xl font-black leading-6 text-black px-6 py-2 rounded-md hover:bg-orange-400 uppercase pointer transition-all">
					Signup
				</a>
			</Header>

			<div className="flex max-w-md size-full justify-center mx-auto flex-col">
        <div className="flex flex-col gap-4 shadow-lg px-6 py-8 rounded-lg">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" />
            <input type="password" name="password" placeholder="senha" className="outline-none border-b placeholder-gray-400 border-b-gray-400 focus-visible:border-b-gray-600" />

            <button type="submit" className="bg-orange-300 text-black font-black text-lg rounded-md p-1 hover:bg-orange-400 transition-all">Entrar</button>
          </form>

          <a href="/register" className="text-center underline text-gray-500 hover:text-gray-700 transition-all">Ainda não tem conta? Cadastrar-se</a>
        </div>
			</div>

			<Footer />
		</div>
	);
}