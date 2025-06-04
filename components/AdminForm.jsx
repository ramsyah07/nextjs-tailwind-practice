"use client";
import { useState, useEffect } from "react";

export default function AdminForm({ onSubmit, editing, cancelEdit }) {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editing) {
      setForm({ name: editing.name, email: editing.email });
    } else {
      setForm({ name: "", email: "" });
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSubmit({ ...editing, ...form });
    setForm({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Nama"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editing ? "Update" : "Tambah"}
      </button>
      {editing && (
        <button
          type="button"
          onClick={cancelEdit}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Batal
        </button>
      )}
    </form>
  );
}
