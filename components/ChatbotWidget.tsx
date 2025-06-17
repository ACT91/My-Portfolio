import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="elfsight-app-161662a8-923b-4207-8490-e4766f890946" 
      data-elfsight-app-lazy
    ></div>
  );
};

export default ChatbotWidget;