export default function MapsDemo() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-xl font-bold mb-4">📍 Lokasi Kantor</h1>
      <div className="border rounded overflow-hidden shadow">
        <iframe
          src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
