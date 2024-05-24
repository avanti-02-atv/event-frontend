import React, { useState } from 'react';
import UserHeader from '../header/UserHeader';
import UserFooter from '../Footer/UserFooter';
import { searchEventos } from "../../../service/api/EventoService";

const EventsScreen = () => {
    // State para armazenar os valores dos campos de pesquisa
    const [searchTerm, setSearchTerm] = useState('');
    const [categoria, setcategoria] = useState('');
    const [local, setlocal] = useState('');
    const [data, setdata] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Função para lidar com a submissão do formulário de pesquisa
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(searchTerm, categoria, local, data);
            const results = await searchEventos(searchTerm, categoria, local, data);
            setSearchResults(results);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <UserHeader />

            <div className="flex-grow bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Pesquisar Eventos</h2>
                    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8">
                        <div>
                            <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">Nome do Evento</label>
                            <input
                                type="text"
                                id="searchTerm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
                            <input
                                type="text"
                                id="categoria"
                                value={categoria}
                                onChange={(e) => setcategoria(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                        </div>
                        <div>
                            <label htmlFor="local" className="block text-sm font-medium text-gray-700">Local</label>
                            <input
                                type="text"
                                id="local"
                                value={local}
                                onChange={(e) => setlocal(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                        </div>
                        <div>
                            <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data e Hora</label>
                            <input
                                type="datetime-local"
                                id="data"
                                value={data}
                                onChange={(e) => setdata(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <button type="submit" className="w-full bg-orange-300 text-black font-semibold py-2 rounded-md hover:bg-black hover:text-orange-300 transition duration-300">Pesquisar</button>
                        </div>
                    </form>
                    {searchResults.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900">Resultados da Pesquisa</h3>
                            <ul role="list" className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                                {searchResults.map(event => (
                                    <li key={event.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 mx-2">
                                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                                            <div className="flex-1 truncate">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="text-gray-900 text-sm font-medium truncate">{event.nome}</h3>
                                                </div>
                                                <p className="mt-1 text-gray-500 text-sm truncate">{event.categoria}</p>
                                                <p className="mt-1 text-gray-500 text-sm truncate">{event.local}</p>
                                                <p className="mt-1 text-gray-500 text-sm truncate">{event.data}</p>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-orange-300 hover:text-orange-400">
                                                    Detalhes
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <UserFooter />
        </div>
    );
};

export default EventsScreen;