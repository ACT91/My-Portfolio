interface Skill {
  name: string;
  explanation: string;
  icon: React.FC;
}

// SVG Icons for each skill
const HtmlIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#e34f26" strokeWidth="2" d="M4 2l8 20 8-20"/>
  </svg>
);

const CssIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#264de4" strokeWidth="2" d="M4 2l8 20 8-20"/>
  </svg>
);

const JavaScriptIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="#f7df1e" strokeWidth="2"/>
    <path stroke="#f7df1e" strokeWidth="2" d="M10 16c-2-2-2-4 0-6m4 6c2-2 2-4 0-6"/>
  </svg>
);

const ReactIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <circle cx="12" cy="12" r="10" stroke="#61dafb" strokeWidth="2"/>
    <path stroke="#61dafb" strokeWidth="2" d="M12 2c-5 5-5 11 0 10s5-5 0-10"/>
  </svg>
);

const TailwindIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#38bdf8" strokeWidth="2" d="M6 12c0-4 6-8 6 0s-6 8-6 0m6 0c0-4 6-8 6 0s-6 8-6 0"/>
  </svg>
);

const CSharpIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="#68217a" strokeWidth="2"/>
    <path stroke="#68217a" strokeWidth="2" d="M12 8v8m-4-4h8"/>
  </svg>
);

const PythonIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="#3776ab" strokeWidth="2"/>
    <path stroke="#3776ab" strokeWidth="2" d="M8 12h8m-4-4v8"/>
  </svg>
);

const KotlinIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#0095d5" strokeWidth="2" d="M4 20L12 4l8 16"/>
  </svg>
);

const FlutterIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#02569b" strokeWidth="2" d="M4 4l10 10 6-6v6h-6"/>
  </svg>
);

const CyberSecurityIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#4caf50" strokeWidth="2" d="M12 2C6 2 2 6 2 12s4 10 10 10 10-4 10-10S18 2 12 2zm0 4v12"/>
  </svg>
);

const FigmaIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <circle cx="12" cy="12" r="6" stroke="#f24e1e" strokeWidth="2"/>
    <circle cx="12" cy="6" r="4" stroke="#0acf83" strokeWidth="2"/>
  </svg>
);

const MySQLIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <ellipse cx="12" cy="12" rx="10" ry="8" stroke="#00758f" strokeWidth="2"/>
    <path stroke="#f29111" strokeWidth="2" d="M8 16c2-2 6-2 8 0"/>
    <circle cx="16" cy="12" r="1" fill="#f29111"/>
  </svg>
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
      {/* Added pt-24 for better top margin (adjust if your header is taller/shorter) */}
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-primary">Stanley Gersom (ACT91)</h1>
          <p className="text-2xl mt-4 mb-8">Programmer & Cyber Security Enthusiast</p>
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