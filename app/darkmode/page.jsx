// app/darkmode/page.jsx
"use client";

import { useState } from "react";

export default function DarkModePage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "min-h-screen bg-gray-900 text-white p-8" : "min-h-screen bg-white text-black p-8"}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dark Mode Toggle</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setDark(!dark)}
        >
          Toggle
        </button>
      </div>
      <p className="mt-6">This page switches between light and dark mode using simple React state.</p>
    </div>
  );
}
