// SVG Icons
const CodeIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M10 4l6 6-6 6"/>
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M12 2l10 6-10 6-10-6z"/>
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 12h-2V7h2v7z"/>
  </svg>
);

const GitHubIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M4.98 3a2.98 2.98 0 00-2.98 2.98v12.04A2.98 2.98 0 004.98 21h12.04a2.98 2.98 0 002.98-2.98V5.98A2.98 2.98 0 0017.02 3H4.98zM7 7h2v2H7V7zm0 4h2v6H7v-6zm4 0h2v1.5h2V11h2v6h-2v-2.5h-2V17h-2v-6z"/>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path stroke="#3b82f6" strokeWidth="2" d="M22 4.01c-.81.36-1.68.6-2.59.71a4.5 4.5 0 001.98-2.48 9.02 9.02 0 01-2.86 1.09 4.5 4.5 0 00-7.67 4.1 12.77 12.77 0 01-9.27-4.7 4.5 4.5 0 001.39 6.01 4.48 4.48 0 01-2.04-.56v.06a4.5 4.5 0 003.61 4.41 4.49 4.49 0 01-2.03.08 4.5 4.5 0 004.2 3.12 9.02 9.02 0 01-5.58 1.92c-.36 0-.72-.02-1.07-.06a12.76 12.76 0 006.91 2.03c8.29 0 12.82-6.86 12.82-12.82 0-.2 0-.39-.01-.58A9.15 9.15 0 0022 4.01z"/>
  </svg>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="card bg-base-200 shadow-xl p-6">
          <h1 className="text-4xl font-bold text-primary mb-4">Empower Your Ideas with Me</h1>
          <p className="text-lg mb-6">
            As a dedicated programmer and cyber security enthusiast, I’m here to transform your concepts into secure, innovative solutions. Let’s build something remarkable together!
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Why Choose Me?</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <CodeIcon />
                <span className="ml-2">Code Mastery</span>
                <span className="badge badge-primary ml-auto">Expertise in crafting efficient, scalable code.</span>
              </div>
              <div className="flex items-center">
                <ShieldIcon />
                <span className="ml-2">Security Focus</span>
                <span className="badge badge-primary ml-auto">Prioritizing robust protection for your projects.</span>
              </div>
              <div className="flex items-center">
                <ClockIcon />
                <span className="ml-2">Timely Delivery</span>
                <span className="badge badge-primary ml-auto">Committed to meeting deadlines with precision.</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Development Tools and Technologies</h2>
            <p className="text-lg mb-4">
              As a versatile developer, I blend cutting-edge tools and languages to bring your ideas to life. Every line of code is crafted with precision for functionality and design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">HTML</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">CSS</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">JavaScript</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">React</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Tailwind CSS</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">C#</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Python</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Kotlin</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Flutter</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Penetration Testing</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">Figma</h3>
              </div>
              <div className="card bg-base-100 shadow-md p-4 text-center">
                <h3 className="font-semibold">MySQL</h3>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div className="card bg-base-100 shadow-md p-4">
                <h3 className="font-semibold text-primary">Frontend Development</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="card bg-base-100 shadow-md p-4">
                <h3 className="font-semibold text-primary">Backend Development</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>C#</li>
                  <li>Python</li>
                  <li>Kotlin</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="card bg-base-100 shadow-md p-4">
                <h3 className="font-semibold text-primary">Mobile Development</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Flutter</li>
                </ul>
              </div>
              <div className="card bg-base-100 shadow-md p-4">
                <h3 className="font-semibold text-primary">Cyber Security</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Penetration Testing</li>
                </ul>
              </div>
              <div className="card bg-base-100 shadow-md p-4">
                <h3 className="font-semibold text-primary">UI/UX Design</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default About;