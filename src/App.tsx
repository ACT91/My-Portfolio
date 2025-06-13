import { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/index/Header';
import Footer from '../components/index/Footer';
import MainContent from '../components/index/MainContent';
import About from '../pages/About';
import Contact from '../pages/Contact';
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Footer.css';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header 
          scrollToSection={scrollToSection}
          homeRef={homeRef as React.RefObject<HTMLDivElement>}
          aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
          contactRef={contactRef as React.RefObject<HTMLDivElement>}
        />
        <main className="flex-grow pt-16">
          <div ref={homeRef} id="home" className="min-h-screen">
            <MainContent />
          </div>
          <div ref={aboutRef} id="about" className="min-h-screen">
            <About />
          </div>
          <div ref={contactRef} id="contact" className="min-h-screen">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;