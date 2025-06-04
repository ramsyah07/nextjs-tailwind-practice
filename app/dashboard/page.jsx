"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 300 },
  { name: "Apr", value: 700 },
  { name: "May", value: 900 },
];

export default function DashboardDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard Statistik</h1>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Total Users</h2>
          <p className="text-2xl font-bold">1,230</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Sales</h2>
          <p className="text-2xl font-bold">$9,450</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
