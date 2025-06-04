export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md border p-4 max-w-sm">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}


