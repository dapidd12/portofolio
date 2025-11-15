// src/components/Admin/MaintenanceManager.jsx
import React, { useState } from 'react';
import { Save, Play, StopCircle } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function MaintenanceManager() {
  const { maintenance, updateMaintenance } = useSettings();
  const [formData, setFormData] = useState(maintenance || {});
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateMaintenance(formData);
    } catch (error) {
      console.error('Error saving maintenance settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleMaintenance = async (enabled) => {
    const updated = { ...formData, enabled };
    setFormData(updated);
    
    if (!enabled) {
      // If disabling, save immediately
      setIsSaving(true);
      try {
        await updateMaintenance(updated);
      } catch (error) {
        console.error('Error updating maintenance:', error);
      } finally {
        setIsSaving(false);
      }
    }
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
        <h1 className="text-2xl font-bold text-white">Maintenance Mode</h1>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>{isSaving ? 'Menyimpan...' : 'Simpan'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
            <h3 className="text-lg font-semibold text-white mb-4">Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Mode Maintenance</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.enabled || false}
                    onChange={(e) => toggleMaintenance(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>

              {formData.enabled && (
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <StopCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Maintenance Aktif</span>
                  </div>
                  <p className="text-yellow-300 text-xs mt-1">
                    Website saat ini tidak dapat diakses oleh pengunjung biasa.
                  </p>
                </div>
              )}
            </div>
          </div>

          {formData.enabled && (
            <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => toggleMaintenance(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  <span>Nonaktifkan Maintenance</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="lg:col-span-2">
          <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
            <h3 className="text-lg font-semibold text-white mb-4">Pengaturan Maintenance</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan Maintenance
                </label>
                <textarea
                  rows={4}
                  value={formData.message || ''}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 resize-none"
                  placeholder="Website sedang dalam pemeliharaan..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    IP yang Diizinkan
                  </label>
                  <input
                    type="text"
                    value={formData.allowed_ips?.join(', ') || ''}
                    onChange={(e) => updateField('allowed_ips', e.target.value.split(',').map(ip => ip.trim()))}
                    className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                    placeholder="192.168.1.1, 127.0.0.1"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Pisahkan dengan koma untuk multiple IP
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Perkiraan Selesai
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.end_time || ''}
                    onChange={(e) => updateField('end_time', e.target.value)}
                    className="w-full px-3 py-2 bg-dark-50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-sm font-medium text-gray-300 mb-4">Preview</h4>
                <div className="bg-dark-50 rounded-lg p-6 border border-gray-600">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Sedang Dalam Pemeliharaan
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {formData.message || 'Website sedang dalam proses update dan perbaikan.'}
                    </p>
                    {formData.end_time && (
                      <div className="text-sm text-gray-500">
                        Perkiraan selesai: {new Date(formData.end_time).toLocaleString('id-ID')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}