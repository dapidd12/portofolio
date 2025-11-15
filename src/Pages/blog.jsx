// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample blog posts - in real app, this would come from API
  const blogPosts = [
    {
      id: 1,
      title: 'Membuat Telegram Bot dengan Node.js',
      excerpt: 'Panduan lengkap membuat bot Telegram menggunakan Node.js dan library Telegraf...',
      content: 'Full content here...',
      author: 'dapid',
      publishedAt: '2024-01-15',
      tags: ['tutorial', 'bot', 'nodejs'],
      coverImage: '/assets/images/blog1.jpg',
      status: 'published'
    },
    {
      id: 2,
      title: 'Project Update: PiwBot V2',
      excerpt: 'Update terbaru dari PiwBot dengan fitur-fitur baru dan improvement performance...',
      content: 'Full content here...',
      author: 'dapid',
      publishedAt: '2024-01-10',
      tags: ['project', 'update', 'bot'],
      coverImage: '/assets/images/blog2.jpg',
      status: 'published'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'tutorial', label: 'Tutorial' },
    { key: 'project', label: 'Project Update' }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeFilter));

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blog & <span className="text-primary-500">Artikel</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge, pengalaman development, dan update project terbaru
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-dark-50 shadow-lg shadow-primary-500/25'
                  : 'bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-200 border border-primary-500/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-dark-100 rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover group"
            >
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs border border-primary-500/20 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors group">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-dark-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Belum ada artikel
            </h3>
            <p className="text-gray-500">
              Stay tuned untuk artikel-artikel menarik seputar development.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}