import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/food-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
          
    <div className="shadow-md bg-white fixed top-0 left-0 w-full z-50 duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* دکمه سفارش */}
        <button
          className="bg-gradient-to-r from-yellow-400 to-yellow-500
          text-white py-1 px-4 rounded-full flex items-center gap-3"
        >
          سفارش
          <FaShoppingCart />
        </button>
        
        {/* منوی دسکتاپ */}
        <ul className="hidden sm:flex items-center gap-6">
          <li>
            <a
              href="#services"
              className="hover:text-yellow-500 inline-block py-2 px-3"
            >
              خدمات
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-500 inline-block py-2 px-3"
            >
              درباره ما
            </a>
          </li>
          <li>
            <a
              href="#callme"
              className="hover:text-yellow-500 inline-block py-2 px-3"
            >
              تماس با ما
            </a>
          </li>
        </ul>

        {/* لوگو */}
        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
          پلو
          <img src={Logo} alt="Logo" className="w-10" />
        </a>

        {/* دکمه موبایل */}
        <button
          className="sm:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-5">
            <li>
              <a href="#services" onClick={toggleMenu}>
                خدمات
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                درباره ما
              </a>
            </li>
            <li>
              <a href="#callme" onClick={toggleMenu}>
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

