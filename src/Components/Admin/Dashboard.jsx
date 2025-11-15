// src/components/Admin/Dashboard.jsx
import React from 'react';
import { 
  Users, 
  FileText, 
  Megaphone, 
  Settings,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Total Pengunjung',
      value: '1,234',
      icon: Users,
      change: '+12%',
      trend: 'up'
    },
    {
      label: 'Blog Posts',
      value: '15',
      icon: FileText,
      change: '+2',
      trend: 'up'
    },
    {
      label: 'Pengumuman Aktif',
      value: '3',
      icon: Megaphone,
      change: '0',
      trend: 'neutral'
    },
    {
      label: 'Pesan Baru',
      value: '5',
      icon: MessageCircle,
      change: '+3',
      trend: 'up'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Posting blog baru dibuat',
      description: '"Membuat Telegram Bot dengan Node.js"',
      time: '2 jam yang lalu',
      type: 'blog'
    },
    {
      id: 2,
      action: 'Pengumuman dipublikasikan',
      description: 'Maintenance schedule update',
      time: '5 jam yang lalu',
      type: 'announcement'
    },
    {
      id: 3,
      action: 'Pesan baru diterima',
      description: 'Dari: budi@example.com',
      time: '1 hari yang lalu',
      type: 'message'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
        <h1 className="text-2xl font-bold text-white mb-2">
          Selamat Datang di Admin Panel! 👋
        </h1>
        <p className="text-gray-400">
          Kelola website portfolio Anda dengan mudah dari sini.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const trendColor = stat.trend === 'up' ? 'text-green-400' : 
                           stat.trend === 'down' ? 'text-red-400' : 'text-gray-400';
          
          return (
            <div
              key={index}
              className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${trendColor}`}>
                  <TrendingUp className="h-4 w-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {activity.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            Aksi Cepat
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-dark-50 rounded-lg text-left hover:bg-primary-500/10 transition-colors group border border-gray-600">
              <Megaphone className="h-6 w-6 text-primary-400 mb-2" />
              <p className="text-white text-sm font-medium group-hover:text-primary-400">
                Buat Pengumuman
              </p>
            </button>
            <button className="p-4 bg-dark-50 rounded-lg text-left hover:bg-primary-500/10 transition-colors group border border-gray-600">
              <FileText className="h-6 w-6 text-primary-400 mb-2" />
              <p className="text-white text-sm font-medium group-hover:text-primary-400">
                Tulis Blog
              </p>
            </button>
            <button className="p-4 bg-dark-50 rounded-lg text-left hover:bg-primary-500/10 transition-colors group border border-gray-600">
              <Settings className="h-6 w-6 text-primary-400 mb-2" />
              <p className="text-white text-sm font-medium group-hover:text-primary-400">
                Pengaturan
              </p>
            </button>
            <button className="p-4 bg-dark-50 rounded-lg text-left hover:bg-primary-500/10 transition-colors group border border-gray-600">
              <MessageCircle className="h-6 w-6 text-primary-400 mb-2" />
              <p className="text-white text-sm font-medium group-hover:text-primary-400">
                Lihat Pesan
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}