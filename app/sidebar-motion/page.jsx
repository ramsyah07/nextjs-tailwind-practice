"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LayoutDashboard, Users, Settings } from "lucide-react";

const links = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} />, href: "#" },
  { label: "Users", icon: <Users size={18} />, href: "#" },
  { label: "Settings", icon: <Settings size={18} />, href: "#" },
];

export default function AnimatedSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: open ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X className="text-gray-700" />
          </button>
        </div>
        <ul className="space-y-4">
          {links.map((link) => (
            <li
              key={link.label}
              className="flex items-center gap-3 px-2 py-2 rounded hover:bg-blue-100 text-blue-700 cursor-pointer transition-colors"
            >
              {link.icon}
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition"
      >
        <Menu />
      </button>

      {/* Main Content */}
      <main className="p-8 ml-0 md:ml-64 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-4">Sidebar with Framer Motion</h1>
        <p className="text-gray-600 text-lg">
          Klik tombol untuk membuka atau menutup sidebar dengan animasi.
        </p>
      </main>
    </div>
  );
}

