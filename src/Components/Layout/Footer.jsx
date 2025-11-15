// src/components/Layout/Footer.jsx
import React from 'react';
import { Github, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/dapid_ae02',
      label: 'Instagram'
    },
    {
      icon: Github,
      href: 'https://github.com/dapid_ae02',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:dapidaeixa@gmail.com',
      label: 'Email'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/6282138305820',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-dark-100 border-t border-primary-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-dark-50 font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white">dapid</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full-stack developer & tech enthusiast from Indonesia. 
              Passionate about creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Projects', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-200 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 quantum-hover"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} dapid. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm" id="live-clock">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}