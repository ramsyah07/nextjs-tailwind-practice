// File: components/CustomSelect.jsx
"use client";
import { useState } from "react";

const options = ["Frontend", "Backend", "Fullstack"];

export default function CustomSelect({ label = "Role" }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          className="w-full border rounded px-4 py-2"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
}