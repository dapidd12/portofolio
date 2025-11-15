// src/hooks/useForm.js
import { useState } from 'react';

export default function useForm(initial = {}) {
  const [form, setForm] = useState(initial);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const reset = () => setForm(initial);

  return { form, change, reset, setForm };
}