// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export default function useLocalStorage(key, init) {
  const [val, setVal] = useState(() => {
    const a = localStorage.getItem(key);
    return a ? JSON.parse(a) : init;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}