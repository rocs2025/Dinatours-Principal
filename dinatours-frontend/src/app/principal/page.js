"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-regular-svg-icons';

export default function App() {
  const router = useRouter();
  const Menu = [
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/registration' }
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <header className="bg-white text-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto relative">
        <div>
          <a href="index.html">Logo</a>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <ul className="flex items-center gap-6 text-black">
            <a href=""><li className="relative after:bg-black after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">Home</li></a>
            <a href=""><li className="relative after:bg-black after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">About Us</li></a>
            <a href=""><li className="relative after:bg-black after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">Contact Us</li></a>
          </ul> 
        </div>
        <div className="flex items-center gap-2 relative top-1">
          {searchOpen && (
            <div className="relative" ref={searchRef}>
              <input type="text" placeholder="Search" className="p-2 w-48 border border-gray-300 outline-none rounded-full"/>
              <FontAwesomeIcon icon={faSearch} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setSearchOpen(false)} />
            </div>
          )}
          {!searchOpen && (
            <div className="flex items-center bg-zinc-300 rounded-full p-2 cursor-pointer" onClick={() => setSearchOpen(true)}>
              <FontAwesomeIcon icon={faSearch} className="text-2xl" />
            </div>
          )}
          <span className="w-[2px] h-8 bg-black rounded-md"></span>
          <div className="flex items-center bg-zinc-300 rounded-full p-2 relative top-1">
            <FontAwesomeIcon icon={faUserCircle} className="text-2xl cursor-pointer" onClick={() => setOpen(!open)} />
            {open && (
              <div className="bg-white p-4 w-40 shadow-lg rounded-lg absolute top-12 right-0 z-10">
                <ul>
                  {Menu.map((menu) => (
                    <li className="p-2 text-lg cursor-pointer rounded hover:bg-zinc-200" onClick={() => handleNavigation(menu.path)} key={menu.name}>{menu.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
