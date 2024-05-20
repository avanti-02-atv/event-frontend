import React from 'react';
import NavBar from "../nav/NavBar";

export default function UserHeader() {
    return (
        <header className="w-screen bg-neutral-50 h-1/6">
            <nav className="mx-auto flex flex-wrap items-center justify-between max-w-7xl px-4 lg:px-8" aria-label="Global">
                <div className="">
                    <h3 className="text-4xl font-black"><span className="text-orange-300">Event</span>Hub</h3>
                </div>
                <NavBar />
            </nav>
        </header>
    )
}
