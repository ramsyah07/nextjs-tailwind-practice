import Tabs from "@/components/Tabs";

export default function TabsDemo() {
  const tabItems = [
    {
      label: "Overview",
      content: <p>Ini adalah tab overview. Menjelaskan hal umum.</p>,
    },
    {
      label: "Details",
      content: <p>Tab ini berisi detail teknis dari produk atau layanan.</p>,
    },
    {
      label: "Reviews",
      content: <p>Ini adalah tab ulasan dari pengguna yang telah mencoba.</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🗂️ Tabs Component</h1>
      <Tabs tabs={tabItems} />
    </div>
  );
}
