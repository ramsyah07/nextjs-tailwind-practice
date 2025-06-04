"use client";
import { useState } from "react";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className={`${open ? "w-64" : "w-16"} bg-blue-700 text-white transition-all duration-300 p-3`}>
        <button onClick={() => setOpen(!open)} className="mb-6 block">
          {open ? "⏪" : "☰"}
        </button>
        <nav className="space-y-6">
          <a href="#" className="block hover:underline">Dashboard</a>
          {open && <a href="#" className="block hover:underline">Settings</a>}
        </nav>
      </div>
      <main className="flex-1 p-9">{children}</main>
    </div>
  );
}
