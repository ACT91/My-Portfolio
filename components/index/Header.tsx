import { useState, useEffect } from 'react';
import '/styles/Header.css';

interface HeaderProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const navLinks = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
  ];

  // Get current section based on scroll position
  const [activeSection, setActiveSection] = useState('home');

  // Add scroll event listener to track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Check which section is in view
      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection('contact');
      } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Clean up overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header className="navbar bg-base-100 fixed top-0 z-20 shadow-lg">
      <div className="navbar-start">
        <button
          onClick={() => scrollToSection(homeRef)}
          className="btn btn-ghost text-xl font-bold header-link-gradient"
        >
          ACT91 Portfolio
        </button>
      </div>
      <div className="navbar-end">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex flex-nowrap">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.ref)}
                className={`btn btn-ghost font-semibold text-sm md:text-base header-link-gradient${activeSection === link.id ? ' active' : ''}`}
              >
                {link.label}
              </button>
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
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="btn btn-circle btn-ghost"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop with blur effect */}
            <div 
              className="fixed inset-0 backdrop-blur-md bg-base-100/80 transition-all duration-300 ease-in-out"
              onClick={closeMobileMenu}
            ></div>
            
            {/* Mobile Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-[85%] bg-base-100 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-base-300">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold header-link-gradient">ACT91</span>
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className="btn btn-circle btn-ghost"
                  aria-label="Close mobile menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <button 
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.ref);
                      closeMobileMenu();
                    }}
                    className={`font-semibold py-4 px-4 rounded-lg border-l-4 transition-all duration-200 text-left ${
                      activeSection === link.id 
                        ? 'bg-base-200 border-l-primary header-link-gradient active' 
                        : 'border-l-transparent hover:bg-base-200'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;