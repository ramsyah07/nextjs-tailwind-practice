import ImageGallery from '@/components/ImageGallery';

export default function GalleryDemo(){
    const image = [
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
        "https://sources.unsplash.com/random/300x200?sig=1",
    ];
    return (
        <div className="min-h-screen  bg-white p-8">
            <h1 className="text-3xl font-bold mb-7 text-center">Image Gallery</h1>
            <ImageGallery images={image} />
        </div>
    );
}