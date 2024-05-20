import React from 'react';

export default function EventCard({ image, title, description, link }) {
    return (
        <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-white mb-4">{description}</p>
                <a href={link} className="self-start">
                    <button className="bg-orange-300 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition">
                        Saiba Mais
                    </button>
                </a>
            </div>
        </div>
    );
}
