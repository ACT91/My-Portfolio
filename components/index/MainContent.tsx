import '/styles/MainContent.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
  faAndroid,
  faFigma,
  faFlutter,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShieldAlt, faCode, faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import TypeWriter from '../common/TypeWriter';

interface Skill {
  name: string;
  explanation: string;
  icon: React.FC;
}

// FontAwesome-only icons for each skill
const HtmlIcon: React.FC = () => (
  <span className="mr-2 text-[#e34f26] text-2xl">
    <FontAwesomeIcon icon={faHtml5} />
  </span>
);

const CssIcon: React.FC = () => (
  <span className="mr-2 text-[#1572b6] text-2xl">
    <FontAwesomeIcon icon={faCss3Alt} />
  </span>
);

const JavaScriptIcon: React.FC = () => (
  <span className="mr-2 text-[#f7df1e] text-2xl">
    <FontAwesomeIcon icon={faJs} />
  </span>
);

const ReactIcon: React.FC = () => (
  <span className="mr-2 text-[#61dafb] text-2xl">
    <FontAwesomeIcon icon={faReact} />
  </span>
);

// Use Tailwind CSS SVG icon
const TailwindIcon: React.FC = () => (
  <span className="mr-2 text-[#38bdf8] text-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
      <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="currentColor"/>
    </svg>
  </span>
);

const CSharpIcon: React.FC = () => (
  <span className="mr-2 text-[#68217a] text-2xl">
    <FontAwesomeIcon icon={faCode} />
  </span>
);

const PythonIcon: React.FC = () => (
  <span className="mr-2 text-[#3776ab] text-2xl">
    <FontAwesomeIcon icon={faPython} />
  </span>
);

const KotlinIcon: React.FC = () => (
  <span className="mr-2 text-[#7f52ff] text-2xl">
    <FontAwesomeIcon icon={faAndroid} />
  </span>
);

const FlutterIcon: React.FC = () => (
  <span className="mr-2 text-[#02569b] text-2xl">
    <FontAwesomeIcon icon={faFlutter} />
  </span>
);

const CyberSecurityIcon: React.FC = () => (
  <span className="mr-2 text-[#4caf50] text-2xl">
    <FontAwesomeIcon icon={faShieldAlt} />
  </span>
);

// Use faFigma for Figma
const FigmaIcon: React.FC = () => (
  <span className="mr-2 text-[#ff00bb] text-2xl">
    <FontAwesomeIcon icon={faFigma} />
  </span>
);

const MySQLIcon: React.FC = () => (
  <span className="mr-2 text-[#00758f] text-2xl">
    <FontAwesomeIcon icon={faDatabase} />
  </span>
);

const skills: Skill[] = [
  {
    name: 'HTML',
    explanation: 'Proficient in structuring web content with semantic HTML. Experienced in building accessible and SEO-friendly layouts.',
    icon: HtmlIcon,
  },
  {
    name: 'CSS',
    explanation: 'Skilled in styling responsive and visually appealing interfaces. Expertise in animations and cross-browser compatibility.',
    icon: CssIcon,
  },
  {
    name: 'JavaScript',
    explanation: 'Advanced knowledge of modern JavaScript (ES6+). Built dynamic, interactive web applications with clean code.',
    icon: JavaScriptIcon,
  },
  {
    name: 'React',
    explanation: 'Experienced in building component-based SPAs with React. Proficient in hooks, state management, and routing.',
    icon: ReactIcon,
  },
  {
    name: 'Tailwind CSS',
    explanation: 'Expert in utility-first CSS for rapid UI development. Created responsive, custom-styled designs efficiently.',
    icon: TailwindIcon,
  },
  {
    name: 'C#',
    explanation: 'Developed robust backend systems and applications using C#. Experienced with .NET for scalable solutions.',
    icon: CSharpIcon,
  },
  {
    name: 'Python',
    explanation: 'Built automation scripts and data-driven applications. Proficient in frameworks like Django and Flask.',
    icon: PythonIcon,
  },
  {
    name: 'Kotlin',
    explanation: 'Developed Android apps with Kotlin for clean, concise code. Experienced with Jetpack and modern Android APIs.',
    icon: KotlinIcon,
  },
  {
    name: 'Flutter',
    explanation: 'Created cross-platform mobile apps with Flutter. Focused on high-performance UIs and native integration.',
    icon: FlutterIcon,
  },
  {
    name: 'Penetration Testing (Cyber Security)',
    explanation: 'Conducted security assessments and vulnerability testing. Ensured robust protection for applications and networks.',
    icon: CyberSecurityIcon,
  },
  {
    name: 'Figma',
    explanation: 'Designed intuitive UI/UX prototypes and mockups in Figma. Collaborated with teams to streamline design workflows.',
    icon: FigmaIcon,
  },
  {
    name: 'MySQL',
    explanation: 'Experienced in designing and managing relational databases with MySQL. Skilled in writing efficient queries and ensuring data integrity.',
    icon: MySQLIcon,
  },
];

const MainContent: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  // Handler to update mouse position for gradient wave
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };

  // Number of skills to show by default
  const VISIBLE_COUNT = 9;
  const visibleSkills = showAll ? skills : skills.slice(0, VISIBLE_COUNT);

  return (
    <div className="hero min-h-screen bg-base-200 pt-24 mb-20">
      <div className="hero-content text-center">
        <div className="max-w-4xl w-full">
          {/* Profile Section with background image */}
          <div
            className="relative rounded-xl overflow-hidden mb-8 flex flex-col items-start md:items-start justify-center"
            style={{
              backgroundImage: "url('/think-about-coding-qlib86o7bz1fqbub-copy.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '600px',
            }}
          >
            {/* Overlay for readability and blur on screens 764px and below */}
            <div className="absolute inset-0 bg-opacity-60 md:backdrop-blur-none backdrop-blur-md transition-all duration-500"></div>
            {/* Profile Info with animation */}
            <div
              className="relative z-10 flex flex-col
      items-center md:items-start
      justify-center py-8
      pl-0 md:pl-16
      w-full md:w-[60%] mx-auto md:mx-0
      not-prose
      h-auto
      rounded-xl
      max-[768px]:h-[600px]"
              style={{
                // Prevent color scheme inheritance for this block
                colorScheme: 'light',
                color: '#000', // force dark text
                background: 'rgba(255,255,255,0.85)', // subtle white bg for readability
                borderRadius: '1rem',
              }}
            >
              <div className="relative w-45 h-45 mb-3">
                {/* Animated gradient ring */}
                <span
                  className="absolute inset-0 z-0 rounded-full animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, #FFFFFFFF, #000000FF, #000000FF, #000000FF)',
                  }}
                ></span>
                {/* Profile image */}
                <img 
                  src="/Stanley Gersom (ACT91) _ Portfolio_files/IMG20250320_065938.jpeg"
                  alt="Stanley Gersom's profile"
                  className="relative w-45 h-45 rounded-full border-4 border-transparent object-cover z-30 animate-fade-in"
                  style={{}}
                />
              </div>
              <h1
                className="text-2xl md:text-3xl font-bold drop-shadow mb-1 text-center md:text-left animate-slide-in"
                style={{ color: '#222' }}
              >
                Stanley Gersom (ACT91)
              </h1>
              <p className="text-base md:text-lg mb-1 text-center md:text-left animate-slide-in delay-150"
                 style={{ color: '#333' }}>
                <TypeWriter 
                  text="Programmer & Cyber Security Enthusiast"
                  delay={70}
                  onComplete={() => setShowSecondText(true)}
                />
              </p>
              
              {showSecondText && (
                <p className="text-sm md:text-base max-w-xs mx-auto md:mx-0 text-center md:text-left animate-slide-in delay-300"
                   style={{ color: '#444' }}>
                  <TypeWriter 
                    text="Passionate about building secure, scalable, and user-friendly applications. Experienced in full-stack development, mobile apps, and ethical hacking. Always eager to learn and collaborate on innovative projects."
                    delay={30}
                  />
                </p>
              )}
            </div>
          </div>
          
          {/* Solid divider line above skills heading */}
          <div className="w-full my-8">
            <div className="h-[2px] w-4/5 max-w-2xl mx-auto bg-black dark:bg-white rounded"></div>
          </div>
          {/* Skills Section Heading */}
          <h2 className="text-3xl font-bold mb-6 text-center">My Programming Languages & Tools</h2>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {visibleSkills.map((skill, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl skill-gradient-wave"
                onMouseMove={handleMouseMove}
              >
                <div className="card-body items-center">
                  <skill.icon />
                  <h2 className="card-title justify-center">{skill.name}</h2>
                  <p className="text-sm text-base-content/80">{skill.explanation}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Show More / Show Less Button */}
          {skills.length > VISIBLE_COUNT && (
            <div className="flex justify-center mt-4">
              <button
                className="btn btn-ghost btn-circle text-3xl"
                onClick={() => setShowAll((prev) => !prev)}
                aria-label={showAll ? 'Show less' : 'Show more'}
              >
                <FontAwesomeIcon 
                  icon={showAll ? faAnglesUp : faAnglesDown} 
                  className={showAll ? 'bounce-up' : 'bounce-down'}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
