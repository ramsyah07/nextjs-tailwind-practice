"use client";
import { useState } from "react";
import Toast from "@/components/Toast";

export default function ToastDemo() {
  const [showToast, setShowToast] = useState(false);

  const show = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="min-h-screen p-8">
      <button onClick={show} className="bg-blue-600 text-white px-4 py-2 rounded">
        Show Toast
      </button>
      {showToast && <Toast message="Berhasil disimpan!" />}
    </div>
  );
}
