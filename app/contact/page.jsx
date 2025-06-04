// app/contact/page.jsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {submitted ? (
          <p className="text-green-600">Thanks! Your message has been received.</p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 mb-3 rounded"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 mb-3 rounded"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-2 mb-3 rounded"
              rows="4"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
}
