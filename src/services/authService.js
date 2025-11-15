// src/services/authService.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const authService = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/admin/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }
    
    return response.json();
  },

  async verifyToken(token) {
    const response = await fetch(`${API_URL}/admin/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) throw new Error('Invalid token');
    return response.json();
  }
};