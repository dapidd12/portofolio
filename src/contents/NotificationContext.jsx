// src/contents/NotificationContext.jsx
import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [msg, setMsg] = useState(null);

  const notify = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ msg, notify }}>
      <>
        {msg && (
          <div className="fixed top-4 right-4 bg-black text-white p-3 rounded">
            {msg}
          </div>
        )}
        {children}
      </>
    </NotificationContext.Provider>
  );
}