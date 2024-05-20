import React, { useState } from 'react';
import UserFooter from '../Footer/UserFooter';
import UserHeader from '../header/UserHeader';

const LoginScreen = () => {
    // State para armazenar os valores dos campos de entrada
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Função para lidar com o envio do formulário de login
    const handleSubmit = (event) => {
        event.preventDefault();
        //Adicionar a lógica para autenticar o usuário
        console.log('Username:', username);
        console.log('Password:', password);
        // Limpar os campos de entrada após o envio
        setUsername('');
        setPassword('');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <UserHeader />

            <div className="flex-grow flex justify-center items-center bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">E-mail:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-orange-300 text-black font-semibold py-2 rounded-md hover:bg-black hover:text-orange-300 transition duration-300">Entrar</button>
                    <div className="mt-4 text-center">
                        <a href="#" className="text-orange-300 hover:underline mr-4">Esqueci a senha</a>
                        <span className="text-gray-500">|</span>
                        <a href="#" className="text-orange-300 hover:underline ml-4">Realizar Cadastro</a>
                    </div>
                </form>
            </div>

            <UserFooter />
        </div>
    );
};

export default LoginScreen;

