"use client";
import { useState } from "react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({ name: "Ramdani", email: "ramdani@gmail.com" });

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">⚙️ Pengaturan Profil</h1>
      <form className="bg-white p-4 rounded shadow space-y-4 max-w-md">
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Nama Lengkap"
        />
        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Email"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
      </form>
    </div>
  );
}
