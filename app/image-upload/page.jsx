"use client";
import { useState } from "react";

export default function ImageUploadDemo() {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">🖼️ Upload Gambar</h1>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="max-w-sm rounded shadow" />
        </div>
      )}
    </div>
  );
}
