// src/components/MaintenancePage.jsx
import React from 'react';
import { Wrench, Mail, MessageCircle } from 'lucide-react';

export default function MaintenancePage({ maintenanceInfo }) {
  return (
    <div className="min-h-screen bg-dark-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="animate-float mb-8">
          <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto">
            <Wrench className="h-10 w-10 text-dark-50" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          Sedang Dalam Pemeliharaan
        </h1>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          {maintenanceInfo?.message || 'Website sedang dalam proses update dan perbaikan untuk pengalaman yang lebih baik.'}
        </p>
        
        {maintenanceInfo?.end_time && (
          <div className="bg-dark-100 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-400">
              <strong>Perkiraan selesai:</strong>
              <br />
              {new Date(maintenanceInfo.end_time).toLocaleString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        )}
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Untuk kebutuhan mendesak, hubungi:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/6282138305820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors quantum-hover"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:dapidaeixa@gmail.com"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500 text-dark-50 rounded-lg hover:bg-primary-600 transition-colors quantum-hover"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}