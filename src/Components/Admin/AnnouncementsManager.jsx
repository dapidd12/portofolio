// src/components/Admin/AnnouncementsManager.jsx
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';
import { settingsService } from '../../services/settingsService';

export default function AnnouncementsManager() {
  const { announcements, refreshAnnouncements } = useSettings();
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      content: formData.get('content'),
      type: formData.get('type'),
      is_active: formData.get('is_active') === 'on',
      end_date: formData.get('end_date') || null
    };

    try {
      if (editingAnnouncement?.id) {
        await settingsService.updateAnnouncement(editingAnnouncement.id, data);
      } else {
        await settingsService.createAnnouncement(data);
      }
      
      await refreshAnnouncements();
      setEditingAnnouncement(null);
      e.target.reset();
    } catch (error) {
      console.error('Error saving announcement:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus pengumuman ini?')) {
      try {
        await settingsService.deleteAnnouncement(id);
        await refreshAnnouncements();
      } catch (error) {
        console.error('Error deleting announcement:', error);
      }
    }
  };

  const toggleStatus = async (announcement) => {
    try {
      await settingsService.updateAnnouncement(announcement.id, {
        ...announcement,
        is_active: !announcement.is_active
      });
      await refreshAnnouncements();
    } catch (error) {
      console.error('Error updating announcement:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Kelola Pengumuman</h1>
        <button
          onClick={() => setEditingAnnouncement({})}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Tambah Pengumuman</span>
        </button>
      </div>

      {/* Form */}
      {editingAnnouncement && (
        <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">
            {editingAnnouncement.id ? 'Edit Pengumuman' : 'Tambah Pengumuman Baru'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Judul Pengumuman
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingAnnouncement.title}
                  className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipe
                </label>
                <select
                  name="type"
                  defaultValue={editingAnnouncement.type || 'info'}
                  className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="info">Info</option>
                  <option value="warning">Peringatan</option>
                  <option value="important">Penting</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Konten
              </label>
              <textarea
                name="content"
                rows={3}
                defaultValue={editingAnnouncement.content}
                className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tanggal Berakhir (opsional)
                </label>
                <input
                  type="datetime-local"
                  name="end_date"
                  defaultValue={editingAnnouncement.end_date?.slice(0, 16)}
                  className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="is_active"
                  defaultChecked={editingAnnouncement.is_active !== false}
                  className="w-4 h-4 text-primary-500 bg-dark-50 border-gray-600 rounded focus:ring-primary-500"
                />
                <label className="text-sm font-medium text-gray-300">
                  Aktif
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan'}
              </button>
              <button
                type="button"
                onClick={() => setEditingAnnouncement(null)}
                className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-dark-50 transition-colors"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Announcements List */}
      <div className="bg-dark-100 rounded-2xl border border-primary-500/20 overflow-hidden">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-6 border-b border-gray-600 last:border-b-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    announcement.type === 'warning' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : announcement.type === 'important'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                  }`}>
                    {announcement.type}
                  </span>
                  <span className={`flex items-center space-x-1 text-xs ${
                    announcement.is_active ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {announcement.is_active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                    <span>{announcement.is_active ? 'Aktif' : 'Nonaktif'}</span>
                  </span>
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {announcement.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  {announcement.content}
                </p>

                <div className="text-xs text-gray-500 space-y-1">
                  <div>Dibuat: {new Date(announcement.created_at).toLocaleString('id-ID')}</div>
                  {announcement.end_date && (
                    <div>Berlaku sampai: {new Date(announcement.end_date).toLocaleString('id-ID')}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setEditingAnnouncement(announcement)}
                  className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => toggleStatus(announcement)}
                  className={`p-2 rounded-lg transition-colors ${
                    announcement.is_active
                      ? 'text-yellow-400 hover:bg-yellow-500/10'
                      : 'text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  {announcement.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleDelete(announcement.id)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {announcements.length === 0 && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-50 rounded-2xl flex items-center justify-center">
              <Megaphone className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              Belum ada pengumuman
            </h3>
            <p className="text-gray-500">
              Buat pengumuman pertama untuk ditampilkan di website.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}