"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faMountainSun ,faWater} from '@fortawesome/free-solid-svg-icons';
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { MdOutlineBeachAccess } from "react-icons/md";
import { FaStar, FaHeart, FaSuitcase } from "react-icons/fa"; 
import { PiBeachBall } from "react-icons/pi";
import { GiCastleRuins } from "react-icons/gi";

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
    <>
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
          <div className="flex items-center gap-2 relative top-2">
            {searchOpen && (
              <div className="relative" ref={searchRef}>
                <input type="text" placeholder="Search" className="p-2 w-48 border border-gray-300 outline-none rounded-full" />
                <FontAwesomeIcon icon={faSearch} className="absolute right-2 top-1 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => setSearchOpen(false)} />
              </div>
            )}
            {!searchOpen && (
              <div className="flex items-center bg-zinc-300 rounded-full p-2 cursor-pointer" onClick={() => setSearchOpen(true)}>
                <FontAwesomeIcon icon={faSearch} className="text-2xl" />
              </div>
            )}
            <span className="w-[2px] h-8 bg-black rounded-md"></span>
            <div className="flex items-center bg-zinc-300 rounded-full p-2 relative top-0">
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

      <main className="w-[92%] mx-auto mt-8">
        <div className="flex justify-center items-center py-4 top-16">
          <a href="#" className="text-base text-[#28AD19] font-semibold mx-2">Places</a>
          <span className="w-[2px] h-8 bg-[#D9D9D9] mx-2"></span>
          <a href="#" className="text-base text-[#545454] font-semibold mx-2">Tours</a>
        </div>
        <div className="flex justify-center items-center py-4 gap-4">
          <div className="flex flex-col items-center">
            <MdOutlineBeachAccess className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Playas</a>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faMountainSun} className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Montañas</a>
          </div>
          <div className="flex flex-col items-center">
            <LiaUmbrellaBeachSolid className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Lagunas</a>
          </div>
          <div className="flex flex-col items-center">
            <PiBeachBall   className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Lagos</a>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faWater} className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Ríos</a>
          </div>
          <div className="flex flex-col items-center">
            <GiCastleRuins className="text-2xl cursor-pointer" />
            <a href="#" className="text-sm text-[#545454] font-light mt-2">Sitios Arqueológicos</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mt-8">
          <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src="/78.jpg" alt="Laguna de Chanmico" />
            <div className="p-4">
              <div className="font-bold text-lg mb-1">Sitio Arqueológico San Andres</div>
              <p className="text-gray-700 text-sm mb-2">Discover these beautiful ruins and very mysterious</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                  <span className="text-lg font-semibold">4.4</span>
                  <FaStar className="ml-1" />
                </div>
                <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  GO <FaSuitcase className="ml-1" />
                </button>
                <FaHeart className="text-red-500" />
              </div>
            </div>
          </div>
          
          <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src="/caldera.jpeg" alt="Laguna de Chanmico" />
            <div className="p-4">
              <div className="font-bold text-lg mb-1">La caldera del diablo</div>
              <p className="text-gray-700 text-sm mb-2">Discover this beautiful and mysterious lagoon</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                  <span className="text-lg font-semibold">4.4</span>
                  <FaStar className="ml-1" />
                </div>
                <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  GO <FaSuitcase className="ml-1" />
                </button>
                <FaHeart className="text-red-500" />
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src="/56_big.jpg" alt="Laguna de Chanmico" />
            <div className="p-4">
              <div className="font-bold text-lg mb-1">Laguna de Chanmico</div>
              <p className="text-gray-700 text-sm mb-2">Discover this beautiful and mysterious lagoon</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                  <span className="text-lg font-semibold">4.4</span>
                  <FaStar className="ml-1" />
                </div>
                <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  GO <FaSuitcase className="ml-1" />
                </button>
                <FaHeart className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
