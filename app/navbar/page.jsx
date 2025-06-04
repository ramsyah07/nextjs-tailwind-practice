import Navbar from "@/components/Navbar";

export default function NavbarDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Navbar Demo Page</h1>
        <p className="text-gray-600 mt-2">
          This is a simple static navbar with Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
