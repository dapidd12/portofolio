// src/pages/Projects.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PiwBot',
      category: 'bot',
      description: 'WA-CLOUD adalah Bot yang dirancang untuk menyimpan file seperti foto, video, musik, audio, dll melalui whatsapp dan di simpan secara aman di storage yang berkapasitas besar dengan privasi terjaga. Saat ini bot masih dalam tahap pengembangan V2.',
      image: '/assets/images/project1.svg',
      tags: ['JAVASCRIPT'],
      links: {
        preview: 'https://t.me/Piw_V2bot',
        source: 'https://wa.me/6282138305820?text=bang%20bagi%20sourcecode%20piw%20bot%20dong'
      }
    },
    {
      id: 2,
      title: 'PiwShare',
      category: 'web',
      description: 'PiwShare adalah sebuah platform kolaboratif yang dirancang untuk memudahkan pengguna dalam berbagi ide, kode, teks, maupun tautan penting secara praktis. Platform ini menghadirkan ruang komunitas yang terbuka sehingga siapa saja dapat menyimpan, membagikan, dan menemukan inspirasi dengan cepat.',
      image: '/assets/images/project2.svg',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
      links: {
        preview: 'https://piwshare.pages.dev/',
        source: 'https://wa.me/6282138305820?text=bang%20bagi%20sourcecode%20PiwShare%20dong'
      }
    },
    {
      id: 3,
      title: 'QRIS Statis → Dinamis',
      category: 'web',
      description: 'Proyek ini mengubah QRIS statis menjadi QRIS dinamis sehingga pengguna bisa membuat kode QR donasi dengan nominal yang fleksibel. Sistem dilengkapi fitur riwayat transaksi yang menampilkan status pembayaran seperti berhasil, pending, atau dibatalkan sehingga lebih transparan.',
      image: '/assets/images/project3.svg',
      tags: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
      links: {
        preview: 'https://qris-donation.pages.dev/',
        source: 'https://wa.me/6282138305820?text=bang%20bagi%20sourcecode%20Qris%20dinamisnya%20dong'
      }
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Website' },
    { key: 'bot', label: 'Bot Telegram' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="text-primary-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kumpulan karya dan proyek yang telah saya kerjakan dalam bidang 
            pengembangan web, desain, dan otomasi.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-dark-50 shadow-lg shadow-primary-500/25'
                  : 'bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-200 border border-primary-500/20'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-100 rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 bg-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20 capitalize">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-200 text-gray-400 rounded-full text-xs border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Preview
                  </a>
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-dark-100 rounded-2xl flex items-center justify-center">
              <Filter className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Tidak ada project ditemukan
            </h3>
            <p className="text-gray-500">
              Coba filter yang berbeda untuk melihat lebih banyak project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}