// src/components/Admin/SettingsManager.jsx
import React, { useState } from 'react';
import { Save, RefreshCw } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function SettingsManager() {
  const { settings, updateSettings } = useSettings();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);

  const categories = {
    general: 'Umum',
    appearance: 'Tampilan',
    social: 'Media Sosial',
    features: 'Fitur'
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSettings(formData);
      // Show success message
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setFormData(settings);
  };

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Pengaturan Website</h1>
        <div className="flex space-x-3">
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-dark-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>{isSaving ? 'Menyimpan...' : 'Simpan'}</span>
          </button>
        </div>
      </div>

      <div className="bg-dark-100 rounded-2xl border border-primary-500/20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-600">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full px-6 py-4 text-left border-b border-gray-600 last:border-b-0 transition-colors ${
                  activeTab === key
                    ? 'bg-primary-500/10 text-primary-400 border-r-2 border-primary-500'
                    : 'text-gray-400 hover:text-white hover:bg-dark-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3 p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">Pengaturan Umum</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Judul Website
                    </label>
                    <input
                      type="text"
                      value={formData.site_title || ''}
                      onChange={(e) => updateField('site_title', e.target.value)}
                      className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Kontak
                    </label>
                    <input
                      type="email"
                      value={formData.contact_email || ''}
                      onChange={(e) => updateField('contact_email', e.target.value)}
                      className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Deskripsi Website
                  </label>
                  <textarea
                    rows={3}
                    value={formData.site_description || ''}
                    onChange={(e) => updateField('site_description', e.target.value)}
                    className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">Tampilan</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Warna Primer
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="color"
                        value={formData.theme_primary_color || '#00dfc4'}
                        onChange={(e) => updateField('theme_primary_color', e.target.value)}
                        className="w-16 h-10 rounded-lg border border-gray-600"
                      />
                      <input
                        type="text"
                        value={formData.theme_primary_color || '#00dfc4'}
                        onChange={(e) => updateField('theme_primary_color', e.target.value)}
                        className="flex-1 px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Warna Sekunder
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="color"
                        value={formData.theme_secondary_color || '#0a192f'}
                        onChange={(e) => updateField('theme_secondary_color', e.target.value)}
                        className="w-16 h-10 rounded-lg border border-gray-600"
                      />
                      <input
                        type="text"
                        value={formData.theme_secondary_color || '#0a192f'}
                        onChange={(e) => updateField('theme_secondary_color', e.target.value)}
                        className="flex-1 px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Custom CSS
                  </label>
                  <textarea
                    rows={6}
                    value={formData.custom_css || ''}
                    onChange={(e) => updateField('custom_css', e.target.value)}
                    className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none font-mono text-sm"
                    placeholder="/* Tambahkan custom CSS di sini */"
                  />
                </div>

                {/* Preview */}
                <div className="border-t border-gray-600 pt-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-4">Preview</h4>
                  <div 
                    className="p-4 rounded-lg border border-gray-600 space-y-3"
                    style={{
                      '--primary': formData.theme_primary_color || '#00dfc4',
                      '--secondary': formData.theme_secondary_color || '#0a192f'
                    }}
                  >
                    <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg">
                      Button Primary
                    </button>
                    <button className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg">
                      Button Outline
                    </button>
                    <div className="p-3 bg-[var(--secondary)] rounded-lg text-white">
                      Card Preview
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-4">Fitur Website</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-dark-50 rounded-lg border border-gray-600">
                    <div>
                      <h4 className="font-medium text-white">Mode Maintenance</h4>
                      <p className="text-sm text-gray-400">
                        Aktifkan untuk menampilkan halaman maintenance
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.maintenance_mode || false}
                        onChange={(e) => updateField('maintenance_mode', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-dark-50 rounded-lg border border-gray-600">
                    <div>
                      <h4 className="font-medium text-white">Chatbot AI</h4>
                      <p className="text-sm text-gray-400">
                        Aktifkan chatbot AI di website
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.chatbot_enabled !== false}
                        onChange={(e) => updateField('chatbot_enabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-dark-50 rounded-lg border border-gray-600">
                    <div>
                      <h4 className="font-medium text-white">Komentar</h4>
                      <p className="text-sm text-gray-400">
                        Aktifkan sistem komentar di blog
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.comments_enabled !== false}
                        onChange={(e) => updateField('comments_enabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}