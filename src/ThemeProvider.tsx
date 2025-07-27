import React, { useEffect, useState } from 'react';

// Extend the Window interface to include toggleTheme
declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    window.toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;