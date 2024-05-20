import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    };


    const navItems = [
        { id: 1, text: 'PÁGINA INICIAL' },
        { id: 2, text: 'EVENTOS' },
        { id: 3, text: 'SOBRE' },
        { id: 4, text: 'CONTATO' },
        { id: 5, text: 'ENTRAR' },
        { id: 6, text: 'CADASTRO' },
    ];

    return (
        <div className='bg-neutral-40 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-orange-300'>




            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-orange-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>


            <div onClick={handleNav} className='block md:hidden z-50'>
                {nav ? <AiOutlineClose size={20} className='invisible' /> : <AiOutlineMenu size={20} />}
            </div>


            <ul
                className={
                    nav
                        ? 'fixed right-0 top-0 w-[60%] h-auto border-l border-l-gray-900 bg-orange-300 text-black ease-in-out duration-500 z-40 rounded-lg'
                        : 'fixed top-0 bottom-0 right-[-100%] w-[60%] ease-in-out duration-300 z-40'
                }
            >

                {nav && (
                    <button
                        onClick={handleNav}
                        className="absolute top-2 right-4 text-black text-2xl z-50"
                    >
                        x
                    </button>
                )}


                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
