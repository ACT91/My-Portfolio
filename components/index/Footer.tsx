import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShieldHalved, faStopwatch20, faCrown, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '/styles/Footer.css'; // Add this import if you put the CSS in a separate file

const platformLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: faLinkedin,
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/yourusername',
    icon: faXTwitter,
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-base-200 text-base-content relative transition-colors duration-300 overflow-hidden z-10">
      <div className="footer-gradient-border"></div>
      {/* Background decoration - changed to use theme colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Stanley Gersom
              </h3>
              <p className="text-base-content text-sm leading-relaxed max-w-md">
                Full-stack developer crafting digital experiences with modern technologies. 
                Passionate about clean code, user experience, and continuous learning.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start"> {/* Added responsive justify classes */}
              {platformLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-gradient-border btn btn-sm btn-outline hover:bg-base-100 hover:border-transparent transition-all duration-300 flex items-center gap-2"
                  aria-label={`Visit ${platform.name}`}
                >
                  <span className="relative z-10 flex items-center">
                    <FontAwesomeIcon icon={platform.icon} size="lg" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors ml-2">
                      {platform.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links and Contact Info Container */}
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8 lg:grid-cols-3 lg:w-full">
            {/* Empty div for spacing on large screens */}
            <div className="hidden lg:block"></div>
            
            {/* Quick Links */}
            <div className="flex flex-col items-center"> {/* Center alignment */}
              <h4 className="text-lg font-semibold mb-6 underline decoration-primary/50 underline-offset-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                  { to: '/contact', label: 'Contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="link link-hover hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col items-start"> {/* Left alignment for content */}
              <h4 className="text-lg font-semibold mb-6 underline decoration-primary/50 underline-offset-4">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">Email</p>
                  <a 
                    href="mailto:stanley.gersom@gmail.com" 
                    className="link link-hover text-sm hover:text-primary transition-colors duration-200 email-pulse"
                  >
                    stanleygersom@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1">Location</p>
                  <p className="text-sm">Remote/Blantyre, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-base-300 w-full"> {/* Added w-full */}
          <div className="flex flex-col items-center justify-center text-center gap-4 w-full"> {/* Added w-full */}
            <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto"> {/* Added container */}
              <p className="text-sm">
                © {currentYear} - ACT91. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-6 text-xs mt-2"> {/* Added justify-center */}
                <span>Built with React Vite ❤️ </span>
                <span className="opacity-50">•</span>
                <span>I'm open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
   /* <span>Built with ❤️ and React</span> */
export default Footer;