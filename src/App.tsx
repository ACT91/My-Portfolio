import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/index/Header';
import Footer from '../components/index/Footer';
import MainContent from '../components/index/MainContent';
import About from '../pages/About';
import Contact from '../pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;