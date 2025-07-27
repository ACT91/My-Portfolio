import { FaDownload, FaDesktop, FaMobile } from 'react-icons/fa';
import '/styles/Downloads.css';

const Downloads = () => {
  const handlePWAInstall = () => {
    // Trigger PWA install prompt
    const event = new CustomEvent('pwa-install-prompt');
    window.dispatchEvent(event);
  };

  return (
    <section className="min-h-screen bg-base-100 py-20 downloads-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Downloads
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Get the portfolio app on your device for the best experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Electron Desktop App */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 download-card">
            <div className="card-body text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit download-icon">
                <FaDesktop className="text-4xl text-primary" />
              </div>
              <h3 className="card-title justify-center text-2xl mb-2">Desktop App</h3>
              <p className="text-base-content/70 mb-6">
                Full-featured desktop application built with Tauri
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <div className="badge badge-outline">Windows</div>
                <div className="badge badge-outline">Offline Support</div>
                <div className="badge badge-outline">Native Performance</div>
              </div>
              <div className="card-actions justify-center">
                <a
                  href="/downloads/Stanley Gersom (ACT91) Portfolio-setup.exe"
                  className="btn btn-primary btn-lg gap-2"
                  download
                >
                  <FaDownload />
                  Download for Windows
                </a>
              </div>
            </div>
          </div>

          {/* PWA Mobile App */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 download-card">
            <div className="card-body text-center">
              <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full w-fit download-icon">
                <FaMobile className="text-4xl text-secondary" />
              </div>
              <h3 className="card-title justify-center text-2xl mb-2">Mobile App (PWA)</h3>
              <p className="text-base-content/70 mb-6">
                Progressive Web App that works on all devices
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <div className="badge badge-outline">Cross-Platform</div>
                <div className="badge badge-outline">Auto-Updates</div>
                <div className="badge badge-outline">Lightweight</div>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={handlePWAInstall}
                  className="btn btn-secondary btn-lg gap-2"
                >
                  <FaDownload />
                  Install PWA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="alert alert-info max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Both apps provide the same great experience with offline capabilities!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;