"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavButton from "./NavButton";

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
      className={`bg-white p-4 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-xl z-50" : "relative"
      }`}
    >
      <div className="flex w-full justify-between items-center gap-4">
        {/* Logo */}
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={120}
          height={40}
          className="h-auto"
        />

        {/* Navigation Menu */}
        <ul
          className={`absolute left-0 w-full space-y-6 p-6 bg-white md:space-y-0 md:static md:flex md:flex-row md:space-x-4 font-bold md:gap-4 transition-all duration-300 z-20 ${
            isOpen
              ? "top-full opacity-100 visible"
              : "top-[-400px] opacity-0 invisible"
          }`}
        >
          <NavButton
            href="#hero"
            icon="fas fa-home"
            text="Inicio"
            onClick={() => setIsOpen(false)}
          />
          <NavButton
            href="#plans"
            icon="fas fa-dumbbell"
            text="Planes"
            onClick={() => setIsOpen(false)}
          />
          <NavButton
            href="#testimonials"
            icon="fas fa-users"
            text="Testimonios"
            onClick={() => setIsOpen(false)}
          />
          <NavButton
            href="#about"
            icon="fas fa-user"
            text="Sobre mí"
            onClick={() => setIsOpen(false)}
          />
          <NavButton
            href="#contact"
            icon="fas fa-envelope"
            text="Contacto"
            onClick={() => setIsOpen(false)}
          />
        </ul>

        {/* Menu Toggle Button */}
        <button
          className="text-2xl md:hidden text-red-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
