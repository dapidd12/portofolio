// src/hooks/useApi.js
import { useState, useCallback } from 'react';
import { request } from '../services/api';

/*
  useApi hook: wraps request(...) with loading, error, and data states.
  Example:
    const { call, data, loading, error } = useApi('/projects', { method: 'GET' });
*/

export default function useApi(initialPath = null, initialOptions = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = useCallback(
    async (path = initialPath, options = initialOptions) => {
      setLoading(true);
      setError(null);
      try {
        const result = await request(path, options);
        setData(result);
        setLoading(false);
        return result;
      } catch (err) {
        setError(err);
        setLoading(false);
        throw err;
      }
    },
    [initialPath, initialOptions]
  );

  return { data, loading, error, call, setData };
}