"use client";
import { useState } from "react";
import { Bell } from "lucide-react";

// NotificationBell Component
function NotificationBell() {
  const [open, setOpen] = useState(false);
  const notifications = [
    "Pesan baru dari Admin",
    "Update sistem tersedia",
    "Pemeliharaan server dijadwalkan",
    "Laporan mingguan siap",
    "Backup berhasil dilakukan"
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)} 
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Bell size={24} className="text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>
      
      {open && (
        <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg w-80 z-10">
          <div className="p-3 border-b bg-gray-50 rounded-t-lg">
            <h3 className="font-semibold text-gray-800">Notifikasi</h3>
          </div>
          <ul className="text-sm max-h-64 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((note, i) => (
                <li 
                  key={i} 
                  className="p-3 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer transition-colors"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{note}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-4 text-center text-gray-500">
                Tidak ada notifikasi
              </li>
            )}
          </ul>
          {notifications.length > 0 && (
            <div className="p-3 border-t bg-gray-50 rounded-b-lg">
              <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                Tandai semua sudah dibaca
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Main Page Component
export default function NotificationDemoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Notification Bell */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Selamat datang di aplikasi Anda</p>
            </div>
            
            {/* Navigation with Notification Bell */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Projects</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Settings</a>
              </nav>
              
              {/* Notification Bell */}
              <NotificationBell />
              
              {/* Profile */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Demo Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Notification Bell Demo
            </h3>
            <p className="text-gray-600 mb-4">
              Klik ikon bell di header untuk melihat dropdown notifikasi.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">5 notifikasi aktif</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fitur Utama
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Badge counter dinamis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Dropdown positioning</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Hover effects</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Status Sistem
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Server</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Online
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Database</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Aktif
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">API</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                  Maintenance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Demo Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Cara Menggunakan Notification Bell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fitur yang Tersedia:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Badge merah menunjukkan jumlah notifikasi</li>
                <li>• Dropdown muncul saat ikon diklik</li>
                <li>• Scroll otomatis jika notifikasi banyak</li>
                <li>• Hover effect pada setiap item notifikasi</li>
                <li>• Button "Tandai semua sudah dibaca"</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Komponen yang Digunakan:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• React useState untuk state management</li>
                <li>• Lucide React untuk ikon Bell</li>
                <li>• Tailwind CSS untuk styling</li>
                <li>• Absolute positioning untuk dropdown</li>
                <li>• Z-index untuk layering</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}