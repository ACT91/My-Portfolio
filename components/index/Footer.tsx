import { Link } from 'react-router-dom';

interface PlatformLink {
  name: string;
  url: string;
  icon: React.FC;
}

// SVG Icons for platforms (same as before)
const GitHubIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path
      stroke="#ffffff"
      strokeWidth="2"
      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
    />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path
      stroke="#0a66c2"
      strokeWidth="2"
      d="M4.98 3a2.98 2.98 0 00-2.98 2.98v12.04A2.98 2.98 0 004.98 21h12.04a2.98 2.98 0 002.98-2.98V5.98A2.98 2.98 0 0017.02 3H4.98zM7 7h2v2H7V7zm0 4h2v6H7v-6zm4 0h2v1.5h2V11h2v6h-2v-2.5h-2V17h-2v-6z"
    />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path
      stroke="#1da1f2"
      strokeWidth="2"
      d="M22 4.01c-.81.36-1.68.6-2.59.71a4.5 4.5 0 001.98-2.48 9.02 9.02 0 01-2.86 1.09 4.5 4.5 0 00-7.67 4.1 12.77 12.77 0 01-9.27-4.7 4.5 4.5 0 001.39 6.01 4.48 4.48 0 01-2.04-.56v.06a4.5 4.5 0 003.61 4.41 4.49 4.49 0 01-2.03.08 4.5 4.5 0 004.2 3.12 9.02 9.02 0 01-5.58 1.92c-.36 0-.72-.02-1.07-.06a12.76 12.76 0 006.91 2.03c8.29 0 12.82-6.86 12.82-12.82 0-.2 0-.39-.01-.58A9.15 9.15 0 0022 4.01z"
    />
  </svg>
);

const PlaceholderIcon: React.FC = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-2">
    <path
      stroke="#646cff"
      strokeWidth="2"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v12m-4-4h8"
    />
  </svg>
);

const platformLinks: PlatformLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/act91',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/stanley-gersom',
    icon: LinkedInIcon,
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/act91',
    icon: TwitterIcon,
  },
  {
    name: 'Portfolio',
    url: 'https://stanleygersom.com',
    icon: PlaceholderIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-300 text-base-content py-10 px-4">
      <div className="footer max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-center md:items-start text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="footer-title mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link link-hover">
                About (Bio)
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link link-hover">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Connect with Me */}
        <div>
          <h2 className="footer-title mb-3">Connect with Me</h2>
          <ul className="space-y-2">
            {platformLinks.map((platform, index) => (
              <li key={index}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover flex items-center justify-center md:justify-start gap-2 transition-colors hover:text-primary"
                >
                  <platform.icon />
                  <span>{platform.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="footer-title mb-3">Contact Info</h2>
          <p>
            Email:{' '}
            <a href="mailto:stanley.gersom@example.com" className="link link-primary">
              stanley.gersom@example.com
            </a>
          </p>
          <p>Location: Remote</p>
          <p className="mt-4 text-xs opacity-70">
            © 2025 Stanley Gersom (ACT91) - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;