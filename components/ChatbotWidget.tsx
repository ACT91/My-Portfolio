import React, { useEffect, useState } from 'react';

const ChatbotWidget: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists to prevent duplicates
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    
    if (!existingScript) {
      // Load Elfsight script
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
      
      // Don't remove the script on unmount as it might be needed by other components
      return () => {
        // We intentionally don't remove the script to avoid issues with the widget
      };
    } else {
      setScriptLoaded(true);
    }
  }, []);

  // Add a small delay to ensure the widget initializes properly
  useEffect(() => {
    if (scriptLoaded && window.elfsight) {
      setTimeout(() => {
        if (window.elfsight && window.elfsight.reinit) {
          window.elfsight.reinit();
        }
      }, 100);
    }
  }, [scriptLoaded]);

  return (
    <div 
      className="elfsight-app-161662a8-923b-4207-8490-e4766f890946" 
      data-elfsight-app-lazy
    ></div>
  );
};

// Add this to make TypeScript happy
declare global {
  interface Window {
    elfsight?: {
      reinit: () => void;
    };
  }
}

export default ChatbotWidget;