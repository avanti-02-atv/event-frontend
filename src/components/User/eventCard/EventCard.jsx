import React from 'react';

export default function EventCard({ image, title, description, link }) {
    return (
        <div className="relative h-44 md:h-52 lg:h-72 w-full rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="h-full w-full object-cover max-w-full" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-white mb-4">{description}</p>
            </div>
        </div>
    );
}
