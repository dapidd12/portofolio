// src/Pages/Login.jsx
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    if (form.username === '' || form.password === '') return;

    login({ username: form.username });
    nav('/admin');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          name="username"
          onChange={change}
          value={form.username}
          placeholder="Username"
          className="border p-2 rounded"
        />
        <input
          name="password"
          type="password"
          onChange={change}
          value={form.password}
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}