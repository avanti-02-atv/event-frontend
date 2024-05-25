import React, { useState, useEffect } from 'react';
import { format, formatISO } from 'date-fns';
import UserHeader from '../header/UserHeader';
import UserFooter from '../Footer/UserFooter';
import { getEventos, searchEventos } from "../../../service/api/EventoService";
import { getCategorias } from "../../../service/api/CategoriaService";
import { getLocais } from "../../../service/api/LocalService";
import { CalendarIcon } from '@heroicons/react/24/outline';

const EventsScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoria, setCategoria] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [locais, setLocais] = useState([]);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriasData = await getCategorias();
                if(categoriasData){
                    setCategorias(categoriasData);
                }
                const locaisData = await getLocais();
                if(locaisData) {
                    setLocais(locaisData);
                }
                const eventosData = await getEventos();
                if(eventosData){
                    setSearchResults(eventosData);
                    setEventos(eventosData);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData();
    }, []);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formattedData = data ? formatISO(new Date(data)) : "";
            const results = await searchEventos(searchTerm, categoria, local, formattedData);
            console.log(results);
            setSearchResults(results);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <div className="flex flex-col w-screen min-h-screen">
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
                                onChange={handleSearchTermChange}
                                list="eventos-list"
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                            <datalist id="eventos-list">
                                {eventos && eventos.map((evento) => (
                                    <option key={evento.id} value={evento.nome} />
                                ))}
                            </datalist>
                        </div>
                        <div>
                            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
                            <select
                                id="categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            >
                                <option key="0" value="">Selecione uma categoria</option>
                                {categorias && categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.nome}>
                                        {categoria.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="local" className="block text-sm font-medium text-gray-700">Local</label>
                            <select
                                id="local"
                                value={local}
                                onChange={(e) => setLocal(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            >
                                <option key="0" value="">Selecione um local</option>
                                {locais && locais.map((local) => (
                                    <option key={local.id} value={local.nome} title={`${local.CEP} - ${local.cidade} - ${local.nome}`}>
                                        {`${local.CEP} - ${local.cidade} - ${local.nome}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data e Hora Limite</label>
                            <input
                                type="datetime-local"
                                id="data"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <button type="submit" className="w-full bg-orange-300 text-black font-semibold py-2 rounded-md hover:bg-black hover:text-orange-300 transition duration-300">Pesquisar</button>
                        </div>
                    </form>
                    {(searchResults && searchResults.length > 0) ? (
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900">Resultados da Pesquisa</h3>
                            <ul role="list" className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                                {searchResults.map(event => (
                                    <li key={event.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 mx-2">
                                        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div className="p-4">
                                                <h3 className="text-gray-900 text-lg font-semibold mb-2">{event.nome}</h3>
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{event.descricao}</p>
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{event.Categoria.nome}</p>
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{event.Local.CEP} - {event.Local.cidade} - {event.Local.nome}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <CalendarIcon className="w-4 h-4 mr-1 text-gray-500" />
                                                        <p className="text-gray-500 text-xs">{format(new Date(event.data), 'dd/MM/yyyy HH:mm')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="mt-8 flex items-center justify-center">
                            <p className="text-lg text-gray-500">Nenhum evento encontrado</p>
                        </div>
                    )}
                </div>
            </div>

            <UserFooter />
        </div>
    );
};

export default EventsScreen;
