"use client";
import { useEffect, useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Skeleton Loading</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading
          ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : ["Produk A", "Produk B", "Produk C", "Produk D", "Produk E", "Produk F"].map((p, i) => (
              <div key={i} className="p-4 bg-white border rounded shadow">{p}</div>
            ))}
      </div>
    </div>
  );
}
