import React, { useEffect, useState } from 'react';
import '../styles/InstallPWA.css';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA: React.FC = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e as BeforeInstallPromptEvent);
      setShowButton(true);
      
      // Hide the button after 6 seconds
      setTimeout(() => {
        setShowButton(false);
      }, 6000);
    };
    
    window.addEventListener('beforeinstallprompt', handler);
    
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    
    promptInstall.prompt();
    
    promptInstall.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setPromptInstall(null);
      setShowButton(false);
    });
  };

  if (!supportsPWA || !showButton) {
    return null;
  }

  return (
    <div className="install-button-container">
      <button
        className="btn btn-primary install-button"
        onClick={handleInstallClick}
      >
        Install App
      </button>
    </div>
  );
};

export default InstallPWA;