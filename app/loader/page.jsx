"use client";
import { useState } from "react";
import Loader from "@/components/Loader";
import { OrbitProgress } from 'react-loading-indicators';

export default function LoaderDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <button
        onClick={() => setLoading(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Simulate Loading
      </button>

      {loading && <OrbitProgress />}
    </div>
  );
}
