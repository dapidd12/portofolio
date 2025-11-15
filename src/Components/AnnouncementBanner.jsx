// src/components/AnnouncementBanner.jsx
import React from 'react';
import { X, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function AnnouncementBanner() {
  const { announcements } = useSettings();
  const [dismissed, setDismissed] = React.useState([]);

  const activeAnnouncements = announcements.filter(
    announcement => 
      announcement.is_active && 
      !dismissed.includes(announcement.id)
  );

  if (activeAnnouncements.length === 0) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'important': return AlertCircle;
      default: return Info;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300';
      case 'important':
        return 'bg-red-500/10 border-red-500/30 text-red-300';
      default:
        return 'bg-primary-500/10 border-primary-500/30 text-primary-300';
    }
  };

  const dismissAnnouncement = (id) => {
    setDismissed(prev => [...prev, id]);
  };

  return (
    <div className="space-y-2 pt-16">
      {activeAnnouncements.map((announcement) => {
        const Icon = getIcon(announcement.type);
        const styles = getStyles(announcement.type);
        
        return (
          <div
            key={announcement.id}
            className={`border-l-4 ${styles} p-4 mx-4 rounded-r-lg`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">
                    {announcement.title}
                  </h4>
                  <p className="text-sm mt-1 opacity-90">
                    {announcement.content}
                  </p>
                  {announcement.end_date && (
                    <p className="text-xs mt-2 opacity-75">
                      Sampai: {new Date(announcement.end_date).toLocaleDateString('id-ID')}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => dismissAnnouncement(announcement.id)}
                className="ml-4 p-1 rounded hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}