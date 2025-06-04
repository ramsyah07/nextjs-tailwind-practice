export default function Toast({ message }) {
  return (
    <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
      {message}
    </div>
  );
}
