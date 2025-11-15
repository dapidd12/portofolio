import React from 'react';

export const QuantumLoader = () => (
  <div className="fixed inset-0 bg-dark-50/95 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-primary-500 rounded-full quantum-particle"></div>
      <div className="w-4 h-4 bg-primary-500 rounded-full quantum-particle"></div>
      <div className="w-4 h-4 bg-primary-500 rounded-full quantum-particle"></div>
    </div>
  </div>
);

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <p className="text-gray-400 text-sm">Memuat...</p>
    </div>
  </div>
);

export const ContentLoader = () => (
  <div className="animate-pulse">
    <div className="space-y-4">
      <div className="h-4 bg-dark-200 rounded w-3/4"></div>
      <div className="h-4 bg-dark-200 rounded"></div>
      <div className="h-4 bg-dark-200 rounded w-5/6"></div>
    </div>
  </div>
);