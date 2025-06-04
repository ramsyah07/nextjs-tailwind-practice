"use client";
import { useState } from "react";

export default function PricingToggleDemo() {
  const [yearly, setYearly] = useState(false);
  const prices = {
    monthly: [10, 20, 30],
    yearly: [100, 200, 300],
  };

  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">💰 Harga Paket</h1>
      <label className="flex items-center justify-center mb-6 gap-2">
        Bulanan
        <input type="checkbox" checked={yearly} onChange={() => setYearly(!yearly)} />
        Tahunan
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {prices[yearly ? "yearly" : "monthly"].map((price, i) => (
          <div key={i} className="bg-white border rounded p-6 shadow">
            <h2 className="text-lg font-bold">Paket {i + 1}</h2>
            <p className="text-2xl mt-2">${price}{yearly ? "/tahun" : "/bulan"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
