"use client";
import { useState } from "react";

export default function TableDemo() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const users = [
    { name: "Andi", age: 28, profession: "Designer" },
    { name: "Budi", age: 23, profession: "Backend Developer" },
    { name: "Citra", age: 26, profession: "Engineer" },
    { name: "Ramsyah", age: 22, profession: "Frontend Developer" },
  ];

  const filtered = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === "asc" ? a.age - b.age : b.age - a.age);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Data Table</h1>
      <input
        type="text"
        placeholder="Cari nama..."
        className="border px-2 py-1 mb-4 mr-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")} className="bg-blue-600 text-white px-4 py-1 rounded">
        Sort Age {sort === "asc" ? "⬆️" : "⬇️"}
      </button>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Usia</th>
            <th className="p-2 border">Profesi</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.age}</td>
              <td className="border p-2">{u.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
