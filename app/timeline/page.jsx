// File: app/timeline/page.jsx
import TimeLine from "@/components/TimeLine";

const events = [
  {
    title: "Registrasi",
    time: "01 Jan 2025",
    description: "Pengguna mendaftar di platform."
  },
  {
    title: "Verifikasi Email",
    time: "02 Jan 2025",
    description: "Email berhasil diverifikasi."
  },
  {
    title: "Mulai Proyek",
    time: "05 Jan 2025",
    description: "Pengguna memulai proyek pertama."
  }
];

export default function TimelinePage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline Aktivitas</h1>
      <TimeLine items={events} />
    </div>
  );
}
