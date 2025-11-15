// Admin/Announcements.jsx
export function AnnouncementsManager() {
  const [announcements, setAnnouncements] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  
  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Kelola Pengumuman</h2>
        <button onClick={() => setEditingAnnouncement({})}>
          + Tambah Pengumuman
        </button>
      </div>
      
      {/* Form Create/Edit */}
      {editingAnnouncement && (
        <AnnouncementForm 
          announcement={editingAnnouncement}
          onSave={handleSave}
          onCancel={() => setEditingAnnouncement(null)}
        />
      )}
      
      {/* List Pengumuman */}
      <div className="announcements-list">
        {announcements.map(announcement => (
          <div key={announcement.id} className="announcement-item">
            <div className="announcement-info">
              <span className={`type-badge ${announcement.type}`}>
                {announcement.type}
              </span>
              <h4>{announcement.title}</h4>
              <p>{announcement.content}</p>
              <div className="dates">
                Mulai: {formatDate(announcement.start_date)}
                {announcement.end_date && ` - Sampai: ${formatDate(announcement.end_date)}`}
              </div>
            </div>
            <div className="announcement-actions">
              <button onClick={() => setEditingAnnouncement(announcement)}>
                Edit
              </button>
              <button 
                onClick={() => toggleAnnouncementStatus(announcement.id)}
                className={announcement.is_active ? 'active' : 'inactive'}
              >
                {announcement.is_active ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
              <button 
                onClick={() => deleteAnnouncement(announcement.id)}
                className="delete"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}