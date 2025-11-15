// src/pages/Home.jsx
import React from 'react';
import { ArrowRight, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const skills = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'HTML, CSS, JavaScript dan framework modern',
      level: 85
    },
    {
      icon: '🤖',
      title: 'Bot Development',
      description: 'Telegram & WhatsApp bot dengan Python/Node.js',
      level: 70
    },
    {
      icon: '🔧',
      title: 'Scripting & Tools',
      description: 'Automation tools dan utility scripts dengan Python',
      level: 70
    },
    {
      icon: '⚡',
      title: 'Robotika',
      description: 'Microcontroller, sensor, dan module robotik',
      level: 65
    }
  ];

  const featuredProjects = [
    {
      title: 'PiwBot',
      description: 'Bot Telegram dengan berbagai tools utilitas',
      image: '/assets/images/project1.svg',
      tags: ['JavaScript', 'Telegram API']
    },
    {
      title: 'PiwShare',
      description: 'Platform berbagi teks, link, dan code',
      image: '/assets/images/project2.svg',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Cloud Storage',
      description: 'Dual bot WhatsApp & Telegram untuk cloud storage',
      image: '/assets/images/project3.svg',
      tags: ['JavaScript', 'Cloud']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center quantum-hover">
            <span className="text-4xl text-white">👋</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Halo, Saya <span className="text-primary-500">dapid</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Seorang pelajar yang gemar mengeksplorasi teknologi, desain, 
            dan pengembangan bot. Selalu belajar dan berinovasi.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Tech Enthusiast', 'UI Designer', 'Bot Developer', 'Pelajar'].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-dark-50 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 quantum-hover group"
            >
              Lihat Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-all duration-300 quantum-hover"
            >
              Hubungi Saya
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/dapid_ae02', label: 'GitHub' },
              { icon: Instagram, href: 'https://instagram.com/dapid_ae02', label: 'Instagram' },
              { icon: Mail, href: 'mailto:dapidaeixa@gmail.com', label: 'Email' },
              { icon: MessageCircle, href: 'https://wa.me/6282138305820', label: 'WhatsApp' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-100 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 quantum-hover"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-dark-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Tentang <span className="text-primary-500">Saya</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Halo! Saya <strong className="text-white">Dafid Sabria Ghofur</strong>, 
                tapi di internet saya lebih dikenal dengan nama <strong className="text-white">dapid</strong>. 
                Saya lahir pada 19 Desember 2009 di Purbalingga, dan saat ini saya adalah 
                siswa kelas XI di SMAN 1 Kemangkon.
              </p>
              <p>
                Sejak kecil, saya sudah tertarik dengan dunia teknologi. Saya suka membongkar 
                dan merakit barang-barang elektronik hanya untuk memahami cara kerjanya.
              </p>
              <p>
                Di bidang software, saya fokus pada pengembangan bot (WhatsApp dan Telegram), 
                website, serta tools-tools berbasis Python.
              </p>
              <p className="text-primary-400 font-semibold text-lg">
                "Tetap lapar akan ilmu."
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center quantum-hover">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Keahlian <span className="text-primary-500">Saya</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-dark-100 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {skill.description}
                    </p>
                    <div className="w-full bg-dark-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Pemula</span>
                      <span>{skill.level}%</span>
                      <span>Ahli</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 bg-dark-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Project <span className="text-primary-500">Unggulan</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Beberapa project yang telah saya kembangkan dengan berbagai teknologi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-50 rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-dark-50 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 quantum-hover group"
            >
              Lihat Semua Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}