import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="great-vibes text-2xl text-white font-bold">Olympia</span>
          </Link>

          {/* Desktop menu */}
          <div className=  "open-sans  hidden md:flex items-center space-x-8">
            <div onClick={() => scrollToSection('home')} className="text-white hover:text-zinc-300 cursor-pointer">Home</div>
            <div onClick={() => scrollToSection('about')} className="text-white hover:text-zinc-300 cursor-pointer">About</div>
            <div onClick={() => scrollToSection('Meet')} className="text-white hover:text-zinc-300 cursor-pointer">Trainer</div>
            <div onClick={() => scrollToSection('Price')} className="text-white hover:text-zinc-300 cursor-pointer">Price</div>
            <div onClick={() => scrollToSection('contact')} className="text-white hover:text-zinc-300 cursor-pointer">Contact</div>
          </div>

          {/* Join Now Button */}
          <button
            className=" open-sans bg-white text-black px-4 py-1 rounded-[4px] font-semibold hover:bg-zinc-200 transition hidden md:block"
          >
            Join Now
          </button>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-zinc-300"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div onClick={() => scrollToSection('home')} className="text-white hover:text-zinc-300 block px-3 py-2 text-center">Home</div>
              <div onClick={() => scrollToSection('about')} className="text-white hover:text-zinc-300 block px-3 py-2 text-center">About</div>
              <div onClick={() => scrollToSection('Meet')} className="text-white hover:text-zinc-300 block px-3 py-2 text-center">Trainer</div>
              <div onClick={() => scrollToSection('Price')} className="text-white hover:text-zinc-300 block px-3 py-2 text-center">Price</div>
              <div onClick={() => scrollToSection('contact')} className="text-white hover:text-zinc-300 block px-3 py-2 text-center">Contact</div>
              <button
                className="bg-white text-black w-full px-4 py-2 rounded-full font-semibold hover:bg-zinc-200 transition"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
