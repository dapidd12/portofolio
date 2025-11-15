import api from './api';

export const contactService = {
  async sendMessage(messageData) {
    const response = await api.post('/contact', messageData);
    return response.data;
  },

  async getMessages(params = {}) {
    const response = await api.get('/admin/messages', { params });
    return response.data;
  },

  async updateMessageStatus(id, status) {
    const response = await api.patch(`/admin/messages/${id}/status`, { status });
    return response.data;
  },

  async sendReply(id, replyData) {
    const response = await api.post(`/admin/messages/${id}/reply`, replyData);
    return response.data;
  }
};