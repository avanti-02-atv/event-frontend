import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    Cookie.remove('authorization');
  };

  const navItems = [
    { id: 1, text: 'PÁGINA INICIAL', path: '/home' },
    { id: 2, text: 'EVENTOS', path: '/events' },
    { id: 3, text: 'SOBRE', path: '/sobre' },
    { id: 4, text: 'CONTATO', path: '/contact' },
    { id: 5, text: 'SAIR', path: '/' },
  ];

  return (
    <div className='bg-neutral-40 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-orange-300 font-semibold'>

      {/* Hidden menu for mobile devices */}
      <div onClick={handleNav} className='block md:hidden z-50'>
        {nav ? <AiOutlineClose size={20} className='invisible' /> : <AiOutlineMenu size={20} />}
      </div>

      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li key={item.id} className='m-2'>
            <Link
              to={item.path}
              className='block p-4 hover:bg-orange-300 rounded-xl cursor-pointer duration-300 hover:text-black'
              onClick={item.id === 5 ? handleLogout : undefined} // Handle logout only on "SAIR"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      <ul
        className={
          nav
            ? 'fixed right-0 top-0 w-[60%] h-auto border-l border-l-gray-900 bg-orange-300 text-black ease-in-out duration-500 z-40 rounded-lg'
            : 'fixed top-0 bottom-0 right-[-100%] w-[60%] ease-in-out duration-300 z-40'
        }
      >
        {nav && (
          <button onClick={handleNav} className="absolute top-2 right-4 text-black text-2xl z-50">
            x
          </button>
        )}

        {navItems.map((item) => (
          <li key={item.id} className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'>
            <Link to={item.path} className='block w-full h-full' onClick={item.id === 5 ? handleLogout : undefined}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;