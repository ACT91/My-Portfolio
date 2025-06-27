import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWAToast: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Store the event for later use
      setPromptEvent(e as BeforeInstallPromptEvent);
      // Show toast notification
      setShowToast(true);
      
      // Hide toast after 6 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 10000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (!promptEvent) return;
    
    // Show the install prompt
    promptEvent.prompt();
    
    // Wait for the user to respond to the prompt
    promptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      // Clear the saved prompt as it can't be used again
      setPromptEvent(null);
      setShowToast(false);
    });
  };

  if (!showToast) return null;

  return (
    <div className="toast toast-end z-50">
      <div className="alert alert-info shadow-lg">
        <div>
          <span>Install this app for better experience </span>
          <button onClick={handleInstall} className="btn btn-sm btn-primary">
            Install
          </button>
          <button onClick={() => setShowToast(false)} className="btn btn-sm btn-ghost">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWAToast;