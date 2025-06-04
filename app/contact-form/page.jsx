"use client";

import {useState} from "react";

export default function ContactFormPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    // Simulasi kirim data
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center border-cyan-500 bg-gray-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">Pesan berhasil dikirim!</p>}

        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          className="w-full border p-2 rounded mb-4"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          className="w-full border p-2 rounded mb-4"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Pesan Anda"
          className="w-full border p-2 rounded mb-4 h-32"
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-yellow-200 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}