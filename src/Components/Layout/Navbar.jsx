// src/components/Layout/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-dark-50/95 backdrop-blur-md z-50 border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 quantum-hover">
            <Code2 className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">dapid</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-dark-100/80 rounded-full px-2 py-1 border border-primary-500/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary-500 text-dark-50 shadow-lg shadow-primary-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-dark-200/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Admin Link */}
          <div className="hidden md:block">
            <Link
              to="/admin"
              className="px-4 py-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-100 border-t border-primary-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-500 text-dark-50'
                      : 'text-gray-300 hover:text-white hover:bg-dark-200'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-400 hover:text-primary-300 hover:bg-dark-200"
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}