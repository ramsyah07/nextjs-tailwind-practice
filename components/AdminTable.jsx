"use client";
export default function AdminTable({ data, onEdit, onDelete }) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Nama</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-center">
            <td className="p-2 border">{item.name}</td>
            <td className="p-2 border">{item.email}</td>
            <td className="p-2 border space-x-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
