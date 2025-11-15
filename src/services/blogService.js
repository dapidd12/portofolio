import api from './api';

export const blogService = {
  async getPosts(params = {}) {
    const response = await api.get('/posts', { params });
    return response.data;
  },

  async getPost(slug) {
    const response = await api.get(`/posts/${slug}`);
    return response.data;
  },

  async createPost(postData) {
    const response = await api.post('/admin/posts', postData);
    return response.data;
  },

  async updatePost(id, postData) {
    const response = await api.put(`/admin/posts/${id}`, postData);
    return response.data;
  },

  async deletePost(id) {
    const response = await api.delete(`/admin/posts/${id}`);
    return response.data;
  },

  async updatePostStatus(id, status) {
    const response = await api.patch(`/admin/posts/${id}/status`, { status });
    return response.data;
  }
};