// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contents/AuthContext';

export default function useAuth() {
  return useContext(AuthContext);
}