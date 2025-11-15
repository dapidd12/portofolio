// src/Pages/Admin.jsx
import React, { useEffect } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import useApi from '../hooks/useApi';

export default function Admin() {
  const { data, loading, error, call } = useApi('/admin/dashboard');

  useEffect(() => {
    call().catch((e) => {
      console.error('Failed to load admin data', e);
    });
  }, [call]);

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        {loading && <p>Loading dashboard...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}

        {data ? (
          <pre className="bg-slate-100 p-4 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          !loading && <p>No data yet.</p>
        )}
      </div>
    </ProtectedRoute>
  );
}