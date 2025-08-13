// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NavLink's `className` prop can be a function to conditionally apply styles
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 w-full border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-semibold text-slate-800">Seungeun Kang</NavLink>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink>
            <NavLink to="/publications" className={getNavLinkClass}>Publications</NavLink>
            <NavLink to="/resume" className={getNavLinkClass}>Resume</NavLink>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="p-2 rounded-md text-slate-500 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on click
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden p-4 border-t border-slate-200 ${isMenuOpen ? '' : 'hidden'}`}>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/publications" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Publications</NavLink>
          <NavLink to="/resume" className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;