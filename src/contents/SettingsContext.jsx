// src/contents/SettingsContext.jsx
import { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    siteName: 'My Portfolio',
    theme: 'light'
  });

  useEffect(() => {
    const saved = localStorage.getItem('site_settings');
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  const updateSettings = (s) => {
    setSettings(s);
    localStorage.setItem('site_settings', JSON.stringify(s));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}