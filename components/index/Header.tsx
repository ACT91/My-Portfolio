import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar bg-base-100 fixed top-0 z-10 shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          Stanley Gersom
        </Link>
      </div>
      <div className="navbar-end">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><Link to="/" className="btn btn-ghost">Home</Link></li>
          <li><Link to="/about" className="btn btn-ghost">About</Link></li>
          <li><Link to="/contact" className="btn btn-ghost">Contact</Link></li>
        </ul>
        {/* Theme toggle button */}
        <button
          className="btn btn-ghost ml-2"
          onClick={() => window.toggleTheme()}
          aria-label="Toggle dark/light mode"
        >
          🌓
        </button>
        {/* Mobile animated drawer */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="btn btn-ghost self-end m-4"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className="menu menu-vertical px-4 gap-2">
              <li>
                <Link to="/" className="btn btn-ghost w-full" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="btn btn-ghost w-full" onClick={() => setOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/contact" className="btn btn-ghost w-full" onClick={() => setOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;