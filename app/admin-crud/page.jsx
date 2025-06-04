"use client";
import { useState } from "react";
import AdminForm from "@/components/AdminForm";
import AdminTable from "@/components/AdminTable";

export default function AdminCrudDemo() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleAdd = (item) => {
    setData([...data, { id: Date.now(), ...item }]);
  };

  const handleUpdate = (updatedItem) => {
    setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditing(null);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">🛠️ Admin CRUD Dummy</h1>
      <AdminForm
        onSubmit={editing ? handleUpdate : handleAdd}
        editing={editing}
        cancelEdit={() => setEditing(null)}
      />
      <AdminTable data={data} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
}
