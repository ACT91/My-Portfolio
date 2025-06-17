import { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/index/Header';
import Footer from '../components/index/Footer';
import MainContent from '../components/index/MainContent';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import InstallPWAToast from './InstallPWAToast';
import ChatbotWidget from '../components/ChatbotWidget';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Footer.css';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    const headerOffset = 80; // Approximate header height
    const elementPosition = sectionRef.current?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <InstallPWAToast />
        <ChatbotWidget />
        <Header 
          scrollToSection={scrollToSection}
          homeRef={homeRef as React.RefObject<HTMLDivElement>}
          aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
          projectsRef={projectsRef as React.RefObject<HTMLDivElement>}
          contactRef={contactRef as React.RefObject<HTMLDivElement>}
        />
        <main className="flex-grow pt-16">
          <div ref={homeRef} id="home" className="min-h-screen">
            <MainContent />
          </div>
          <div ref={aboutRef} id="about" className="min-h-screen">
            <About />
          </div>
          <div ref={projectsRef} id="projects">
            <Projects />
          </div>
          <div ref={contactRef} id="contact" className="min-h-screen">
            <Contact />
          </div>
        </main>
        <Footer 
          scrollToSection={scrollToSection}
          homeRef={homeRef as React.RefObject<HTMLDivElement>}
          aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
          projectsRef={projectsRef as React.RefObject<HTMLDivElement>}
          contactRef={contactRef as React.RefObject<HTMLDivElement>}
        />
      </div>
    </Router>
  );
};

export default App;