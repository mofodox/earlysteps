"use client";

import Link from 'next/link';
import { Logo } from './Logo';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Resources', href: '/resources' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full border-b border-gray-100 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-[300px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
          overflow-hidden
        `}>
          <nav className="container mx-auto px-4 py-2">
            <ul className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-[66px]"></div>
    </>
  );
} 