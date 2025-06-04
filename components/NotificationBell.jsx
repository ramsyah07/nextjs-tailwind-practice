"use client";
import { useState } from "react";
import { Bell } from "lucide-react";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const notifications = ["Pesan baru dari Admin", "Update sistem tersedia"];

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs px-1">•</span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border shadow rounded w-64 z-10">
          <ul className="text-sm">
            {notifications.map((note, i) => (
              <li key={i} className="p-2 hover:bg-gray-100">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
