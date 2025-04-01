"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white p-4 transition-all duration-300 space-y-4 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : "relative"
      }`}
    >
      <div className="flex w-full justify-between items-center md:justify-center">
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={120}
          height={40}
          className="h-full md:hidden"
        />
        <button
          className="text-2xl md:hidden text-red-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={150}
          height={32}
          className="hidden h-full md:block"
        />
      </div>
      <ul
        className={`flex flex-col justify-center mt-4  md:flex-row md:items-center md:space-x-6 md:mt-0 font-bold ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            href="#hero"
            className="block py-2 md:py-0 text-red-500 hover:text-red-700"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="#plans"
            className="block py-2 md:py-0 text-red-500 hover:text-red-700"
          >
            Planes
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className="block py-2 md:py-0 text-red-500 hover:text-red-700"
          >
            Testimonios
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="block py-2 md:py-0 text-red-500 hover:text-red-700"
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="block py-2 md:py-0 text-red-500 hover:text-red-700"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
