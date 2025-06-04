"use client";
import { useState } from "react";

export default function PaginationDemo() {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const perPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / perPage);
  const currentItems = items.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">📄 Pagination Demo</h1>
      <ul className="mb-6 space-y-2">
        {currentItems.map((item, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded">{item}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
