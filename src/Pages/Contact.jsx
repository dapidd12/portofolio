// src/pages/Contact.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would be:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      setSubmitStatus({ type: 'success', message: 'Pesan berhasil dikirim! 🎉' });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Gagal mengirim pesan. Coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+62 821-3830-5820',
      href: 'https://wa.me/6282138305820',
      action: 'Chat Sekarang'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@dapid_ae02',
      href: 'https://instagram.com/dapid_ae02',
      action: 'Kunjungi Profil'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'dapid_ae02',
      href: 'https://github.com/dapid_ae02',
      action: 'Lihat Repository'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'dapidaeixa@gmail.com',
      href: 'mailto:dapidaeixa@gmail.com',
      action: 'Kirim Email'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center quantum-hover">
            <span className="text-4xl text-white">📬</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Hubungi <span className="text-primary-500">Saya</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya melalui salah satu saluran berikut
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 quantum-hover text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-500/10 rounded-xl flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.value}</p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-all duration-300 text-sm"
                >
                  {method.action}
                </a>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-100 rounded-2xl p-8 border border-primary-500/20">
            <h2 className="text-2xl font-bold text-white mb-2">
              Kirim <span className="text-primary-500">Pesan</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Isi form berikut dan saya akan membalas secepatnya
            </p>

            {submitStatus && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Nama harus diisi' })}
                  className="w-full px-4 py-3 bg-dark-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email harus diisi',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Format email tidak valid'
                    }
                  })}
                  className="w-full px-4 py-3 bg-dark-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  {...register('message', { 
                    required: 'Pesan harus diisi',
                    minLength: {
                      value: 10,
                      message: 'Pesan minimal 10 karakter'
                    }
                  })}
                  className="w-full px-4 py-3 bg-dark-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-dark-50 rounded-lg font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 quantum-hover"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-50 border-t-transparent rounded-full animate-spin"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Location */}
          <div className="space-y-6">
            <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-400" />
                Lokasi Saya
              </h3>
              <p className="text-gray-400 mb-4">
                Saya berada di Purbalingga, Jawa Tengah, Indonesia
              </p>
              <div className="bg-dark-50 rounded-lg overflow-hidden h-64 border border-gray-600">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary-400 mx-auto mb-2" />
                    <p className="text-gray-400">Purbalingga, Jawa Tengah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-dark-100 rounded-2xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Informasi Tambahan
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary-400" />
                  <span>+62 821-3830-5820</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-400" />
                  <span>dapidaeixa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span>Purbalingga, Jawa Tengah, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}