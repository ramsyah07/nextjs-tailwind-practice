"use client";
import { useState } from "react";

export default function DarkModeDemo() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <button onClick={() => setDark(!dark)} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">
        Toggle Dark Mode
      </button>
      <p>Mode saat ini: {dark ? "🌙 Dark" : "☀️ Light"}</p>
    </div>
  );
}
