import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png"; // Updated import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* MOBILE VIEW: Left Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <img
              src={hamburgerIcon}
              alt="Menu"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* BRAND LOGO & NAME */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl text-slate-900 tracking-tight">
            Dev<span className="text-pink-500">Stack</span>
          </span>
        </div>

        {/* DESKTOP VIEW: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <a href="#technologies" className="hover:text-slate-900 transition-colors">
            Technologies
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-3">
          <button className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 cursor-pointer transition-colors">
            Sign In
          </button>
          <button className="text-xs font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-95 transition-opacity shadow-xs cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* MOBILE VIEW: Expandable Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
          >
            Technologies
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;