import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
  faGitAlt,
  faNodeJs,
  faBootstrap,
  faAndroid,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShieldAlt, faFeather, faCode } from '@fortawesome/free-solid-svg-icons';

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

// Use faFeather for Tailwind (closest match in FontAwesome)
const TailwindIcon: React.FC = () => (
  <span className="mr-2 text-[#38bdf8] text-2xl">
    <FontAwesomeIcon icon={faFeather} />
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
    <FontAwesomeIcon icon={faFeather} />
  </span>
);

const CyberSecurityIcon: React.FC = () => (
  <span className="mr-2 text-[#4caf50] text-2xl">
    <FontAwesomeIcon icon={faShieldAlt} />
  </span>
);

// Use faFigma for Figma
const FigmaIcon: React.FC = () => (
  <span className="mr-2 text-[#a259ff] text-2xl">
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
  return (
    <div className="hero min-h-screen bg-base-200 pt-24">
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
            <div className="relative z-10 flex flex-col 
      items-center md:items-start 
      justify-center h-full py-8 
      pl-0 md:pl-16 
      w-full md:w-[60%] mx-auto md:mx-0">
              <div className="relative w-45 h-45 mb-3">
                {/* Animated gradient ring */}
                <span
                  className="absolute inset-0 z-0 rounded-full animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, #f472b6, #38bdf8, #facc15, #f472b6)',
                  }}
                ></span>
                {/* Profile image */}
                <img
                  src="/471511193_620921727059481_7134572200687933217_n.jpg"
                  alt="Stanley Gersom's profile"
                  className="relative w-45 h-45 rounded-full border-4 border-transparent object-cover z-30 animate-fade-in"
                  style={{}}
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-content drop-shadow mb-1 text-center md:text-left animate-slide-in">
                Stanley Gersom (ACT91)
              </h1>
              <p className="text-base md:text-lg text-base-100 mb-1 dark:text-white text-center md:text-left animate-slide-in delay-150">
                Programmer & Cyber Security Enthusiast
              </p>
              <p className="text-sm md:text-base text-base-100 max-w-xs mx-auto md:mx-0 dark:text-white text-center md:text-left animate-slide-in delay-300">
                Passionate about building secure, scalable, and user-friendly applications. 
                Experienced in full-stack development, mobile apps, and ethical hacking. 
                Always eager to learn and collaborate on innovative projects.
              </p>
            </div>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                  <skill.icon />
                  <h2 className="card-title justify-center">{skill.name}</h2>
                  <p className="text-sm text-base-content/80">{skill.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;