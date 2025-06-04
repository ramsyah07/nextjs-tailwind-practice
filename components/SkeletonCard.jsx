export default function SkeletonCard() {
    return (
        <div className="animate-pulse flex space-x-4">
            <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
        </div>
    );
}
