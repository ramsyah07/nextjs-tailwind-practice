'use client';
import React, { useState } from 'react';
import ProductForm from '@/components/ProductForm';

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addProduct = (product) => {
    product.id = Date.now();
    setProducts([...products, product]);
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);
    setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const editProduct = (product) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  return (
    <div className="p-6 space-y-8">
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editing={editing}
        currentProduct={currentProduct}
        setEditing={setEditing}
      />

      <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-3 rounded shadow text-center">
        Admin CRUD Dummy
      </h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Harga</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">Rp {p.price}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button
                  onClick={() => editProduct(p)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
