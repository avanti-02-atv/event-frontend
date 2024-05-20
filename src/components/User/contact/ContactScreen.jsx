import React, { useState } from 'react';
import UserHeader from '../header/UserHeader';
import UserFooter from '../Footer/UserFooter';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //Adicionar a lógica para enviar a mensagem
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
        // Limpar os campos após o envio da mensagem
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <UserHeader />

            <div className="flex-grow bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Entre em Contato</h2>
                    <div className="mt-8">
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Informações de Contato</h3>
                                <p className="mt-2 text-base text-gray-500">Telefone: (11) 91234-5678</p>
                                <p className="mt-2 text-base text-gray-500">Endereço: Avenida Paulista, 1000, 12º andar, São Paulo, SP, Brasil</p>
                                <p className="mt-2 text-base text-gray-500">Email: contato@eventhub.com</p>
                            </div>
                            <form onSubmit={handleSubmit} className="sm:col-span-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                                <div className="mt-6">
                                    <button type="submit" className="w-full bg-orange-300 text-black font-semibold py-2 rounded-md hover:bg-black hover:text-orange-300 transition duration-300">Enviar Mensagem</button>
                                </div>
                            </form>
                        </div>
                        <p className="mt-8 text-base text-black">
                            Estamos sempre prontos para ajudar e responder suas dúvidas. Se você deseja mais informações sobre eventos, precisa de assistência com nossa plataforma, ou tem sugestões para melhorar nossos serviços, não hesite em entrar em contato conosco.
                        </p>
                    </div>
                </div>
            </div>

            <UserFooter />
        </div>
    );
};

export default ContactScreen;
