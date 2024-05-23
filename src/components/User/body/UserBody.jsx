import React from 'react';
import EventCard from '../eventCard/EventCard';

export default function UserBody() {
  const events = [
    {
      image: 'https://images.unsplash.com/photo-1591492654773-6756035bef6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Eventos de Literatura',
      description: 'Os eventos culturais de literatura são dedicados aos amantes da escrita e leitura, proporcionando uma imersão no mundo das palavras.',
    },
    {
      image: 'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Eventos Urbanos',
      description: 'Prepare-se para mergulhar na vibrante atmosfera das culturas urbanas com os eventos dirigidos pela equipe do renomado DJ Jheyeldo.',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-x-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">Eventos Culturais</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
