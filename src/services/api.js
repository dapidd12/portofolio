// src/services/api.js
// Centralized API service (fetch wrapper) with basic error handling and JSON parsing.
// Replace BASE_URL with your real backend endpoint.

const BASE_URL = process.env.REACT_APP_API_BASE || '';

async function request(path, options = {}) {
  const url = BASE_URL + path;
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  const opts = {
    credentials: 'include',
    headers: { ...defaultHeaders, ...(options.headers || {}) },
    ...options,
  };

  try {
    const res = await fetch(url, opts);
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
      const err = new Error(data?.message || 'Network response was not ok');
      err.status = res.status;
      err.body = data;
      throw err;
    }
    return data;
  } catch (e) {
    if (e.name === 'SyntaxError') {
      const err = new Error('Invalid JSON received from server');
      err.original = e;
      throw err;
    }
    throw e;
  }
}

export { request, BASE_URL };