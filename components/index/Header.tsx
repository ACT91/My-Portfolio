import { useState, useEffect, useRef } from 'react';
import '/styles/Header.css';

interface HeaderProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  downloadsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  downloadsRef,
  contactRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactBtnRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const openMobileMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const navigation = [
    { id: 'home', name: 'Home', ref: homeRef },
    { id: 'about', name: 'About', ref: aboutRef },
    { id: 'projects', name: 'Projects', ref: projectsRef },
    { id: 'downloads', name: 'Downloads', ref: downloadsRef },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 100;
      if (contactRef.current && y >= contactRef.current.offsetTop) {
        setActiveSection('contact');
      } else if (downloadsRef.current && y >= downloadsRef.current.offsetTop) {
        setActiveSection('downloads');
      } else if (projectsRef.current && y >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (aboutRef.current && y >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  // IntersectionObserver to animate Contact Me button when contact section enters viewport
  useEffect(() => {
    if (!contactRef.current || !contactBtnRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!contactBtnRef.current) return;
          if (entry.isIntersecting) {
            contactBtnRef.current.classList.add('animate-border');
          } else {
            contactBtnRef.current.classList.remove('animate-border');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, [contactRef]);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-[1300px] mx-auto w-full px-4 flex mt-4">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-white/80 backdrop-blur-lg items-center p-3 rounded-full border border-white/20 shadow-lg">
          {/* Logo / Title */}
          <button
            onClick={() => scrollToSection(homeRef)}
            className="flex-shrink-0 flex items-center space-x-2 focus:outline-none"
            aria-label="Go to Home"
          >
            <h1 className="text-xl md:text-2xl px-2 font-bold header-link-gradient">ACT91</h1>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`flex items-center space-x-2 transition-all duration-300 font-medium px-3 py-2 rounded-full header-link-gradient${
                  activeSection === item.id ? ' active' : ''
                } hover:bg-white/10`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Contact Me Button */}
            <button
              ref={contactBtnRef}
              onClick={() => scrollToSection(contactRef)}
              className={`hidden lg:inline-block px-6 py-2 rounded-full transition-all duration-300 font-medium contact-me-btn${
                activeSection === 'contact' ? ' active' : ''
              }`}
            >
              Contact Me
            </button>

            {/* Theme toggle (kept) */}
            <label className="hidden lg:inline-flex swap swap-rotate p-2 rounded-full cursor-pointer">
              <input type="checkbox" onClick={() => (window as any).toggleTheme?.()} aria-label="Toggle theme" />
              <svg className="swap-on fill-current w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              <svg className="swap-off fill-current w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>

            {/* Mobile menu button */}
            <button
              aria-label="Menu"
              onClick={() => (isMenuOpen ? closeMobileMenu() : openMobileMenu())}
              className="lg:hidden transition-all duration-300 p-2 rounded-full hover:bg-blue-100"
            >
              {/* bars / x icon */}
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-24 right-4 bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 w-64 z-[60]">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.ref);
                  closeMobileMenu();
                }}
                className={`flex items-center space-x-3 px-4 py-3 text-lg font-medium rounded-full transition-all duration-300 w-full header-link-gradient${
                  activeSection === item.id ? ' active' : ''
                } hover:bg-white/10`}
              >
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection(contactRef);
                closeMobileMenu();
              }}
              className={`px-4 py-3 rounded-full transition-all duration-300 font-medium w-full mt-4 text-center contact-me-btn${
                activeSection === 'contact' ? ' active' : ''
              }`}
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
