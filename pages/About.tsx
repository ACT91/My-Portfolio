import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faStopwatch20, faCrown, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import EducationTimeline from './EducationTimeline';
import '/styles/About.css';

// Animated Icons with FontAwesome
const CodeIcon: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState<'crown' | 'laptop'>('crown');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => prev === 'crown' ? 'laptop' : 'crown');
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="icon-container text-gradient-primary-to-secondary">
      <FontAwesomeIcon 
        icon={currentIcon === 'crown' ? faCrown : faLaptopCode} 
        className={`transition-all duration-500 ${currentIcon === 'crown' ? 'opacity-100' : 'opacity-0 absolute'}`}
        size="lg"
      />
      <FontAwesomeIcon 
        icon={currentIcon === 'laptop' ? faLaptopCode : faCrown} 
        className={`transition-all duration-500 ${currentIcon === 'laptop' ? 'opacity-100' : 'opacity-0 absolute'}`}
        size="lg"
      />
    </div>
  );
};

const ShieldIcon: React.FC = () => (
  <div className="icon-container text-gradient-secondary-to-accent">
    <FontAwesomeIcon icon={faShieldHalved} size="lg" className="animate-pulse" />
  </div>
);

const ClockIcon: React.FC = () => (
  <div className="icon-container text-gradient-accent-to-primary">
    <FontAwesomeIcon icon={faStopwatch20} size="lg" className="animate-bounce" />
  </div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card card-gradient shadow-xl p-8 border border-primary/10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Empower Your Ideas with Me</h1>
          <p className="text-lg mb-8 opacity-90">
            As a dedicated programmer and cyber security enthusiast, I'm here to transform your concepts into secure, innovative solutions. Let's build something remarkable together!
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Why Choose Me?</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg bg-gradient-to-r from-base-100 to-base-200 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary card-hover-effect">
                <div className="flex items-center mb-2 md:mb-0">
                  <CodeIcon />
                  <span className="ml-4 font-semibold text-lg">Code Mastery</span>
                </div>
                <span className="badge bg-primary text-white border-none mt-2 md:mt-0 md:ml-auto w-full md:w-auto">Expertise in crafting efficient, scalable code.</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg bg-gradient-to-r from-base-100 to-base-200 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-secondary card-hover-effect">
                <div className="flex items-center mb-2 md:mb-0">
                  <ShieldIcon />
                  <span className="ml-4 font-semibold text-lg">Security Focus</span>
                </div>
                <span className="badge bg-secondary text-white border-none mt-2 md:mt-0 md:ml-auto w-full md:w-auto">Prioritizing robust protection for your projects.</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg bg-gradient-to-r from-base-100 to-base-200 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-accent card-hover-effect">
                <div className="flex items-center mb-2 md:mb-0">
                  <ClockIcon />
                  <span className="ml-4 font-semibold text-lg">Timely Delivery</span>
                </div>
                <span className="badge bg-accent text-white border-none mt-2 md:mt-0 md:ml-auto w-full md:w-auto">Committed to meeting deadlines with precision.</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Development Tools and Technologies</h2>
            <p className="text-lg mb-6 opacity-90">
              As a versatile developer, I blend cutting-edge tools and languages to bring your ideas to life. Every line of code is crafted with precision for functionality and design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "C#",
                "Python", "Kotlin", "Flutter", "Penetration Testing", "Figma", "MySQL"
              ].map((tech, index) => (
                <div key={index} className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 card-hover-effect">
                  <h3 className="font-semibold text-primary">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mt-8 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-transparent">Technical Skills & Tools</h2>
            <div className="space-y-4">
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-6 hover:shadow-lg transition-all duration-300 card-hover-effect">
                <h3 className="font-semibold text-primary text-lg mb-2">Frontend Development</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS( Daisyui ) </li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-6 hover:shadow-lg transition-all duration-300 card-hover-effect">
                <h3 className="font-semibold text-secondary text-lg mb-2">Backend Development</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>C#</li>
                  <li>Php</li>
                   <li>Firebase</li>
                  <li>Python</li>
                  
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-6 hover:shadow-lg transition-all duration-300 card-hover-effect">
                <h3 className="font-semibold text-accent text-lg mb-2">Mobile Development</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Dart & Flutter  ( VS Code ) </li>
                  <li>Kotlin ( Android Studio ) </li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-6 hover:shadow-lg transition-all duration-300 card-hover-effect">
                <h3 className="font-semibold text-primary text-lg mb-2">Cyber Security</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Penetration Testing</li>
                </ul>
              </div>
              <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-md p-6 hover:shadow-lg transition-all duration-300 card-hover-effect">
                <h3 className="font-semibold text-secondary text-lg mb-2">UI/UX Design</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-15">
            <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-center text-transparent">My Education Journey</h2>
            <EducationTimeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;