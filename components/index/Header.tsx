import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/styles/Header.css';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="navbar bg-base-100 fixed top-0 z-10 shadow-lg">
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold header-link-gradient"
        >
          ACT91 Portfolio
        </Link>
      </div>
      <div className="navbar-end">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`btn btn-ghost font-semibold text-base header-link-gradient${location.pathname === link.to ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Theme toggle button */}
        <label className="swap swap-rotate btn btn-circle btn-ghost">
          <input
            type="checkbox"
            onClick={() => window.toggleTheme()}
            aria-label="Toggle theme"
          />
          <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
        {/* Mobile animated drawer */}
        <div className="md:hidden">
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Transparent overlay to close drawer when clicking outside */}
          {open && (
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setOpen(false)}
            />
          )}
          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full z-50 bg-base-100 shadow-lg transition-transform duration-300 ease-in-out
              ${open ? 'translate-x-0' : 'translate-x-full'}
              w-4/5 min-w-[80vw] max-w-xs flex flex-col`}
          >
            <button
              className="btn btn-circle btn-ghost self-end m-4 text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className="menu menu-vertical px-4 gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`btn btn-ghost w-full font-semibold text-base header-link-gradient${location.pathname === link.to ? ' active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;