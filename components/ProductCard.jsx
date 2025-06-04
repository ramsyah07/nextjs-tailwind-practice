// components/ProductCard.jsx
'use client';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => alert(`You clicked on ${product.name}`)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Buy
      </button>
    </div>
  );
}

