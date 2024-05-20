import React from 'react';
import EventCard from '../eventCard/EventCard';

export default function UserBody() {
    const events = [
        {
          image: 'https://images.unsplash.com/photo-1509682841784-c7960cbb7608?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Festival das Luzes',
          description: 'Com a presença de bandas e artistas de forró, os visitantes poderão dançar ao som do ritmo nordestino.',
          link: '#'
        },
        {
          image: 'https://images.unsplash.com/photo-1591492654773-6756035bef6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Literatura Fantástica',
          description: 'Uma semana dedicada aos fãs de literatura de fantasia, com palestras de autores renomados.',
          link: '#'
        },
        {
          image: 'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Culturas Urbanas',
          description: 'Participação especial do DJ Jheyeldo, conhecido por suas mixagens inovadoras e sets energéticos.',
          link: '#'
        }
      ];
    
      return (
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventCard
                key={index}
                image={event.image}
                title={event.title}
                description={event.description}
                link={event.link}
              />
            ))}
          </div>
        </div>
      );
}
