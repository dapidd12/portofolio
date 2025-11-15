// src/services/settingsService.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const settingsService = {
  async getSettings() {
    const response = await fetch(`${API_URL}/settings`);
    if (!response.ok) throw new Error('Failed to fetch settings');
    return response.json();
  },

  async updateSettings(settings) {
    const response = await fetch(`${API_URL}/admin/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify(settings)
    });
    if (!response.ok) throw new Error('Failed to update settings');
    return response.json();
  },

  async getMaintenanceStatus() {
    const response = await fetch(`${API_URL}/admin/maintenance`);
    if (!response.ok) throw new Error('Failed to fetch maintenance status');
    return response.json();
  },

  async updateMaintenance(data) {
    const response = await fetch(`${API_URL}/admin/maintenance`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update maintenance');
    return response.json();
  },

  async getAnnouncements() {
    const response = await fetch(`${API_URL}/announcements`);
    if (!response.ok) throw new Error('Failed to fetch announcements');
    return response.json();
  },

  async createAnnouncement(announcement) {
    const response = await fetch(`${API_URL}/admin/announcements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify(announcement)
    });
    if (!response.ok) throw new Error('Failed to create announcement');
    return response.json();
  },

  async updateAnnouncement(id, announcement) {
    const response = await fetch(`${API_URL}/admin/announcements/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify(announcement)
    });
    if (!response.ok) throw new Error('Failed to update announcement');
    return response.json();
  },

  async deleteAnnouncement(id) {
    const response = await fetch(`${API_URL}/admin/announcements/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      }
    });
    if (!response.ok) throw new Error('Failed to delete announcement');
    return response.json();
  }
};