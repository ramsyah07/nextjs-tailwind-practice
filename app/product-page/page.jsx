"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function ProductPageDemo() {
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    alert(`Menambahkan ${qty} item ke keranjang`);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col md:flex-row gap-6">
      <img
        src="https://via.placeholder.com/400"
        alt="Produk"
        className="w-full md:w-1/2 rounded shadow"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">🛍️ Nama Produk</h1>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-500 w-5 h-5" fill="currentColor" />
          ))}
          <span className="ml-2 text-sm text-gray-600">(5.0)</span>
        </div>
        <p className="text-gray-700 mb-4">
          Deskripsi singkat produk ini. Menjelaskan fitur utama dan manfaatnya kepada pelanggan.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="qty" className="font-medium">
            Jumlah:
          </label>
          <input
            id="qty"
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-20 border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}

 
