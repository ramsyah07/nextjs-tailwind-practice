export default function ImageGallery({images}){
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, index)=> (
                <div key={index} className="oveflow-hidden rounded-lg shadow hover:shadow-lg transition">
                    <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
                </div>
            ))}
        </div>
    );
}